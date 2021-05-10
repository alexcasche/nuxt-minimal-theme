<template>
  <div class="variant-selects"
    v-if="product && options"
  >
    <base-field class="variant-selects__option"
      v-for="(option, index) in options"
      :key="`options-${index}`"
      :name="`option-${index}`"
      :label="option.name"
    >
      <base-select class="variant-selects__select"
        :id="`option-${index}`"
        v-model="optionsModel[index]"
        :options="option.values"
      />
    </base-field>
  </div>
</template>

<script>
import { productOptions } from '~/assets/scripts/utils'

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
    optionsModel: []
  }),
  computed: {
    options() {
      return productOptions({ product: this.product })
    }
  }
}
</script>

<style lang="scss">
  .variant-selects {
    margin-bottom: 5px;
    .field:not(:last-child) {
      margin-bottom: 5px;
    }
  }
</style>
