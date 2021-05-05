<template>
  <nav class="footer-featured">
    <h4 class="footer-featured__heading"
      v-html="'Latest News'"
    />
    <base-a class="footer-featured__link"
      href="/blog"
      v-html="'The Big Launch!'"
    />
    <p class="footer-featured__text"
      v-html="'After much planning, decorating, sourcing, packaging, pricing, and more, it was time to launch.'"
    />
  </nav>
</template>

<script>
export default {
  name: 'themeFooterFeatured'
}
</script>

<style lang="scss">
  .footer-featured {
    display: flex;
    flex-direction: column;
    @include media-small-down {
      text-align: center;
    }
  }
  .footer-featured__link {
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: 700;
    &:hover {
      color: $color-primary;
    }
  }
  .footer-featured__text {
    font-size: 1.5rem;
    line-height: 1.75;
  }
</style>
