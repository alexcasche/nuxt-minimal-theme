<template>
  <vue-slick-carousel class="carousel"
    ref="carousel"
    @init="handleInit"
    @reInit="handleReInit"
    @beforeChange="handleBeforeChange"
    @afterChange="handleAfterChange"
    v-bind="options"
  >
    <template #prevArrow
      v-if="this.$slots.prevArrow"
    >
      <slot name="prevArrow" />
    </template>
    <slot />
     <template #nextArrow
      v-if="this.$slots.nextArrow"
     >
      <slot name="nextArrow" />
    </template>
    <template #customPaging
      v-if="this.$slots.customPaging"
    >
      <slot name="customPaging" />
    </template>
  </vue-slick-carousel>
</template>

<script>
import vueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'baseCarousel',
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    vueSlickCarousel
  },
  methods: {
    handleInit() {
      this.$emit('init', this)
    },
    handleReInit() {
      this.$emit('reInit', this)
    },
    handleBeforeChange(oldIndex, newIndex) {
      this.$emit('beforeChange', oldIndex, newIndex)
    },
    handleAfterChange(index) {
      this.$emit('afterChange', index)
    },
    prev() {
      if(this.$refs.carousel) {
        this.$refs.carousel.prev()
      }
    },
    next() {
      if(this.$refs.carousel) {
        this.$refs.carousel.next()
      }
    },
    goTo(index) {
      if(this.$refs.carousel) {
        this.$refs.carousel.goTo(index)
      }
    },
    play() {
      if(this.$refs.carousel) {
        this.$refs.carousel.play()
      }
    },
    pause() {
      if(this.$refs.carousel) {
        this.$refs.carousel.pause()
      }
    }
  }
}
</script>

<style lang="scss">
  .carousel {
    .slick-list { width: 100%; }
  }
</style>
