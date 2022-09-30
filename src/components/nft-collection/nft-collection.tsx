import { Component, h, Prop, State } from '@stencil/core';
import { fetchNftCollection } from '../../services/fetchNftCollection';
import { MyNftCollectionData } from '../../types';

@Component({
  tag: 'my-nft-collection',
  styleUrl: 'nft-collection.css',
  shadow: true,
})
export class NftCollection {
  @Prop() user: string;
  @Prop() theme: string;
  @State() tokens: MyNftCollectionData[];

  componentWillLoad() {
    fetchNftCollection(this.user).then(async (data: Response) => {
      const res = await data.json();
      if (res) {
        this.tokens = res.data.tokens;
      }
    });
  }

  render() {
    const themeClass = this.theme ? `userNfts ${this.theme}` : 'userNfts';

    return this.tokens ? (
      <section class={themeClass}>
        {this.tokens.map(token => {
          let image = token.media;

          if (image && !image.includes('https://arweave.net')) {
            image = token.baseUri + '/' + token.media;
          }
          return (
            <ul>
              <li>
                {image ? <img src={image} width="100" /> : 'No Media for this NFT'}
                <h1> {token.title} </h1>
              </li>
            </ul>
          );
        })}
      </section>
    ) : null;
  }
}
