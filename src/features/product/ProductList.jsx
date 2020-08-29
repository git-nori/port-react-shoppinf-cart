import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col, Card } from 'react-bootstrap'

const ProductList = ({ data: { products } }) => {
  return (
    <Container>
      <Row>
        {products.map((product, i) => {
          return (
            <Col as={Link} to="/" sm={6} lg={3} className="mt-3" key={Number(product.productId)}>
              <Card>
                <Card.Img variant="top" src={product.imgUrl} />
                <Card.Body>
                  <Card.Subtitle className="text-dark font-weight-bold">{product.productNm}</Card.Subtitle>
                  <Card.Text className="d-inline-block text-dark font-weight-bold">{`¥${product.productPrice}`}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ProductList