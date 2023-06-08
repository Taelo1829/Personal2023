import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from './Button'

const FormPage = () => {
    return (
        <div className='form-page'>
            <Container className='w-50 form p-4'>
                <div className='close w-100 p-3 py-2'>
                    <i className='fas fa-times float-end'></i>
                </div>
                <Row>
                    <Col className='mx-2'>
                        <Row>
                            <label className='p-0'>First Name</label>
                        </Row>
                        <Row>
                            <input />
                        </Row>
                    </Col>
                    <Col className='mx-2'>
                        <Row>
                            <label className='p-0'>Last Name</label>
                        </Row>
                        <Row>
                            <input />
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className='m-2'>
                        <Row>
                            <label className='p-0'>Email / Phone Number</label>
                        </Row>
                        <Row>
                            <input />
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        <label>Message</label>
                    </Row>
                    <Row>
                        <Col>
                            <textarea className='w-100' />
                        </Col>
                    </Row>
                </Row>
                <Row >
                    <Col className="d-flex justify-content-center " >
                        <Button title={"SUBMIT"} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FormPage