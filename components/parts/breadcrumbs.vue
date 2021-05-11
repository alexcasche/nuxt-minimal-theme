<template>
  <nav class="breadcrumbs"
    v-if="text && links"
  >
    <div class="breadcrumbs__previous"
      v-for="link in links"
      :key="link.url"
    >
      <base-a class="breadcrumbs__link"
        :href="link.url"
        v-html="link.text"
      />
      <span class="breadcrumbs__caret"
        v-html="'›'"
      />
    </div>
    <span class="breadcrumbs__text"
      v-html="text"
    />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'partBreadcrumbs',
  computed: {
    ...mapGetters('events', ['eventsHistory']),
    currentRoute() {
      const route = this.eventsHistory[this.eventsHistory.length - 1]
      if(route) return { ...route, type: this.getType(route) }
    },
    previousRoute() {
      const route = this.eventsHistory[this.eventsHistory.length - 2]
      if(route) return { ...route, type: this.getType(route) }
    },
    text() {
      if(this.currentRoute) {
        return this.getText(this.currentRoute)
      }
    },
    links() {
      if(this.currentRoute) {
        let links = [{ text: 'Home', url: '/' }]
        if(this.previousRoute) {
          const currentType = this.currentRoute.type
          const previousType = this.previousRoute.type
          if(currentType === 'product' && previousType === 'products') {
            links.push({ text: 'Products', url: '/products' })
          }
          if(currentType === 'product' && previousType === 'collection') {
            links.push({ text: this.getText(this.previousRoute), url: this.previousRoute.path })
          }
        }
        return links
      }
    }
  },
  methods: {
    getType(route) {
      if(route) {
        if(route.path === '/products' || '/products/') return 'products'
        if(route.path.startsWith('/products')) return 'product'
        if(route.path.startsWith('/collections')) return 'collection'
        if(route.path.startsWith('/blog')) return 'blog'
        return 'page'
      }
    },
    getText(route) {
      let text = route.path.replace(/\/$/, '')
      return text.substring(text.lastIndexOf('/') + 1).replace(/\-/g, ' ')
    }
  }
}
</script>

<style lang="scss">
  .breadcrumbs {
    display: flex;
    margin-bottom: 30px;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .breadcrumbs__link {
    &:hover {
      color: $color-primary;
    }
  }
  .breadcrumbs__caret {
    margin: 0 10px 0 7px;
  }
</style>
