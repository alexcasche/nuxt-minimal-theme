<template>
  <div class="rich-text"
    v-if="body"
  >
    <div class="rich-text__body"
      v-if="!cms"
      v-html="body"
    />
  </div>
</template>

<script>
export default {
  name: 'baseRichText',
  props: {
    body: {
      type: [String, Array],
      required: true
    },
    cms: {
      type: [String, null],
      required: false
    }
  }
}
</script>

<style lang="scss">
  .rich-text__body {
    p {
      margin: 1.5em 0;
    }
    ul {
      list-style-type: disc;
      list-style-position: inside;
    }
    ol {
      list-style-type: decimal;
      list-style-position: inside;
    }
    li {
      padding-left: 0.5em;
      margin: 0.5em 0;
    }
    a {
      color: $color-primary;
      &:hover {
        opacity: 0.75;
      }
    }
    img {
      margin: 40px 0;
    }
  }
</style>
