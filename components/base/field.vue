<template>
  <div class="field">
    <label class="field__label"
      v-if="label"
    >
      <span class="field__label-text"
        v-html="label"
      />
      <slot />
    </label>
    <slot v-else />
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
  .field__label-text {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: capitalize;
  }
</style>
