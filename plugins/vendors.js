import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import ImageZoom from 'vue-zoom-on-hover'

let vendorsRegistered = false

export default () => {
  if (vendorsRegistered) return
  Vue.use(VueLazyload, { observer: true })
  Vue.use(ImageZoom)
  vendorsRegistered = true
}
