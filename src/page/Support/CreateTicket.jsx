import React from "react";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { VscCallIncoming } from "react-icons/vsc";
import { TbMessage2Question } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Random01, Random02, Random03, Random04, Random05, Random07 } from "../../utils/images";

function CreateTicket() {
  return (
    <Container fluid>
      <Row>
        <Col className="main_bar" >
          <p className="text-light text-center fs-3 mt-3">Having a Query?</p>
        </Col>
      </Row >
      <section>
        <Col>
          <Col className=" d-flax  justify-content-center  border bg-light text-center mt-5 mx-5 " style={{ width: 1120 }} >
            <p className="mt-1">For Urgent Support (24x7) Connect us at 7669133030 | Email : care@nimbuspost.com <TbMessage2Question /></p>
          </Col>
        </Col>
        <Row className='  justify-content-start align-items-center p-4 '>
          <h3 className="  align-items-center text-center mb-3" >Select Escalation Type</h3>
          <Col md={3}>
            <Link to="/Create-ticket/EscalationShipment" >
              <Card style={{ width: '18rem', backgroundColor: "#0d6efd", color: "white" }} className="mb-4">
                <Card.Body>
                  <Card.Title>Shipments related<br /> queries</Card.Title>
                  <Button variant="light" >Escalate here</Button>
                  <Card.Img  src={Random01} style={{ backgroundColor: "#0d6efd" }}  alt="random01" />
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link>
              <Card style={{ width: '18rem', backgroundColor: "#20c997", color: "white" }} className="mb-4">
                <Card.Body>
                  <Card.Title>Pickups related  <br />queries</Card.Title>
                  <Button variant="light" >Escalate here</Button>
                  <Card.Img  src={Random02} style={{ backgroundColor: "#20c997" }} alt="random02" />
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link to="/Create-ticket/BillingAndRemittance">
              <Card style={{ width: '18rem', backgroundColor: "#19b5fe", color: "white" }} className="mb-4">
                <Card.Body>
                  <Card.Title>Billing And  <br />Remittance </Card.Title>
                  <Button variant="light">Escalate here</Button>
                  <Card.Img  src={Random03} style={{ backgroundColor: "#19b5fe" }}  alt="random03"/>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link to="/weight-reco">
              <Card style={{ width: '18rem', backgroundColor: "#dc3545", color: "white" }} className="mb-4">
                <Card.Body>
                  <Card.Title>Weight related<br /> queries</Card.Title>
                  <Button variant="light">Escalate here</Button>
                  <Card.Img src={Random04} style={{ backgroundColor: "#dc3545" }}  alt="random04"/>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link to="/Create-ticket/TechQueries">
              <Card style={{ width: '18rem', backgroundColor: "#8b73cf", color: "white" }} className="mb-4">
                <Card.Body>
                  <Card.Title>Tech related<br /> queries</Card.Title>
                  <Button variant="light" >Escalate here</Button>
                  <Card.Img src={Random05} style={{ backgroundColor: "#8b73cf" }} alt="random05" />
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link to="/support/training">
              <Card style={{ width: '18rem', backgroundColor: "#a6b1c8", color: "white" }} className="mb-4">
                <Card.Body>
                  <Card.Title>Dashboard<br /> Training</Card.Title>
                  <Button variant="light" >Schedule it here</Button>
                  <Card.Img  src={Random07} style={{ backgroundColor: "#a6b1c8" }}  alt="random07"/>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={5} style={{ width: "20rem", marginBottom: "50px" }} className="mb-4">
            <Card style={{ width: '480px', backgroundColor: "#0c9", color: "white", height: '320px' }}>
              <Card.Body>

                <Card.Title> <VscCallIncoming /> Request a callback</Card.Title>
                <Form>
                  <Row>
                    <Form.Group as={Col} controlId="formGridPhone">
                      <Form.Label>Your Mobile No.</Form.Label>
                      <Form.Control size="sm" type="phone" placeholder="Enter Mobile No." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhone">
                      <Form.Label>Query Related To:</Form.Label>
                      {/* <Form.Control type="phone" placeholder="Enter Mobile No." /> */}
                      <Form.Select size="sm" aria-label="Default select example">

                        <option value="1">Shipment</option>
                        <option value="2">Pickup</option>
                        <option value="3">Billing & Remittance</option>
                        <option value="3">Weight</option>
                        <option value="3">Tech</option>
                        <option value="3">Other</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Add your message</Form.Label>
                      <Form.Control size="sm" as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ width: '120px', marginLeft: "337px" }}>
                      Submit
                    </Button>

                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container >
  );
}

export default CreateTicket;

