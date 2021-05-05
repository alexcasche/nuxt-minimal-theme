<template>
  <main class="contact-page page">
    <div class="contact-page__container container-narrow">
      <h1 class="contact-page__heading"
        v-html="'Contact Us'"
      />
      <form class="contact-page__form"
        @submit.prevent="handleSubmit"
      >
        <base-input class="contact-page__input"
          v-model="formModel.name"
          required
          type="text"
          placeholder="Name*"
        />
        <base-input class="contact-page__input"
          v-model="formModel.email"
          required
          type="email"
          placeholder="Email*"
        />
        <base-input class="contact-page__input"
          v-model="formModel.phone"
          required
          type="text"
          placeholder="Phone Number*"
        />
        <base-textarea class="contact-page__text-area"
          v-model="formModel.message"
          required
          row="10"
          placeholder="Message*"
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
