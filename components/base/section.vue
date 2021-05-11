<template>
  <component class="section"
    v-if="component"
    :is="component"
    :content="content"
  />
</template>

<script>
export default {
  name: 'baseSection',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    component: false
  }),
  created() {
    if(this.content && this.content.type) {
      this.component = require(`~/components/sections/${this.content.type}`).default
    }
  }
}
</script>


