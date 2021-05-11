<template>
  <main class="collection-page page">
    <div class="collection-page__container container">
      <div class="collection-page__content"
        v-if="collection && products"
      >
        <part-breadcrumbs class="collection-page__breadcrumbs" />
        <div class="collection-page__header">
          <h1 class="collection-page__heading"
            v-html="'All Products'"
          />
          <product-filter class="collection-page__filter"
            v-model="filterModel"
            :products="products"
          />
          <product-sort class="collection-page__sort"
            v-model="sortModel"
          />
        </div>
        <product-grid class="collection-page__grid"
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
  name: 'pageCollection',
  components: {
    partBreadcrumbs,
    productFilter,
    productSort,
    productGrid
  },
  data: () => ({
    collection: false,
    products: false,
    activeProducts: false,
    empty: false,
    filterModel: null,
    sortModel: null
  }),
  methods: {
    async fetchCollection() {
      this.collection = await this.$nacelle.client.data.collection({
        handle: this.$route.params.handle
      })
      if(this.collection) {
        this.products = await this.$nacelle.client.data.products({
          handles: this.collection.productLists[0].handles
        })
        this.activeProducts = this.products
      }
    }
  },
  async fetch() {
    try {
      await Promise.all([ this.fetchCollection() ])
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
  .collection-page__header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 17px 0 40px;
    @include media-medium-up {
      flex-direction: row;
      align-items: center;
    }
  }
  .collection-page__heading {
    margin: 0;
    @include media-medium-up {
      flex-grow: 1;
    }
  }
</style>
