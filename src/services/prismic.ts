import * as prismic from '@prismicio/client'

export function getPrismicClient (req?: unknown) {
  const endpoint = prismic.getEndpoint ('spacetraveling10001')
  const client = prismic.createClient(
    endpoint,
    {accessToken: process.env.PRISMIC_ACCESS_TOKEN }
  )

  client.enableAutoPreviewsFromReq(req); 
  return client
}