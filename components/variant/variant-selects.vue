<template>
  <div class="variant-selects">
    <base-select class="variant-selects__select"
      v-model="testModel"
      :options="[
        'test', 'test2', 'test3'
      ]"
    />
  </div>
</template>

<script>
export default {
  name: 'variantSelects',
  data: () => ({
    testModel: ''
  })
}
</script>
