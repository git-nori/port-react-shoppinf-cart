/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './users/_userId'
import mock1 from './products/index'
import mock2 from './products/_productId'
import mock3 from './items/_userId'

export default (client) => mockServer([
  {
    path: '/users/_userId',
    methods: mock0
  },
  {
    path: '/products',
    methods: mock1
  },
  {
    path: '/products/_productId',
    methods: mock2
  },
  {
    path: '/items/_userId',
    methods: mock3
  }
], client, '')
