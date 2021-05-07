<template>
  <div class="product-gallery"
    v-if="product"
  >
    <base-carousel>
      <template #prevArrow>Prev</template>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <template #nextArrow>Next</template>
    </base-carousel>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    images() {
      return this.product.media.filter(m => m.type === 'image')
    }
  }
}
</script>
