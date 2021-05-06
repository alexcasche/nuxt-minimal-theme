import methods from './methods'

let globalRegistered = false

export default () => {
  if (globalRegistered) return
  else {
    methods()
    globalRegistered = true
  }
}
