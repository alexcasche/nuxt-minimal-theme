<template>
  <div class="social-share">
    <a :class="['social-share__button', `is-${action}`]"
      v-for="action in actions"
      :key="action"
      :href="getHref(action)"
      target="_blank"
    >
      <base-svg class="social-share__icon"
        :name="action"
      />
      <span class="social-share__text"
        v-if="text[action]"
        v-html="text[action]"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'partSocialShare',
  props: {
    actions: {
      type: Array,
      default: [
        'facebook',
        'twitter',
        'pinterest',
        'email'
      ]
    },
    title: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    text: {
      facebook: 'Share',
      twitter: 'Tweet',
      pinterest: 'Pin it',
      email: 'Send it'
    }
  }),
  methods: {
    getHref(action) {
      switch(action) {
        case 'facebook':
          return `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&title=${this.title}`
        case 'twitter':
          return `https://twitter.com/intent/tweet?url=${window.location.href}&text=${this.title}`
        case 'pinterest':
          return `http://www.pinterest.com/pin/create/button/?url=${window.location.href}&description=${this.title}`
        case 'email':
          return `mailto:?subject=${this.title}&body=${window.location.href}`
      }
    }
  }
}
</script>

<style lang="scss">
  .social-share {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  .social-share__button {
    @include unset-button;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 4px 8px;
    border-radius: 3px;
    color: $color-white;
    font-family: $font-body;
    font-weight: 700;
    font-size: 1.4rem;
    cursor: pointer;
  }
  .social-share__button.is-facebook {
    background-color: #3b5998;
    &:hover { background-color: #2d4373 };
  }
  .social-share__button.is-twitter {
    background-color: #00aced;
    &:hover { background-color: #0087ba };
  }
  .social-share__button.is-pinterest {
    background-color: #cb2027;
    &:hover { background-color: #9f191f };
  }
  .social-share__button.is-email {
    background-color: $color-black;
    &:hover { background-color: darken($color-black, 10%) };
  }
</style>
