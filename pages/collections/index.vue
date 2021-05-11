<template>
  <main class="collections-page page">
    <div class="collections-page__container container">
      <div class="collections-page__content"
        v-if="products"
      >
        <part-breadcrumbs class="collections-page__breadcrumbs" />
        <div class="collections-page__header">
          <h1 class="collections-page__heading"
            v-html="'All Collections'"
          />
          <product-filter class="collections-page__filter"
            v-model="filterModel"
            :products="products"
          />
          <product-sort class="collections-page__sort"
            v-model="sortModel"
          />
        </div>
        <product-grid class="collections-page__grid"
          :products="activeProducts"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { productFilterBy, productSortBy } from '~/assets/scripts/utils'

import partBreadcrumbs from '~/components/parts/breadcrumbs'
import productFilter from '~/components/product/product-filter'
import productSort from '~/components/product/product-sort'
import productGrid from '~/components/product/product-grid'

export default {
  name: 'pageCollections',
  components: {
    partBreadcrumbs,
    productFilter,
    productSort,
    productGrid
  },
  data: () => ({
    products: false,
    activeProducts: false,
    empty: false,
    filterModel: null,
    sortModel: null
  }),
  methods: {
    async fetchProducts() {
      this.products = await this.$nacelle.client.data.allProducts()
      this.activeProducts = this.products
    }
  },
  async fetch() {
    try {
      await Promise.all([ this.fetchProducts() ])
    }
    catch(err) {
      this.empty = true
    }
  },
  watch: {
    filterModel: function(val) {
      this.activeProducts = productFilterBy({
        products: this.products,
        filterBy: val
      })
    },
    sortModel: function(val) {
      this.activeProducts = productSortBy({
        products: this.products,
        sortBy: val
      })
    }
  }
}
</script>

<style lang="scss">
  .collections-page__header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 17px 0 40px;
    @include media-medium-up {
      flex-direction: row;
      align-items: center;
    }
  }
  .collections-page__heading {
    margin: 0;
    @include media-medium-up {
      flex-grow: 1;
    }
  }
</style>
