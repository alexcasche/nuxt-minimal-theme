<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__top">
      </div>
      <div class="footer__bottom">
        <div class="footer__copyright">
          Copyright © {{year}},
          <a
            class="footer__copyright-link"
            href="https://google.com"
          >
            MDK Fashion.
          </a>
          <a
            class="footer__copyright-link"
            href="https://nacelle.com"
          >
            Website Powered by Nacelle.
          </a>
        </div>
        <ul class="footer__payments">
          <li
            v-for="payment in payments"
            class="footer__payment-item"
            :key="payment"
          >
            <base-svg
              class="footer__payment-icon"
              :name="payment"
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'themeFooter',
  computed: {
    year () {
      const date = new Date()
      return date.getFullYear()
    },
    payments () {
      return [
        'visa',
        'mastercard',
        'amex',
        'paypal',
        'diners',
        'discover'
      ]
    }
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
.footer__copyright {
  margin-bottom: 10px;
  font-size: 1.4rem;
}
.footer__copyright-link:hover {
  color: $color-secondary;
}
.footer__payments {
  display: flex;
  justify-content: center;
  gap: 15px;
}
.footer__payments-icon {
  height: 22px;
}
</style>
