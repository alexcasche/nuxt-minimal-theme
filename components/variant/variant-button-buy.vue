<template>
  <base-button class="variant-button-buy"
    role="primary"
    v-html="'Buy It Now'"
  />
</template>

<script>
export default {
  name: 'variantButtonBuy',
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
  }
}
</script>

<style lang="scss">

</style>
