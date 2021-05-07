<template>
  <main class="register-page page">
    <div class="register-page__container container-smallest">
      <h1 class="register-page__heading"
        v-html="'Create Account'"
      />
      <form class="register-page__form"
        @submit.prevent="handleSubmit"
      >
        <base-input class="register-page__input"
          v-model="formModel.firstName"
          required
          pattern=".*\S+.*"
          type="text"
          placeholder="First Name*"
          title="First name field cannot be empty"
        />
        <base-input class="register-page__input"
          v-model="formModel.lastName"
          required
          pattern=".*\S+.*"
          type="text"
          placeholder="Last Name*"
          title="Last name field cannot be empty"
        />
        <base-input class="register-page__input"
          v-model="formModel.email"
          required
          type="email"
          placeholder="Email*"
          title="Email field must be valid"
        />
        <base-input class="register-page__input"
          v-model="formModel.password"
          required
          pattern=".*\S+.*"
          type="password"
          placeholder="Password*"
          title="Password field cannot be empty"
        />
        <div class="register-page__actions">
          <base-button class="register-page__button"
            role="primary"
            v-html="'Create Account'"
          />
          <base-a class="register-page__link"
            role="primary"
            href="/account/login"
            v-html="'Log in'"
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
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    handleSubmit() {
      if(process.browser) {
        alert(`Form submitted with:
          \nFirst Name: ${this.formModel.firstName}
          \nLast Name: ${this.formModel.lastName}
          \nEmail: ${this.formModel.email}
          \nPassword: ${this.formModel.password}
        `)
      }
    }
  }
}
</script>

<style lang="scss">
  .register-page__input,
  .register-page__text-area {
    margin-bottom: 20px;
  }
  .register-page__actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  .register-page__link {
    font-size: 1.6rem;
  }
</style>
