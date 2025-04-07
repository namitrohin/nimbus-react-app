import { Check } from "@mui/icons-material";
import { Radio } from "@mui/material";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";



export default function CreateForwardOrder() {
    const [showInput, setShowInput] = useState(false);

    const handleSwitchChange = (e) => {
        setShowInput(e.target.checked);
    };



    return (
        <>
            <Container fluid >
                <Row >
                    <Col style={{ backgroundColor: "#12263f", height: 85 }} >
                    </Col>
                </Row >

                <section className="fixedbox border shadow rounded">
                    <Row>
                        <Col className="p-4">
                            <Form>
                                <Card className="mb-3 ">
                                    <Card.Header className="bg-info text-white fw-bold">Order Information Create</Card.Header>
                                    <Card.Body>
                                        <Row >
                                            <Col md={3}>
                                                <Form.Label>Order ID</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name=""
                                                    placeholder="123456789"
                                                    required
                                                />
                                            </Col>
                                            <Col md={3}>
                                                <Form.Label>Order Type</Form.Label>
                                                <Form.Select
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
                                            <Card.Header className="  bg-info text-white fw-bold ">Shipping Information</Card.Header>
                                            <Card.Body>
                                                <Row>

                                                    <Col md={6}>
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="First Name"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="Last Name"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={12}>
                                                        <Form.Label>Company Name</Form.Label>
                                                        <Form.Control
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
                                                            type="text"
                                                            name=""
                                                            placeholder="Pin Code "
                                                            required

                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="City"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label> State</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="State"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={12}>
                                                        <Form.Label> Phone</Form.Label>
                                                        <Form.Control
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
                                            <Card.Header className="bg-info text-white fw-bold">Billing Information</Card.Header>
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
                                                            type="text"
                                                            name=""
                                                            placeholder="First Name"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="Last Name"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={12}>
                                                        <Form.Label>Company Name</Form.Label>
                                                        <Form.Control
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
                                                            type="text"
                                                            name=""
                                                            placeholder="Pin Code "
                                                            required

                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="City"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label> State</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="State"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label> Phone</Form.Label>
                                                        <Form.Control
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

                                <Card className="mb-3">
                                    <Card.Header className="bg-info text-white fw-bold"></Card.Header>
                                    <Card.Body className="" >
                                        <Row>
                                            <Col>
                                                <Form.Label>Product Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name=""
                                                    placeholder="Product Name"
                                                    className="form-control-sm"
                                                    required
                                                />
                                            </Col>
                                            <Col >
                                                <Form.Label>Quantity</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name=""
                                                    placeholder="Quantity"
                                                    className="form-control-sm"
                                                    required
                                                />

                                            </Col>
                                            <Col>
                                                <Form.Label>Amount (₹ PER QTY)</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name=""
                                                    placeholder="Amount"
                                                    className="form-control-sm"
                                                    required
                                                />
                                            </Col>
                                            <Col >
                                                <Form.Label>SUK (Optional)</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name=""
                                                    placeholder="SUK"
                                                    className="form-control-sm"
                                                />
                                            </Col>
                                            <Col className="d-flex align-items-center justify-content-end" >
                                                <Button className="mt-4 mx-4 btn-sm">+1</Button>
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Card>
                                <Row>
                                    <Col md={6}>
                                        <Card className="mb-3">
                                            <Card.Header className="bg-info text-white fw-bold"></Card.Header>
                                            <Card.Body>
                                                <Row>
                                                    <Col md={4}>
                                                        <Form.Label>Weigth</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="in grams"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Label>Dimensions</Form.Label>
                                                        <Form.Group className="input-group input-group mb-3">
                                                            <input type="text" className="form-control" placeholder="L" />
                                                            <input type="text" className="form-control" placeholder="B" />
                                                            <input type="text" className="form-control" placeholder="H" />
                                                        </Form.Group>

                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Label>Volumetric Weight</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="In grams"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </Col>



                                                </Row>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6}>
                                        <Card className="mb-3">
                                            <Card.Header className="bg-info text-white fw-bold"></Card.Header>
                                            <Card.Body>
                                                <Row>
                                                    <Col md={7}>
                                                        <Form.Label>Shipping Charger</Form.Label>
                                                        <Form.Control
                                                            type="amount"
                                                            name=""
                                                            placeholder="0"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </Col>

                                                    <Col md={7}>
                                                        <Form.Label>COD Charges </Form.Label>
                                                        <Form.Control
                                                            type="amount"
                                                            name=""
                                                            placeholder="In grams"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={7}>
                                                        <Form.Label>Tax Amount </Form.Label>
                                                        <Form.Control
                                                            type="amount"
                                                            name=""
                                                            placeholder="Tax Amount"
                                                            className="form-control"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={7}>
                                                        <Form.Label>Discount </Form.Label>
                                                        <Form.Control
                                                            type="amount"
                                                            name=""
                                                            placeholder="Discount Amount"
                                                            className="form-control mb-3"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={7} className="form-check form-switch">
                                                        <Form.Check
                                                            type="switch"
                                                            label="Collectable amount is different"
                                                            onChange={handleSwitchChange}
                                                        />

                                                        {showInput && (

                                                            <Form.Control
                                                                label="Enter new collectable amount"
                                                                type="text"
                                                                placeholder="Enter new collectable amount"
                                                                className="mt-2"
                                                            />

                                                        )}
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
                        </Col>
                    </Row>
                </section >
            </Container >

        </>
    )
}

