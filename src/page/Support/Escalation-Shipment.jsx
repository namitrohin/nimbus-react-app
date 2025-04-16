import React from "react";
import { IoMdDownload } from "react-icons/io";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Alert,
  Form,
  InputGroup,
  Tooltip,
  OverlayTrigger,
  FloatingLabel,
} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

export default function EscalationShipment() {

  return (
    <>
      <Container fluid>
        <Row >
          <Col style={{ backgroundColor: "#12263f", height: 70 }}>
            <section>
                <Col  md={6} className="border bg-white mt-4 rounded p-3 m-3">
                  <Col md={5} className="align-items-start  ">
                    <h4>Shipment Related Queries</h4>
                    <h6 className="text-muted">
                      Fill the form below to raise request.
                    </h6>
                  </Col>
                  <Col md={12}>
                    <Form>
                      <Col
                        className="rounded"
                        style={{ backgroundColor: "#dbe4ec" }}
                      >
                          <Col md={12}  className=" pb-4 mb-3 p-2 mt-4 pe-4 px-4" >
                            <Form.Text>AWB Numbers (Comma Separated)</Form.Text>
                            <FloatingLabel
                              controlId="floatingTextarea2"
                              label="Comma Separated"
                            >
                              <Form.Control
                                size="sm"
                                as="textarea"
                                placeholder="Comma Separated"
                                style={{ height: "100px" }}
                              />
                            </FloatingLabel>
                          </Col>
                      </Col>
                        <Col md={12} className="mb-3">
                          <FloatingLabel
                            controlId="floatingSelect"
                            label="Select Query"
                          >
                            <Form.Select aria-label="Floating label select example">
                              <option>Choose One</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </FloatingLabel>
                        </Col>
                        <Col md={12} className="mb-3">
                          <FloatingLabel
                            controlId="floatingTextarea"
                            label="Remarks (Optional)"
                            className="mb-3"
                          >
                            <Form.Control
                              size="sm"
                              as="textarea"
                              placeholder="Leave a comment here"
                            />
                            <Form.Text style={{ color: "#8b0001" }}>
                              300 / 300 Character(s) Remaining
                            </Form.Text>
                          </FloatingLabel>
                        </Col>
                      <Col md={12} className="mb-3">
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

                          <Form.Text className="text-muted" style={{fontSize:"11px"}}>
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
        </Row>
      </Container>
    </>
  );
}
