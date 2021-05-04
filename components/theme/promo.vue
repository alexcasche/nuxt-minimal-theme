<template>
  <header class="promo">
    <div class="promo__container container">
      <div class="promo__message">
        50% on all women's shoes for a limited time!
      </div>
      <nav class="promo__account">
        <nuxt-link
          class="promo__account-link"
          to="/account/login"
        >
          Log in
        </nuxt-link>
        <span class="promo__account-text">
          or
        </span>
        <nuxt-link
          class="promo__account-link"
          to="/account/register"
        >
          Create account
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'themePromo'
}
</script>

<style lang="scss">
.promo {
  background-color: $color-primary;
  color: white;
  font-size: 1.4rem;
  font-weight: 300;
}
.promo__container {
  display: flex;
  gap: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.promo__message {
  flex-grow: 1;
}
.promo__account {
  display: flex;
  gap: 6px;
}
</style>
