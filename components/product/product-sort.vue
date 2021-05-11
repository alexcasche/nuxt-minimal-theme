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
        { value: 'featured', text: 'Featured' },
        { value: 'best-selling', text: 'Best Selling' },
        { value: 'title-asc', text: 'Alphabetically, A-Z' },
        { value: 'title-desc', text: 'Alphabetically, Z-A' },
        { value: 'title-asc', text: 'Price, Low-High' },
        { value: 'title-desc', text: 'Price, High-Low' },
        { value: 'title-asc', text: 'Date, Old-New' },
        { value: 'title-desc', text: 'Date, New-Old' }
      ]
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
