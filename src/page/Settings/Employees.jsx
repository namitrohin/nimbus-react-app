import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { MdPeople } from "react-icons/md";
export default function Employees() {

    return (
        <>
            <Container fluid >
                <Row>
                    <Col className="main_bar">
                        <section>
                            <Col className="border bg-white mt-5 rounded">
                                <Row className="w-100 d-flex justify-content-between align-items-start p-3">
                                    <Col md={5} className="d-flex align-items-start gap-2">
                                        <MdPeople size={25} />  <h4> Employees</h4></Col>
                                    <Col md={4} className="d-flex gap-2 justify-content-end">
                                        <Button variant="light" style={{ backgroundColor: "white", borderColor: "whitesmoke" }} ><GoPlus /> Add New Employees</Button>
                                    </Col>
                                </Row>
                                <hr />
                                <Col className="px-3 pe-3">
                                    <Table hover responsive>
                                        <thead>
                                            <tr>
                                                <th> Name</th>
                                                <th>Email</th>
                                                <th>Activation Date</th>
                                                <th>Action</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>

                                        <tbody className="">
                                            <tr className="p-2">
                                                <td colSpan="5" className="text-center text-muted ">
                                                    No Records found
                                                </td>
                                            </tr>
                                        </tbody>

                                    </Table>
                                </Col>

                            </Col>
                        </section>

                    </Col>
                </Row>
            </Container>
        </>
    )
}