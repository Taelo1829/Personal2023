import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Body = ({ count }) => {
    const description = ["SOFTWARE DEVELOPER"]
    const [selected, setSelected] = useState(description[0])
  
    return (
        <Container className='my-5 text-center'>
            <Row>
                <Col>
                    <div className='heading'>TAELO SEHOLOBA</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='description'> I AM A <span>{selected}</span></div>
                </Col>
            </Row>
        </Container>
    )
}

export default Body