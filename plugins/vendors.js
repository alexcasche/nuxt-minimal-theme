import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

let vendorsRegistered = false

export default () => {
  if (vendorsRegistered) return
  Vue.use(VueLazyload, { observer: true })
  vendorsRegistered = true
}
