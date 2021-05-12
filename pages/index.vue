<template>
  <div class="home-page page">
    <base-section class="home-page__section"
      v-for="(section, index) in sections"
      :key="`section-${index}`"
      :section="section"
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
      },
      {
        type: 'grid-featured',
        heading: 'Featured Selection',
        items: [
          {
            image: { src: 'https://cdn.pixabay.com/photo/2017/09/19/21/35/fashion-2766725_1280.jpg' },
            text: 'Womens Dresses',
            url: '/products'
          },
          {
            image: { src: 'https://cdn.pixabay.com/photo/2015/07/02/10/28/person-828781_1280.jpg' },
            text: 'Mens Shirt',
            url: '/products'
          },
          {
            image: { src: 'https://cdn.pixabay.com/photo/2017/09/19/21/35/fashion-2766725_1280.jpg' },
            text: 'Womens Dresses',
            url: '/products'
          },
          {
            image: { src: 'https://cdn.pixabay.com/photo/2015/07/02/10/28/person-828781_1280.jpg' },
            text: 'Mens Shirt',
            url: '/products'
          }
        ]
      },
      {
        type: 'row-featured',
        layout: 'image-right',
        image: {
          src: 'https://cdn.pixabay.com/photo/2017/09/18/19/16/fashion-2762865_1280.jpg'
        },
        heading: 'Welcome to MBK',
        body: `<p>Our products are inspired by the people and world around us. Beautiful, high quality goods that are designed especially for you. Discover <a href="/about-us">our story</a> and meet the people that make our brand what it is.</p>`
      },
      {
        type: 'row-featured',
        layout: 'image-left',
        image: {
          src: 'https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_1280.jpg'
        },
        body: `<p>All our products are made using the finest materials and craftsmanship. Each product is packaged and delivered with care. Check out our <a href="/contact-us">FAQs</a> for more questions on shipping, processing, and more..</p>`
      },
      {
        type: 'row-map',
        layout: 'image-right',
        image: {
          src: 'https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396_1280.jpg'
        },
        body: `<p>150 Elgin Street Ottawa<br />Ontario CA K2P 1L4</p><p>Mon - Fri, 10am - 9pm<br/>Saturday, 11am - 9pm<br/>Sunday, 11am - 5pm</p>`,
        button: { text: 'Directions', url: 'https://www.google.com/maps?daddr=150+Elgin+Street+Ottawa+Ontario+CA+K2P+1L4' }
      },
    ]
  })
}
</script>
