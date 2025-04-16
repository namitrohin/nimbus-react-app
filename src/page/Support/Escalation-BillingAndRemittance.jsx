import React from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FloatingLabel,
} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

export default function BillingAndRemittance() {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col style={{ backgroundColor: "#12263f", height: 85 }}>
                        <section >
                            <Col md={6} className="border bg-white mt-4 rounded p-3 m-3 "
                            >
                                <Col md={5} className="align-items-start">

                                    <h4>Billing Related Queries
                                    </h4>
                                    <span className="text-muted">Fill the form below to raise request.</span>
                                </Col>
                                <Col md={12} style={{ backgroundColor: "#dbe4ec" }} className="p-3 rounded">
                                    <Form>
                                         <Col md={12} className="mb-3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="Subject"
                                                />
                                                <label htmlFor="floatingInputCustom">Subject</label>
                                            </Form.Floating>
                                        </Col>
                                        <Col md={12}>

                                            <FloatingLabel
                                                controlId="floatingTextarea"
                                                label="Add your query"
                                                className="mb-3"
                                            >
                                                <Form.Control
                                                    size="sm"
                                                    as="textarea"
                                                    placeholder="Add here"
                                                />
                                                <Form.Text style={{ color: "#8b0001" }}>
                                                    300 / 300 Character(s) Remaining
                                                </Form.Text>
                                            </FloatingLabel>
                                            <Form.Text className="text-muted">Please mention AWB Numbers for better response (if available)</Form.Text>
                                        </Col>
                                    <Col md={12} className="mb-3 pt-2">
                                        <Form.Group
                                            controlId="formFileMultiple"
                                            className="mb-3"
                                        >
                                            <Form.Label>Attachments (If any)</Form.Label>
                                            <div
                                                style={{
                                                    border: "1px solid #6c757d",
                                                    borderRadius: "5px",
                                                }}
                                            >
                                                {" "}
                                                <div
                                                    className="d-flex justify-content-center p-3"
                                                    style={{
                                                        border: "2px dashed #6c757d",
                                                        borderRadius: "5px",
                                                        margin: "5px",
                                                    }}
                                                >
                                                    <Form.Control
                                                        size="sm"
                                                        type="file"
                                                        multiple
                                                        style={{
                                                            maxWidth: "100%",
                                                            border: "none",
                                                            textAlign: "center",
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <Form.Text className="text-muted" style={{ fontSize: "11px" }}>
                                                Maximum file size : 5 MB
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Button variant="primary" size="sm" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                    </Col>


                </section>
            </Col>
        </Row >
            </Container >
        </>
    );
}
