<template>
  <header class="header">
    <theme-header-bar />
    <div class="header__container container">
      Header Logo
    </div>
  </header>
</template>

<script>
import themeHeaderBar from './header-bar'

export default {
  name: 'themeHeader',
  components: { themeHeaderBar }
}
</script>

<style lang="scss">
</style>
