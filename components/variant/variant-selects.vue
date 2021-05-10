<template>
  <div class="variant-selects"
    v-if="product && options"
  >
    <base-field class="variant-selects__field"
      v-for="(option, index) in options"
      :key="`options-${index}`"
      :label="option.name"
    >
      <base-select class="variant-selects__select"
        :id="`option-${index}`"
        v-model="optionsModel[index]"
        v-bind="$attrs"
        :options="option.values"
      />
    </base-field>
  </div>
</template>

<script>
import { productOptions, variantFromOptions } from '~/assets/scripts/utils'

export default {
  name: 'variantSelects',
  props: {
    product: {
      type: Object,
      required: true
    },
    variant: {
      type: [Object, null],
      required: false
    }
  },
  data: () => ({
    variantModel: false,
    optionsModel: []
  }),
  computed: {
    options() {
      return productOptions({ product: this.product })
    },
    activeVariant() {
      return variantFromOptions({ product: this.product, options: this.optionsModel })
    }
  },
  watch: {
    activeVariant: function(val) {
      this.$emit('input', val)
    }
  },
  created() {
    this.variantModel = this.variant || this.product.variants[0]
    this.optionsModel = this.variantModel.selectedOptions.map(option => option.value)
  }
}
</script>

<style lang="scss">
  .variant-selects {
    .field:not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>
