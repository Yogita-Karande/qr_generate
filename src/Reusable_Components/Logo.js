// set logo in logo or set logo in QR code as background logo and give type of logo circle or square
// add 3 button 1) add logo 2) change logo 3) delete logo 
// give functionaliy 
// if we added logo in instead of button show logo or after change logo change logo and delete after delete logo

import QRCode from 'qrcode.react';
import React, { useState } from 'react';
import { Button, Col, Container, Image } from 'react-bootstrap';

function Logo() {

    const [showLogo, setShowLogo] = useState(false);

    const handleLogoDelete = () => {
        setShowLogo(false)
    }

    const handleLogoAdd = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setShowLogo(e.target.result);
            reader.readAsDataURL(file);
        }
    };


    return (
        <>
            <Container className='min-vh-100'>
                <Col>
                    {/* set logo in qr code */}

                    <input type="file" accept="image/*" onChange={handleLogoAdd} className="d-none" id="logoInput" />

                    {showLogo ? (<Image src={showLogo} width='40px' className='me-4 border border-2 border-dark' />) : <Button className='add-button bg-light text-dark me-4' onClick={() => document.getElementById('logoInput').click()} >Add Logo</Button>}

                    <Button type='file' className='delete-button bg-light text-dark me-4' onClick={() => document.getElementById('logoInput').click()}>Change Logo</Button>

                    <Button type='file' className='delete-button bg-light text-dark' onClick={handleLogoDelete}>Delete Logo</Button>

                </Col>
                <Col className='mt-4'>
                    <QRCode imageSettings={showLogo ? {
                        src: showLogo,
                        x: null,
                        y: null,
                        height: 50,
                        width: 50,
                        excavate: true,
                    } : null} />
                </Col>

                {/* <Col className='mt-4 d-flex'>
                    <Form.Check
                        label="Logo in background"
                        className='me-3'
                    />

                    <Form.Check
                        label="Round logo"
                    />
                </Col> */}
            </Container>
        </>
    )
}

export default Logo
