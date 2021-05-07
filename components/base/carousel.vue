<template>
  <vue-slick-carousel class="carousel"
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
  }
}
</script>

<style lang="scss">
  .carousel {
    .slick-list { width: 100%; }
  }
</style>
