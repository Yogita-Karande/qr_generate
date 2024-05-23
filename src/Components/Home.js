import React from 'react'
import { Button, Card, CardGroup, Col, Container, Form, FormLabel, Image, Row } from 'react-bootstrap'

function Home() {
    return (
        <>
            <Container className='min-vh-100 mt-4'>
                <CardGroup>
                    <Card className='card-style'>
                        <Row>
                            <Col lg={7} md={12} className='mx-auto mt-5 left-form'>
                                <FormLabel >Website URL</FormLabel>
                                <Form.Control placeholder='Enter URL' />
                                <h6 className='mt-4'>try another way</h6>
                                <hr />
                                <h6 className='mb-3'>Color</h6>
                                <Col className='input-color d-flex'>
                                    <Form.Control  className=' input bg-dark'/>
                                    <Form.Control  className=' input bg-danger'/>
                                    <Form.Control  className=' input bg-primary'/>
                                    <Form.Control  className=' input bg-yellow'/>
                                    <Form.Control  className=' input bg-secondary me-4'/>
                                    <Col ><Form.Control  className='choose-color' type='color'/></Col>
                                </Col>
                                    

                                <h6 className='mt-4 mb-3'>Add a logo</h6>
                                <Image src='./assets/Images/qr.png' width='40px' className='me-3' />
                                <Button className='change-button bg-light text-dark me-4'>Change</Button>
                                <Button className='delete-button bg-light text-dark'>Delete</Button>

                                <Col className='mt-4 d-flex'>
                                    <Form.Check aria-label="option 1" label="logo background" className='me-3' />
                                    <Form.Check aria-label="option 1" label="logo round" />
                                </Col>
                            </Col>

                            <Col lg={4} md={10} className='qr-area p-3 mx-auto mt-4 text-center' >
                                <h4 className='mb-4'>Preview</h4>
                                <Image src='./assets/Images/qr-code.png' alt='qr_code' width='320px'  /> 
                                <Button className='button bg-dark text-white  mt-5'>Generate QR Code</Button>
                                <Button className='bg-dark text-white  mt-5'>Download jpg</Button>
                            </Col>
                        </Row>
                    </Card>
                </CardGroup>
            </Container>
        </>
    )
}

export default Home