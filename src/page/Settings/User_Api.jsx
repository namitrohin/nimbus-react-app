import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

export default function User_Api() {

    return (
        <>
            <Container fluid >
                <Row>
                    <Col className="main_bar">
                        <section>
                            <Col className="border bg-white mt-5 rounded " >
                                <Row className="w-100 d-flex justify-content-between align-items-start p-3">
                                    <Col md={5} className="d-flex align-items-start gap-2 ">
                                        <PiBracketsCurlyBold size={25} />  <h4> Nimbuspost API</h4></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col className="w-100">
                                        <Card className="m-3 ">
                                            <Card.Body>
                                                <Card.Title>New API Document<span style={{ backgroundColor: "#0c9", fontSize: "15px", }} className=" m-2 rounded rounded-2 p-1 " >Recomended</span> </Card.Title>
                                                <hr />
                                                <Col >
                                                    <div className="d-flex justify-content-between">
                                                        <Card.Text>
                                                            API Documentation (NEW - One endpoint to Create Shipment, Order, Shipping label, Manifest ):
                                                            <Link to="" >Click Here</Link>
                                                        </Card.Text>

                                                        <Button className="">Generate Api User Credentials</Button>
                                                    </div>
                                                    <hr />

                                                </Col>
                                                <Col className="px-3 pe-3">
                                                    <Table hover responsive>
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Email </th>
                                                                <th>Password </th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                    </Table>
                                                </Col>

                                            </Card.Body>

                                        </Card>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="w-100">
                                        <Card className="m-3">
                                            <Card.Body>
                                                <Card.Title>Old API Document </Card.Title>
                                                <hr />
                                                <Card.Text>
                                                    API Documentation (Old - Seprate endpoints for orders and shipments):<Link to="">Click Here</Link>
                                                    <Link to="" >Click Here</Link>
                                                </Card.Text>
                                                <h6>Expand and automate your online business with Nimbuspost API.</h6>
                                                <hr />
                                                <Button>Generate API Key</Button>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="w-100">
                                        <Card className="m-3">
                                            <Card.Body>
                                                <Card.Title>B2B API Document </Card.Title>
                                                <hr />
                                                <Card.Text>
                                                    API Documentation (NEW - One endpoint to Create Shipment, Order, Shipping label, Manifest ):
                                                    <Link to="" >Click Here</Link>
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </section>

                    </Col>
                </Row>
            </Container>
        </>
    )
}