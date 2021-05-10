<template>
  <div class="slideshow"
    v-if="images"
  >
    <div class="slideshow__slides">
      <div :class="['slideshow__slide',
          active === index ? 'is-active' : null
        ]"
        v-for="(image, index) in images"
        :key="`image.id-${index}`"
      >
        <transition name="slideshow">
          <component class="slideshow__slide-image"
            v-if="active === index"
            :is="zoom ? 'base-img-zoom' : 'base-img'"
            :src="image.src"
            :alt="image.alt"
            :widths="[600, 1200]"
          />
        </transition>
      </div>
    </div>
    <div class="slideshow__thumbnails">
      <button :class="['slideshow__thumbnail',
          active === index ? 'is-active' : null
        ]"
        v-for="(image, index) in images"
        :key="`image.id-${index}`"
        @click="active = index"
      >
        <base-img class="slideshow__thumbnail-image"
          :src="image.src"
          :alt="image.alt"
          :widths="[50, 150]"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baseSlideshow',
  props: {
    images: {
      type: Array,
      required: true
    },
    zoom: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    active: 0
  })
}
</script>

<style lang="scss">
  .slideshow {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .slideshow__slides {
    position: relative;
  }
  .slideshow__slide {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    &.is-active {
      position: relative;
      z-index: 1;
    }
  }
  .slideshow__thumbnails {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  .slideshow__thumbnail {
    @include unset-button;
    width: calc(100% / 3);
    max-width: 100px;
  }
  .slideshow__thumbnail-image {
    width: 100%;
  }
  .slideshow-enter-active, .slideshow-leave-active {
    transition: opacity 0.35s ease-in-out;
  }
  .slideshow-enter, .slideshow-leave-to {
    opacity: 0;
  }
</style>
