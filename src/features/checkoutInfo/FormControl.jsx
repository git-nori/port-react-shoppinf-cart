import React from 'react'

import { Form } from 'react-bootstrap'

const FormControl = ({children, data, register, as, name}) => {
  const {error, placeholder} = {...data}
  console.log(placeholder)
  return (
    <>
      <Form.Control
        name={name}
        placeholder={placeholder}
        as={as}
        isInvalid={error}
        ref={register}
      >
        {children}
      </Form.Control>
      {error &&
        <Form.Control.Feedback type="invalid">
          {error.message}
        </Form.Control.Feedback>
      }
    </>
  )
}

export default FormControl