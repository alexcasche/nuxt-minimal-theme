<template>
  <main class="products-page page">
    <div class="products-page__container container">
      <div class="products-page__content"
        v-if="products"
      >
        <part-breadcrumbs class="products-page__breadcrumbs" />
        <div class="products-page__header">
          <h1 class="products-page__heading"
            v-html="'All Products'"
          />
          <product-filter class="products-page__filter"
            :products="products"
          />
          <product-sort class="products-page__sort" />
        </div>
        <product-grid class="products-page__grid"
          :products="products"
        />
      </div>
    </div>
  </main>
</template>

<script>
import partBreadcrumbs from '~/components/parts/breadcrumbs'
import productFilter from '~/components/product/product-filter'
import productSort from '~/components/product/product-sort'
import productGrid from '~/components/product/product-grid'

export default {
  name: 'pageProducts',
  components: {
    partBreadcrumbs,
    productFilter,
    productSort,
    productGrid
  },
  data: () => ({
    products: false,
    empty: false
  }),
  methods: {
    async fetchProducts() {
      this.products = await this.$nacelle.client.data.allProducts()
    }
  },
  async fetch() {
    try {
      await Promise.all([ this.fetchProducts() ])
    }
    catch(err) {
      this.empty = true
    }
  }
}
</script>

<style lang="scss">
  .products-page__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 17px 0 40px;
    @include media-medium-up {
      flex-direction: row;
    }
  }
  .products-page__heading {
    margin: 0;
    @include media-medium-up {
      flex-grow: 1;
    }
  }
</style>
