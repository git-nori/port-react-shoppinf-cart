import React from 'react'

const TitleBar = ({ title, styles, classes }) => {
  return (
    <h2 style={{...styles}} className={classes}>{title}</h2>
  )
}

export default TitleBar