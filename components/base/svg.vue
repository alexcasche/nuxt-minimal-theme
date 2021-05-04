<template>
  <span
    class="c-svg"
    v-if="svg"
    v-html="svg"
  />
</template>

<script>
export default {
  name: 'baseSvg',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data: () => ({ svg: false }),
  created () {
    if(this.name) {
      this.svg = require(`~/assets/svgs/${this.name}`).default
    }
  }
}
</script>

<style lang="scss">
  .svg {
    display: inline-flex;
    pointer-events: none;
    svg {
      width: inherit;
      height: inherit;
    }
  }
</style>
