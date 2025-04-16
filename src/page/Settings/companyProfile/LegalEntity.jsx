import React from "react";
import { Button, Col, Row, Form } from "react-bootstrap";

export default function LegalEntity() {
    return (
        <>
            <Row>
                <Col><Form>
                    <Form.Group className="align-items-center ">
                        <Form.Label column sm="2">
                            GST Number <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm="3" className="d-flex">

                            <Form.Control
                                size="sm" type="text" placeholder="Enter GST Number"
                                className="me-2" required />
                            <Button variant="success" size="sm">Search</Button>
                        </Col>
                    </Form.Group>
                </Form>
                </Col>

            </Row>
        </>
    )
}