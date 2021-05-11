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
            <div class="cart-page__subtotal">
              <span class="cart-page__subtotal-label"
                v-html="'Subtotal'"
              />
              <strong class="cart-page__subtotal-value"
                v-html="_formatPrice({ price: cartSubtotal })"
              />
            </div>
            <div class="cart-page__disclaimer"
              v-html="'Taxes and shipping calculated at checkout'"
            />
            <div class="cart-page__actions">
              <base-a class="cart-page__button button is-primary is-hollow"
                href="/products"
                v-html="'Continue Shopping'"
              />
              <cart-button-checkout class="cart-page__button" />
            </div>
          </div>
        </div>
      </client-only>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import cartItem from '~/components/cart/cart-item'
import cartButtonCheckout from '~/components/cart/cart-button-checkout'

export default {
  name: 'pageCart',
  components: {
    cartItem,
    cartButtonCheckout
  },
  computed: {
    ...mapGetters('cart', ['cartItems', 'cartSubtotal'])
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
  .cart-page__footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    padding-top: 20px;
    border-top: 1px solid rgba($color-black, 20%);
  }
  .cart-page__subtotal-label,
  .cart-page__subtotal-value {
    font-size: 1.6rem;
  }
  .cart-page__subtotal-value {
    margin-left: 10px;
  }
  .cart-page__disclaimer {
    font-size: 1.5rem;
    font-style: italic;
  }
  .cart-page__actions {
    margin-top: 20px;
  }
</style>
