<template>
  <div :class="['collapse',
    visible ? 'is-open' : null
  ]">
    <transition name="collapse"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="collapse__content"
        v-show="visible"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'baseCollapse',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    start(el) {
      el.style.height = `${el.scrollHeight}px`
    },
    end(el) {
      el.style.height = ''
    }
  }
}
</script>

<style lang="scss">
  .collapse {
    position: relative;
  }
  .collapse-enter-active,
  .collapse-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
  }

  .collapse-enter,
  .collapse-leave-to {
    height: 0 !important;
    opacity: 0;
  }
</style>
