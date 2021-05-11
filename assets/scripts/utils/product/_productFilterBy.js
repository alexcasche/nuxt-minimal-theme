export const productFilterBy = ({ products, filterBy }) => {
  if(products) {
    if(!filterBy) return products
    return products.filter(product => product.tags.includes(filterBy))
  }
}
