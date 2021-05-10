<template>
  <input class="quantity"
    type="number"
    @input="e => $emit('input', e.target.value)"
  />
</template>

<script>
export default {
  name: 'baseQuantity'
}
</script>

<style lang="scss">
  .quantity {
    @include unset-input;
    width: 100%;
    max-width: 100%;
    padding: 0.5em 0.75em;
    background-color: $color-white;
    border: 1px solid rgba($color-black, 10%);
    border-radius: 0.375em;
    box-shadow: inset 0 0.075rem 0.125em rgba($color-black, 5%);
    color: $color-black;
    font-size: 1.7rem;
    font-family: $font-body;
    &:hover {
      border-color: rgba($color-black, 15%)
    }
    &:focus {
      border-color: $color-focus;
      box-shadow: 0 0 0 0.125em rgba($color-focus, 25%);
    }
    &::placeholder {
      color: rgba($color-black, 75%);
    }
  }
</style>
