export async function fetchNftCollection(user) {
  return fetch('https://interop-mainnet.hasura.app/v1/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: `
          query v2_omnisite_GetOwnedTokens(
    $ownerId: String!
    $limit: Int
    $offset: Int
  ) @cached(ttl: 120) {
    tokens: mb_views_nft_tokens(
      where: {
    owner: { _eq: $ownerId }
    burned_timestamp: { _is_null: true }
  }
  order_by: [
    { last_transfer_timestamp: desc_nulls_last }, { metadata_id: desc_nulls_last }
  ]
  distinct_on: [ last_transfer_timestamp, metadata_id ]
      limit: $limit
      offset: $offset
    ) {
      last_transfer_timestamp
      tokenId: token_id
      contractId: nft_contract_id
      baseUri: base_uri
      metadataId: metadata_id
      title
      minter
      media
      document: reference_blob(path: "$.document")
      animationUrl: reference_blob(path: "$.animation_url")
    }
  
    tokensCount: mb_views_nft_tokens_aggregate(
      where: {
    owner: { _eq: $ownerId }
    burned_timestamp: { _is_null: true }
  }
  order_by: [
    { last_transfer_timestamp: desc_nulls_last }, { metadata_id: desc_nulls_last }
  ]
  distinct_on: [ last_transfer_timestamp, metadata_id ]
    ) {
      aggregate {
        count
      }
    }
  }`,
      variables: {
        ownerId: user,
      },
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
}
