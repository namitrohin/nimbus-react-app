import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function NimbuspostSOPs() {
  return (
    <Container fluid>
    <Row>
  <Col className="homeheader d-flex justify-content-center align-items-center text-center">
    <h2>Nimbuspost SOPs</h2>
  </Col>
</Row>


      <Row className='pt-4 d-flex align-items-center gap-3'>

        <Card style={{ width: '18rem', backgroundColor: "#0d6efd", color: "white",marginLeft:"280px"  }}>
          <Card.Body>
            <Card.Title>Nimbuspost<br /> Standard SOP</Card.Title>
            <Button variant="light" >Click here</Button>
          <Card.Img  src="src/Assests/Support/random-01.svg" style={{ backgroundColor: "#0d6efd" }} />
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', backgroundColor: "#20c997", color: "white" }}>
          <Card.Body>
            <Card.Title>Operational <br />SOP</Card.Title>
            <Button variant="light" >Click here</Button>
          <Card.Img  src="src/Assests/Support/random-02.svg" style={{ backgroundColor: "#20c997" }} />
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', backgroundColor: "#19b5fe", color: "white" }}>
          <Card.Body>
            <Card.Title>Weight<br /> SOP</Card.Title>
            <Button variant="light">Click here</Button>
          <Card.Img  src="src/Assests/Support/random-03.svg" style={{ backgroundColor: "#19b5fe" }} />
          </Card.Body>
        </Card>

      </Row>
    </Container>
  );
}

export default NimbuspostSOPs;

