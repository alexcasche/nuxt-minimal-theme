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
          <h3 class="product-page__vendor"
            v-html="product.vendor"
          />
          <h1 class="product-page__title"
            v-html="product.title"
          />
          <product-form class="product-page__prices"
            :product="product"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import productSlideshow from '~/components/product/product-slideshow'
import productForm from '~/components/product/product-form'

export default {
  name: 'pageProduct',
  components: {
    productSlideshow,
    productForm
  },
  data: (self = this) => ({
    product: false,
    empty: false,
    formModel: {
      variant: false
    }
  }),
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
  .product-page__title {
    margin-bottom: 10px;
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
