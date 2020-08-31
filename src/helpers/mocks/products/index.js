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
  get() {
    return [200, productsRes.find(product => product.userId === loginUserId)]
  },
}
