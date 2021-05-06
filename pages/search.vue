<template>
  <main class="search-page page">
    <div class="search-page__container container">
       <h1 class="search-page__heading"
        v-html="'Search Page'"
      />
      <product-grid class="search-page__grid"
        :products="productsCatalog"
      />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import productGrid from '~/components/product/product-grid'

export default {
  components: {
    productGrid
  },
  computed: {
    ...mapGetters('products', ['productsCatalog'])
  }
}
</script>
