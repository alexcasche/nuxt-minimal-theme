<template>
  <section class="grid-featured"
    v-if="section"
  >
    <div class="grid-featured__container container">
      <h2 class="grid-featured__heading"
        v-if="section.heading"
        v-html="section.heading"
      />
      <div class="grid-featured__items">
        <base-a class="grid-featured__item"
          v-for="(item, index) in section.items"
          :key="`item-${index}`"
          :href="item.url"
        >
          <base-img class="grid-featured__image"
            v-if="item.image"
            :src="item.image.src"
          />
          <strong class="grid-featured__text"
            v-if="item.text"
            v-html="item.text"
          />
        </base-a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sectionGridFeatured',
  props: {
    section: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .grid-featured {
    padding: 30px 0;
    @include media-medium-up {
      padding: 40px 0;
    }
  }
  .grid-featured__heading {
    margin: 0 0 20px;
  }
  .grid-featured__items {
    display: grid;
    grid-gap: 60px 40px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @include media-medium-up {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .grid-featured__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    height: 100%;
  }
  .grid-featured__image {
    height: 100%;
    object-fit: cover;
    object-position: center center;
    .grid-featured__item:hover & {
      opacity: 0.85;
    }
  }
  .grid-featured__text {
    text-align: center;
    font-size: 1.5rem;
    .grid-featured__item:hover & {
      color: $color-primary;
    }
  }
</style>
