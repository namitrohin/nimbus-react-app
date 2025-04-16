import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { MdWebhook } from "react-icons/md";
export default function WebHook() {

    return (
        <>
            <Container fluid >
                <Row>
                    <Col className="main_bar">
                        <section>
                            <Col className="border bg-white mt-5 rounded">
                                <Row className="w-100 d-flex justify-content-between align-items-start p-3">
                                    <Col md={5} className="d-flex align-items-start gap-2">
                                        <MdWebhook size={25} />  <h4>Webhooks</h4></Col>

                                    <Col md={4} className="d-flex gap-2 justify-content-end">
                                        <Button variant="light" style={{ backgroundColor: "white", borderColor: "whitesmoke" }}><GoPlus /> New Channnel</Button>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col><hr />
                                        <h6 className="p-3">Webhooks are event notifications sent to URLs of your choice. Use these to receive real time shipment updates in your system.</h6>
                                    </Col>
                                </Row>
                                <Col className="px-3 pe-3">
                                    <Table bordered hover responsive>
                                        <thead>
                                            <tr>
                                                <th>Name </th>
                                                <th>Url </th>
                                                <th>Status</th>
                                                <th>Action</th>
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