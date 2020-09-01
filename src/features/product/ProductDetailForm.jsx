import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

import { Form, Button } from 'react-bootstrap'

const ProductDetailForm = ({ data: { productId, sizeArr }, classes, actions: { handleBuyNow, handleAddCart } }) => {
  const isSoldOut = !(sizeArr && sizeArr.length > 0)
  const schema = yup.object().shape({
    quantity: yup.number()
      .positive()
      .required()
      .integer()
      .test('len', 'Must be less than 3 numbers', val => val.toString().length <= 3),
    size: !isSoldOut && yup.mixed().oneOf(sizeArr).required()
  })
  const { errors, register, handleSubmit, formState } = useForm({ resolver: yupResolver(schema) })
  return (
    <Form noValidate className={`mb-4 ${classes}`}>
      <Form.Group controlId="quantity">
        <Form.Label>quantity</Form.Label>
        <Form.Control
          name={"quantity"}
          as={"input"}
          isInvalid={errors.quantity}
          ref={register}
          disabled={isSoldOut}
        >
        </Form.Control>
        {errors.quantity &&
          <Form.Control.Feedback type="invalid">
            {errors.quantity.message}
          </Form.Control.Feedback>
        }
      </Form.Group>
      <Form.Group controlId="size">
        <Form.Label>size</Form.Label>
        <Form.Control
          name={"size"}
          as={"select"}
          isInvalid={errors.size}
          ref={register}
          disabled={isSoldOut}>
          {isSoldOut
            ? (<option>sold out</option>)
            : sizeArr.map((size, i) => <option key={i}>{size}</option>)}
        </Form.Control>
        {errors.size &&
          <Form.Control.Feedback type="invalid">
            {errors.size.message}
          </Form.Control.Feedback>
        }
      </Form.Group>
      <Button onClick={handleSubmit((data, e) => handleBuyNow({ ...data, productId }))} variant="light" block className="py-3 w-100 border" disabled={isSoldOut || formState.isSubmitting}>カートに追加する</Button>
      <Button onClick={handleSubmit((data, e) => handleAddCart({ ...data, productId }))} type="submit" variant="dark" block className="py-3 w-100" disabled={isSoldOut || formState.isSubmitting}>今すぐ購入</Button>
    </Form>
  )
}

export default ProductDetailForm