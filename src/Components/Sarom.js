import { Col, Container, Row, Table } from "react-bootstrap"

function Sarom() {
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
                                <td>ABELLONE</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>60019200</td>
                                <td className='text-center'>657</td>
                            </tr>

                            <tr>
                                <td colSpan={4}>ABELLONE - 302, ABELLONE - 307, ABELLONE - 308, ABELLONE - 401, ABELLONE - 404, ABELLONE - 406, ABELLONE - 408</td>
                            </tr>

                            <tr>
                                <td>ALEX</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>54079200</td>
                                <td className='text-center'>645</td>
                            </tr>

                            <tr>
                                <td colSpan={4}>ALEX - 304, ALEX - 312, ALEX - 314, ALEX - 315, ALEX - 316, ALEX - 317</td>
                            </tr>

                            <tr>
                                <td>ALEX</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>54079200</td>
                                <td className='text-center'>633</td>
                            </tr>

                            <tr>
                                <td colSpan={4}>ALEX - 403</td>
                            </tr>

                            <tr>
                                <td>ASABA</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>54079200</td>
                                <td className='text-center'>650</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>ASABA - 720, ASABA - 726</td>
                            </tr>
                            <tr>
                                <td>CASSIA</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>54079200</td>
                                <td className='text-center'>650</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>CASSIA - 104, CASSIA - 105, CASSIA - 106, CASSIA - 110, CASSIA - 124, CASSIA - 128, CASSIA - 131, CASSIA - 160</td>
                            </tr>

                            <tr>
                                <td>KIARA</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>54079200</td>
                                <td className='text-center'>650</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>KIARA - 103, KIARA - 107</td>
                            </tr>
                            <tr>
                                <td>MYRA</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>54079200</td>
                                <td className='text-center'>650</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>101, 102, 103, 104, 105, 106, 107, 201, 202, 203, 204, 205, 206, 207, 301, 302, 303, 304, 305, 306, 307, 401, 402, 403, 404, 405, 406, 407</td>
                            </tr>
                            <tr>
                                <td>TIFFANY</td>
                                <td className='text-center'>140</td>
                                <td className='text-center'>54079200</td>
                                <td className='text-center'>650</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>TIFFANY - 904, TIFFANY - 916, TIFFANY - 921, TIFFANY - 924, TIFFANY - 927, TIFFANY - 933, TIFFANY - 934</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

    )
}

export default Sarom