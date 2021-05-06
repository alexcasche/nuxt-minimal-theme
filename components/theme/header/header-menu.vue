<template>
  <base-collapse class="header-menu select-none"
    :visible="visible"
  >
    <nav class="header-menu__items">
      <div class="header-menu__item"
        v-for="item in items"
        :key="item.text"
      >
        <base-a class="header-menu__link"
          v-if="!item.links"
          :href="item.url"
          v-html="item.text"
        />
        <base-accordion class="header-menu__accordion"
          v-else
        >
          <base-accordion-item class="header-menu__accordion-item">
            <div class="header-menu__trigger"
              slot="trigger"
            >
              <span class="header-menu__trigger-text"
                v-html="item.text"
              />
              <base-svg class="header-menu__trigger-icon is-plus"
                :name="'plus'"
              />
              <base-svg class="header-menu__trigger-icon is-minus"
                :name="'minus'"
              />
            </div>
            <div class="header-menu__sub-items"
              slot="content"
            >
              <base-a class="header-menu__sub-item"
                v-for="link in item.links"
                :key="link.text"
                :href="link.url"
                v-html="link.text"
              />
            </div>
          </base-accordion-item>
        </base-accordion>
      </div>
      <div class="header-menu__item">
        <base-a class="header-menu__link"
          href="/account/login"
          v-html="'Log in'"
        />
      </div>
      <div class="header-menu__item">
        <base-a class="header-menu__link"
          href="/account/register"
          v-html="'Create account'"
        />
      </div>
    </nav>
    <theme-header-search class="header-menu__search" />
  </base-collapse>
</template>

<script>
import themeHeaderSearch from './header-search'

export default {
  name: 'themeHeaderMenu',
  components: {
    themeHeaderSearch
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [
      { text: 'Home', url: '/' },
      { text: 'Womens', links: [
        { text: 'All', url: '/collections/womens' },
        { text: 'Jewelry', url: '/collections/womens-jewelry' },
        { text: 'Shoes', url: '/collections/womens-shoes' },
        { text: 'Tops', url: '/collections/womens-tops' }
      ]},
      { text: 'Mens', links: [
        { text: 'All', url: '/collections/mens' },
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
  .header-menu__items {
    display: flex;
    flex-direction: column;
  }
  .header-menu__item {
    display: flex;
  }
  .header-menu__link,
  .header-menu__trigger,
  .header-menu__sub-item,
  .header-menu__search {
    width: 100%;;
    padding: 12px 15px;
    border-top: 1px solid rgba($color-white, 20%);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  .header-menu__accordion {
    width: 100%;
  }
  .header-menu__trigger {
    display: flex;
    align-items: center;
  }
  .header-menu__trigger-icon {
    height: 12px;
    margin-left: 8px;
    .header-menu__accordion-item.is-open &.is-plus {
      display: none;
    }
    .header-menu__accordion-item:not(.is-open) &.is-minus {
      display: none;
    }
  }
  .header-menu__sub-items {
    display: flex;
    flex-direction: column;
    background-color: $color-white;
  }
  .header-menu__sub-item {
    border-top: 1px solid rgba($color-black, 20%);
    color: $color-black;
    text-transform: capitalize;
    &:hover {
      color: $color-primary;
    }
  }
</style>
