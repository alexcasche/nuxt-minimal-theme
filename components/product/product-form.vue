<template>
  <form class="product-form"
    v-if="product"
    @submit.prevent="handleSubmit"
  >
    <product-prices class="product-form__prices"
      :variant="formModel.variant"
    />
    <variant-selects class="product-form__variants"
      :variant="formModel.variant"
    />
  </form>
</template>

<script>
import productPrices from '~/components/product/product-prices'
import variantSelects from '~/components/variant/variant-selects'

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
    variantSelects
  },
  data: (self = this) => ({
    formModel: {
      variant: self.product.variants[0],
      quantity: 0
    }
  }),
  methods: {
    handleSubmit() {
      console.log('handle submit hey hey')
    }
  }
}
</script>
