import React from "react";
import { Container, Row, Col, Card, Button, Alert, Form } from 'react-bootstrap';
import { SlCalender } from "react-icons/sl";



export default function Training() {

    return (
        <>
            <Container fluid>
             

                <Row>
                    <Col>
                    
                        <Card  style={{borderRadius:"15px" , width:"950px", height:"350px" }} className="d-flex justify-content-center align-items-center text-center mt-4">
                            <Card.Body>
                            <Card.Title>
                            <SlCalender /> Register Here For Training Sessions</Card.Title>
                            <Row className="mt-4">
                               <Col md={6}>
                               <div style={{backgroundColor:"#baf8f1", borderRadius:"10px", height:"220px" ,width:"18rem"}}>
                               <p><img src="src/Assests/Support/traning.png"></img></p>
                               <h3>Attend daily training session</h3>
                               </div>
                          
                               </Col>
                               <Col md={6}>
                               <div style={{backgroundColor:"#baf8f1", borderRadius:"10px", height:"220px" ,width:"18rem"}}> 
                               <p> <img src="src/Assests/Support/traning_sedu.png"></img></p>
                               <h3>I want to choose my own time slot </h3>
                               </div>
                               </Col>
                            </Row>
                           
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
              
            </Container>
        </>
    )
}


