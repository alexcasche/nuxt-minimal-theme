<template>
  <base-field class="product-sort"
    v-if="options"
    :label="'Sort by'"
  >
    <base-select class="product-sort__select"
      v-model="sortModel"
      :options="options"
    />
  </base-field>
</template>

<script>
export default {
  name: 'productSort',
  data: (self = this) => ({
    sortModel: self.$attrs.value || ''
  }),
  computed: {
    options() {
      return [
        { value: null, text: 'Featured' },
        { value: 'Sort:Title-Asc', text: 'Alphabetically, A-Z' },
        { value: 'Sort:Title-Desc', text: 'Alphabetically, Z-A' },
        { value: 'Sort:Price-Asc', text: 'Price, Low-High' },
        { value: 'Sort:Price-Desc', text: 'Price, High-Low' },
        { value: 'Sort:Date-Asc', text: 'Date, Old-New' },
        { value: 'Sort:Date-Desc', text: 'Date, New-Old' }
      ]
    }
  },
   watch: {
    sortModel: function(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss">
  .product-sort {
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
  .product-sort__select {
    text-transform: capitalize;
    @include media-medium-up {
      max-width: 200px !important;
    }
  }
</style>
