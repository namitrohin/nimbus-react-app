import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Random01, Random02, Random03 } from "../../utils/images";

function NimbuspostSOPs() {
  return (
    <Container fluid>
      <Row>
        <Col className="main_bar">
          <p className="text-light text-center fs-3 mt-3">Nimbuspost SOPs</p>
        </Col>
      </Row>
      <section>
        <Row className=' p-5 '>
          <Col >
            <Link>
              <Card style={{ backgroundColor: "#0d6efd", color: "white", width: '18rem', }}>
                <Card.Body>
                  <Card.Title>Nimbuspost<br /> Standard SOP</Card.Title>
                  <p className="text-light ">Click here</p>
                  <Card.Img  src={Random01} style={{ backgroundColor: "#0d6efd" }} alt="random1" />
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col >
            <Link>
              <Card style={{ width: '18rem', backgroundColor: "#20c997" }} >
                <Card.Body>
                  <Card.Title>Operational <br />SOP</Card.Title>
                  <p className="text-light">Click here</p>
                  <Card.Img src={Random02} style={{ backgroundColor: "#20c997" }} alt="random2" />
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col >
            <Link>
              <Card style={{ backgroundColor: "#19b5fe", color: "white", width: '18rem', }}>
                <Card.Body>
                  <Card.Title>Weight<br /> SOP</Card.Title>
                  <p >Click here</p>
                  <Card.Img src={Random03} style={{ backgroundColor: "#19b5fe" }}  alt="random3"/>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </section>

    </Container >
  );
}

export default NimbuspostSOPs;

