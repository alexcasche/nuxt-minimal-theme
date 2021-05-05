<template>
  <base-accordion-item class="header-menu__accordion">
    <div slot="content">
      Content
    </div>
  </base-accordion-item>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: true
    }
  }
}
</script>
