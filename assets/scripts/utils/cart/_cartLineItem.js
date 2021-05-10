export const cartLineItem = ({ product, variant, quantity, metafields }) => {
  if(product && variant) {
    return {
      image: product.featuredMedia,
      title: product.title,
      variant: variant,
      quantity: quantity || 1,
      productId: product.id,
      handle: product.handle,
      vendor: product.vendor,
      tags: product.tags,
      metafields: metafields || []
    }
  }
}
