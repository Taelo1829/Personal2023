import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from './Button'

const Body = () => {
    const description = ["SOFTWARE DEVELOPER", "WEB DEVELOPER","TECH ENTHUSIAST!"]
    const [selected, setSelected] = useState("")
    const [type, setType] = useState("adding")
    let i = 0
    useEffect(() => {
        renderDescription()
    }, [selected])

    const renderDescription = () => {
        console.log(type)
        if (selected.length < description[i].length && type === "adding") {
            setTimeout(() => {
                setSelected(selected + description[i][selected.length])
            }, 200)
        } else if (i < description.length - 1 && selected.length > 0) {
            setType("su")
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
            <Row className='my-5 text-light'>
                <Col className='d-flex justify-content-center'>
                    <div className='w-75 text-center'>
                        I have {new Date().getFullYear() - 2021}+ years of experience in software development, and for the past years, I have gained
                        in-depth knowledge and expertise in HTML, CSS, JavaScript, C# and Python many more.
                        I possess strong problem-solving skills, pay great attention to detail, and always aim to deliver
                        high-quality work. With my proficiency in front-end and back-end development,
                        as well as my continuous learning and growth mindset.
                        I am confident in my ability to contribute to any project and exceed expectations.
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                <Button title={"VIEW PORTFOLIO"}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Body