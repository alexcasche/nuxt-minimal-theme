<template>
  <section class="carousel-hero"
    v-if="section"
  >
    <div class="carousel-hero__container container">
      <base-carousel class="carousel-hero__carousel"
        @beforeChange="handleChange"
        :options="{
          dots: true,
          dotsClass: 'carousel-hero__dots',
          draggable: false,
          infinite: true,
          lazyLoad: 'ondemand'
        }"
      >
        <div class="carousel-hero__slide"
          v-for="(slide, index) in section.slides"
          :key="`slide-${index}`"
        >
          <div class="carousel-hero__slide-inner">
            <base-img class="carousel-hero__slide-image"
              v-if="slide.image"
              :src="slide.image.src"
              :alt="slide.image.alt"
            />
            <div class="carousel-hero__slide-wrapper hide-medium-down">
              <div class="carousel-hero__slide-content">
                <h2 class="carousel-hero__slide-heading"
                  v-if="slide.heading"
                  v-html="slide.heading"
                />
                <base-a class="carousel-hero__slide-button button is-primary"
                  v-if="slide.button"
                  :href="slide.button.url"
                  v-html="slide.button.text"
                />
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-hero__dot"
          v-for="(slide, index) in section.slides"
          :key="`slide-${index}`"
          slot="customPaging"
        />
        <button class="carousel-hero__control is-prev"
          slot="prevArrow"
        >
          <base-svg class="carousel-hero__control-icon"
            name="chevron"
          />
        </button>
        <button class="carousel-hero__control is-next"
          slot="nextArrow"
        >
          <base-svg class="carousel-hero__control-icon"
            name="chevron"
          />
        </button>
      </base-carousel>
      <base-carousel class="carousel-hero__carousel is-controlled hide-medium-up"
        @init="handleInit"
        :options="{
          arrows: false,
          dots: false,
          draggable: false,
          fade: true
        }"
      >
        <div class="carousel-hero__slide"
          v-for="(slide, index) in section.slides"
          :key="`slide-${index}`"
        >
          <h2 class="carousel-hero__slide-heading"
            v-if="slide.heading"
            v-html="slide.heading"
          />
          <base-a class="carousel-hero__slide-button button is-primary"
            v-if="slide.button"
            :href="slide.button.url"
            v-html="slide.button.text"
          />
        </div>
      </base-carousel>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sectionCarouselHero',
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    carouselControlled: null
  }),
  methods: {
    handleInit(carousel) {
      this.carouselControlled = carousel
    },
    handleChange(oldIndex, newIndex) {
      this.carouselControlled.goTo(newIndex)
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
    display: flex !important;
    padding-bottom: 30%;
    .is-controlled & {
      padding: 30px;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
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
    object-position: center center;
  }
  .carousel-hero__slide-wrapper {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
    z-index: 1;
  }
  .carousel-hero__slide-content {
    width: 50%;
  }
  .carousel-hero__slide-heading {
    color: $color-white;
    font-size: 3.2rem;
    line-height: 1.25;
    margin-top: 0;
    .is-controlled & {
      color: $color-black;
      text-align: center;
    }
  }
  .carousel-hero__dots {
    width: 140px;
    display: flex !important;
    justify-content: center;
    gap: 4px;
    flex-wrap: wrap;
    margin: 10px auto 0;
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
  .carousel-hero__control {
    @include unset-button;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    &.is-prev {
      left: calc(50% - 80px);
      transform: translateX(-50%);
    }
    &.is-next {
      right: calc(50% - 80px);
      transform: translateX(50%);
    }
  }
  .carousel-hero__control-icon {
    height: 16px;
    color: $color-primary;
    &:hover {
      opacity: 0.75;
    }
    .is-prev & {
      transform: rotate(90deg);
    }
    .is-next & {
      transform: rotate(-90deg);
    }
  }
</style>
