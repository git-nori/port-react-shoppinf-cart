import React from 'react'

import TitleBar from '../../components/titleBar/TitleBar'
import { Container, Row, Col } from 'react-bootstrap'

const Title = ({ data: { title } }) => {
  return (
    <Container>
      <Row>
        <Col>
          <TitleBar title={title} classes={"my-5 text-center font-weight-bold"} />
        </Col>
      </Row>
    </Container>
  )
}

export default Title