import React from 'react'

import { Jumbotron, Container } from 'react-bootstrap'
import './MainView.css'

const MainView = ({ imgUrl, mainTxt, subTxt }) => {
  return (
    <Container fluid className="vh-100">
      <Jumbotron className="text-center background-img h-100" style={{ "backgroundImage": imgUrl }}>
        <h1>{mainTxt}</h1>
        <p>{subTxt}</p>
      </Jumbotron>
    </Container>
  )
}

export default MainView