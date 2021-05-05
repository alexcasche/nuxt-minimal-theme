<template>
  <div class="layout">
    <theme-header />
    <Nuxt class="nuxt" />
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
  .nuxt {
    flex-grow: 1;
  }
</style>
