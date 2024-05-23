import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Color from './Color';
import Logo from './Logo';
import QR_Code from './QR_Code';

function Main_Component() {
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <Color/>
                    <Logo/>
                </Col>
                <Col>
                    <QR_Code/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Main_Component