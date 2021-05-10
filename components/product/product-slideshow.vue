<template>
  <base-slideshow class="product-slideshow"
    v-if="product && images"
    :images="images"
    :zoom="true"
  />
</template>

<script>
export default {
  name: 'productSlideshow',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    images() {
      return [
        ...this.product.media.filter(m => m.type === 'image'),
        {
          src: 'https://cdn.shopify.com/s/files/1/0569/0376/2117/products/young-hip-woman-at-carnival_925x_71c93f95-9e2e-476f-ab55-b550dae0ec9f.jpg?v=1620320807',
          id: 'Z2lkOi8vc2hvcGlmeS9JbWFnZVNvdXJjZS8yMDgyMjEyODE5NzgyOQ==',
          thumbnailSrc: 'https://cdn.shopify.com/s/files/1/0569/0376/2117/products/young-hip-woman-at-carnival_925x_71c93f95-9e2e-476f-ab55-b550dae0ec9f.jpg?v=1620320807&width=100'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  // .product-slideshow__thumbnails {
  //   display: flex !important;
  //   justify-content: center;
  //   flex-wrap: wrap;
  //   gap: 20px;
  //   margin-top: 24px;
  // }
  // .product-slideshow__thumbnail {
  //   width: 100px;
  //   cursor: pointer;
  // }
</style>
