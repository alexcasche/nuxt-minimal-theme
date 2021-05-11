<template>
  <div class="carousel-hero">
    <div class="carousel-hero__container container">
      <base-carousel class="carousel-hero__carousel"
        :options="{
          infinite: true,
          dots: true,
          dotsClass: 'carousel-hero__dots',
          controls: true
        }"
      >
        <div class="carousel-hero__slide"
          v-for="(slide, index) in content.slides"
          :key="`slide-${index}`"
        >
          <div class="carousel-hero__slide-inner">
            <base-img class="carousel-hero__slide-image"
              v-if="slide.image"
              :src="slide.image.src"
              :alt="slide.image.alt"
            />
          </div>
        </div>
        <button class="carousel-hero__dot"
          v-for="(slide, index) in content.slides"
          :key="`slide-${index}`"
          slot="customPaging"
        />
      </base-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sectionCarouselHero',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .carousel-hero {
    .slick-dots {
      display: flex;
    }
  }
  .carousel-hero__slide {
    position: relative;
    padding-bottom: 30%;
  }
  .carousel-hero__slide-inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    overflow: hidden;
  }
  .carousel-hero__slide-image {
    object-fit: cover;
  }
  .carousel-hero__dots {
    width: 300px;
    display: flex !important;
    justify-content: center;
    gap: 4px;
    flex-wrap: wrap;
    margin: 20px auto 0;
  }
  .carousel-hero__dot {
    @include unset-button;
    cursor: pointer;
    width: 12px;
    height: 12px;
    background-color: $color-primary;
    border-radius: 50%;
    border: 2px solid $color-white;
    .slick-active & {
      background-color: $color-white;
      border-color: $color-primary;
      pointer-events: none;
    }
    &:hover {
      opacity: 0.75;
    }
  }
</style>
