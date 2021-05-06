import NacelleClient from '@nacelle/client-js-sdk/dist/client-js-sdk.esm'

export default function (context, inject) {
  const options = <%= JSON.stringify(options) %>

  const client = new NacelleClient({
    id: options.spaceID,
    token: options.token,
    locale: options.locale || 'en-us',
    nacelleEndpoint: options.endpoint,
    useStatic: false
  })

  inject('nacelle', { client })
}
