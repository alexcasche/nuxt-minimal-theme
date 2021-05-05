<template>
  <div class="footer-newsletter">
    <h4 class="footer-newsletter__heading"
      v-html="'Newsletter'"
    />
    <p class="footer-newsletter__text"
      v-html="'Sign up for the latest news, offers and styles'"
    />
    <form class="footer-newsletter__form"
      @submit.prevent="handleSubmit"
    >
      <base-input class="footer-newsletter__input"
        v-model="formModel.email"
        required
        type="email"
        placeholder="Your email*"
        title="Email field must be valid"
      />
      <base-button class="footer-newsletter__button"
        role="primary"
        v-html="'Subscribe'"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'themeFooterNewsletter',
  data: () => ({
    formModel: {
      email: ''
    }
  }),
  methods: {
    handleSubmit() {
      if(process.browser) {
        alert(`Form submitted with:
          \nEmail: ${this.formModel.email}
        `)
      }
    }
  }
}
</script>

<style lang="scss">
  .footer-newsletter {
    display: flex;
    flex-direction: column;
    @include media-small-down {
      text-align: center;
    }
  }
  .footer-newsletter__text {
    margin-bottom: 14px;
    font-size: 1.4rem;
    line-height: 1.75;
  }
  .footer-newsletter__form {
    @include media-small-down {
      display: flex;
    }
  }
  .footer-newsletter__input {
    font-size: 1.4rem !important;
    @include media-small-down {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
     @include media-small-up {
       margin-bottom: 14px;
     }
  }
  .footer-newsletter__button {
    font-size: 1.5rem !important;
    @include media-small-down {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }
  }
</style>
