import React from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'

const FilterSortNav = ({ data, actions }) => {
  const { filterData, sortData } = { ...data }
  const { onChnageFilter, onChangeSort } = { ...actions }
  const filterLbl = "絞り込み"
  const sortLbl = "並び替え"
  return (
    <Form inline as={Row}>
      {!filterData ? null : (
        <Form.Group as={Col} sm={6} lg={6} controlId="filter">
          <Form.Label className="text-muted mr-3">{filterLbl}</Form.Label>
          <Form.Control as="select" size="sm" className="flex-grow-1" onChange={(e) => onChnageFilter(e.target.value)}>
            {filterData.map((data, i) => (
              <option key={i}>{data}</option>
            ))}
          </Form.Control>
        </Form.Group>
      )}
      {!sortData ? null : (
        <Form.Group as={Col} sm={6} lg={6} controlId="sort">
          <Form.Label className="text-muted mr-3">{sortLbl}</Form.Label>
          <Form.Control as="select" size="sm" className="flex-grow-1" onChange={(e) => onChangeSort(e.target.value)}>
            {sortData.map((data, i) => (
              <option key={i}>{data}</option>
            ))}
          </Form.Control>
        </Form.Group>
      )}
    </Form>
  )
}

export default FilterSortNav