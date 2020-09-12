import { products, loginUserId } from './product'

const productsRes = [
  {
    userId: 0,
    products
  },
  {
    userId: 1,
    products
  },
]

export default {
  get({ values }) {
    const filteredProducts = productsRes.find(product => product.userId === loginUserId)
    const product = filteredProducts.products.find(product => Number(product.productId) === values.productId)
    return [200, {
      userId: loginUserId,
      product
    }]
  },
}
