<template>
  <section class="row-featured"
    v-if="section"
  >
    <div :class="['row-featured__container', 'container', section.layout]">
      <div class="row-featured__media">
        <base-img class="row-featured__image"
          v-if="section.image"
          :src="section.image.src"
          :alt="section.image.alt"
        />
      </div>
      <div class="row-featured__content">
        <h2 class="row-featured__heading"
          v-if="section.heading"
          v-html="section.heading"
        />
        <base-rich-text class="row-featured__body"
          v-if="section.body"
          :body="section.body"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sectionRowFeatured',
  props: {
    section: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .row-featured {
    padding: 14px 0;
    @include media-medium-up {
      padding: 28px 0;
    }
  }
  .row-featured__container {
    display: flex;
    flex-direction: column;
    gap: 18px;
    @include media-medium-up {
      flex-direction: row;
      align-items: center;
      gap: 30px;
    }
  }
  .row-featured__media {
    position: relative;
    display: flex;
    padding-bottom: 45%;
    @include media-medium-up {
      padding-bottom: 30%;
      .image-right & {
        order: 1
      }
      width: 50%;
    }
  }
  .row-featured__image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  .row-featured__content {
    @include media-medium-up {
      width: 50%;
    }
  }
  .row-featured__body {
    p {
      margin: 0 !important;
      font-size: 1.7rem !important;
      line-height: 1.75;
      @include media-medium-up {
        font-size: 1.8rem !important;
      }
    }
  }
</style>
