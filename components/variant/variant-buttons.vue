<template>
  <div class="variant-buttons"
    v-if="variant"
  >
    <variant-button-add class="variant-buttons__add"
      :variant="variant"
      :quantity="quantity || 1"
      @click="$emit('add')"
    />
    <variant-button-buy class="variant-buttons__buy"
      :variant="variant"
      :quantity="quantity || 1"
      @click="$emit('buy')"
    />
  </div>
</template>

<script>
import variantButtonAdd from './variant-button-add'
import variantButtonBuy from './variant-button-buy'

export default {
  name: 'variantButtons',
  props: {
    variant: {
      type: Object,
      required: true
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
