import { v4 as uuid } from 'uuid'

export default {
  CART_ADD_ITEMS(state, payload) {
    let lineItems = [ ...state.lineItems ]
    payload.forEach(payloadItem => {
      const cartIndex = state.lineItems.findIndex(lineItem => {
        return payloadItem.variant.id === lineItem.variant.id &&
          JSON.stringify(lineItem.metafields) === JSON.stringify(payloadItem.metafields)
      })
      if(cartIndex >= 0) lineItems[cartIndex].quantity += payloadItem.quantity
      else lineItems.push({ ...payloadItem, id: `${payloadItem.variant.id}::${uuid()}` })
    })
    state.lineItems = [ ...lineItems ]
  },
  CART_UPDATE_ITEMS(state, payload) {
    let lineItems = [ ...state.lineItems ]
    payload.forEach(payloadItem => {
      const cartIndex = state.lineItems.findIndex(lineItem => payloadItem.id === lineItem.id)
      if(cartIndex >= 0) lineItems[cartIndex] = { ...lineItems[cartIndex], ...payloadItem }
    })
    state.lineItems = [ ...lineItems ]
  },
  CART_REMOVE_ITEMS(state, payload) {
    state.lineItems = state.lineItems.filter((lineItem) => {
      return !payload.find((payloadItem) => payloadItem.id === lineItem.id)
    })
  },
  CART_CLEAR_ITEMS(state) {
    state.lineItems = []
  }
}
