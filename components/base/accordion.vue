<template>
  <ul class="accordion">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'baseAccordion',
  data: () => ({
    count: 0,
    active: null
  })
}
</script>
