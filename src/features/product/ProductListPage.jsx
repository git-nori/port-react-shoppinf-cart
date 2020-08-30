import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setUserId,
  setProducts,
  fetchProducts
} from './productSlice'
import {
  FILTER_VAL_ALL,
  SORT_VAL_ALPH_ASC,
  SORT_VAL_ALPH_DESC,
  SORT_VAL_PRICE_ASC,
  SORT_VAL_PRICE_DESC,
  compareFunc
} from '../../services/product'

import { Container, Row, Col } from 'react-bootstrap'
import Title from './Title'
import ProductList from './ProductList'
import FilterSortNav from '../../components/filterSortNav/FilterSortNav'
import PaginationBar from '../../components/paginationBar/PaginationBar'

const ProductListPage = () => {
  const dispatch = useDispatch()
  const { userId, products } = useSelector(state => state.product)
  const [pageNum, setPageNum] = useState(1) // 商品一覧の現在のページ数
  const filterData = [FILTER_VAL_ALL].concat([...new Set(products.map(p => p.category))])
  const sortData = [
    SORT_VAL_ALPH_ASC,
    SORT_VAL_ALPH_DESC,
    SORT_VAL_PRICE_ASC,
    SORT_VAL_PRICE_DESC
  ]
  const [filterVal, setFilterVal] = useState(filterData[0])
  const [sortVal, setSortVal] = useState(sortData[0])
  const filteredSortedProducts = filterVal === filterData[0]
    ? [...products].sort((a, b) => compareFunc(a, b, sortVal))
    : [...products.filter((product, i) => product.category === filterVal)].sort((a, b) => compareFunc(a, b, sortVal))
  const limitNum = 8 // 商品一覧に表示する商品数
  const offset = limitNum * (pageNum - 1)
  const productsList = filteredSortedProducts.filter((_, i) => (offset <= i && i <= (limitNum * pageNum - 1))) // 商品一覧に表示する商品リスト
  const onClickPage = (value) => {
    setPageNum(value)
  }
  const onChnageFilter = (value) => {
    setFilterVal(value)
    setPageNum(1)
  }
  const onChangeSort = (value) => {
    setSortVal(value)
    setPageNum(1)
  }

  useEffect(() => {
    dispatch(fetchProducts(0))
  }, [filterVal, sortVal])

  return (
    <>
      <Title data={{ title: "商品" }} />
      <div className="border">
        <Container>
          <Row className="py-3">
            <Col sm={12} lg={10}>
              <FilterSortNav data={{ filterData, sortData }} actions={{ onChnageFilter, onChangeSort }} />
            </Col>
            <Col sm={12} lg={2} className="mt-sm-3 mt-lg-0 text-lg-right vertical-align-center">
              <span className="text-muted">{`${filteredSortedProducts.length}個の商品`}</span>
            </Col>
          </Row>
        </Container>
      </div>
      <ProductList data={{
        products: productsList
      }} />
      <Container className="mt-3">
        <Row>
          <Col>
            <PaginationBar data={{ items: filteredSortedProducts, limitNum, pageNum }} actions={{ onClick: onClickPage }} classes={"justify-content-center"} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductListPage