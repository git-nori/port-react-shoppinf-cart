import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { prefNames } from '../../constants/prefNames'

import FormControl from './FormControl'
import { Form, Col, Button } from 'react-bootstrap'

const contactInfo = {
  label: "連絡先情報",
  placeholder: "メールアドレスまたは携帯電話番号",
  name: "contact"
}
const email = {
  label: "最新ニュースと限定情報をメールで受け取る",
  name: "email"
}
const deliveryInfo = {
  label: "配送先情報",
  firstName: {
    name: "firstName",
    placeholder: "姓"
  },
  laseName: {
    name: "laseName",
    placeholder: "名(任意)"
  },
  country: {
    name: "country",
    placeholder: "国/地域"
  },
  postalCode: {
    name: "postalCode",
    placeholder: "郵便番号"
  },
  pref: {
    name: "pref",
    placeholder: "都道府県名"
  },
  city: {
    name: "city",
    placeholder: "市区町村"
  },
  address: {
    name: "address",
    placeholder: "住所"
  },
  extraAddress: {
    name: "extraAddress",
    placeholder: "建物名、部屋番号など(任意)"
  },
}
const saveInfo = {
  label: "次回のためこの情報を保存する",
  name: "saveInfo"
}
const btn = {
  label: "配送方法の選択へ進む"
}
const backLink = {
  label: "カートに戻る"
}
const emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const telReg = /^[0-9]{11}$/i;
const postalReg = /^[0-9]{7}$/i;
const CheckoutInfoForm = () => {
  const schema = yup.object().shape({
    contact: yup.string().required().max(255).test('email or telNo', '有効なメールアドレスまたは携帯番号を入力してください', val => val.match(emailReg) || val.match(telReg)),
    firstName: yup.string().required().max(255),
    lastName: yup.string().max(255),
    postalCode: yup.string().required().test('postal code', '有効な郵便番号を入力してください', val => val.match(postalReg)),
    pref: yup.string().required(),
    city: yup.string().required().max(255),
    address: yup.string().required().max(255),
    extraAddress: yup.string().max(255)
  })
  const { errors, register, handleSubmit, formState } = useForm({ resolver: yupResolver(schema) })
  return (
    <Form noValidate>
      <Form.Group controlId={contactInfo.name}>
        <Form.Label>{contactInfo.label}</Form.Label>
        <FormControl
          name={contactInfo.name}
          as={"input"}
          register={register}
          data={{
            placeholder: contactInfo.placeholder,
            error: errors.contact
          }}
        />
      </Form.Group>
      <Form.Group controlId={email.name}>
        <Form.Check type="checkbox" label={email.label} />
      </Form.Group>
      <Form.Label>{deliveryInfo.label}</Form.Label>
      <Form.Row>
        <Form.Group as={Col} sm={12} lg={6} controlId={deliveryInfo.firstName.name}>
          <FormControl
            name={deliveryInfo.firstName.name}
            as={"input"}
            register={register}
            data={{
              placeholder: deliveryInfo.firstName.placeholder,
              error: errors.firstName
            }}
          />
        </Form.Group>
        <Form.Group as={Col} sm={12} lg={6} controlId={deliveryInfo.laseName.name}>
          <FormControl
            name={deliveryInfo.laseName.name}
            as={"input"}
            register={register}
            data={{
              placeholder: deliveryInfo.laseName.placeholder,
              error: errors.laseName
            }}
          />
        </Form.Group>
        <Form.Group as={Col} sm={12} lg={6} controlId={deliveryInfo.postalCode.name}>
          <FormControl
            name={deliveryInfo.postalCode.name}
            as={"input"}
            register={register}
            data={{
              placeholder: deliveryInfo.postalCode.placeholder,
              error: errors.postalCode
            }}
          />
        </Form.Group>
        <Form.Group as={Col} sm={12} lg={6} controlId={deliveryInfo.pref.name}>
          <FormControl
            name={deliveryInfo.pref.name}
            as={"select"}
            register={register}
            data={{
              placeholder: deliveryInfo.pref.placeholder,
              error: errors.pref
            }}
          >
            {prefNames.map((name, i) => i == 0
              ? <option key={i}></option>
              : <option key={i}>{name}</option>)}
          </FormControl>
        </Form.Group>
      </Form.Row>
      <Form.Group controlId={deliveryInfo.city.name}>
        <FormControl
          name={deliveryInfo.city.name}
          as={"input"}
          register={register}
          data={{
            placeholder: deliveryInfo.city.placeholder,
            error: errors.city
          }}
        />
      </Form.Group>
      <Form.Group controlId={deliveryInfo.address.name}>
        <FormControl
          name={deliveryInfo.address.name}
          as={"input"}
          register={register}
          data={{
            placeholder: deliveryInfo.address.placeholder,
            error: errors.address
          }}
        />
      </Form.Group>
      <Form.Group controlId={deliveryInfo.extraAddress.name}>
        <FormControl
          name={deliveryInfo.extraAddress.name}
          as={"input"}
          register={register}
          data={{
            placeholder: deliveryInfo.extraAddress.placeholder,
            error: errors.extraAddress
          }}
        />
      </Form.Group>
      <Form.Group controlId={saveInfo.name}>
        <Form.Check type="checkbox" label={saveInfo.label} name={saveInfo.name} />
      </Form.Group>
      <Form.Row className="justify-content-between align-items-center">
        <Col sm={12} lg={4}>
          <Link to="/cart">{`< ${backLink.label}`}</Link>
        </Col>
        <Col sm={12} lg={4}>
          <Button onClick={handleSubmit((data, e) => console.log(data, e))} variant="primary" className="p-3 w-100" disabled={formState.isSubmitting}>{btn.label}</Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default CheckoutInfoForm