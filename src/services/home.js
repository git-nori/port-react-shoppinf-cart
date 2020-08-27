import { client } from '../helpers/api'

export const fetchContents = (userId) => {
  return client.get(`/items/${userId}`)
}