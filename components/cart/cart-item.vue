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
      <div class="cart-item__summary-item">
        <label class="cart-item__summary-label hide-medium-up"
          v-html="'Price'"
        />
        <div class="cart-item__summary-value"
          v-html="_formatPrice({ price: item.variant.price })"
        />
      </div>
      <div class="cart-item__summary-item">
        <label class="cart-item__summary-label hide-medium-up"
          v-html="'Quantity'"
        />
        <variant-quantity class="cart-item__summary-value"
          :variant="item.variant"
          :value="item.quantity"
          @input="handleQuantity"
        />
      </div>
      <div class="cart-item__summary-item">
        <label class="cart-item__summary-label hide-medium-up"
          v-html="'Total'"
        />
        <div class="cart-item__summary-value"
          v-html="_formatPrice({ price: (item.quantity * item.variant.price) })"
        />
      </div>
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
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid rgba($color-black, 20%);
    @include media-medium-up {
      display: flex;
    }
  }
  .cart-item__main {
    display: flex;
    @include media-medium-down {
      margin-bottom: 20px;
    }
    @include media-medium-up {
      width: 50%;
    }
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
    @include media-medium-down {
      justify-content: space-between;
      gap: 20px;
    }
    @include media-medium-up {
      width: 50%;
      justify-content: flex-end;
      margin-left: auto;
    }
  }
  .cart-item__summary-item {
    color: $color-black;
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: capitalize;
    .field__label-text {
      display: none;
    }
    .variant-quantity__input {
      max-width: 60px;
    }
    @include media-medium-down {
      text-align: center;
      &:first-child { text-align: left; }
      &:last-child { text-align: right; }
    }
    @include media-medium-up {
      width: 25%;
      padding-left: 10px;
      text-align: right;
      &:first-child { width: 50%; }
    }
  }
  .cart-item__summary-label {
    display: block;
    margin-bottom: 10px;
    font-size: 1.4rem;
    font-weight: 500;
  }
</style>
