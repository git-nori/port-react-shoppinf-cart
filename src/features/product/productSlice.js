import { createSlice } from '@reduxjs/toolkit'

import * as productService from '../../services/product'

const initialState = {
  userId: "",
  products: [{}],
  product: {},
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload
    },
    setProducts(state, action) {
      state.products = action.payload
    },
    setProduct(state, action) {
      state.product = action.payload
    },
  }
})

export const fetchProducts = () => dispatch => {
  productService.fetchProducts()
    .then(res => {
      console.log(res)
      dispatch(setProducts(res.data.products))
    })
    .catch(err => {
      console.error(err)
    })
}

export const fetchProduct = (productId) => dispatch => {
  productService.fetchProduct(productId)
  .then(res => {
    dispatch(setProduct(res.data.product))
  })
}

export const {
  setUserId,
  setProducts,
  setProduct,
} = productSlice.actions

export default productSlice.reducer