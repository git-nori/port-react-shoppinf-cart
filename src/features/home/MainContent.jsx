import React from 'react'

import { Jumbotron, Container } from 'react-bootstrap'
import './MainContent.css'

const MainView = ({data:{ imgUrl, mainTxt, subTxt }}) => {
  return (
    <Container fluid className="vh-100">
      <Jumbotron className="text-center background-img h-100" style={{ "backgroundImage": `url(${imgUrl})` }}>
        <h1>{mainTxt}</h1>
        <p>{subTxt}</p>
      </Jumbotron>
    </Container>
  )
}

export default MainView