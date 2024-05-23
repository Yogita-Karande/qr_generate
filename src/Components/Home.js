
import QRCode from 'qrcode.react';
import { useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Form, FormLabel, Image, Row } from 'react-bootstrap';

function Home() {

    const [inputValue, setInputValue] = useState('');
    const [qrValue, setQrValue] = useState('');
    const [logoSrc, setLogoSrc] = useState('');
    const [qrColor, setQrColor] = useState('#000000');
    const [isLogoBackground, setIsLogoBackground] = useState(false);
    const [isLogoRound, setIsLogoRound] = useState(false);

    const handleLogoChange = (event) => {
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

    const handleDownload = () => {
        const canvas = document.createElement('canvas');
        const svgElement = document.getElementById('qrCode').querySelector('svg');
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svgElement);
        const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            URL.revokeObjectURL(url);
            const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
            let downloadLink = document.createElement('a');
            downloadLink.href = pngUrl;
            downloadLink.download = 'qr-code.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        };
        img.src = url;
    };

    const presetColors = ['#000000', '#dc3545', '#007bff', '#ffc107', '#6c757d'];
    return (
        <>
            <Container className='min-vh-100 mt-4'>
                <CardGroup>
                    <Card className='card-style'>
                        <Row>
                            <Col lg={7} md={12} className='mx-auto mt-5 left-form'>
                                <FormLabel >Website URL</FormLabel>
                                <Form.Control placeholder='Enter URL'
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />

                                <h6 className='mt-4'>try another way</h6>
                                <hr/>
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

                                <Image src={logoSrc || './assets/Images/qr.png'}
                                    width='40px'
                                    className='me-3'
                                    onClick={() => document.getElementById('logoInput').click()}
                                    style={{ cursor: 'pointer' }} />
                                <input type="file" accept="image/*" onChange={handleLogoChange} className="d-none" id="logoInput" />
                                <Button className='change-button bg-light text-dark me-4' onClick={() => document.getElementById('logoInput').click()}>Change</Button>
                                <Button className='delete-button bg-light text-dark' onClick={handleLogoDelete}>Delete</Button>

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
                                </Col>
                            </Col>
                            <Col lg={4} md={10} className='qr-area p-3 mx-auto mt-4 text-center'>
                                <h4 className='mb-4'>Preview</h4>
                                {qrValue ? (
                                    <QRCode
                                        id="qrCode"
                                        value={qrValue}
                                        size={320}
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
                                )}
                                <Button className='button bg-dark text-white mt-5' onClick={handleGenerate}>
                                    Generate QR Code
                                </Button>
                                <Button className='bg-dark text-white mt-5' onClick={handleDownload}>
                                    Download jpg
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </CardGroup>
            </Container>
        </>
    )
}

export default Home