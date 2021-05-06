<template>
  <li :class="['accordion-item',
    visible ? 'is-open' : null
  ]">
    <div class="accordion-item__trigger"
      @click="open"
    >
      <slot name="trigger" />
    </div>
    <transition name="accordion-item"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion-item__content"
        v-show="visible"
      >
        <slot name="content" />
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'baseAccordionItem',
  data: () => ({
    index: null
  }),
  computed: {
    accordion() {
      return this.$parent
    },
    visible() {
      return this.index == this.accordion.active
    }
  },
  methods: {
    open() {
      if(this.visible) {
        this.accordion.active = null
      } else {
        this.accordion.active = this.index
      }
    },
    start(el) {
      el.style.height = `${el.scrollHeight}px`
    },
    end(el) {
      el.style.height = ''
    }
  },
  created() {
    if(process.browser && this.accordion) {
      this.index = this.accordion.count++
    }
  }
}
</script>

<style lang="scss">
  .accordion-item {
    position: relative;
  }
  .accordion-item__trigger {
    cursor: pointer;
    user-select: none;
  }
  .accordion-item-enter-active,
  .accordion-item-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
  }

  .accordion-item-enter,
  .accordion-item-leave-to {
    height: 0 !important;
    opacity: 0;
  }
</style>
