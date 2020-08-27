const users = [
  { id: 0, name: 'taro' },
  { id: 1, name: 'hanako' }
]

export default {
  get({ values }) {
    return [200, users.find(user => user.id === values.userId)]
  },

  post({ data }) {
    users.push({
      id: users.length,
      name: data.name
    })

    return [201]
  }
}