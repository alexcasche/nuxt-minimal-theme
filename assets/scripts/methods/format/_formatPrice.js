export const formatPrice = ({ price, locale = 'en-us', currency = 'USD' }) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(price)
}
