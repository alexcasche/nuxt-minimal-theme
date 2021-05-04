<template>
  <div class="layout">
    <theme-header />
    <main class="main">
      <Nuxt />
    </main>
    <theme-footer />
  </div>
</template>

<script>
import themeHeader from '~/components/theme/header'
import themeFooter from '~/components/theme/footer'

export default {
  components: {
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
