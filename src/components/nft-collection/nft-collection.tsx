import { Component, Host, h, Prop, State } from '@stencil/core';
import { fetchNftCollection } from '../../services/fetchNftCollection';
import { MyNftCollection } from '../../types';

@Component({
  tag: 'my-nft-collection',
  styleUrl: 'nft-collection.css',
  shadow: true,
})
export class NftCollection {
  @Prop() user: string;
  @Prop() isDarkMode: string;
  @State() tokens: MyNftCollection[];

  componentWillLoad() {

    fetchNftCollection(this.user).then(async (data: Response) => {
      const res = await data.json();
      if (res) {
        this.tokens = res.data.tokens;
      }
    });

  }

  render() {

    let widgetClass = this.isDarkMode? 'marketNfts dark' : 'marketNfts'; 

    return this.tokens ? (
      <section class={widgetClass}>
        {this.tokens.map(token => {
          let image = token.media;

          if (!image.includes('https://arweave.net')) {
            image = token.baseUri + '/' + token.media;
          }

          return (
            <ul>
              <li>
                <img src={image} width="100" />
                <h1> {token.title} </h1>
              </li>
            </ul>
          );
        })}
      </section>
    ) : null;
  }
}
