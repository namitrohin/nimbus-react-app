import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function PriceCalculator() {
    const [activeTab, setActiveTab] = useState('calculator');
    const tabs = [
        { name: 'calculator', label: 'Price Calculator', link: '' },
        { name: 'cod', label: 'COD Remittance', link: '', },
    ]
    return (
        <>
            sart
            <Container fluid>
                <Row className=" justify-content-between">
                    <Col md={6} style={{ backgroundColor: "#12263f", height: 50, width: 620 }} >
                        <h4 className="text-light text-center align-items-center mt-2 mb-4">Shipping Rates Calculator</h4>
                        <div className="p-3">
                            {activeTab === 'calculator' && (
                                <Col className="d-flex">
                                    <Col md={4}>
                                        <Form.Label>Pick-up Pincode</Form.Label>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name=""
                                            placeholder="Pick-up Pincode" />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Label>Delhivery Pincode</Form.Label>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name=""
                                            placeholder="Delhivery Pincode" />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Label>Weight</Form.Label>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            name=""
                                            placeholder="in Kg" />
                                    </Col>
                                    <br />

                                    <Col>
                                        <Form.Label>Wherehouse </Form.Label>
                                        <Form.Select size="sm">
                                            <option>select</option>
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Label>Wherehouse </Form.Label>
                                        <Form.Select size="sm">
                                            <option>select</option>
                                        </Form.Select>
                                    </Col>


                                </Col>
                            )}
                            {activeTab === 'cod' && (
                                <div>

                                </div>
                            )}
                        </div>
                    </Col>
                    <Col md={6} style={{ backgroundColor: "#12263f", height: 50, width: 620 }}>
                        <h4 className="text-light text-center align-items-center mt-2">Pricing Plans</h4>
                    </Col>
                </Row>
            </Container>
        </>
    );
}