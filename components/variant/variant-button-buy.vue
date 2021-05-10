<template>
  <base-button class="variant-button-buy"
    v-if="variant"
    role="primary"
    v-html="'Buy It Now'"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: 'variantButtonBuy',
  props: {
    variant: {
      type: Object,
      required: true
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
