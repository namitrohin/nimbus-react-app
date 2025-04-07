import React from "react";
import { IoLocation } from "react-icons/io5";
import { Container, Row, Col, Card, Button, Alert, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdFileDownload } from "react-icons/md";




export default function Pincodes() {
  //  const [startDate, setStartDate] = React.useState(new Date());

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="homeheader d-flex justify-content-between align-items-center">
                    </Col>
                </Row>
//test
                <Row>
                    <Col>
                        <Card className="text-center shadow iconsview ">
                            <Card.Body>
                                <Row>
                                    <p style={{ textAlign: "left"}}><IoLocation size={17} className="mb-1" />Download Pincodes List</p>
                                    {/* <p style={{ textAlign: "left"}}>Download Pincodes List</p> */}
                                    <hr/>
                                </Row >
                                <Row>
                       <Form style={{ textAlign: "left", width: "400px" }}>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Pickup Pincode (For Zone Mapping)</Form.Label>
                             <Form.Control type="email" placeholder="Enter email" size="sm" />
 
                             </Form.Group>
                                 <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                 <Button variant="primary" type="submit">
                                     <MdFileDownload /> Download
                                      </Button>
                                </div>
                                   </Form>
                                    </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
              
            </Container>
        </>
    )
}


