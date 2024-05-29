import { Col, Container, Row, Table } from "react-bootstrap"

function Decor() {
    return (
        <Container className='min-vh-100 pt-5'>
            <Row>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr className='text-center'>
                                <th>PRICE CODE</th>
                                <th>HSN CODE</th>
                                <th>GST RATE %</th>
                                <th>RRP(Rs)</th>
                                <th>GST AMOUNT (Rs)</th>
                                <th>TOTAL(Rs)</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>A</td>
                                <td className='text-center'>54077300</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>686/-</td>
                                <td className='text-center'>34/-</td>
                                <td className='text-center'>720/-</td>
                            </tr>

                            <tr>
                                <td>B</td>
                                <td className='text-center'>54077300</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>686/-</td>
                                <td className='text-center'>34/-</td>
                                <td className='text-center'>720/-</td>
                            </tr>

                            <tr>
                                <td>C</td>
                                <td className='text-center'>54077300</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>717/-</td>
                                <td className='text-center'>36/-</td>
                                <td className='text-center'>753/-</td>
                            </tr>

                            <tr>
                                <td>D</td>
                                <td className='text-center'>54077300</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>819/-</td>
                                <td className='text-center'>41/-</td>
                                <td className='text-center'>860/-</td>
                            </tr>

                            <tr>
                                <td>E</td>
                                <td className='text-center'>54077300</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>780/-</td>
                                <td className='text-center'>39/-</td>
                                <td className='text-center'>819/-</td>
                            </tr>

                            <tr>
                                <td>F</td>
                                <td className='text-center'>54077300</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>807/-</td>
                                <td className='text-center'>40/-</td>
                                <td className='text-center'>847/-</td>
                            </tr>

                            <tr>
                                <td>G</td>
                                <td className='text-center'>54077300</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>953/-</td>
                                <td className='text-center'>48/-</td>
                                <td className='text-center'>1001/-</td>

                            </tr>
                            <tr>
                                <td>H</td>
                                <td className='text-center'>54077300</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>941/-</td>
                                <td className='text-center'>47/-</td>
                                <td className='text-center'>988/-</td>
                            </tr>
                            <tr>
                                <td>I</td>
                                <td className='text-center'>54077300</td>
                                <td className='text-center'>5</td>
                                <td className='text-center'>981/-</td>
                                <td className='text-center'>49/-</td>
                                <td className='text-center'>1030/-</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Decor