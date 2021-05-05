<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__top">
      </div>
      <div class="footer__bottom">
        <footer-legal />
        <footer-payments />
      </div>
    </div>
  </footer>
</template>

<script>
import footerLegal from './footer-legal'
import footerPayments from './footer-payments'

export default {
  name: 'themeFooter',
  components: {
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
.footer__bottom {
  text-align: center;
}
</style>
