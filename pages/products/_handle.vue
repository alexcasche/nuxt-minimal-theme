<template>
  <main class="product-page page">
    <div class="product-page__container container">
      <div class="product-page__main"
        v-if="product"
      >
        <div class="product-page__media">
          <product-slideshow class="product-page__slideshow"
            :product="product"
          />
        </div>
        <div class="product-page__details">
          Details Hey Now
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import productSlideshow from '~/components/product/product-slideshow'

export default {
  name: 'pageProduct',
  components: {
    productSlideshow
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

<style lang="scss">
  .product-page__main {
    display: flex;
    flex-wrap: nowrap;
    gap: 40px;
    @include media-small-down {
      flex-direction: column;
    }
  }
  .product-page__media,
  .product-page__details {
    @include media-medium-up {
      width: 50%;
    }
  }
</style>
