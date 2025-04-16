import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";



export default function CreateForwardDocument() {
    const [showInput, setShowInput] = useState(false);

    const handleSwitchChange = (e) => {
        setShowInput(e.target.checked);
    };


    return (
        <>
            <Container fluid >
                <Row >
                    <Col className="main_bar" >
                        <section >
                            <Col className="fixedbox border shadow rounded ">
                                <Col >
                                    <Row className=" d-flex justify-content-between align-items-start p-3  ">
                                        <Form>
                                            <Card className="mb-3 ">
                                                <Card.Header className="form_bar text-white fw-bold">Order Information Create</Card.Header>
                                                <Card.Body>
                                                    <Row >
                                                        <Col md={3}>
                                                            <Form.Label>Order ID</Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                placeholder="123456789"
                                                                required
                                                            />
                                                        </Col>
                                                        <Col md={3}>
                                                            <Form.Label>Order Type</Form.Label>
                                                            <Form.Select
                                                                size="sm"
                                                                name="orderType"
                                                                required
                                                            >
                                                                <option>Prepaid</option>
                                                                <option>Cash on Delivery</option>
                                                            </Form.Select>
                                                        </Col>
                                                    </Row>

                                                </Card.Body>
                                            </Card>
                                            <Row>
                                                <Col md={6} >
                                                    <Card className="mb-3">
                                                        <Card.Header className="  form_bar text-white fw-bold ">Shipping Information</Card.Header>
                                                        <Card.Body>
                                                            <Row>

                                                                <Col md={6}>
                                                                    <Form.Label>First Name</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="First Name"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>Last Name</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Last Name"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Label>Company Name</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Company Name"

                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>Address </Form.Label>
                                                                    <textarea
                                                                        className="form-control"
                                                                        type="multiline"
                                                                        name=""
                                                                        placeholder=" Address"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>Address 2 (Optional)</Form.Label>
                                                                    <textarea
                                                                        className="form-control"
                                                                        type="multiline"
                                                                        name=""
                                                                        placeholder=" Address 2"

                                                                    />
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Label>Pin Code</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Pin Code "
                                                                        required

                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>City</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="City"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label> State</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="State"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Label> Phone</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Phone"
                                                                        required
                                                                        maxLength={10}
                                                                    />
                                                                </Col>
                                                            </Row>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col md={6}>
                                                    <Card className="mb-3 ">
                                                        <Card.Header className="form_bar text-white fw-bold">Billing Information</Card.Header>
                                                        <Card.Body>
                                                            <Row>
                                                                <Col md={12}>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                                                                        <label className="form-check-label font-italic mb-2 font-weight-light">
                                                                            Check this box if Shipping and Billing Information are the same
                                                                        </label>
                                                                    </div>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>First Name</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="First Name"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>Last Name</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Last Name"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Label>Company Name</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Company Name"

                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>Address </Form.Label>
                                                                    <textarea
                                                                        className="form-control"
                                                                        type="multiline"
                                                                        name=""
                                                                        placeholder=" Address"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>Address 2 (Optional)</Form.Label>
                                                                    <textarea
                                                                        className="form-control"
                                                                        type="multiline"
                                                                        name=""
                                                                        placeholder=" Address 2"

                                                                    />
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Label>Pin Code</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Pin Code "
                                                                        required

                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>City</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="City"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label> State</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="State"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label> Phone</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Phone"
                                                                        maxLength={10}
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label> GST Number</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="GST Number"
                                                                        required
                                                                    />
                                                                </Col>

                                                            </Row>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <Col md={12} className=" d-flex align-items-center justify-content-center">
                                                <Col md={2} className="d-flex align-items-end mt-4">
                                                    <Button type="" className="me-2 btn-secondary ">Back</Button>
                                                    <Button type="submit" className="me-2 btn-success " >Save</Button>
                                                </Col>
                                            </Col>
                                        </Form>
                                    </Row>
                                </Col>
                            </Col>
                        </section >
                    </Col>
                </Row >
            </Container >

        </>
    )
}

