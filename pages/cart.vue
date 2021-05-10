<template>
  <main class="cart-page page">
    <div class="cart-page__container container">
      <h1 class="cart-page__heading"
        v-html="'Your Cart'"
      />
      <client-only>
        <div class="cart-page__content"
          v-if="cartItems.length > 0"
        >
          <div class="cart-page__header hide-medium-down">
            <div class="cart-page__header-label"
              v-html="'Price'"
            />
            <div class="cart-page__header-label"
              v-html="'Quantity'"
            />
            <div class="cart-page__header-label"
              v-html="'Total'"
            />
          </div>
          <div class="cart-page__items">
            <cart-item class="cart-page__item"
              v-for="cartItem in cartItems"
              :key="cartItem.id"
              :item="cartItem"
            />
          </div>
          <div class="cart-page__footer">
          </div>
        </div>
      </client-only>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import cartItem from '~/components/cart/cart-item'

export default {
  name: 'pageCart',
  components: {
    cartItem
  },
  computed: {
    ...mapGetters('cart', ['cartItems'])
  }
}
</script>

<style lang="scss">
  .cart-page__header {
    display: flex;
    justify-content: flex-end;
    width: 50%;
    margin-left: auto;
  }
  .cart-page__header-label {
    width: 25%;
    padding-left: 10px;
    text-align: right;
    color: $color-black;
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: capitalize;
    &:first-child { width: 50%; }
  }
</style>
