export default {
  async cartCheckout({ getters }) {
    if (process.browser) {
      const count = getters.cartCount
      const subtotal = getters.cartSubtotal
      alert(`Checkout submitted with:
          \nCount: ${count}
          \nSubtotal: ${subtotal}
        `)
    }
  },
}
