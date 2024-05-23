// make list of colors   
// () =>: This declares an arrow function without any parameters.
// setSelectedColor(color): This is the body of the arrow function. It calls the setSelectedColor function with the color argument. 
// use fg for fill color 

import QRCode from 'qrcode.react';
import React, { useState } from 'react';
import { Col, Container, Form } from 'react-bootstrap';

function Color() {

    const [colorsValue, setColorsValue] = useState('')

    const colors = ['#000000', '#dc3545', '#007bff', '#ffc107', '#6c757d'];

    const HandleColor = (color) => {
        setColorsValue(color)
    }

    return (
        <>
            <Container className='min-vh-100'>
                <Col className='d-flex'>
                    {colors.map((color) => (
                        <Form.Control key={color}
                            className="input"
                            style={{ backgroundColor: color }}
                            onClick={() => HandleColor(color)}
                        />
                        
                        ))
                    }
                    <Form.Control type='color' value={colorsValue} onChange={(e) => setColorsValue(e.target.value)}/>
                </Col>

                <Col className='mt-5'>
                    <QRCode fgColor={colorsValue} width='320px' height='320px' />
                </Col>
            </Container>
        </>
    )
}

export default Color