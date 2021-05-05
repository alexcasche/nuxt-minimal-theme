<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__top">
        <footer-navigation />
        <footer-featured />
        <footer-social />
        <footer-newsletter />
      </div>
      <div class="footer__bottom">
        <footer-legal />
        <footer-payments />
      </div>
    </div>
  </footer>
</template>

<script>
import footerNavigation from './footer-navigation'
import footerFeatured from './footer-featured'
import footerSocial from './footer-social'
import footerNewsletter from './footer-newsletter'
import footerLegal from './footer-legal'
import footerPayments from './footer-payments'

export default {
  name: 'themeFooter',
  components: {
    footerNavigation,
    footerFeatured,
    footerSocial,
    footerNewsletter,
    footerPayments,
    footerLegal
  }
}
</script>

<style lang="scss">
.footer {
  padding: 30px 0;
}
.footer__container {
  padding-top: 30px;
  border-top: 1px solid rgba(black, 20%);
}
.footer__top {
  display: grid;
  gap: 30px;
  margin-bottom: 30px;
  @include media-small-up {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @include media-medium-up {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
.footer__bottom {
  text-align: center;
}
</style>
