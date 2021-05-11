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
      <div class="header-navigation__sub-items"
        v-if="item.links"
      >
        <base-a class="header-navigation__sub-item"
          v-for="link in item.links"
          :key="link.text"
          :href="link.url"
          v-html="link.text"
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'themeHeaderNavigation',
  data: () => ({
    items: [
      { text: 'Home', url: '/' },
      { text: 'Womens', url: '/collections/all', links: [
        { text: 'Jewelry', url: '/collections/all' },
        { text: 'Shoes', url: '/collections/all' },
        { text: 'Tops', url: '/collections/all' }
      ]},
      { text: 'Mens', url: '/collections/all', links: [
        { text: 'Shirts', url: '/collections/all' },
        { text: 'Knits', url: '/collections/all' },
        { text: 'Outerwear', url: '/collections/all' }
      ]},
      { text: 'Accessories', url: '/collections/all' }
    ]
  })
}
</script>

<style lang="scss">
  .header-navigation {
    display: flex;
    gap: 10px;
  }
  .header-navigation__item {
    position: relative;
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
  .header-navigation__sub-items {
    visibility: hidden;
    position: absolute;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    background-color: $color-white;
    border: 1px solid rgba($color-black, 4%);
    border-top: none;
    box-shadow: 0 1px 1px rgba($color-black, 6%);
    .header-navigation__item:hover & {
      visibility: visible;
    }
  }
  .header-navigation__sub-item {
    padding: 5px 15px;
    font-size: 1.6rem;
    text-transform: capitalize;
    &:last-child {
      padding-bottom: 8px;
    }
    &:hover {
      color: $color-primary;
    }
  }
</style>
