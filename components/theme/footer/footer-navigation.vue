<template>
  <nav class="footer-navigaiton">
    <h4 class="footer-navigation__heading"
      v-html="'Links'"
    />
    <base-a class="footer-navigation__link"
      v-for="link in links"
      :key="link.text"
      :href="link.url"
      v-html="link.text"
    />
  </nav>
</template>

<script>
export default {
  name: 'themeFooterNavigation',
  data: () => ({
    links: [
      { text: 'Search', url: '/search' },
      { text: 'News', url: '/news' },
      { text: 'About Us', url: '/about-us' },
      { text: 'Contact Us', url: '/contact-us' },
      { text: 'Return Policy', url: '/return-policy' }
    ]
  })
}
</script>

<style lang="scss">
  .footer-navigaiton {
    display: flex;
    flex-direction: column;
    @include media-small-down {
      text-align: center;
    }
  }
  .footer-navigation__link {
    font-size: 1.4rem;
    padding: 3px 0;
    &:hover {
      color: $color-primary;
    }
  }
</style>
