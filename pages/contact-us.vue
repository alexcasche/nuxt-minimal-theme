<template>
  <main class="contact-page page">
    <div class="contact-page__container container-narrow">
      <h1 class="contact-page__heading">
        Contact Us
      </h1>
      <form
        @submit.prevent="handleSubmit"
        class="contact-page__form"
      >
        <base-input
          v-model="formModel.name"
          required
          type="text"
          class="contact-page__input"
          placeholder="Name*"
        />
        <base-input
          v-model="formModel.email"
          required
          type="email"
          class="contact-page__input"
          placeholder="Email*"
        />
        <base-input
          v-model="formModel.phone"
          required
          type="text"
          class="contact-page__input"
          placeholder="Phone Number*"
        />
        <base-textarea
          v-model="formModel.message"
          required
          row="10"
          class="contact-page__text-area"
          placeholder="Message*"
        />
        <base-button
          role="primary"
          class="contact-page__button"
        >
          Send
        </base-button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
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
      console.log('Submit Message')
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
