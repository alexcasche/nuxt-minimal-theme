<template>
  <main class="product-page page">
    <div class="product-page__container container">
      <div class="product-page__main"
        v-if="product"
      >
        <product-gallery class="product-page__gallery"
          :product="product"
        />
        <div class="product-page__details">
          Details Hey Now
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import productGallery from '~/components/product/product-gallery'

export default {
  name: 'pageProduct',
  components: {
    productGallery
  },
  data: () => ({
    product: false,
    empty: false
  }),
  async fetch() {
    try {
      await Promise.all([ this.fetchProduct() ])
    }
    catch(err) {
      this.empty = true
    }
  },
  methods: {
    async fetchProduct() {
      this.product = await this.$nacelle.client.data.product({
        handle: this.$route.params.handle
      })
    }
  }
}
</script>
