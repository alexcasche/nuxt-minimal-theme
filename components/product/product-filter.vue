<template>
  <base-field class="product-filter"
    v-if="products && options"
    :label="'Browse by'"
  >
    <base-select class="product-filter__select"
      v-model="filterModel"
      :options="options"
    />
  </base-field>
</template>

<script>
export default {
  name: 'productFilter',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data: (self = this) => ({
    filterModel: self.$attrs.value || ''
  }),
  computed: {
    filters() {
      let filters = []
      this.products.forEach(product => {
        product.tags.forEach(tag => {
          if(tag.toLowerCase().startsWith('filter:')) {
            filters.push(tag)
          }
        })
      })
      return Array.from(new Set(filters))
    },
    options() {
      if(this.filters.length > 0) {
        let options = this.filters.map(filter => ({
          value: filter,
          text: filter.toLowerCase().replace('filter:', '')
        }))
        options.unshift({ value: null, text: 'All' })
        return options
      }
    }
  },
  watch: {
    filterModel: function(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss">
  .product-filter {
    margin-bottom: 0 !important;
    .field__label-text {
      font-size: 1.5rem;
    }
    @include media-medium-up {
      .field__label {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .field__label-text {
        margin-bottom: 0;
        white-space: nowrap;
      }
    }
  }
  .product-filter__select {
    text-transform: capitalize;
    @include media-medium-up {
      max-width: 200px !important;
    }
  }
</style>
