export const variantFromOptions = ({ product, options }) => {
  if (product && options) {
    return product.variants.find(variant => {
      return !variant.selectedOptions.find((selectedOption, index) => {
        return selectedOption.value !== options[index]
      })
    })
  }
}
