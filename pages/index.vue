<template>
  <div>
    <base-accordion>
      <base-accordion-item>
        <div slot="trigger">Trigger1</div>
        <div slot="content">Content1</div>
      </base-accordion-item>
      <base-accordion-item>
        <div slot="trigger">Trigger2</div>
        <div slot="content">Content2</div>
      </base-accordion-item>
    </base-accordion>
  </div>
</template>

<script>
export default {
  name: 'pageHome'
}
</script>
