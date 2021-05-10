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
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'cartItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations('cart', ['CART_REMOVE_ITEMS']),
    handleRemove() {
      return this.CART_REMOVE_ITEMS([{ id: this.item.id }])
    }
  }
}
</script>

<style lang="scss">
  .cart-item {
    display: flex;
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
    padding-left: 30px;
  }
  .cart-item__title {
    font-size: 1.7rem;
    font-weight: 700;
  }
  .cart-item__quantity {
    font-size: 1.5rem;
  }
</style>
