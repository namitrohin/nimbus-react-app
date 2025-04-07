import React from "react";
import { Container, Row, Col, Card, Button,Form } from 'react-bootstrap';
import { VscCallIncoming } from "react-icons/vsc";
import { TbMessage2Question } from "react-icons/tb";

function CreateTicket() {
  return (
    <Container fluid>
    <Row>
  <Col md={12} className="homeheader d-flex justify-content-center align-items-center text-center">
    <h3 >Have a query?</h3>
  </Col>
</Row >
<Row>
    <Col md={12} className=" d-flex justify-content-center align-items-center text-center">
    <Card style={{ width: '975px', height:'80px', marginTop:'12px' }}>
      <Card.Body>
        <Card.Title>For Urgent Support (24x7) Connect us at 7669133030 | Email : care@nimbuspost.com <TbMessage2Question  className="me-1"/></Card.Title>
      
      </Card.Body>
    </Card>
    
    </Col> 

</Row>

      <Row className='pt-4 d-flex justify-content-center align-items-center gap-3'>
        <h3 className="d-flex justify-content-center align-items-center text-center" >Select Escalation Type</h3>
        <Col md={3}>
        <Card style={{ width: '18rem', backgroundColor: "#0d6efd", color: "white" }}>
          <Card.Body>
            <Card.Title>Shipments related<br /> queries</Card.Title>
            <Button variant="light" >Escalate here</Button>
          <Card.Img  src="src/Assests/Support/random-01.svg" style={{ backgroundColor: "#0d6efd" }} />
          </Card.Body>
        </Card>
        
        </Col>

       
        <Col md={3}>
        <Card style={{ width: '18rem', backgroundColor: "#20c997", color: "white" }}>
          <Card.Body>
            <Card.Title>Pickups related  <br />queries</Card.Title>
            <Button variant="light" >Escalate here</Button>
          <Card.Img  src="src/Assests/Support/random-02.svg" style={{ backgroundColor: "#20c997" }} />
          </Card.Body>
        </Card>
        </Col>
        <Col md={3}> <Card style={{ width: '18rem', backgroundColor: "#19b5fe", color: "white" }}>
          <Card.Body>
            <Card.Title>Billing And  <br />Remittance </Card.Title>
            <Button variant="light">Escalate here</Button>
          <Card.Img  src="src/Assests/Support/random-03.svg" style={{ backgroundColor: "#19b5fe" }} />
          </Card.Body>
        </Card>
        </Col>
       <Col md={3}>
       <Card style={{ width: '18rem', backgroundColor: "#dc3545", color: "white" }}>
          <Card.Body>
            <Card.Title>Weight related<br /> queries</Card.Title>
            <Button variant="light">Escalate here</Button>
          <Card.Img  src="src/Assests/Support/random-04.svg" style={{ backgroundColor: "#dc3545" }} />
          </Card.Body>
        </Card>
       </Col>
       <Col md={3}>  
            <Card style={{ width: '18rem', backgroundColor: "#8b73cf", color: "white"  }}>
          <Card.Body>
            
            <Card.Title>Tech related<br /> queries</Card.Title>
            <Button variant="light" >Escalate here</Button>
          <Card.Img  src="src/Assests/Support/random-05.svg" style={{ backgroundColor: "#8b73cf" }} />
          </Card.Body>
        </Card></Col>
            <Col md={3}>
            <Card style={{ width: '18rem', backgroundColor: "#a6b1c8", color: "white" }}>
          <Card.Body>
            <Card.Title>Dashboard<br /> Training</Card.Title>
            <Button variant="light" >Schedule it here</Button>
          <Card.Img  src="src/Assests/Support/random-07.svg" style={{ backgroundColor: "#a6b1c8" }} />
          </Card.Body>
        </Card>
            </Col>
            <Col md={12} style={{width:"1030px", marginBottom:"50px"}}>
            <Card style={{ width: '480px', backgroundColor: "#0c9", color: "white", height:'320px'  }}>
          <Card.Body>
        
          <Card.Title> <VscCallIncoming />Request a callback</Card.Title>
          <Form>
                <Row>
                <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Your Mobile No.</Form.Label>
          <Form.Control type="phone" placeholder="Enter Mobile No." />
        </Form.Group> 
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Query Related To:</Form.Label>
          {/* <Form.Control type="phone" placeholder="Enter Mobile No." /> */}
          <Form.Select aria-label="Default select example">
     
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
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" style={{width:'120px', marginLeft:"337px"}}>
        Submit
      </Button>
        
                </Row>
            </Form>
          </Card.Body>
        </Card>
           </Col>
           </Row>
   
   



     

    </Container>
  );
}

export default CreateTicket;

