<template>
  <div class="product-prices"
    v-if="activeVariant"
  >
    <strong class="product-prices__compare"
      v-if="activeVariant.compareAtPrice"
      v-html="_formatPrice({ price: activeVariant.compareAtPrice })"
    />
    <strong :class="['product-prices__default',
        activeVariant.compareAtPrice ? 'on-sale' : null
      ]"
      v-if="activeVariant.price"
      v-html="_formatPrice({ price: activeVariant.price })"
    />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: false
    },
    variant: {
      type: Object,
      required: false
    }
  },
  computed: {
    activeVariant() {
      if(this.variant || this.product) {
        return this.variant || this.product.variants[0]
      }
    }
  }
}
</script>

<style lang="scss">
  .product-prices__default {
    &.on-sale {
      text-decoration: line-through;
    }
  }
</style>
