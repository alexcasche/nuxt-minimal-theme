<template>
  <base-carousel class="carousel-hero"
    :options="{
      infinite: true,
      dots: true,
      controls: true
    }"
  >
    <div>slide 1</div>
    <div>slide 2</div>
  </base-carousel>
</template>

<script>
export default {
  name: 'sectionCarouselHero',
  props: {
    slides: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>
