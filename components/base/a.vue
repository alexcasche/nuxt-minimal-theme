<template>
  <component class="a"
    v-if="elementTag === 'nuxt-link'"
    :is="elementTag"
    v-bind="{ ...$attrs, ...linkAttrs }"
    @click.native="$emit('click')"
  >
    {{ text }}
    <slot />
  </component>
  <component class="a"
    v-else
    :is="elementTag"
    v-bind="{ ...$attrs, ...linkAttrs }"
    @click="$emit('click')"
  >
    {{ text }}
    <slot />
  </component>
</template>

<script>
export default {
  name: 'baseA',
  props: {
    text: {
      type: String,
      required: false
    }
  },
  computed: {
    urlString() {
      let url = this.$attrs.href
      if(url) {
        const firstChar = url.substring(0, 1);
        const hasDot = url.indexOf('.') >= 0
        const isEmail = url.indexOf('mailto') >= 0
        const isTel = url.indexOf('tel') >= 0
        if(hasDot || firstChar !== '/') {
          const hasProto = url.startsWith('http')
          if(!hasProto && !isEmail && !isTel) url = `https://${url}`
        }
      }
      return url
    },
    elementTag() {
      if(this.urlString) {
        const firstChar = this.urlString.substring(0, 1);
        const hasDot = this.urlString.includes('.')
        if(!hasDot && firstChar === '/') return 'nuxt-link'
        return 'a'
      }
      else return 'span'
    },
    linkAttrs() {
      let attrs = {}
      if(this.elementTag === 'nuxt-link') attrs['to'] = this.urlString
      if(this.elementTag === 'a') {
        attrs['href'] = this.urlString
        attrs['target'] = '_blank'
      }
      return attrs
    }
  }
}
</script>

<style lang="scss">
 .a.nuxt-link-exact-active {
   pointer-events: none;
 }
</style>
