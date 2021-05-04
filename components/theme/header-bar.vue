<template>
  <header class="header-bar">
    <div class="header-bar__container container">
      <div class="header-bar__message">
        50% on all women's shoes for a limited time!
      </div>
      <nav class="header-bar__account">
        <nuxt-link
          class="header-bar__account-link"
          to="/account/login"
        >
          Log in
        </nuxt-link>
        <span class="header-bar__account-text">
          or
        </span>
        <nuxt-link
          class="promo__account-link"
          to="/account/register"
        >
          Create account
        </nuxt-link>
      </nav>
      <nuxt-link
        class="header-bar__cart"
        to="/cart"
      >
        <base-svg
          class="header-bar__cart-icon"
          name="cart"
        />
        <span class="header-bar__cart-text">
          {{cart}}
        </span>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'themeHeaderBar',
  computed: {
    cart() {
      return 'Cart'
    }
  }
}
</script>

<style lang="scss">
.header-bar {
  background-color: $color-primary;
  padding: 10px 0;
  color: white;
  font-size: 1.4rem;
  font-weight: 300;
}
.header-bar__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
.header-bar__message {
  flex-grow: 1;
}
.header-bar__account {
  display: flex;
  gap: 6px;
}
.header-bar__cart {
  display: flex;
  align-items: center;
  gap: 4px;
}
.header-bar__cart-icon {
  height: 16px;
}
</style>
