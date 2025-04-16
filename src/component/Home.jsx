import React from "react";
import { RiQuestionnaireLine, RiAccountCircleFill } from "react-icons/ri";
import { Container, Row, Col, Card, Button, Alert, Form } from 'react-bootstrap';
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaHouseDamage, FaHouseUser, FaShuttleVan, } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";


export default function Home() {
    const [startDate, setStartDate] = React.useState(new Date());

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="homeheader d-flex justify-content-between align-items-center">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="form-control text-start"
                            monthsShown={true}
                        />
                        <div className="d-flex justify-content-center gap-2 align-items-start me-3 ">
                            <h2>Dashboard</h2>
                            <RiQuestionnaireLine size={30} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className="text-center shadow iconsview ">
                            <Card.Body>
                                <Row>
                                    <p>onboarding steps</p>
                                    <Col><Link className="primary-text" to="/Settings/company-profile"><RiAccountCircleFill size={40} className="mb-3" /><p>1. COMPLETE KYC</p></Link></Col>
                                    <Col><Link className="primary-text" to="/warehouse/AddWareHouse"><FaHouseDamage size={40} className="mb-3" /><p>2. ADD PICKUP LOCATION</p></Link></Col>
                                    <Col><Link className="primary-text" to=""><FaHouseUser size={40} className="mb-3" /><p>3. ADD YOUR STORE</p></Link></Col>
                                    <Col><Link className="primary-text" to="/dash"><MdAccountBalanceWallet size={40} className="mb-3" /><p>4. RECHARGE WALLET</p></Link></Col>
                                    <Col><Link className="primary-text" to="/b2c/all"><FaShuttleVan size={40} className="mb-3" /><p>5. BOOK SHIPMENT</p></Link></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="mb-3">
                        <Card className="bg-success text-white text-center">
                            <Card.Body>
                                <h2>0</h2>
                                <p>Total Shipments <br />(Total forward shipments)</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="mb-3">
                        <Card className="bg-info text-white text-center">
                            <Card.Body>
                                <h2>0 (0%)</h2>
                                <p>Delivered Shipments <br />(Total forward delivered orders)</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="mb-3">
                        <Card className=" bg-primary text-white text-center">
                            <Card.Body>
                                <h2>₹0</h2>
                                <p>Total Revenue <br />(Value of delivered orders)</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="mb-3">
                        <Card className="bg-secondary text-white text-center">
                            <Card.Body>
                                <h2>0 (0%)</h2>
                                <p>Total RTO<br /> (Orders returned to origin)</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}