export const productOptions = ({ product }) => {
  if(product && product.variants.length > 1) {
    let options = []
    product.variants.forEach(variant => {
      variant.selectedOptions.forEach(selectedOption => {
        options.push(selectedOption.name)
      })
    })
    options = Array.from(new Set(options))
    let values = options.map(() => [])
    product.variants.forEach(variant => {
      variant.selectedOptions.forEach(selectedOption => {
        const optionIndex = options.findIndex(option => option === selectedOption.name)
        if(optionIndex >= 0) values[optionIndex].push(selectedOption.value)
      })
    })
    values = values.map(valuesArray => Array.from(new Set(valuesArray)))
    return options.map((option, index) => ({
      name: option,
      values: values[index]
    }))
  }
}
