import vendors from './vendors'
import vuex from './vuex'

let clientRegistered = false

export default ({ store }) => {
  if (clientRegistered) return
  else {
    vendors()
    vuex({ store })
    clientRegistered = true
  }
}
