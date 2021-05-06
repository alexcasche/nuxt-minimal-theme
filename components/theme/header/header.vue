<template>
  <header class="header">
    <theme-header-bar />
    <div class="header__container container">
      <div class="header__main">
        <base-a class="header__logo"
          href="/"
        >
          <base-svg class="header__logo-icon"
            name="logo"
          />
        </base-a>
        <theme-header-navigation class="header__navigation" />
      </div>
    </div>
  </header>
</template>

<script>
import themeHeaderBar from './header-bar'
import themeHeaderNavigation from './header-navigation'

export default {
  name: 'themeHeader',
  components: {
    themeHeaderBar,
    themeHeaderNavigation
  }
}
</script>

<style lang="scss">
  .header__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 30px 0;
    border-bottom: 1px solid rgba(black, 20%);
  }
  .header__logo {
    width: 100%;
    max-width: 120px;
    display: flex;
    align-items: center;
  }
  .header__logo-icon {
    width: 100%;
  }
</style>
