<template>
  <vue-slick-carousel class="carousel">
    <slot />
  </vue-slick-carousel>
</template>

<script>
import vueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'baseCarousel',
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
