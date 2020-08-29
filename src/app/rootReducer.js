import { combineReducers } from '@reduxjs/toolkit'

import homeReducer from '../features/home/homeSlice'
import productSlice from '../features/product/productSlice'

const rootReducer = combineReducers({
  home: homeReducer,
  product: productSlice
})

export default rootReducer