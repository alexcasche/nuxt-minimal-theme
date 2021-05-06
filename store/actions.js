export default {
  async nuxtServerInit({ dispatch }) {
    await Promise.all([
      await dispatch('settings/settingsSetSpace'),
      await dispatch('products/productsSetCatalog'),
    ])
  },
}
