import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setUserId,
  setProducts,
  fetchProducts
} from './productSlice'

import { Container, Row, Col } from 'react-bootstrap'
import Title from './Title'
import ProductList from './ProductList'
import FilterSortNav from '../../components/filterSortNav/FilterSortNav'
import PaginationBar from '../../components/paginationBar/PaginationBar'

const ProductListPage = () => {
  const dispatch = useDispatch()
  const { userId, products } = useSelector(state => state.product)
  const [pageNum, setPageNum] = useState(1) // 商品一覧の現在のページ数
  const limitNum = 8 // 商品一覧に表示する商品数
  const offset = limitNum * (pageNum - 1)
  const filteredProducts = products.filter((product, i) => (offset <= i && i <= (limitNum-1) * pageNum))

  useEffect(() => {
    dispatch(fetchProducts(0))
  }, [])

  return (
    <>
      <Title data={{ title: "商品" }} />
      <ProductList data={{
        products: filteredProducts
      }} />
    </>
  )
}

export default ProductListPage