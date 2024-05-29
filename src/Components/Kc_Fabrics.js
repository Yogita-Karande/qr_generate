import { Col, Container, Row, Table } from "react-bootstrap"

function Kc_Fabrics() {
    return (
        <Container className='min-vh-100 pt-5'>
            <Row>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr className='text-center'>
                                <th>CTLG Name</th>
                                <th>WIDTH(CMS)</th>
                                <th>HSN Code</th>
                                <th>RRP RATE INCL GST</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>CONCEPT</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>60019200</td>
                                <td className='text-center'>657</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>323016, 323042, 323047, 323049, 323061, 323078, 323102, 323106, 323114, 323122, 323139, 323146</td>
                            </tr>

                            <tr>
                                <td>FIRENZE SHEER</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>54079200</td>
                                <td className='text-center'>645</td>
                            </tr>

                            <tr>
                                <td colSpan={4}>33137, 33138, 33139, 33140, 33141, 33142</td>
                            </tr>

                            <tr>
                                <td>FIRENZE MAIN</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>54079200</td>
                                <td className='text-center'>633</td>
                            </tr>

                            <tr>
                                <td colSpan={4}>33101, 33102, 33103, 33104, 33105, 33106, 33107, 33108, 33109, 33110, 33111, 33112, 33113, 33114, 33115, 33116, 33117, 33118, 33119, 33120, 33121, 33122, 33123, 33124, 33125, 33126, 33127, 33128, 33129, 33130,33131, 33132, 33133, 33134, 33135, 33136</td>
                            </tr>

                            <tr>
                                <td>FLAME</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>54079200</td>
                                <td className='text-center'>650</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>30748, 30749, 30750, 30751, 30752, 30753</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

    )
}

export default Kc_Fabrics