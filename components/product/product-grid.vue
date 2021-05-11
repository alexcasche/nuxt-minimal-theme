<template>
  <div class="product-grid" v-if="products">
    <product-card class="product-grid__item"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import productCard from './product-card'

export default {
  components: {
    productCard
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .product-grid {
    display: grid;
    grid-gap: 60px 40px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @include media-medium-up {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
</style>
