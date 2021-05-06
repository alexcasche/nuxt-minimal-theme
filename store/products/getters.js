export default {
  productsCatalog: state => state.catalog,
  productByPimId: state => id => state.catalog.find(product => product.pimSyncSourceProductId === id)
}
