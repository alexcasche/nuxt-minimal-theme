<template>
  <base-a class="product-card"
    v-if="product && activeVariant"
    :href="`/products/${product.handle}`"
  >
    <div class="product-card__media">
      <base-img class="product-card__image"
        v-if="product.featuredMedia && product.featuredMedia.type === 'image'"
        :src="product.featuredMedia.src"
        :alt="product.featuredMedia.alt"
        :widths="[50, 150, 300, 600]"
      />
    </div>
    <div class="product-card__details">
      <p class="product-card__title"
        v-html="product.title"
      />
      <p class="product-card__vendor"
        v-html="product.vendor"
      />
      <product-prices class="product-card__prices"
        :variant="activeVariant"
      />
    </div>
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

<style lang="scss">
  .product-card__media {
    margin-bottom: 10px;
    .product-card:hover & {
      opacity: 0.85;
    }
  }
  .product-card__title {
    font-size: 1.5rem;
    font-weight: 700;
    .product-card:hover & {
      color: $color-primary;
    }
  }
  .product-card__vendor {
    font-size: 1.4rem;
  }
  .product-card__prices {
    .product-prices__default,
    .product-prices__compare {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
</style>
