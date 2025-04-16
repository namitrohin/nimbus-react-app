import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";


export default function CreateOrder() {
    const [inputs, setInputs] = useState([""]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const HandleAddInput = () => {
        setInputs([...inputs, ""]);
    }

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
                                                <Card.Header className="form_bar text-white fw-bold">B2B Order Create</Card.Header>
                                                <Card.Body>
                                                    <Row >
                                                        <Col md={3}>
                                                            <Form.Label>Order ID<span className="text-danger">*</span></Form.Label>
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

                                                            >
                                                                <option>Prepaid</option>
                                                                <option>Postpaid</option>
                                                            </Form.Select>
                                                        </Col>
                                                    </Row>

                                                </Card.Body>
                                            </Card>
                                            <Row>
                                                <Col md={6} >
                                                    <Card className="mb-3">
                                                        <Card.Header className="  form_bar text-white fw-bold">Consignee Information</Card.Header>
                                                        <Card.Body>
                                                            <Row>

                                                                <Col md={6}>
                                                                    <Form.Label>Consignee Name<span className="text-danger">*</span></Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Enter Consignee Name"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>Company Name<span className="text-danger">*</span></Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Enter Consignee Comapny"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>Phone<span className="text-danger">*</span></Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Enter Consignee Phone"
                                                                        maxLength={10}
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>Email (Optional)</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="123456789"
                                                                    />
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Label>GST Number (Optional)</Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Enter GST Number"

                                                                    />
                                                                </Col>
                                                            </Row>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col md={6}>
                                                    <Card className="mb-3 ">
                                                        <Card.Header className="form_bar text-white fw-bold">Consignee Address</Card.Header>
                                                        <Card.Body>
                                                            <Row>

                                                                <Col md={12}>
                                                                    <Form.Label>Consignee Address <span className="text-danger">*</span></Form.Label>
                                                                    <textarea
                                                                        className="form-control"
                                                                        type="multiline"
                                                                        name=""
                                                                        placeholder="Enter Consignee Address"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Label>Pincode<span className="text-danger">*</span></Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Enter Consignee Pincode"
                                                                        required
                                                                    />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>City<span className="text-danger">*</span></Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Enter Consignee City"
                                                                        required

                                                                    />

                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Label>State<span className="text-danger">*</span></Form.Label>
                                                                    <Form.Control
                                                                        size="sm"
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Enter Consignee State"
                                                                        required

                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>

                                            <Card className="mb-3">
                                                <Card.Header className="form_bar text-white fw-bold"></Card.Header>
                                                <Card.Body className="" >
                                                    <Row>
                                                        <Col>
                                                            <Form.Label>Product Name<span className="text-danger">*</span></Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                placeholder="Product Name"
                                                                className="form-control-sm"
                                                                required
                                                            />
                                                        </Col>
                                                        <Col >
                                                            <Form.Label>HSN Code<span className="text-danger">*</span></Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                placeholder="HSN"
                                                                className="form-control-sm"
                                                                required
                                                            />

                                                        </Col>
                                                        <Col>
                                                            <Form.Label>LBH Unit<span className="text-danger">*</span></Form.Label>
                                                            <Form.Select
                                                                size="sm"
                                                                name="orderType"
                                                                className="form-select-sm"
                                                                required
                                                            >
                                                                <option>cm</option>
                                                                <option>inch</option>
                                                            </Form.Select>
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>LBH Unit<span className="text-danger">*</span></Form.Label>
                                                            <Form.Group size="sm" className="input-group input-group-sm mb-3">
                                                                <input type="text" className="form-control" placeholder="L" />
                                                                <input type="text" className="form-control" placeholder="B" />
                                                                <input type="text" className="form-control" placeholder="H" />
                                                            </Form.Group>

                                                        </Col>
                                                        <Col>
                                                            <Form.Label>Wt. Unit<span className="text-danger">*</span></Form.Label>
                                                            <Form.Select
                                                                size="sm"
                                                                name="orderType"
                                                                className="form-select-sm"
                                                                required
                                                            >
                                                                <option>gram</option>
                                                                <option>kg</option>
                                                            </Form.Select>
                                                        </Col>
                                                        <Col >
                                                            <Form.Label>Waight/Box<span className="text-danger">*</span></Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                placeholder="Waight/Box"
                                                                className="form-control-sm"
                                                                required
                                                            />
                                                        </Col>
                                                        <Col >
                                                            <Form.Label>Product Price/Box<span className="text-danger">*</span></Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                placeholder="Product Price/Box"
                                                                className="form-control-sm"
                                                                required
                                                            />
                                                        </Col>
                                                        <Col >
                                                            <Form.Label>Tax Rate (%)</Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                placeholder="Tax"
                                                                className="form-control-sm"
                                                            />
                                                        </Col>
                                                        <Col >
                                                            <Form.Label>No of Boxes<span className="text-danger">*</span></Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                placeholder="No"
                                                                className="form-control-sm"
                                                                required
                                                            />
                                                        </Col>
                                                        <Col className="d-flex align-items-center justify-content-end" >
                                                            <Button className=" btn-sm">+1</Button>
                                                        </Col>
                                                    </Row>

                                                </Card.Body>
                                            </Card>
                                            <Card className="mb-3">
                                                <Card.Header className="form_bar text-white fw-bold"></Card.Header>
                                                <Card.Body className="">
                                                    <Row>
                                                        <Col md={2}>

                                                            <Form.Label>Invoice Number<span className="text-danger">*</span></Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                placeholder="Invoice Number"
                                                                className="form-control-sm"
                                                                required
                                                            />
                                                        </Col>
                                                        <Col md={2}>
                                                            <Form.Label>Invoice Date<span className="text-danger">*</span></Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="date"
                                                                name=""
                                                                className="form-control-sm"
                                                                required
                                                            />
                                                        </Col>
                                                        <Col md={2}>
                                                            <Form.Label>Invoice Amount<span className="text-danger">*</span></Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                placeholder="Invoice Amount"
                                                                className="form-control-sm"
                                                                required
                                                            />
                                                        </Col>
                                                        <Col md={2}>
                                                            <Form.Label>EBN Number</Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                placeholder="EBN Number"
                                                                className="form-control-sm"

                                                            />
                                                        </Col>
                                                        <Col md={2}>
                                                            <Form.Label>ENB Expiry</Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="date"
                                                                name=""
                                                                className="form-control-sm"

                                                            />
                                                        </Col>
                                                        <Col className="d-flex align-items-center justify-content-end">
                                                            <Button className=" btn-sm" onClick={() => HandleAddInput}>+1</Button>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                            <Col md={12} className=" d-flex align-items-center justify-content-center">
                                                <Col md={2} className="d-flex align-items-end mt-4">
                                                    <Button size="sm" className="me-2 btn-secondary ">Back</Button>
                                                    <Button size="sm" type="submit" className="me-2 btn-success " onSubmit={handleSubmit} >Save</Button>
                                                </Col>
                                            </Col>
                                        </Form>
                                    </Row>
                                </Col>
                            </Col>

                        </section>
                    </Col>
                </Row>
            </Container>

        </>
    )
}