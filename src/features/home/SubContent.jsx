import React from 'react'

import {Container, Row, Col, Image} from 'react-bootstrap'

const MainContent = ({ imgUrl, mainTxt, subTxt }) => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col sm={12} lg={6}>
          <Image src={imgUrl} fluid/>
        </Col>
        <Col sm={12} lg={6}>
          <h3>{mainTxt}</h3>
          <p>{subTxt}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default MainContent