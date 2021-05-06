export default {
  PRODUCTS_SET_CATALOG(state, payload) {
    if(payload) state.catalog = [ ...payload ]
  }
}
