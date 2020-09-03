import { client } from '../helpers/api'

export const FILTER_VAL_ALL = "全ての商品"
export const SORT_VAL_ALPH_ASC = "アルファベット順, A-Z"
export const SORT_VAL_ALPH_DESC = "アルファベット順, Z-A"
export const SORT_VAL_PRICE_ASC = "価格の安い順"
export const SORT_VAL_PRICE_DESC = "価格の高い順"

export const compareFunc = (a, b, sortVal) => {
  let aVal
  let bVal
  let isReverse = false
  switch (sortVal) {
    case SORT_VAL_ALPH_ASC:
      aVal = a.productNm.toLowerCase()
      bVal = b.productNm.toLowerCase()
      break;
    case SORT_VAL_ALPH_DESC:
      aVal = a.productNm.toLowerCase()
      bVal = b.productNm.toLowerCase()
      isReverse = true
      break;
    case SORT_VAL_PRICE_ASC:
      aVal = a.productPrice
      bVal = b.productPrice
      break;
    case SORT_VAL_PRICE_DESC:
      aVal = a.productPrice
      bVal = b.productPrice
      isReverse = true;
    default:
      break;
  }
  if (aVal > bVal) {
    return !isReverse ? 1 : -1
  } else if (aVal < bVal) {
    return !isReverse ? -1 : 1
  }
  return 0
}

export const fetchProducts = (userId) => {
  return client.get('/products')
}

export const fetchProduct = (productId) => {
  return client.get(`/products/${productId}`)
}