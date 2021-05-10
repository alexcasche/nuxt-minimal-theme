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
        <base-img class="slideshow__thumbnail"
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
    top: 0;
    left: 0;
    z-index: 0;
    &.is-active {
      position: relative;
      z-index: 1;
    }
  }
  .slideshow-enter-active, .slideshow-leave-active {
    transition: opacity .35s ease-in-out;
  }
  .slideshow-enter, .slideshow-leave-to {
    opacity: 0;
  }
</style>
