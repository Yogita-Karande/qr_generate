// install and import library
// add function if we will change value which function should handle changes
// where qr data should be store give state for handle/store data
// add default image 
//  create button which will generate qr_code
// if we click on button a fuction should call
//  if value is available in qr show qr otherwise show and image
// again make button for download qr code
//  take reference of qr code using useRef
// install npm install qrcode.react html-to-image --save for convert qr to image
//  install html2canvas


import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';
import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, FormLabel, Image, Row } from 'react-bootstrap';

function QR_Code() {
    const [inputValue,setInputValue] = useState('')
    const [qrValue, setQrValue] = useState('')

    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleGenenerate = () => {
        setQrValue(inputValue)
    }

    const qrRef = useRef(null)

    const handleDownload = ( ) => {
       
        // if (!qrRef.current) return;

        html2canvas(qrRef.current).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
    
          // Create a virtual link element
          const link = document.createElement('a');
          link.download = 'qr_code.png'; // Set the filename
          link.href = imgData; // Set the image data URL
    
          // Trigger a click event on the link to start download
          link.click();
        });
        
        
    }
  return (
    <>
       <Container className='min-vh-100'>
            <Row>
                <Col>
                    <Form>
                        <Col  lg={3}>
                            <FormLabel>Website URL</FormLabel>
                            <Form.Control placeholder='Enter URL/text' 
                                            value={inputValue}
                                            onChange={handleChange}
                                            name = 'URL'
                                            />
                        </Col>
                        <Col lg={3} className='mt-3'ref={qrRef}>
                            {qrValue ? (<QRCode                                        
                                        value={qrValue}
                                        size={320}
                                        />)                                         
                                        : <Image src="./assets/Images/qr-code.png" width='320px'/> }
                        </Col>
                        <Col className='mt-3'>
                            <Button className="me-5"onClick={handleGenenerate}>Generate QR Code</Button>
                            <Button onClick={handleDownload}>Download QR</Button>

                        </Col>
                    </Form>
                </Col>
            </Row>
       </Container>
    </>
  )
}

export default QR_Code