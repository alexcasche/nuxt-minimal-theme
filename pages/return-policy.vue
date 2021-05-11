<template>
  <main class="return-policy-page page">
    <div class="return-policy-page__container container-smallest">
      <h1 class="return-policy-page__heading"
        v-html="'Return Policy'"
      />
      <base-rich-text class="return-policy-page__body"
        v-if="body"
        :body="body"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: 'pageReturnPolicy',
  data: () => ({
    body: `
      <h3>Returns</h3>
      <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>
      <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
      <p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>
      <p>Additional non-returnable items:</p>
      <ul>
        <li>Gift cards</li>
        <li>Downloadable software products</li>
        <li>Some health and personal care items</li>
      </ul>
      <p>To complete your return, we require a receipt or proof of purchase.</p>
      <p>Please do not send your purchase back to the manufacturer.</p>
      <p>There are certain situations where only partial refunds are granted: (if applicable)</p>
      <ul>
        <li>Book with obvious signs of use</li>
        <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened.</li>
        <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
        <li>Any item that is returned more than 30 days after delivery</li>
      </ul>
      <p>For more information on our return policy <a href="/">contact us</a>.</p>
    `
  })
}
</script>
