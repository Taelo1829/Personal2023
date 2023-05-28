import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Body = () => {
    const description = ["SOFTWARE DEVELOPER"]
    const [selected, setSelected] = useState("")
    let i = 0
    useEffect(() => {
        renderDescription()
    }, [selected])
    
    const renderDescription = () => {
        if(selected.length < description[i].length){
            setTimeout(()=>{
                setSelected(selected + description[i][selected.length])
            },1000)
        }
    }

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