import FuzzySearch from 'fuzzy-search'

export const searchProductsByQuery = ({ store, query }) => {
  let results = []
  if(query) {
    const products = store.getters['products/productsCatalog']
    const searcher = new FuzzySearch(products, [
      'title', 'description', 'tags'
    ])
    results = searcher.search(query)
  }
  return results
}
