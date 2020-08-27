/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './users/_userId'
import mock1 from './items/_userId'

export default (client) => mockServer([
  {
    path: '/users/_userId',
    methods: mock0
  },
  {
    path: '/items/_userId',
    methods: mock1
  }
], client, '')
