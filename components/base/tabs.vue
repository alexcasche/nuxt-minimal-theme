<template>
  <div class="tabs select-none">
    <ul class="tabs-triggers">
      <li :class="['tabs-trigger',
          index === active ? 'is-open' : null
        ]"
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="active = index"
        v-html="tab.title"
      />
    </ul>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'baseTabs',
  data: () => ({
    count: 0,
    active: 0,
    tabs: false
  }),
  created() {
    if(process.browser) {
      this.tabs = this.$children
    }
  }
}
</script>

<style lang="scss">
  .tabs-triggers {
    display: flex;
  }
  .tabs-trigger {
    padding: 10px 20px;
    border-top: 1px solid rgba($color-black, 20%);
    border-bottom: 1px solid rgba($color-black, 20%);
    font-size: 1.8rem;
    cursor: pointer;
    &:hover {
      color: $color-primary;
    }
    &:not(:last-child) {
      border-right:  1px solid rgba($color-black, 20%);
    }
    &.is-open {
      font-weight: 700;
      pointer-events: none;
    }
  }
</style>
