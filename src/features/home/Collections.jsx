import React from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap'

const Collections = ({ data: { contents } }) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h5 className="font-weight-bold">特集コレクション</h5>
        </Col>
      </Row>
      <Row sm={2} lg={4}>
        {contents.map((content, i) => {
          return (
            <Col className="mt-5" key={i}>
              <Card className="border-0">
                <Card.Img variant="top" src={content.imgUrl} />
                <Card.Body>
                  <Card.Title className="font-weight-bold h6">{content.itemNm}</Card.Title>
                  <Card.Text>{`¥${content.itemPrice}`}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Collections