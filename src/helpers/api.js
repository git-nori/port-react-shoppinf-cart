import axios from 'axios'
import mock from './mocks/$mock'
import { API_URL } from '../config/index'

const defaultOptions = {
  baseURL: API_URL,
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json'
  }
}

export const client = axios.create({ defaultOptions })
if (process.env.NODE_ENV === 'development') {
  mock(client)
}

// Set the AUTH token for any request
client.interceptors.request.use(function (config) {
  if (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  }
  return config;
});