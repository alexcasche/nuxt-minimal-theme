export const productSortBy = ({ products, sortBy }) => {
  if(products) {
    if(!sortBy) return products
    if(sortBy === 'Sort:Title-Asc') {
      return products.sort((a,b) => a.title <= b.title ? -1 : 1)
    }
    if(sortBy === 'Sort:Title-Desc') {
      return products.sort((a,b) => a.title > b.title ? -1 : 1)
    }
    if(sortBy === 'Sort:Price-Asc') {
      return products.sort((a, b) => a.priceRange.min <= b.priceRange.min ? -1 : 1)
    }
    if(sortBy === 'Sort:Price-Desc') {
      return products.sort((a, b) => a.priceRange.min > b.priceRange.min ? -1 : 1)
    }
    if(sortBy === 'Sort:Date-Asc') {
      return products.sort((a, b) => a.createdAt <= b.createdAt ? -1 : 1)
    }
    if(sortBy === 'Sort:Date-Desc') {
      return products.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
    }

  }
}
