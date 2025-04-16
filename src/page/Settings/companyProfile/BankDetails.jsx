import React from "react";
import { Button, Col, Row, Form, Table } from "react-bootstrap";

export default function BankDetails() {
  return (
    <>
      <Row>
        <Col md={12}>
          <Form>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Account Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=""
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formExtra1">
                  <Form.Label>Account No. <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder=""
                    required
                    type="text"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(
                        /\D/g,
                        ""
                      ); // removes non-digits
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formFile" className="">
                  <Form.Label>Upload Cancelled Cheque <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    size="sm" type="file" required />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Bank Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=""
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formExtra1">
                  <Form.Label>Bank Branch <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=""
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Account Type <span className="text-danger">*</span></Form.Label>
                <Form.Select
                  size="sm"
                  aria-label="Default select example"
                  required
                >
                  <option>Select Account Type</option>
                  <option value="1">Saving Account</option>
                  <option value="2">Current Account</option>
                </Form.Select>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formExtra2">
                  <Form.Label>IFSC Code <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder=""
                    required
                  />
                </Form.Group>
              </Col>

            </Row>


            <Button variant="success" size="sm" type="submit">
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}