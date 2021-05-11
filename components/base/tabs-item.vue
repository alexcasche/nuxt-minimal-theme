<template>
  <div class="tabs-item">
    <div class="tabs-item"
      v-show="visible"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'baseTabsItem',
  props: {
    title: {
      type: String,
      requide: true
    }
  },
  data: () => ({
    index: null
  }),
  computed: {
    tabs() {
      return this.$parent
    },
    visible() {
      return this.index === this.tabs.active
    }
  },
  created() {
    if(process.browser && this.tabs) {
      this.index = this.tabs.count++
    }
  }
}
</script>

<style lang="scss">

</style>
