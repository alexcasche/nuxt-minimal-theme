<template>
  <select class="select"
    v-if="options"
    @change="e => $emit('input', e.target.value)"
  >
    <option v-for="(option, index) in options"
      :key="`option-${index}`"
      :value="typeof option === 'object' ? option.value : option"
      :selected="option.value === $attrs.value || option === $attrs.value"
      v-html="typeof option === 'object' ? option.text : option"
    />
  </select>
</template>

<script>
export default {
  name: 'baseSelect',
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .select {
    @include unset-input;
    width: 100%;
    max-width: 100%;
    padding: 0.5em 1.75em 0.5em 0.75em;
    background-color: $color-white;
    background-image: url('/images/select.svg');
    background-repeat: no-repeat;
    background-position: right 10px center;
    border: 1px solid rgba($color-black, 10%);
    border-radius: 0.375em;
    box-shadow: inset 0 0.075rem 0.125em rgba($color-black, 5%);
    color: $color-black;
    font-size: 1.7rem;
    font-family: $font-body;
    cursor: pointer;
    &:hover {
      border-color: rgba($color-black, 15%)
    }
    &:focus {
      border-color: $color-focus;
      box-shadow: 0 0 0 0.125em rgba($color-focus, 25%);
    }
  }
</style>
