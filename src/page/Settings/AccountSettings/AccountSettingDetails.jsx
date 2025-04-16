import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

export default function AccountSettingDetails() {
  return (
    <>
      <Container fluid>
        <Row className="">
          <Col
            className="main_bar">
            <section >
              <Col md={6} className="border bg-white  rounded  mt-5 mb-5">
                <Row className=" p-3">
                  <Col md={5} className="align-items-start ">
                    <h4>Setting Details</h4>
                  </Col>
                  <Col md={12}>
                    <Form>
                      <Form.Group
                        className="mb-3 mt-3"
                        controlId="formGridAddress1"
                      >
                        <Form.Label> First Name </Form.Label>
                        <Form.Control
                          size="sm"
                          placeholder="First Name" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 mt-3"
                        controlId="formGridAddress1"
                      >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          size="sm"
                          placeholder="Last Name" />
                      </Form.Group>
                      <Col className="mb-3 d-flex gap-5">
                        <Form.Group as={Col} controlId="formGridContactName">
                          <Form.Label>Email </Form.Label>
                          <Form.Control
                            size="sm"
                            type="Email"
                            placeholder="Enter Email" />
                        </Form.Group>
                      </Col>

                      <Col className="mb-3 d-flex gap-5">
                        <Form.Group as={Col} controlId="formGridContactNo.">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            size="sm"
                            type="phone"
                            placeholder="Enter Phone No."
                          />
                        </Form.Group>
                      </Col>

                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label> Old Password</Form.Label>
                        <Form.Control
                          size="sm"
                          type="password"
                          placeholder="old Password"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          size="sm"
                          type="password"
                          placeholder="Enter Password"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          size="sm"
                          type="password"
                          placeholder="Enter Confirm Password"
                          required
                        />
                      </Form.Group>
                      <Button variant="success" size="sm" type="submit">
                        Save Changes
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </section>

          </Col>
        </Row>
      </Container>
    </>
  );
}
