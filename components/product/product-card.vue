<template>
  <base-a class="product-card"
    v-if="product && activeVariant"
    :href="`/products/${product.handle}`"
  >
    <p class="product-card__title"
      v-html="product.title"
    />
    <p class="product-card__vendor"
      v-html="product.vendor"
    />
    <product-prices class="product-card__prices"
      :variant="activeVariant"
    />
  </base-a>
</template>

<script>
import productPrices from '~/components/product/product-prices'

export default {
  name: 'productCard',
  components: {
    productPrices
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    activeVariant() {
      return this.product.variants[0]
    }
  }
}
</script>
