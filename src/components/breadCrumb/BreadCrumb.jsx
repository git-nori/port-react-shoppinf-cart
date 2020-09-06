import React from 'react'
import { NavLink } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
import './breadCrumb.css'

// as属性ではうまくいかないため実装
const BreadCrumb = ({ data: { breadCrumb, separator }, className }) => {
  return (
    <Breadcrumb className={className}>
      {breadCrumb.map((b, i) => (
        <li key={i}>
          <NavLink exact to={b.href}>{b.text}</NavLink>
          {i !== (breadCrumb.length - 1) && <span className="mx-2">{separator}</span>}
        </li>
      ))}
    </Breadcrumb>
  )
}

export default BreadCrumb