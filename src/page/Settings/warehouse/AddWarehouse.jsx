import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

export default function AddWareHouse() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
         className="main_bar"
          >
            <section>
              <Col md={6} className="border bg-white mt-4 rounded p-3 m-3 ">
                <Col md={5} className="align-items-start">
                  <h4>Create Warehouse</h4>
                </Col>
                <Col md={12}>
                  <Form>
                    <Form.Group
                      className="mb-3 mt-3"
                      controlId="formGridAddress1"
                    >
                      <Form.Label>
                        Warehouse Name <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control placeholder="Warehouse Name" required />
                    </Form.Group>
                    <Col className="mb-3 d-flex gap-5">
                      <Form.Group as={Col} controlId="formGridContactName">
                        <Form.Label>
                          Contact Name <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Contact Name"
                          required
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridContactNo.">
                        <Form.Label>
                          Contact No. <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="phone"
                          placeholder="Enter Contact No."
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>
                        Address Line 1 <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control placeholder="Address Line 1 " required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>
                        Address Line 2 <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control placeholder="Address Line 1 " required />
                    </Form.Group>

                    <Col className="mb-3 d-flex gap-5">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>
                          City <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control required />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>
                          State <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Select defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formPincode"
                    >
                      <Form.Label>
                        Pincode <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control required />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridZip"
                    >
                      <Form.Label>GST Number </Form.Label>
                      <Form.Control Placeholder="GST Number" />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridZip"
                    >
                      <Form.Label>
                        Support Email (If any, Used on Label)
                      </Form.Label>
                      <Form.Control Placeholder="Enter Support Email" />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridZip"
                    >
                      <Form.Label>
                        Support Phone (If any, Used on Label)
                      </Form.Label>
                      <Form.Control Placeholder="Enter Support Phone" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Hide warehouse address in label"
                      />
                      <Form.Label
                        className="text-muted"
                        style={{ fontSize: "12px" }}
                      >
                        Note: For couriers Fedex, DTDC and Ekart warehouse
                        address will be displayed even if this setting is
                        enabled.
                      </Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Hide warehouse mobile number in label"
                        reuired
                      />
                      <Form.Label
                        className="text-muted"
                        style={{ fontSize: "12px" }}
                      >
                        Always visible for couriers Fedex, DTDC and Ekart
                      </Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Hide product details in label"
                      />
                      <Form.Label
                        className="text-muted"
                        style={{ fontSize: "12px" }}
                      >
                        Always visible for couriers Fedex, DTDC and Ekart
                      </Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Hide Company name on invoice"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Hide GST number on label"
                      />
                    </Form.Group>
                    <Button variant="success" type="submit">
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
