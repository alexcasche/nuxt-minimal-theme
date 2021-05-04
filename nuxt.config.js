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
  components: ['~/components/base'],
  css: ['~/assets/styles/global.scss'],
  styleResources: { scss: ['~/assets/styles/helpers.scss'] },
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/style-resources'],
  build: {},
}
