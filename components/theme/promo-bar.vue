<template>
  <header class="promo-bar">
    <div class="promo-bar__container container">
      <div class="promo-bar__message">
        50% on all women's shoes for a limited time!
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.promo-bar {
  background-color: $color-primary;
  color: white;
  font-size: 1.4rem;
  font-weight: 300;
}
.promo-bar__container {
  display: flex;
  gap: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
