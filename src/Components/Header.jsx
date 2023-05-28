import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from './Button'

const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='title'>
                        TECH  <span className='sub1'>WITH </span><span className='sub2'>TAELO</span>
                    </div>
                </Col>
                <Col className='d-flex justify-content-end my-2'>
                    <Button title={"CONTACT ME"} />
                </Col>
            </Row>
        </Container>
    )
}

export default Header