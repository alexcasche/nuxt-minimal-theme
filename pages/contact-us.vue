<template>
  <main class="contact-page page">
    <div class="contact-page__container container-smallest">
      <h1 class="contact-page__heading"
        v-html="'Contact Us'"
      />
      <form class="contact-page__form"
        @submit.prevent="handleSubmit"
      >
        <base-input class="contact-page__input"
          v-model="formModel.name"
          required
          pattern=".*\S+.*"
          type="text"
          placeholder="Name*"
          title="Name field cannot be empty"
        />
        <base-input class="contact-page__input"
          v-model="formModel.email"
          required
          type="email"
          placeholder="Email*"
          title="Email field must be valid"
        />
        <base-input class="contact-page__input"
          v-model="formModel.phone"
          required
          pattern=".*\S+.*"
          type="text"
          placeholder="Phone Number*"
          title="Phone field cannot be empty"
        />
        <base-textarea class="contact-page__text-area"
          v-model="formModel.message"
          required
          pattern=".*\S+.*"
          row="10"
          placeholder="Message*"
          title="Message field cannot be empty"
        />
        <base-button class="contact-page__button"
          role="primary"
          v-html="'Send'"
        />
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'pageContactUs',
  data: () => ({
    formModel: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }),
  methods: {
    handleSubmit() {
      if(process.browser) {
        alert(`Form submitted with:
          \nName: ${this.formModel.name}
          \nEmail: ${this.formModel.email}
          \nPhone: ${this.formModel.phone}
          \nMessage: ${this.formModel.message}
        `)
      }
    }
  }
}
</script>

<style lang="scss">
  .contact-page__input,
  .contact-page__text-area {
    margin-bottom: 20px;
  }
  .contact-page__button {
    margin-left: auto;
    float: right;
  }
</style>
