import React from "react";
import { IoMdDownload } from "react-icons/io";
import { Container, Row, Col, Card, Button, Alert, Form } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";




export default function Pincodes() {
    //  const [startDate, setStartDate] = React.useState(new Date());

    return (
        <>
            <Container fluid >
                <Row >
                    <Col className="main_bar" >
                        <section>
                            <Col className="border bg-white mt-4 rounded" >
                                <Col>
                                    <Row className="w-100 d-flex justify-content-between align-items-start  p-2 ">
                                        <Col md={5} className=" d-flex align-items-start gap-2 " >
                                            <RiCheckboxMultipleBlankFill size={25} />
                                            <h4 >Download Pincodes List</h4>
                                        </Col>
                                    </Row>
                                </Col>
                                <hr />


                                <Row>
                                    <Form style={{ width: "400px" }}>
                                        <Form.Group className="mb-3 p-3" >
                                            <Form.Label>Pickup Pincode (For Zone Mapping)</Form.Label>
                                            <Form.Control placeholder="Enter Pin code" size="sm" />
                                            <div className="mt-2 d-flex justify-content-end align-items-end">
                                                <Button variant="success" type="submit" className="">
                                                    <IoMdDownload />
                                                    Download
                                                </Button>
                                            </div>

                                        </Form.Group>

                                    </Form>
                                </Row>





                            </Col>
                        </section>
                    </Col>
                </Row >
            </Container >

        </>
    )
}


