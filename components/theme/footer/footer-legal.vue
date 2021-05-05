<template>
  <div class="footer-legal">
    <div class="footer-legal__copyright">
      Copyright © {{year}},
      <a class="footer-legal__link"
        href="https://google.com"
        v-html="'MDK Fashion.'"
      />
      <a class="footer-legal__link"
        href="https://nacelle.com"
        v-html="'Website Powered by Nacelle.'"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    year () {
      const date = new Date()
      return date.getFullYear()
    }
  }
}
</script>

<style lang="scss">
  .footer-legal {
    margin-bottom: 10px;
    font-size: 1.4rem;
  }
  .footer-legal__link:hover {
    color: $color-primary;
  }
</style>
