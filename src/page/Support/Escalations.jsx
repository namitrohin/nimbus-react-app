import React from "react";
import { Container, Row, Col, Card, Button, Alert, Form } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import { CgImport } from "react-icons/cg";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";




export default function Escalations() {

    return (
        <>

    
            <Container fluid>
                <Row>
                    <Col className="homeheader d-flex justify-content-between align-items-center">
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className="text-center shadow iconsview ">
                            <Card.Body>
                 
                                        
                <Col md={12}>
                <Row>
                    <Col ClassName=" d-flex bg-white border rounded mt-5 m-3 " style={{ height: 100 }}>
                     <Col className="d-flex mt-3 " >
                     <h4>Escalations</h4>
                     <Col style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                     <button type="button" class="btn btn-outline-secondary" ><CgImport size={17}/>Export</button>
                     <button type="button" class="btn btn-outline-secondary"  ><GoPlus ClassName="me-1"/>New Escalation</button>
                     <button type="button" class="btn btn-outline-secondary" ><IoClose ClassName="me-1" />Close</button>
                     </Col>
                     </Col>
                    </Col>
                </Row>


             
                </Col>
              <Row>
               

              
                <Col> 
                <div>
                <label>From Date:</label><br/>
                <input class="btn btn-outline-secondary" size={10}></input>
                </div>
                </Col>
                <Col>
                <div>
                <label>Escalation ID(s):</label><br/>
                  <input class="btn btn-outline-secondary" size={10}></input>
                </div>
                </Col>
                <Col> 
                <div>
                    <label>AWB No(s):</label><br/>
                    <input class="btn btn-outline-secondary" size={10}></input>
                    </div>
                    </Col>
                    <Col>
                    <div>
                        <label>Type:</label><br/>
                  <input class="btn btn-outline-secondary" size={10}></input>
                    </div>
                  </Col>
                  <Col>
                  <div>
                    <label>Status:</label><br/>
                  <input class="btn btn-outline-secondary" size={10}></input>
                  </div>
                  </Col>
                  
                 
           <Col  className="d-flex align-items-end justify-content-end mt-4">
                    <Button type="button" className="me-2 btn-success btn-sm" >Apply</Button>
                     <Button type="button" className="me-2 btn-danger btn-sm">Clear</Button>
                                                          </Col>
                  
              
               
                
              </Row>
              {/* <Row>
                <Col md={12}>
                <Row>
                    <Col md={2}>
                    <TextField
                    size="small"
                    label="From Date:"
                    /></Col>
                      <Col md={2}>
                    <TextField
                    size="small"
                    label="Escalation ID(s):"
                    /></Col>
                      <Col md={2}>
                    <TextField
                    size="small"
                    label="AWB No(s):"
                    /></Col>
                      <Col md={2}>
                    <TextField
                    size="small"
                    label="Type:"
                    /></Col>
                     <Col md={2}>
                    <TextField
                    size="small"
                    label="Status:"
                    /></Col>
                     <Col md={2}>
                   <button class="btn btn-outline-secondary" >Apply</button>
                   <button class="btn btn-outline-secondary" >Clear</button></Col>
                    
                    
                    </Row></Col>
              </Row> */}
              <Row>
             
              </Row>
             <hr/>
             <Row>
                <Col>#</Col>
                <Col>Escalation Type</Col>
                <Col>Details</Col>
                <Col>Date</Col>
                <Col>Status</Col>
                <Col>Action</Col>
             </Row>
<hr/>

<span className="d-flex">Showing 1 to 50 of 0 entries</span>             
                            </Card.Body>
                        </Card>
                      
                    </Col>
                </Row>
          
              
            </Container>
       
        </>
    )
}
