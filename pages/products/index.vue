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
import productGrid from '~/components/product/product-grid'

export default {
  name: 'pageProducts',
  components: {
    partBreadcrumbs,
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
</style>
