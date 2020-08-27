import React from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap'
import './SubContents.css'

const SubContents = ({ data: { contents } }) => {
  return (
    <Container>
      <Row className="align-items-center">
        {contents.map((content, i) => {
          return (
            <Col sm={12} lg={4} key={i}>
              <Card className="border-0">
                <Card.Img variant="top" src={content.imgUrl} />
                <Card.Body>
                  <Card.Title className="font-weight-bold h6">{content.mainTxt}</Card.Title>
                  <Card.Text>{content.subTxt}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default SubContents