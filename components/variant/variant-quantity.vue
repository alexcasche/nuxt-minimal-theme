<template>
  <div class="variant-quantity"
    v-if="product"
  >
    <base-field class="variant-quantity__field"
      label="Quantity"
    >
      <base-quantity class="variant-selects"
        v-model="quantityModel"
        :min="1"
        :max="10"
      />
    </base-field>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    variant: {
      type: [Object, null],
      required: false
    },
  },
  data: () => ({
    quantityModel: 1
  }),
  watch: {
    quantityModel: function(val) {
      this.$emit('input', +val)
    }
  }
}
</script>

