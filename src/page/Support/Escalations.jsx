import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Alert, Form } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { LuArrowDown } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { Link } from 'react-router-dom';




export default function Escalations() {
  const [showForm, setShowForm] = useState(false);
  const handleClose = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="main_bar">
            <section>
              <Col className="border bg-white mt-5 rounded" >
                <Col >

                  <Row className="w-100 d-flex justify-content-between align-items-start p-3 ">

                    <Col md={5} className=" d-flex align-items-start gap-2 " >
                      <RiCheckboxMultipleBlankFill size={25} />
                      <h4>Escalations</h4>
                    </Col>
                    <Col md={4} className="d-flex gap-2 justify-content-end " >
                      <Button variant="light" className=" btn-outline-dark btn-sm"><LuArrowDown />Export</Button>
                      <Button variant="light" className=" btn-outline-dark btn-sm" as={Link}  to="/support/create-ticket"   ><GoPlus />New Escalation</Button>
                      <Button variant="light" className={showForm ? " btn-outline-dark btn-sm" :
                        "btn-outline-dark btn-sm"} onClick={handleClose}>{showForm ? "⨯ Close" : "▼ Filter"}</Button>
                    </Col>
                  </Row>
                  <section className="mx-3 mt-3">
                    {showForm && (
                      <Form>
                        <Row>
                          <Col>
                            <div>
                              <Form.Label>From Date:</Form.Label><br />
                              <Form.Control
                                size="sm"
                                type="date"
                                name=""
                                placeholder="Date" />
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <Form.Label>Escalation ID(s):</Form.Label><br />
                              <Form.Control
                                type="text"
                                name=""
                                placeholder="Escalation ID" />
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <Form.Label>AWB No(s):</Form.Label><br />
                              <Form.Control
                                type="text"
                                name=""
                                placeholder="AWB No(s)"
                              />
                            </div>
                          </Col>
                          <Col>

                            <Form.Label>Type:</Form.Label><br />
                            <Form.Select>

                              <option>select</option>
                            </Form.Select>

                          </Col>
                          <Col>
                            <Form.Label>Status:</Form.Label><br />
                            <Form.Select>

                              <option>select</option>
                            </Form.Select>
                          </Col>


                          <Col className="d-flex align-items-end justify-content-end mt-4">
                            <Button type="button" className="me-2 btn-success btn-sm" >Apply</Button>
                            <Button type="button" className="me-2 btn-danger btn-sm">Clear</Button>
                          </Col>
                        </Row>
                      </Form>
                    )}

                    <hr />
                    <Row>
                      <Col>#</Col>
                      <Col>Escalation Type</Col>
                      <Col>Details</Col>
                      <Col>Date</Col>
                      <Col>Status</Col>
                      <Col>Action</Col>
                    </Row>
                    <hr />

                    <span className="d-flex">Showing 1 to 50 of 0 entries</span>


                  </section>
                </Col >
              </Col>
            </section>
          </Col>
        </Row>
      </Container >

    </>
  )
}
