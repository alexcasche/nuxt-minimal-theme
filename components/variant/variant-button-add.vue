<template>
  <base-button class="variant-button-add"
    v-if="variant"
    role="primary"
    design="hollow"
    v-html="'Add To Cart'"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: 'variantButtonAdd',
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
