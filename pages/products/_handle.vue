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
            <base-tabs class="product-page__tabs">
              <base-tabs-item class="product-page__tab"
                v-if="product.description"
                title="description"
              >
                <base-rich-text class="product-page__tab-content"
                  :body="product.description"
                />
              </base-tabs-item>
              <base-tabs-item class="product-page__tab"
                v-if="info"
                title="more info"
              >
                <base-rich-text class="product-page__tab-content"
                  :body="info"
                />
              </base-tabs-item>
            </base-tabs>
            <part-social-share class="product-page__share"
              :title="product.title"
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
import partSocialShare from '~/components/parts/social-share'

export default {
  name: 'pageProduct',
  components: {
    partBreadcrumbs,
    productSlideshow,
    productForm,
    partSocialShare
  },
  data: () => ({
    product: false,
    empty: false,
    formModel: {
      variant: false
    },
    info: `
      <p><strong>Order Processing</strong></p>
      <p>All orders placed online Monday-Friday (excluding holidays) before 2PM PST will begin processing that day and ship within 48 hours, pending item availability and credit card verification. Orders placed after 2PM PST will begin processing the next business day. Orders placed on Friday after 2PM PST will begin processing the following Monday. Transit times do not include Saturday, Sunday or holidays.</p>
      <p>Order processing cut-off times are provided as guidelines only, and do not take into account possible delays caused by item availability and payment verification.</p>
      <p><strong>Order Processing</strong></p>
      <p>Orders placed online within said hours using the In-Store pickup option, will be available approximately 2 hours after the order has been processed. Orders will not be made available for pickup until you receive an email confirmation that your order is ready for pickup.</p>
      <p><strong>Order Processing</strong></p>
      <p>We do not offer Saturday delivery. Orders shipped to APO/FPO addresses and PO Boxes will ship out via USPS Priority Mail.</p>
      <p><strong>Tracking your order</strong></p>
      <p>Upon completion of your order, you will receive a shipment confirmation email, which will include a link that will direct you to updated tracking information.</p>
    `
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
  .product-page__form {
    margin-bottom: 60px;
  }
  .product-page__tabs {
    .tabs__trigger {
      font-size: 2.2rem;
    }
  }
</style>
