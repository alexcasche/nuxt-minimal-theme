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
      <client-only>
        <div class="search-page__results"
          v-if="results"
        >
          <div class="search-page__item"
            v-for="product in results"
            :key="product.id"
          >
            <base-a class="search-page__item-media"
              :href="`/products/${product.handle}`"
            >
              <base-img class="search-page__item-image"
                v-if="product.featuredMedia && product.featuredMedia.type === 'image'"
                :src="product.featuredMedia.src"
                :alt="product.featuredMedia.alt"
                :widths="[50, 150, 300, 600]"
              />
            </base-a>
            <div class="search-page__item-details">
              <base-a class="search-page__item-title"
                role="primary"
                :href="`/products/${product.handle}`"
                v-html="product.title"
              />
              <product-prices class="search-page__item-prices"
                :variant="product.variants[0]"
              />
              <p class="search-page__item-description"
                v-html="product.description"
              />
            </div>
          </div>
        </div>
      </client-only>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { searchProductsByQuery } from '~/assets/scripts/utils'

import productPrices from '~/components/product/product-prices'

export default {
  name: 'pageSearch',
  components: {
    productPrices
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
  .search-page__results {
    margin-top: 30px;
  }
  .search-page__item {
    display: flex;
    flex-wrap: nowrap;
    gap: 30px;
    padding: 30px 0;
    border-top: 1px solid rgba(black, 20%);
  }
  .search-page__item-media {
    width: 150px;
    max-width: 50%;
    @include media-medium-up {
      width: 25%;
      max-width: 200px;
    }
  }
  .search-page__item-image {
    width: 100%;
  }
  .search-page__item-details {
    flex-grow: 1;
  }
  .search-page__item-title {
    display: block;
    margin-bottom: 10px;
    color: $color-primary;
    font-size: 2.2rem;
    font-weight: 700;
    &:hover {
      opacity: 0.75;
    }
  }
  .search-page__item-prices {
    margin-bottom: 4px;
    .product-prices__compare,
    .product-prices__default {
      color: $color-black;
      font-weight: 400;
      font-size: 1.7rem;
    }
    .product-prices__default.on-sale {
      font-size: 1.5rem;
    }
  }
  .search-page__item-description {
    font-size: 1.6rem;
  }
</style>
