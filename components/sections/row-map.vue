<template>
  <section class="row-map"
    v-if="section"
  >
    <div :class="['row-map__container', 'container', section.layout]">
      <div class="row-map__media">
        <base-img class="row-map__image"
          v-if="section.image"
          :src="section.image.src"
          :alt="section.image.alt"
        />
      </div>
      <div class="row-map__content">
        <base-rich-text class="row-map__body"
          v-if="section.body"
          :body="section.body"
        />
        <base-a class="row-map__button button is-primary"
          v-if="section.button"
          :href="section.button.url"
        >
          <base-svg class="row-map__button-icon"
            name="location"
          />
          <span class="row-map__button-text"
            v-html="section.button.text"
          />
        </base-a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sectionRowMap',
  props: {
    section: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .row-map {
    padding: 30px 0;
    @include media-medium-up {
      padding: 40px 0;
    }
  }
  .row-map__container {
    display: flex;
    flex-direction: column;
    @include media-medium-up {
      flex-direction: row;
    }
  }
  .row-map__media {
    position: relative;
    display: flex;
    @include media-medium-down {
      padding-bottom: 45%;
    }
    @include media-medium-up {
      .image-right & {
        order: 1
      }
      width: 50%;
    }
  }
  .row-map__image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  .row-map__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 30px;
    background-color: darken($color-white, 5%);
    @include media-medium-up {
      width: 50%;
    }
  }
  .row-map__body {
    p {
      margin: 1.25rem 0 !important;
      font-size: 1.7rem !important;
      line-height: 1.75 !important;
      &:first-child {
        margin-top: 0 !important;
      }
      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
  .row-map__button {
    margin-top: 24px;
  }
  .row-map__button-icon {
    height: 20px;
  }
  .row-map__button-text {
    margin-left: 5px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
</style>
