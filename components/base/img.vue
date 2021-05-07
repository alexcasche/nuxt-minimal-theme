<template>
  <img class="img"
    v-if="src"
    v-lazy="lazy ? srcString : null"
    :src="lazy ? srcString : src"
    :data-src="srcString"
    :data-srcset="srcSet"
  />
</template>

<script>
export default {
  props: {
    lazy: {
      type: Boolean,
      default: true
    },
    src: {
      type: [String, Boolean],
      default: false
    },
    widths: {
      type: Array,
      default: () => [50, 150]
    }
  },
  data: () => ({
    extensions: ['.jpg', '.jpeg', '.png', '.gif']
  }),
  computed: {
    cdn() {
      if(this.src) {
        if(this.src.includes('cdn.shopify')) return 'shopify'
        if(this.src.includes('cdn.sanity')) return 'sanity'
      }
    },
    lazyAttribute() {
      if(this.lazy) return { 'v-lazy': this.src }
    },
    srcString() {
      if(this.cdn === 'sanity') return this.getSanitySrc()
      if(this.cdn === 'shopify') return this.getShopifySrc()
      return this.src
    },
    srcSet() {
      if(this.cdn === 'sanity') return this.getSanitySrcSet()
      if(this.cdn === 'shopify') return this.getShopifySrcSet()
      return this.src
    },
    srcParts() {
      let fileIndex = false
      this.extensions.forEach(ext => {
        const index = this.src.indexOf(ext)
        if(index >= 0) fileIndex = index
      })
      const start = this.src.substring(0, fileIndex)
      const end = this.src.substring(fileIndex, this.src.length - 1)
      return { start, end }
    }
  },
  methods: {
    getSanitySrc() {
      return `${this.src}?w=${this.widths[0]}`
    },
    getShopifySrc() {
      const { start, end } = this.srcParts
      return `${start}_${this.widths[0]}x${end}`
    },
    getSanitySrcSet() {
      let srcSetString = ""
      this.widths.forEach((width, index) => {
        const lastLoop = index === this.widths.length - 1
        let srcValue = `${this.src}?w=${(width * 1.5)} ${width}w`
        if(!lastLoop) srcValue += ','
        srcSetString += srcValue
      })
      return srcSetString
    },
    getShopifySrcSet() {
      let srcSetString = ""
      const { start, end } = this.srcParts
      this.widths.forEach((width, index) => {
        const lastLoop = index === this.widths.length - 1
        let srcValue = `${start}_${(width * 1.5)}x${end} ${width}w`
        if(!lastLoop) srcValue += ','
        srcSetString += srcValue
      })
      return srcSetString
    }
  }
}
</script>
