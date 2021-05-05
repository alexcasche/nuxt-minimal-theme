<template>
  <div class="footer-social">
    <h4 class="footer-social__heading"
      v-html="'Follow Us'"
    />
    <nav class="footer-social__links">
      <base-a class="footer-social__link"
        v-for="link in links"
        :key="link.name"
        :href="link.url"
      >
        <base-svg class="footer-social__svg"
          :name="link.name"
        />
      </base-a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'themeFooterSocial',
  data: () => ({
    links: [
      { name: 'twitter', url: 'https://twitter.com' },
      { name: 'facebook', url: 'https://facebook.com' },
      { name: 'pinterest', url: 'https://pinterest.com' },
      { name: 'instagram', url: 'https://instagram.com' },
      { name: 'snapchat', url: 'https://snapchat.com' },
    ]
  })
}
</script>

<style lang="scss">
  .footer-social {
    display: flex;
    flex-direction: column;
    @include media-small-down {
      text-align: center;
    }
  }
  .footer-social__links {
    display: flex;
    flex-wrap: wrap;
  }
  .footer-social__link {
    display: inline-flex;
    padding: 5px;
  }
  .footer-social__link:hover {
    color: darken($color-black, 5%);
  }
  .footer-social__svg {
    height: 25px;
  }
</style>
