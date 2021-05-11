<template>
  <div class="home-page page">
    <base-section class="home-page__section"
      v-for="(section, index) in sections"
      :key="`section-${index}`"
      :content="section"
    />
  </div>
</template>

<script>
export default {
  name: 'pageHome',
  data: () => ({
    sections: [
      {
        type: 'carousel-hero',
        slides: [
          {
            image: { src: 'https://cdn.pixabay.com/photo/2016/03/27/19/57/woman-1284029_1280.jpg' },
            heading: 'Up to 25% off women jackets!',
            button: { text: 'Shop Womens', url: '/products' }
          },
          {
            image: { src: 'https://cdn.pixabay.com/photo/2016/11/29/09/41/bag-1868758_1280.jpg' },
            heading: 'New shirt collection for men',
            button: { text: 'Shop Mens', url: '/products' }
          }
        ]
      }
    ]
  })
}
</script>
