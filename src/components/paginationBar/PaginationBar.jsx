import React from 'react'

import { Pagination } from 'react-bootstrap'

const PaginationBar = ({
  data: {
    items,
    limitNum,
    pageNum
  },
  actions: {
    onClick
  },
  classes }) => {
  const itemCnt = Math.ceil(items.length / limitNum)
  const isDisabledFirstPrev = pageNum === 1
  const isDisabledLastNext = pageNum === itemCnt
  return (
    <Pagination className={classes}>
      <Pagination.First disabled={isDisabledFirstPrev} onClick={() => onClick(1)} />
      <Pagination.Prev disabled={isDisabledFirstPrev} onClick={() => onClick(pageNum - 1)} />
      {[...Array(itemCnt)].map((_, i) => {
        const num = i + 1
        return (
          <Pagination.Item key={num} active={num === pageNum} onClick={() => onClick(num)}>
            {num}
          </Pagination.Item>
        )
      })}
      <Pagination.Next disabled={isDisabledLastNext} onClick={() => onClick(pageNum + 1)} />
      <Pagination.Last disabled={isDisabledLastNext} onClick={() => onClick(itemCnt)} />
    </Pagination>
  )
}

export default PaginationBar