<template>
  <main class="product-page page">
    <div class="product-page__container container">
      <div class="product-page__content"
        v-if="product"
      >
        <part-breadcrumbs class="product-page__breadcrumbs" />
        <div class="product-page__main">
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
            <product-form class="product-page__form"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import partBreadcrumbs from '~/components/parts/breadcrumbs'
import productSlideshow from '~/components/product/product-slideshow'
import productForm from '~/components/product/product-form'

export default {
  name: 'pageProduct',
  components: {
    partBreadcrumbs,
    productSlideshow,
    productForm
  },
  data: () => ({
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
</style>
