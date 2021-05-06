export default {
  target: 'static',
  head: {
    title: 'nuxt-minimal-theme',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/styles/global.scss'],
  styleResources: { scss: ['~/assets/styles/helpers.scss'] },
  plugins: [],
  components: [{ path: '~/components/base/', prefix: 'base' }],
  // buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/style-resources', '~/modules/nacelle'],
  nacelle: {
    spaceID: process.env.NACELLE_SPACE_ID,
    token: process.env.NACELLE_GRAPHQL_TOKEN,
    endpoint: process.env.NACELLE_ENDPOINT,
  },
  build: {},
}
