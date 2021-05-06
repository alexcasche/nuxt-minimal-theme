<template>
  <div class="error page">
    <div class="error__container container-narrow">
      <h1 class="error__heading"
        v-html="'404'"
      />
      <p class="error__text"
        v-html="'The page does not exist.'"
      />
      <base-a class="error__button button is-primary"
        href="/"
        v-html="'Go Back Home'"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .error__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .error__heading {
    margin: 10px 0 0;
    font-size: 8.4rem;
    line-height: 1.25;
    font-weight: 500;
  }
  .error__text {
    font-size: 2.4rem;
    margin-bottom: 30px;
  }
</style>
