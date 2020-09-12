import React from 'react'

import CheckoutInfoForm from './CheckoutInfoForm'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import { Container, Row, Col, Image } from 'react-bootstrap'

const breadCrumbData = [
  {
    href: "",
    text: "カート"
  },
  {
    href: "/checkoutInfo",
    text: "情報"
  },
  {
    href: "",
    text: "配送"
  },
  {
    href: "",
    text: "支払い"
  },
]

const CheckoutInfoPage = () => {
  return (
    <Container fluid>
      <Row className="border bg-light">
        <Col>
          <Row>
            <Col sm={12} lg={8} className="offset-lg-2">
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={8} className="offset-lg-2">
          <BreadCrumb data={{breadCrumb:breadCrumbData, separator:">"}} className="small" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={8} className="offset-lg-2">
          <CheckoutInfoForm />
        </Col>
      </Row>
    </Container>
  )
}

export default CheckoutInfoPage