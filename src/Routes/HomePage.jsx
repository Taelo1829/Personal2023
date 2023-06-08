import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Header from '../Components/Header'
import Body from '../Components/Body'
import FormPage from '../Components/FormPage'
const HomePage = () => {
  let count = 0
  return (
    <Container fluid className='container-body'>
        <Row>
        <Header/>
        </Row>
        <Row>
          <Body count={count}/>
        </Row>
        <FormPage/>
    </Container>
  )
}

export default HomePage