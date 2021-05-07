<template>
  <client-only>
    <zoom-on-hover class="img-zoom"
      v-if="src"
      :img-normal="srcNormal"
      :img-zoom="srcZoom"
    />
  </client-only>
</template>

<script>
export default {
  name: 'baseImgZoom',
  props: {
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
    srcList() {
      if(this.cdn === 'sanity') return this.getSanitySrcs()
      if(this.cdn === 'shopify') return this.getShopifySrcs()
      return [this.src]
    },
    srcNormal() {
      return this.srcList[0] || this.src
    },
    srcZoom() {
      return this.srcList[this.srcList.length - 1] || this.src
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
    getSanitySrcs() {
      return this.widths.map(width => {
        return `${this.src}?w=${(width * 1.5)} ${width}w`
      })
    },
    getShopifySrcs() {
      const { start, end } = this.srcParts
      return this.widths.map(width => {
        return `${start}_${(width * 1.5)}x${end} ${width}w`
      })
    }
  }
}
</script>

<style lang="scss">
  .img-zoom {
    cursor: move;

    .zoom {
      width: unset;
      max-width: unset;
    }
  }
</style>
