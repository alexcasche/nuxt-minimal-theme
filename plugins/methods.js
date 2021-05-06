import Vue from 'vue'
import * as _methods from '~/assets/scripts/methods'

let methodsRegistered = false

export default () => {
  if (methodsRegistered) return
  let methods = {}
  Object.keys(_methods).forEach((key) => {
    methods[`_${key}`] = _methods[key]
  })
  Vue.mixin({ methods })
  methodsRegistered = true
}
