<template>
  <nav class="footer-newsletter">
    <h4 class="footer-newsletter__heading"
      v-html="'Newsletter'"
    />
  </nav>
</template>

<script>
export default {
  name: 'themeFooterNewsletter'
}
</script>

<style lang="scss">
  .footer-newsletter {
    display: flex;
    flex-direction: column;
    @include media-small-down {
      text-align: center;
    }
  }
</style>
