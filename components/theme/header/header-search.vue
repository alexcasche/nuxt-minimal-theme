<template>
  <form class="header-search"
    @submit.prevent="handleSubmit"
  >
    <button class="header-search__button">
      <base-svg class="header-search__svg"
        name="search"
      />
    </button>
    <base-input class="header-search__input" />
  </form>
</template>

<script>
export default {
  name: 'themeHeaderSearch',
  methods: {
    handleSubmit() {

    }
  }
}
</script>

<style lang="scss">
.header-search {
  position: relative;
}
.header-search__button {
  @include unset-button;
}
</style>
