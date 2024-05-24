
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';
import { useRef, useState } from 'react';
import { Button, Card, Col, Container, Form, FormLabel, Image, Row } from 'react-bootstrap';

function Home() {

    const [inputValue, setInputValue] = useState('');
    const [qrValue, setQrValue] = useState('');
    const [logoSrc, setLogoSrc] = useState('');
    const [qrColor, setQrColor] = useState('#000000');
    const [isLogoBackground, setIsLogoBackground] = useState(false);
    const [isLogoRound, setIsLogoRound] = useState(false);

    const handleLogoAdd = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setLogoSrc(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleLogoDelete = () => {
        setLogoSrc('');
    };

    const handleGenerate = () => {
        setQrValue(inputValue);
    };

    const qrRef = useRef(null)

    const handleDownload = () => {
        html2canvas(qrRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
      
            // Create a virtual link element
            const link = document.createElement('a');
            link.download = 'qr_code.png'; // Set the filename
            link.href = imgData; // Set the image data URL
      
            // Trigger a click event on the link to start download
            link.click();
          });
    };

    const presetColors = ['#000000', '#dc3545', '#007bff', '#ffc107', '#6c757d'];
    return (
        <>
            <Container className='min-vh-100 mt-4 home-page'>
                
                    <Card className='card-style border-3 border-dark'>                 
                        <Row >
                            <Col lg={7} md={12} className='mx-auto mt-5 left-form'>
                                <FormLabel >Website URL</FormLabel>
                                <Form.Control placeholder='Enter URL'
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />

                                <h6 className='mt-4'><i class="fa-solid fa-arrow-right me-2"></i>try another way</h6>
                                <hr />
                                <h6 className='mb-3'>Color</h6>
                                <Col className='input-color d-flex'>
                                    {presetColors.map((color) => (
                                        <Form.Control
                                            key={color}
                                            className='input'
                                            style={{ backgroundColor: color }}
                                            onClick={() => setQrColor(color)}
                                        />
                                    ))}
                                    <Col ><Form.Control className='choose-color'
                                        type='color'
                                        value={qrColor}
                                        onChange={(e) => setQrColor(e.target.value)} /></Col>
                                </Col>

                                <h6 className='mt-4 mb-3'>Add a logo</h6>
                                <Col>
                                 <input type="file" accept="image/*" onChange={handleLogoAdd} className="d-none" id="logoInput" />

                                    {logoSrc ? (<Image src={logoSrc} width='40px' className='me-4 border border-2 border-dark' />) : <Button className='add-button bg-light text-dark me-4' onClick={() => document.getElementById('logoInput').click()} >Add Logo</Button>}

                                    <Button type='file' className='delete-button bg-light text-dark me-4' onClick={() => document.getElementById('logoInput').click()}>Change Logo</Button>

                                    <Button type='file' className='delete-button bg-light text-dark' onClick={handleLogoDelete}>Delete Logo</Button>

                                </Col>
{/* 
                                <Col className='mt-4 d-flex'>
                                    <Form.Check
                                        aria-label="option 1"
                                        label="Logo in background"
                                        className='me-3'
                                        checked={isLogoBackground}
                                        onChange={() => setIsLogoBackground(!isLogoBackground)}
                                    />
                                    <Form.Check
                                        aria-label="option 2"
                                        label="Round logo"
                                        checked={isLogoRound}
                                        onChange={() => setIsLogoRound(!isLogoRound)}
                                    />
                                </Col> */}
                            </Col>
                            <Col lg={4} md={10} className='qr-area p-3 mx-auto mt-4 text-center'>
                                {/* <h4 className='mb-5'>Preview</h4> */}
                                <Col  ref={qrRef}>
                                {qrValue ? (
                                    <QRCode
                                        
                                        id="qrCode"
                                        
                                        value={qrValue}
                                        size={300}
                                        fgColor={qrColor}
                                        imageSettings={logoSrc ? {
                                            src: logoSrc,
                                            x: null,
                                            y: null,
                                            height: 50,
                                            width: 50,
                                            excavate: true,
                                        } : null}
                                    />
                                ) : (
                                    <Image src='./assets/Images/qr-code.png' alt='qr_code' width='320px' />
                                )} </Col>
                                <Button className='button bg-dark text-white mt-5' onClick={handleGenerate}>
                                    Generate QR Code
                                </Button>
                                <Button className='bg-dark text-white mt-5' onClick={handleDownload}>
                                    Download jpg
                                </Button>
                            </Col>
                        </Row>
                    </Card>
           
            </Container>
        </>
    )
}

export default Home