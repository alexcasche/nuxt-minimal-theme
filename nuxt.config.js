import * as nuxtConfig from './nuxt-config'
import { resolve } from 'path'

export default {
  build: nuxtConfig.build,
  buildModules: nuxtConfig.buildModules,
  css: ['~/assets/styles/global.scss'],
  components: [{ path: '~/components/base/', prefix: 'base' }],
  head: nuxtConfig.head,
  loading: { color: '#fff' },
  modules: nuxtConfig.modules,
  nacelle: nuxtConfig.nacelle,
  plugins: nuxtConfig.plugins,
  pwa: nuxtConfig.pwa,
  router: nuxtConfig.router,
  sitemap: nuxtConfig.sitemap,
  srcDir: resolve('./'),
  styleResources: { scss: ['~/assets/styles/helpers.scss'] },
  target: 'static'
}
