export const productSortBy = ({ products, sortBy }) => {
  if(products) {
    if(!sortBy) return products
    return products.filter((product) => product.tags.includes(sortBy))
  }
}
