<template>
  <button :class="['button',
      role ? `is-${role}` : null,
      design ? `is-${design}` : null
    ]"
    @click="$emit('click')"
  >
    {{ text }}
    <slot />
  </button>
</template>

<script>
export default {
  name: 'baseButton',
  props: {
    role: {
      type: [String, null],
      required: false
    },
    design: {
      type: [String, null],
      required: false
    },
    text: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss">
  .button {
    @include unset-button;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 1em;
    text-align: center;
    border-radius: 0.375em;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 1.8rem;
    line-height: 1.5;
    font-family: $font-body;
    user-select: none;
  }
  .button.is-black {
    background-color: $color-black;
    color: $color-white;
    &:hover {
      background-color: darken($color-black, 5%);
    }
    &:focus {
      box-shadow: 0 0 0 0.125em rgba($color-black, 25%);
    }
  }
  .button.is-black.is-hollow {
    background-color: transparent;
    border-color: $color-black;
    color: $color-black;
    &:hover {
      border-color: darken($color-black, 25%);
      color: darken($color-black, 25%);
    }
    &:focus {
      box-shadow: 0 0 0 0.125em rgba($color-black, 25%);
    }
  }
  .button.is-primary {
    background-color: $color-primary;
    color: $color-white;
    &:hover {
      background-color: darken($color-primary, 5%);
    }
    &:focus {
      box-shadow: 0 0 0 0.125em rgba($color-primary, 25%);
    }
  }
  .button.is-primary.is-hollow {
    background-color: transparent;
    border-color: $color-primary;
    color: $color-primary;
    &:hover {
       border-color: lighten($color-primary, 10%);
      color: lighten($color-primary, 10%);
    }
    &:focus {
      box-shadow: 0 0 0 0.125em rgba($color-primary, 25%);
    }
  }
</style>
