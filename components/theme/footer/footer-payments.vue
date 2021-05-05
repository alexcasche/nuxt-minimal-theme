<template>
  <ul class="footer-payments">
    <li class="footer-payment__item"
      v-for="payment in payments"
      :key="payment"
    >
      <base-svg class="footer-payment__icon"
        :name="payment"
      />
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
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
  .footer-payments {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  .footer-payments__icon {
    height: 22px;
  }
</style>
