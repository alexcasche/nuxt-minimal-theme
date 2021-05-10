<template>
  <div class="variant-buttons">
    <variant-button-add class="variant-buttons__add"
      :product="product"
      :variant="variant"
      :quantity="quantity || 1"
      @click.native="$emit('add')"
    />
    <variant-button-buy class="variant-buttons__buy"
      :product="product"
      :variant="variant"
      :quantity="quantity || 1"
      @click.native="$emit('buy')"
    />
  </div>
</template>

<script>
import variantButtonAdd from './variant-button-add'
import variantButtonBuy from './variant-button-buy'

export default {
  name: 'variantButtons',
  props: {
    product: {
      type: Object,
      required: true
    },
    variant: {
      type: [Object, null],
      required: false
    },
    quantity: {
      type: [Number, null],
      required: false
    }
  },
  components: {
    variantButtonAdd,
    variantButtonBuy
  }
}
</script>

<style lang="scss">

</style>
