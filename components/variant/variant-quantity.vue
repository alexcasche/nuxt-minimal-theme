<template>
  <div class="variant-quantity"
    v-if="variant"
  >
    <base-field class="variant-quantity__field"
      label="Quantity"
    >
      <base-quantity class="variant-quantity__input"
        v-model="quantityModel"
        v-bind="$attrs"
        :min="1"
        :max="10"
      />
    </base-field>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: Object,
      required: true
    },
  },
  data: (self = this) => ({
    quantityModel: self.$attrs.value || 1
  }),
  watch: {
    quantityModel: function(val) {
      this.$emit('input', +val)
    }
  }
}
</script>

