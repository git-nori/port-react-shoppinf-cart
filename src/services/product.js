import { client } from '../helpers/api'

export const fetchProducts = (userId) => {
  return client.get(`/products/${userId}`)
}