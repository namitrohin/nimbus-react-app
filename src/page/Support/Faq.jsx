import { BorderColor } from "@mui/icons-material";
import React from "react";
import { Container, Row, Col, Card, Button, Alert, Form } from 'react-bootstrap';
import { GoX } from "react-icons/go";
import { TfiHeadphoneAlt } from "react-icons/tfi";


export default function Faq() {

    return(
        <>
 <Container fluid className="d-flex justify-content-center">
  <Row>
    <Col md={12}>
      <h4 
        style={{
          color: "#468847",
          backgroundColor: "#dff0d8",
        //   width: "645px",
        //   height: "45px",
          borderRadius: "2px",
          border: "1px solid #d6e9c6",
          padding: "0 15px"
        }} 
        className="d-flex justify-content-between align-items-center mt-4"
      >
       <span>Portal is currently not accessible</span>  <GoX />
      
       
      </h4>
    </Col>
  </Row>
</Container>


<Container>
    <Row>

        <Col md={6}
        >    
        <Card body>
        <Form.Label>Login to the support portal</Form.Label><br/>
      <Form.Text>Enter the details below</Form.Text>
    
        <Form>
            <br/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me on this computer" />
        </Form.Group>
    {/* <Link>Forgot your password?</Link> */}
        <Button Style={{backgroundColor:"#02b875" ,borderRadius:"1px", BorderColor:"1px solid black"}} type="submit">
          LOGIN
        </Button>
        <hr/>
        <p><TfiHeadphoneAlt />Are you an agent? Login here</p>
      </Form>
        </Card>
     
        </Col>
        <Col md={6}>
        <Card body>
        <h1>Sign up</h1>
        <Button>SIGN UP WITH US</Button>
        <p>Once you sign up, you will have complete access to our self service portal and you can use your account to raise support tickets and track their status.</p>
        </Card>
        </Col>
    </Row>

</Container>

        </>
    )
}