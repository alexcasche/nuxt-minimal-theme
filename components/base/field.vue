<template>
  <div class="field">
    <label class="field__label"
      v-if="label"
      :name="name"
      v-html="label"
    />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'baseField',
  props: {
    name: {
      type: [String, null],
      required: false
    },
    label: {
      type: [String, null],
      required: false
    }
  }
}
</script>

<style lang="scss">
  .field {
    margin-bottom: 20px;
  }
</style>
