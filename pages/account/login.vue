<template>
  <main class="login-page page">
    <div class="login-page__container container-smallest">
      <h1 class="login-page__heading"
        v-html="'Log In'"
      />
      <form class="login-page__form"
        @submit.prevent="handleSubmit"
      >
        <base-field class="login-page__field">
          <base-input class="login-page__input"
            v-model="formModel.email"
            required
            type="email"
            placeholder="Email*"
            title="Email field must be valid"
          />
        </base-field>
        <base-field class="login-page__field">
          <base-input class="login-page__input"
            v-model="formModel.password"
            required
            pattern=".*\S+.*"
            type="password"
            placeholder="Password*"
            title="Password field cannot be empty"
          />
        </base-field>
        <div class="login-page__actions">
          <base-a class="login-page__link"
            role="primary"
            href="/account/recover"
            v-html="'Forgot your password?'"
          />
          <base-button class="login-page__button"
            role="primary"
            v-html="'Log In'"
          />
          <base-a class="login-page__link"
            role="primary"
            href="/account/register"
            v-html="'Create account'"
          />
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'pageAccountLogin',
  data: () => ({
    formModel: {
      email: '',
      password: ''
    }
  }),
  methods: {
    handleSubmit() {
      if(process.browser) {
        alert(`Form submitted with:
          \nEmail: ${this.formModel.email}
          \nPassword: ${this.formModel.password}
        `)
      }
    }
  }
}
</script>

<style lang="scss">
  .login-page__actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  .login-page__link {
    font-size: 1.6rem;
  }
</style>
