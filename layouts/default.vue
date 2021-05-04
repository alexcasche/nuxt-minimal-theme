<template>
  <div class="layout">
    <theme-promo />
    <theme-header />
    <main class="main">
      <Nuxt />
    </main>
    <theme-footer />
  </div>
</template>

<script>
import themePromo from '~/components/theme/promo'
import themeHeader from '~/components/theme/header'
import themeFooter from '~/components/theme/footer'

export default {
  components: {
    themePromo,
    themeHeader,
    themeFooter
  }
}
</script>

<style lang="scss">
 .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .main {
    flex-grow: 1;
  }
</style>
