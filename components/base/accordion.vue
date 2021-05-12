<template>
  <ul class="accordion">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'baseAccordion',
  props: {
    close: {
      type: [Boolean, null],
      required: false
    }
  },
  data: () => ({
    count: 0,
    active: null
  }),
  watch: {
    close: function(val) {
      if(val) this.active = null
    }
  }
}
</script>
