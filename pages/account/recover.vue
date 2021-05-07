<template>
  <main class="recover-page page">
    <div class="recover-page__container container-smallest">
      <h1 class="recover-page__heading"
        v-html="'Reset Password'"
      />
      <p class="recover-page__text"
        v-html="'We will send you an email to reset your password.'"
      >
      <form class="recover-page__form"
        @submit.prevent="handleSubmit"
      >
        <base-input class="recover-page__input"
          v-model="formModel.email"
          required
          type="email"
          placeholder="Email*"
          title="Email field must be valid"
        />
        <div class="recover-page__actions">
          <base-button class="recover-page__button"
            role="primary"
            v-html="'Send Reset'"
          />
          <base-a class="recover-page__link"
            role="primary"
            href="/account/login"
            v-html="'Cancel'"
          />
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'pageAccountRecover',
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
  .recover-page__text {
    margin-bottom: 30px;
  }
  .recover-page__input,
  .recover-page__text-area {
    margin-bottom: 20px;
  }
  .recover-page__actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  .recover-page__link {
    font-size: 1.6rem;
  }
</style>
