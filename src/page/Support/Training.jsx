import React from "react";
import { Container, Row, Col, Card, Button, Alert, Form } from 'react-bootstrap';
import { TbCalendarMonth } from "react-icons/tb";
import { Link } from "react-router-dom";
import {TrainingSchedule  ,Training1} from "../../utils/images";



export default function Training() {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="main_bar" >
                    </Col>
                </Row >
                <Col className="d-flex justify-content-end align-items-center bg-white "
                    style={{ width: 800 }}>
                    <Card className="d-flex justify-content-center align-items-start text-center mt-4 rounded rounded-5">
                        <Card.Body>
                            <Card.Title>
                                <TbCalendarMonth /> Register Here For Training Sessions</Card.Title>
                            <Row className="mt-4">
                                <Col >
                                    <Link>
                                        <div className="p-2" style={{ backgroundColor: "#baf8f1", borderRadius: "15px", height: "290px", width: "20rem" }}>
                                            <p><img  src={TrainingSchedule} alt="traingSchedule"></img></p>
                                            <h3>Attend daily training session</h3>
                                        </div>
                                    </Link>
                                </Col>
                                <Col >
                                    <Link>
                                        <div className="p-2" style={{ backgroundColor: "#baf8f1", borderRadius: "15px", height: "290px", width: "20rem" }}>
                                            <p> <img  src={Training1} alt="training"></img></p>
                                            <h3>I want to choose my own time slot </h3>
                                        </div>
                                    </Link>
                                </Col>

                            </Row>

                        </Card.Body>
                    </Card>
                </Col>

            </Container >
        </>
    )
}


