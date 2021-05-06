export default {
  async productsSetCatalog({ commit }) {
    const products = await this.$nacelle.client.data.allProducts()
    commit('PRODUCTS_SET_CATALOG', products)
  }
}
