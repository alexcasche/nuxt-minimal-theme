<template>
  <div class="header-search">
    <form class="header-search__form"
      @submit.prevent="handleSubmit"
    >
      <button class="header-search__button">
        <base-svg class="header-search__svg"
          name="search"
        />
      </button>
      <base-input class="header-search__input"
        v-model="formModel.query"
        required
        pattern=".*\S+.*"
        type="text"
        placeholder="Search"
        title="Search field cannot be empty"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'themeHeaderSearch',
  data: () => ({
    formModel: {
      query: ''
    }
  }),
  computed: {
    query() {
      if(!this._stringEmpty({ string: this.$route.query.q })) {
        return this.$route.query.q
      }
    }
  },
  methods: {
    handleSubmit() {
      if(process.browser) {
        this.$router.push(`/search?q=${this.formModel.query}`)
      }
    }
  },
  mounted() {
    if(this.query) this.formModel.query = this.query
  }
}
</script>

<style lang="scss">
.header-search__form {
  display: flex;
  position: relative;
}
.header-search__button {
  @include unset-button;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  padding: 5px;
  color: rgba($color-black, 90%);
  &:hover {
    color: $color-black;
  }
}
.header-search__svg {
  height: 18px;
}
.header-search__input {
  font-size: 1.5rem !important;
  padding: 5px 5px 5px 28px !important;
}
</style>
