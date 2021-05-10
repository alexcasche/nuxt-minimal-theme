<template>
  <main class="product-page page">
    <div class="product-page__container container">
      <div class="product-page__main"
        v-if="product && activeVariant"
      >
        <div class="product-page__media">
          <product-slideshow class="product-page__slideshow"
            :product="product"
          />
        </div>
        <div class="product-page__details">
          <h3 class="product-page__vendor"
            v-html="product.vendor"
          />
          <h1 class="product-page__title"
            v-html="product.title"
          />
          <product-prices class="product-page__prices"
            :variant="{ ...activeVariant, compareAtPrice: 14 }"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import productSlideshow from '~/components/product/product-slideshow'
import productPrices from '~/components/product/product-prices'

export default {
  name: 'pageProduct',
  components: {
    productSlideshow,
    productPrices
  },
  data: () => ({
    product: false,
    empty: false
  }),
  computed: {
    activeVariant() {
      return this.product.variants[0]
    }
  },
  methods: {
    async fetchProduct() {
      this.product = await this.$nacelle.client.data.product({
        handle: this.$route.params.handle
      })
    }
  },
  async fetch() {
    try {
      await Promise.all([ this.fetchProduct() ])
    }
    catch(err) {
      this.empty = true
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
  .product-page__vendor,
  .product-page__title {
    margin-top: 0;
  }
  .product-page__vendor {
    margin-bottom: 0;
  }
  .product-page__prices {
    font-size: 2.6rem;
    font-weight: 700;
    .product-prices__compare {
      margin-right: 5px;
      color: $color-urgent;
    }
    .product-prices__default.on-sale {
      color: lighten($color-black, 35%);
      font-size: 2.4rem;
      font-size: 2.2rem;
    }
  }
</style>
