<template>
  <base-button class="variant-button-add"
    role="primary"
    design="hollow"
    v-html="'Add To Cart'"
  />
</template>

<script>
export default {
  name: 'variantButtonAdd',
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
