<template>
  <form class="product-form"
    v-if="product"
    @submit.prevent
  >
    <product-prices class="product-form__prices"
      :variant="formModel.variant"
    />
    <variant-selects class="product-form__variants"
      v-model="formModel.variant"
      :product="product"
      :variant="formModel.variant"
    />
    <variant-quantity class="product-form__quantity"
      v-model="formModel.quantity"
      :product="product"
      :variant="formModel.variant"
    />
    <variant-buttons class="product-form__buttons"
      :product="product"
      :variant="formModel.variant"
      :quantity="formModel.quantity"
      @add="handleAdd"
      @buy="handleBuy"
    />
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
import { cartLineItem } from '~/assets/scripts/utils'

import productPrices from '~/components/product/product-prices'
import variantSelects from '~/components/variant/variant-selects'
import variantQuantity from '~/components/variant/variant-quantity'
import variantButtons from '~/components/variant/variant-buttons'

export default {
  name: 'productForm',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    productPrices,
    variantSelects,
    variantQuantity,
    variantButtons
  },
  data: (self = this) => ({
    formModel: {
      variant: self.product.variants[0],
      quantity: 1
    }
  }),
  methods: {
    ...mapMutations('cart', ['CART_ADD_ITEMS']),
    handleAdd() {
      const lineItem = cartLineItem({ product: this.product, ...this.formModel })
      if(lineItem) this.CART_ADD_ITEMS([ lineItem ])
    },
    handleBuy() {
      console.log('handle buy')
    }
  }
}
</script>

<style lang="scss">
  .product-form__prices {
    margin-bottom: 10px;
    font-size: 2.6rem;
    font-weight: 700;
    .product-prices__compare {
      margin-right: 5px;
      color: $color-urgent;
    }
    .product-prices__default.on-sale {
      color: lighten($color-black, 35%);
      font-size: 2.4rem;
      font-size: 2.2rem;
    }
  }
  .product-form__variants {
    max-width: 200px;
  }
  .product-form__quantity {
    max-width: 100px;
    margin-bottom: 20px;
  }
  .product-form__buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 240px;
    .button {
      width: 100%;
    }
  }
</style>
