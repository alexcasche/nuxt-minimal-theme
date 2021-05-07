import vendors from './vendors'

let clientRegistered = false

export default () => {
  if (clientRegistered) return
  else {
    vendors()
    clientRegistered = true
  }
}
