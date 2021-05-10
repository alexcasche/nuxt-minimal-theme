<template>
  <div class="cart-item"
    v-if="item"
  >
    <div class="cart-item__main">
      <base-a class="cart-item__media"
        :href="`/products/${item.handle}`"
      >
        <base-img class="cart-item__image"
          v-if="item.image"
          :src="item.image.src"
          :alt="item.image.alt"
          :widths="[50, 150, 300]"
        />
      </base-a>
      <div class="cart-item__details">
        <base-a class="cart-item__title"
          role="primary"
          :href="`/products/${item.handle}`"
          v-html="item.title"
        />
        <span class="cart-item__quantity"
          v-html="item.quantity"
        />
        <base-a class="cart-item__remove"
          role="primary"
          v-html="'Remove'"
          @click="handleRemove"
        />
      </div>
    </div>
    <div class="cart-item__summary">
      <div class="cart-item__summary-value"
        v-html="_formatPrice({ price: item.variant.price })"
      />
      <variant-quantity class="cart-item__summary-value"
        :variant="item.variant"
        :value="item.quantity"
        @input="handleQuantity"
      />
      <div class="cart-item__summary-value"
         v-html="_formatPrice({ price: (item.quantity * item.variant.price) })"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import variantQuantity from '~/components/variant/variant-quantity'

export default {
  name: 'cartItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    variantQuantity
  },
  methods: {
    ...mapMutations('cart', [
      'CART_REMOVE_ITEMS',
      'CART_UPDATE_ITEMS'
    ]),
    handleRemove() {
      return this.CART_REMOVE_ITEMS([{ id: this.item.id }])
    },
    handleQuantity(val) {
      return this.CART_UPDATE_ITEMS([{
        ...this.item, quantity: val
      }])
    }
  }
}
</script>

<style lang="scss">
  .cart-item {
    display: flex;
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid rgba($color-black, 20%);
  }
  .cart-item__main {
    display: flex;
    width: 50%;
  }
  .cart-item__media {
    width: 33%;
    max-width: 200px;
  }
  .cart-item__details {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 30px;
  }
  .cart-item__title {
    font-size: 1.7rem;
    font-weight: 700;
  }
  .cart-item__quantity,
  .cart-item__remove {
    font-size: 1.5rem;
  }
  .cart-item__summary {
    display: flex;
    justify-content: flex-end;
    width: 50%;
    margin-left: auto;
  }
  .cart-item__summary-value {
    width: 25%;
    padding-left: 10px;
    text-align: right;
    color: $color-black;
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: capitalize;
    &:first-child { width: 50%; }
    .field__label-text {
      display: none;
    }
    .variant-quantity__input {
      max-width: 60px;
    }
  }
</style>
