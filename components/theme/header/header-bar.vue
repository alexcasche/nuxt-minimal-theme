<template>
  <header class="header-bar">
    <div class="header-bar__container container">
      <div class="header-bar__message"
        v-html="'50% on all women\'s shoes for a limited time!'"
      />
      <div class="header-bar__actions select-none">
        <button class="header-bar__menu hide-medium-up"
          @click="menuOpen = !menuOpen"
        >
          <base-svg class="header-bar__menu-icon"
            v-show="!menuOpen"
            :name="'menu'"
          />
          <base-svg class="header-bar__menu-icon"
            v-show="menuOpen"
            name="close"
          />
          <span class="header-bar__menu-text"
            v-html="menuOpen ? 'close' : 'menu'"
          />
        </button>
        <nav class="header-bar__account hide-medium-down">
          <base-a class="header-bar__account-link"
            href="/account/login"
            v-html="'Log in'"
          />
          <span class="header-bar__account-text"
            v-html="'or'"
          />
          <base-a class="promo__account-link"
            href="/account/register"
            v-html="'Create account'"
          />
        </nav>
        <base-a class="header-bar__cart"
          href="/cart"
        >
          <base-svg class="header-bar__cart-icon"
            name="cart"
          />
          <span class="header-bar__cart-text"
            v-html="cart"
          />
        </base-a>
        <theme-header-search class="hide-medium-down" />
      </div>
    </div>
    <theme-header-menu class="hide-medium-up"
      :visible="menuOpen"
    />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

import themeHeaderSearch from './header-search'
import themeHeaderMenu from './header-menu'

export default {
  name: 'themeHeaderBar',
  components: {
    themeHeaderSearch,
    themeHeaderMenu
  },
  data: () => ({
    menuOpen: false
  }),
  computed: {
    ...mapGetters('cart', ['cartCount']),
    cart() {
      if(this.cartCount) return `Cart: ${this.cartCount}`
      return 'Cart'
    }
  },
  watch: {
    '$route': function() {
      this.menuOpen = false
    }
  }
}
</script>

<style lang="scss">
.header-bar {
  background-color: $color-black;
  color: $color-white;
  font-size: 1.4rem;
  font-weight: 300;
}
.header-bar__container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
  @include media-medium-up {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
}
.header-bar__message {
  flex-grow: 1;
  @include media-medium-down {
    text-align: center;
  }
}
.header-bar__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.header-bar__menu {
  @include unset-button;
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
  padding: 5px 0;
  color: $color-white;
  text-transform: capitalize;
}
.header-bar__menu-icon {
  height: 18px;
}
.header-bar__account {
  display: flex;
  gap: 6px;
  white-space: nowrap;
}
.header-bar__cart {
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
  color: $color-white;
  text-transform: capitalize;
}
.header-bar__cart-icon {
  height: 16px;
}
</style>
