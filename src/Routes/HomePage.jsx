import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Header from '../Components/Header'
import Body from '../Components/Body'
const HomePage = () => {
  let count = 0
  return (
    <Container fluid>
        <Row>
        <Header/>
        </Row>
        <Row>
          <Body count={count}/>
        </Row>
    </Container>
  )
}

export default HomePage