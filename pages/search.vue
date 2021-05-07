<template>
  <main class="search-page page">
    <div class="search-page__container container">
       <h2 class="search-page__heading"
        v-html="heading"
      />
      <form class="search-page__form"
        @submit.prevent="handleSubmit"
      >
        <base-input class="search-page__input"
          v-model="formModel.query"
          required
          pattern=".*\S+.*"
          type="text"
          placeholder="Search"
          title="Search field cannot be empty"
        />
        <base-button class="search-page__button"
          role="primary"
        >
          <base-svg class="search-page__svg"
            name="search"
          />
        </base-button>
      </form>
      <product-grid class="search-page__grid"
        :products="productsCatalog"
      />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { searchProductsByQuery } from '~/assets/scripts/utils'

import productGrid from '~/components/product/product-grid'

export default {
  name: 'pageSearch',
  components: {
    productGrid
  },
  data: () => ({
    formModel: {
      query: ''
    }
  }),
  computed: {
    ...mapGetters('products', ['productsCatalog']),
    query() {
      if(!this._stringEmpty({ string: this.$route.query.q })) {
        return this.$route.query.q
      }
    },
    results() {
      if(this.query) {
        return searchProductsByQuery({ store: this.$store, query: this.query })
      }
    },
    heading() {
      if(!this.query) return 'Search for products on our site'
      if(!this.results) return `Your search for "${this.query}" did not yield any results.`
      return `Your search for "${this.query}" revealed the following:`
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
  .search-page__heading {
    margin-bottom: 30px;
  }
  .search-page__form {
    max-width: 500px;
    display: flex;
  }
  .search-page__input {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  .search-page__button {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
  .search-page__grid {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid rgba(black, 20%);
  }
</style>
