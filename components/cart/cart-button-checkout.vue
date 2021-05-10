<template>
  <base-button class="cart-button-checkout"
    role="primary"
    v-html="'Checkout'"
    @click="handleCheckout"
  />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'cartButtonCheckout',
  methods: {
    ...mapActions('cart', ['cartCheckout']),
    async handleCheckout() {
      await this.cartCheckout()
    }
  }
}
</script>

<style lang="scss">

</style>
