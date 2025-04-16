import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function ManifestShipment() {

    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(true);
    const [selected, setSelected] = useState('All Order');

    const HandleClear = () => {
    }
    const handleClose = () => {
        setShowForm(!showForm);
    };
    return (
        <>
            <Container fluid >
                <Row >
                    <Col className="main_bar">
                        <section>
                            <Col className="border bg-white mt-5 rounded" >
                                <Col>
                                    <Row className="w-100 d-flex justify-content-between align-items-start  p-3 ">
                                        <Col md={5} className=" d-flex align-items-start gap-2 " >
                                            <RiCheckboxMultipleBlankFill size={25} />
                                            <h4 > Shipment Manifest</h4>
                                        </Col>

                                        <Col md={4} className="d-flex gap-2 justify-content-end " >
                                            {/* <Button type="submit" variant="light" size="sm" className="btn-outline-dark">MOHIT</Button> */}
                                            <Button variant="light" className="btn-outline-dark btn-sm">Operational SOP</Button>
                                            <Button variant="light" className={showForm ? " btn-outline-dark btn-sm" : "btn btn-light btn-outline-dark btn-sm"} onClick={handleClose}>{showForm ? "⨯ Close" : "▼ Filter"}</Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <section className="mx-3">
                                    {showForm && (
                                        <Form>
                                            <Row className="mb-3 ">
                                                <Col md={2}>
                                                    <Form.Label>From Date:</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="date"
                                                        name=""
                                                        placeholder="Date" />
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Pickup ID(s)</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Order id(s)" />
                                                </Col>
                                                <Col >
                                                    <Form.Label>Courier Name</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col >
                                                    <Form.Label>Wherehouse </Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>select</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Pickup   </Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>select</option>
                                                    </Form.Select>
                                                </Col>


                                                <Col >
                                                    <Form.Label>Order Type</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2} className="d-flex align-items-end">
                                                    <Button type="button" className="me-2 btn-success btn-sm" >Apply</Button>
                                                    <Button type="button" className="me-2 btn-danger btn-sm" onClick={HandleClear}>Clear</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    )}
                                    <hr />

                                    <section className="">
                                        <Row>
                                            <Col >
                                                <p className=" shadow p-3"><b>Pick up Booking Cutoff: </b>Bluedart :<b> 12 Noon</b>, ATS :<b> 12 Noon</b>, Ekart :<b> 10:30 AM</b>, XpressBees :<b> 11:00 AM</b>, Ecom :<b> 11:00 AM</b>,
                                                    Smartr :<b> 12 Noon</b>, Shadowfax :<b> 12 Noon</b>, Delhivery :<b> 12 Noon</b>, DTDC :<br /><b> 12 Noon</b></p>

                                            </Col>
                                        </Row>
                                    </section>
                                </section>
                            </Col>
                        </section>
                    </Col>
                </Row >
            </Container >

        </>
    )
}