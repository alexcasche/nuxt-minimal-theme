import { productFilterBy, productSortBy } from './'

export const productFilterSortBy = ({ products, filterBy, sortBy }) => {
  console.log('hey now')
  if (products) {
    let productsList = [ ...products ]
    if(filterBy) {
      console.log('pList', productsList)
      productsList = productFilterBy({ products: productsList, filterBy })
    }
    if(sortBy) {
      console.log('pList', productsList)
      productsList = productSortBy({ products: productsList, sortBy })
    }
    return productsList
  }
}
