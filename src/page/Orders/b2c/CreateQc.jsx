import { Label } from "@mui/icons-material";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, FormCheck, Row } from "react-bootstrap";



export default function CreateQc() {
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
                                <Row>
                                    <Col md={6} >
                                        <Card className="mb-3 shadow">
                                            <Card.Header className="  bg-info text-white fw-bold ">Shipping Information</Card.Header>
                                            <Card.Body>
                                                <Row>
                                                    <Col md={6}>
                                                        <Form.Label>Order ID</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="123456789"
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label>Order Type</Form.Label>
                                                        <Form.Select
                                                            name="orderType"
                                                            required
                                                        >
                                                            <option>Reverse</option>
                                                        </Form.Select>
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
                                        <Card className="mb-5 shadow ">
                                            <Card.Header className="bg-info text-white fw-bold">Product Information</Card.Header>
                                            <Card.Body>
                                                <Row>

                                                    <Col md={6}>
                                                        <Form.Label>Product Name </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="Product Name "
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Label>Amount</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            placeholder="Amount"
                                                            required
                                                        />
                                                    </Col>

                                                </Row>
                                            </Card.Body>
                                        </Card>
                                        <Row>
                                            <Col md={12}>
                                                <Card className="shadow">
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
                                        </Row>
                                    </Col>
                                    <Col className="form-check form-switch">
                                        <Card className=" shadow ">
                                            <Card.Header className="bg-info text-white fw-bold">QC Questions</Card.Header>
                                            <Card.Body>

                                                <Form.Check
                                                    type="switch"
                                                    label="Collectable amount is different"
                                                    onChange={handleSwitchChange}
                                                />

                                                {showInput && (
                                                    <>
                                                        <Row >
                                                            <Col md={6} className="mb-5  ">
                                                                <Row>
                                                                    <Col md={12} className="mb-4   ">
                                                                        <Form.Label>Order Type</Form.Label>
                                                                        <Form.Select
                                                                            name="orderType"
                                                                            required
                                                                        >
                                                                            <option>Select</option>
                                                                        </Form.Select>
                                                                    </Col>
                                                                    <Col md={6} className="">
                                                                        <Form.Group>
                                                                            <Form.Label>
                                                                                <strong>Used Product</strong>
                                                                            </Form.Label>
                                                                            <div>
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="Yes"
                                                                                    name="usedProduct"
                                                                                    value="yes"
                                                                                    className="mx-4"
                                                                                    inline
                                                                                />
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="No"
                                                                                    name="usedProduct"
                                                                                    value="no"

                                                                                    inline
                                                                                />
                                                                            </div>
                                                                        </Form.Group>
                                                                    </Col>

                                                                    <Col md={6}>
                                                                        <Form.Group>
                                                                            <Form.Label>
                                                                                <strong>Damaged Product</strong>
                                                                            </Form.Label>
                                                                            <div>
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="Yes"
                                                                                    name="damagedProduct"
                                                                                    value="yes"
                                                                                    className="mx-4 mb-3"
                                                                                    inline
                                                                                />
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="No"
                                                                                    name="damagedProduct"
                                                                                    value="no"

                                                                                    inline
                                                                                />
                                                                            </div>
                                                                        </Form.Group>

                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <Form.Group>
                                                                            <Form.Label>
                                                                                <strong> Match Brand Name</strong>
                                                                            </Form.Label>
                                                                            <div>
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="Yes"
                                                                                    name="damagedProduct"
                                                                                    value="yes"
                                                                                    className="mx-4"
                                                                                    inline
                                                                                />
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="No"
                                                                                    name="damagedProduct"
                                                                                    value="no"

                                                                                    inline
                                                                                />
                                                                            </div>
                                                                        </Form.Group>

                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <Form.Group>
                                                                            <Form.Label>
                                                                                <strong>Match Product Size</strong>
                                                                            </Form.Label>
                                                                            <div>
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="Yes"
                                                                                    name="damagedProduct"
                                                                                    value="yes"
                                                                                    className="mx-4"
                                                                                    inline
                                                                                />
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="No"
                                                                                    name="damagedProduct"
                                                                                    value="no"

                                                                                    inline
                                                                                />
                                                                            </div>
                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <Form.Group>
                                                                            <Form.Label>
                                                                                <strong>Match Product Color</strong>
                                                                            </Form.Label>
                                                                            <div>
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="Yes"
                                                                                    name="damagedProduct"
                                                                                    value="yes"
                                                                                    className="mx-4 "
                                                                                    inline
                                                                                />
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="No"
                                                                                    name="damagedProduct"
                                                                                    value="no"
                                                                                    className="mb-4"
                                                                                    inline
                                                                                />
                                                                            </div>
                                                                        </Form.Group>

                                                                    </Col>


                                                                </Row>
                                                            </Col>


                                                            <Col md={6} className="">
                                                                <Form.Label>
                                                                    <strong>Product Reference Images</strong>
                                                                </Form.Label>
                                                                <Col md={6}>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="file"
                                                                        accept="image/*"
                                                                        className="mb-4"
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="file"
                                                                        accept="image/*"
                                                                        className="mb-4"
                                                                    />                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="file"
                                                                        accept="image/*"
                                                                        className="mb-4"
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="file"
                                                                        accept="image/*"
                                                                    />
                                                                </Col>
                                                            </Col>
                                                        </Row>
                                                    </>


                                                )}


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
                        </Col >
                    </Row >
                </section >
            </Container >
        </>
    )
}
