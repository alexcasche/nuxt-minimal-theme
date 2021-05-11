export default {
  cartItems: state => state.lineItems,
  cartCount: state => {
    if(state.lineItems.length < 1) return 0
    return state.lineItems.reduce((count, lineItem) => {
      return count += lineItem.quantity
    }, 0)
  },
  cartSubtotal: state => {
    if(state.lineItems.length < 1) return 0
    return state.lineItems.reduce((subtotal, lineItem) => {
        return subtotal += lineItem.variant.price * lineItem.quantity
    }, 0)
  }
}
