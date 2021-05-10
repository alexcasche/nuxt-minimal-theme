<template>
  <div class="variant-selects"
    v-if="product && options"
  >
    <div class="variant-selects__option"
      v-for="(option, index) in options"
      :key="`options-${index}`"
    >
      <label class="variant-selects__label"
        v-html="option.name"
      />
      <base-select class="variant-selects__select"
        v-model="optionsModel[index]"
        :options="option.values"
      />
    </div>
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
