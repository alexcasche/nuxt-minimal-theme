<template>
  <!----
    swap this out for custom slideshow component
    to support events better
  ----->
  <base-carousel class="product-slideshow"
    :options="{
      lazyLoad: 'ondemand',
      infinite: false,
      fade: true,
      arrows: false,
      draggable: false,
      dots: true,
      dotsClass: 'product-slideshow__thumbnails',
      useTransform: false
    }"
  >
    <div class="product-slideshow__slide"
      v-for="image in images"
      :key="image.id"
    >
      <base-img-zoom class="product-slideshow__slide-image"
        :src="image.src"
        :alt="image.alt"
        :widths="[600, 1200]"
      />
    </div>
    <div class="product-slideshow__thumbnail"
      slot="customPaging"
      v-for="image in images"
      :key="image.id"
    >
      <img class="product-slideshow__thumbnail-image"
        :src="image.thumbnailSrc"
      />
    </div>
  </base-carousel>
</template>

<script>
export default {
  name: 'productSlideshow',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    images() {
      return [
        ...this.product.media.filter(m => m.type === 'image'),
        ...this.product.media.filter(m => m.type === 'image'),
        ...this.product.media.filter(m => m.type === 'image')
      ]
    }
  }
}
</script>

<style lang="scss">
  .product-slideshow__thumbnails {
    display: flex !important;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 24px;
  }
  .product-slideshow__thumbnail {
    width: 100px;
    cursor: pointer;
  }
</style>
