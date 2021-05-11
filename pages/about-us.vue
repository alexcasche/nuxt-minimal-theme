<template>
  <main class="about-us-page page">
    <div class="about-us-page__container container-smallest">
      <h1 class="about-us-page__heading"
        v-html="'About Us'"
      />
      <base-rich-text class="about-us-page__body"
        v-if="body"
        :body="body"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: 'pageAboutUs',
  data: () => ({
    body: `
      <p>Our story began in 2001 in a small studio in the middle of nowhere. With only one desk and next to no free time, our brand was born. Our passion for unique design and collaboration brought our vision, and products, to life.</p>
      <p>Our products bring together the finest materials and stunning design to create something very special. We believe in quality, care, and creating unique products that everyone can enjoy. Colorful, creative, and inspired by what we see everyday, each product represents what we love about the world we live in. We hope they’ll inspire you too.</p>
      <img src="https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396_640.jpg" />
    `
  })
}
</script>
