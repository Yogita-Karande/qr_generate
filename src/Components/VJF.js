import { Col, Container, Row, Table } from "react-bootstrap"

function VJF() {
    return (

        <Container className='min-vh-100 pt-5'>
            <Row>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr className='text-center'>
                                <th>QUALITY</th>
                                <th>HSN CODE</th>
                                <th>GST RATE %</th>
                                <th>RRP(Rs)</th>
                                <th>GST AMOUNT (Rs)</th>
                                <th>TOTAL(Rs)</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>CHARMS</td>
                                <td className='text-center'>54075290</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>598/-</td>
                                <td className='text-center'>30/-</td>
                                <td className='text-center'>628/-</td>
                            </tr>

                            <tr>
                                <td>NIMBUS</td>
                                <td className='text-center'>54075290</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>696/-</td>
                                <td className='text-center'>35/-</td>
                                <td className='text-center'>731/-</td>

                            </tr>

                            <tr>
                                <td>GARI,PISA,FUJI</td>
                                <td className='text-center'>54075290</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>722/-</td>
                                <td className='text-center'>37/-</td>
                                <td className='text-center'>759/-</td>
                            </tr>


                            <tr>
                                <td>NEVADA</td>
                                <td className='text-center'>54075290</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>750/-</td>
                                <td className='text-center'>38/-</td>
                                <td className='text-center'>788/-</td>
                            </tr>

                            <tr>
                                <td>BROCK</td>
                                <td className='text-center'>54075290</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>1120/-</td>
                                <td className='text-center'>56/-</td>
                                <td className='text-center'>1176/-</td>
                            </tr>

                            <tr>
                                <td>VEGAS</td>
                                <td className='text-center'>54075290</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>1160/-</td>
                                <td className='text-center'>58/-</td>
                                <td className='text-center'>1218/-</td>

                            </tr>
                            <tr>
                                <td>GAYA</td>
                                <td className='text-center'>54075290</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>1544/-</td>
                                <td className='text-center'>78/-</td>
                                <td className='text-center'>1622/-</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default VJF