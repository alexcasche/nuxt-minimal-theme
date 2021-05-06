<template>
  <nav class="header-navigation hide-medium-down">
    <div class="header-navigation__item"
      v-for="item in items"
      :key="item.text"
    >
      <base-a :class="['header-navigation__link',
          item.links ? 'is-list' : null
        ]"
        :href="item.url"
      >
        <span class="header-navigation__link-text"
          v-html="item.text"
        />
        <base-svg class="header-navigation__link-icon"
          v-if="item.links"
          name="chevron"
        />
      </base-a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'themeHeaderNavigation',
  data: () => ({
    items: [
      { text: 'Home', url: '/' },
      { text: 'Womens', url: '/collections/womens', links: [
        { text: 'Jewelry', url: '/collections/womens-jewelry' },
        { text: 'Shoes', url: '/collections/womens-shoes' },
        { text: 'Tops', url: '/collections/womens-tops' }
      ]},
      { text: 'Mens', url: '/collections/mens', links: [
        { text: 'Shirts', url: '/collections/mens-shirts' },
        { text: 'Knits', url: '/collections/mens-knits' },
        { text: 'Outerwear', url: '/collections/mens-outerwear' }
      ]},
      { text: 'Accessories', url: '/collections/accessories' }
    ]
  })
}
</script>

<style lang="scss">
  .header-navigation {
    display: flex;
    gap: 10px;
  }
  .header-navigation__link {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    font-size: 1.8rem;
    text-transform: uppercase;
    &:hover {
      color: $color-primary;
    }
    &.nuxt-link-exact-active {
      font-weight: 700;
    }
    &.nuxt-link-exact-active:hover {
      color: $color-black;
    }
    &.is-list {
      pointer-events: auto !important;
    }
    &.is-list:hover {
      color: $color-primary;
    }
  }
  .header-navigation__link-icon {
    height: 14px;
    margin-left: 6px;
  }
</style>
