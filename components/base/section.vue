<template>
  <component class="section"
    v-if="component"
    :is="component"
    :section="section"
  />
</template>

<script>
export default {
  name: 'baseSection',
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    component: false
  }),
  created() {
    if(this.section && this.section.type) {
      this.component = require(`~/components/sections/${this.section.type}`).default
    }
  }
}
</script>


