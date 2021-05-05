<template>
  <header class="header-bar">
    <div class="header-bar__container container">
      <div class="header-bar__message"
        v-html="'50% on all women\'s shoes for a limited time!'"
      />
      <div class="header-bar__actions">
        <button class="header-bar__menu">
        </button>
        <nav class="header-bar__account hide-medium-down">
          <nuxt-link class="header-bar__account-link"
            to="/account/login"
            v-html="'Log in'"
          />
          <span class="header-bar__account-text"
            v-html="'or'"
          />
          <nuxt-link class="promo__account-link"
            to="/account/register"
            v-html="'Create account'"
          />
        </nav>
        <nuxt-link class="header-bar__cart"
          to="/cart"
        >
          <base-svg class="header-bar__cart-icon"
            name="cart"
          />
          <span class="header-bar__cart-text"
            v-html="cart"
          />
        </nuxt-link>
        <theme-header-search class="hide-medium-down" />
      </div>
    </div>
  </header>
</template>

<script>
import themeHeaderSearch from './header-search'

export default {
  name: 'themeHeaderBar',
  components: { themeHeaderSearch },
  computed: {
    cart() {
      return 'Cart'
    }
  }
}
</script>

<style lang="scss">
.header-bar {
  background-color: $color-black;
  padding: 10px 0;
  color: $color-white;
  font-size: 1.4rem;
  font-weight: 300;
}
.header-bar__container {
  display: flex;
  flex-direction: column;
  gap: 14px;
  @include media-medium-up {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
}
.header-bar__message {
  flex-grow: 1;
}
.header-bar__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.header-bar__account {
  display: flex;
  gap: 6px;
  white-space: nowrap;
}
.header-bar__cart {
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
.header-bar__cart-icon {
  height: 16px;
}
</style>
