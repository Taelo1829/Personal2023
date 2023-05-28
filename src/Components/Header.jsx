import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
    return (
        <Container className='mx-5'>
            <Row >
                <Col>
                    <div className='title'>
                        TECH<br /> 
                        <span className='sub1'>WITH </span><span className='sub2'>TAELO</span>
                    </div>
                </Col>
             
            </Row>
        </Container>
    )
}

export default Header