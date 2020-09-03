import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProduct } from './productSlice'

import { Container, Row, Col, Image } from 'react-bootstrap'
import ProductDetailForm from './ProductDetailForm'
import ShareButtonBar from '../../components/shareButtonBar/ShareButtonBar'

const ProductDetailPage = () => {
  const { productId } = useParams()
  const { imgUrl, productNm, productPrice, sizeArr, productDetail } = useSelector(state => state.product.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProduct(productId))
  }, [productId])

  // TODO:機能の実装
  const handleBuyNow = ({ size, quantity, productId }) => console.log("buy now")
  const handleAddCart = ({ size, quantity, productId }) => console.log("addcart")
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} lg={6}>
          <Image src={imgUrl} className="mw-100" />
        </Col>
        <Col sm={12} lg={6}>
          <h2>{productNm}</h2>
          <p className="font-weight-bold">{`¥${productPrice}`}</p>
          <p>{productDetail}</p>
          <ProductDetailForm data={{ productId, sizeArr }} classes="mt-5" actions={{ handleBuyNow, handleAddCart }} />
          <Row className="mt-3">
            <Col>
              <ShareButtonBar />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailPage