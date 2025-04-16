import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { Button, Col, Container, Dropdown, Row, Form, Modal } from "react-bootstrap";
import { BiSolidPhoneCall, BiRupee } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header({ fromLeft }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <header className={fromLeft ? 'show' : ''}>
                <section>
                    <Container fluid className="topheader">
                        <Col className='d-flex justify-content-end  gap-3'>
                            <a><BiSolidPhoneCall /> <span style={{ fontFamily: "Work Sans, sans-serif" }}>Connect us at: </span>+91-9650215021</a>
                            <a ><MdEmail /><span style={{ fontFamily: "Work Sans, sans-serif" }}> Email: </span>sales@pureionia.com</a>
                        </Col>
                    </Container>
                </section>

                <section>
                    <Container fluid className="headertwo pt-2 pb-2">
                        <Row className="d-flex justify-content-end gap-1 ">

                            <Col md={12}>
                                <div className="d-flex gap-3 align-items-center justify-content-end">

                                    <form >
                                        <Col className="input-group justify-content-end " size="sm">
                                            <Form.Select className="form-select    " size="sm" style={{ maxWidth: 120 }}>
                                                <option >Shipment</option>
                                            </Form.Select>
                                            <Form.Control size="sm" type="text" className="form-control " placeholder="Search AWB Number(s)" />
                                            <Button size="sm" className="rechargeshipment btn-info " type="search"><IoSearchSharp /></Button>
                                        </Col>
                                    </form>

                                    <div>
                                        <Col className="input-group d-flex justify-content-start ">
                                            <Button variant="lighgt" className="rechargeshipment btn-info btn-sm" onClick={() => handleShow()}><BiRupee /> Recharge</Button>
                                            <Button variant="lighgt" className="border btn-sm"  >Balance <BiRupee /> 0</Button>
                                        </Col>
                                        <Modal show={show} onHide={handleClose} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Upgrade Your Shipping Limit</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <p>Enter the amount for your recharge</p>
                                                <Form.Label>Amount</Form.Label>
                                                <Form.Control
                                                    size="sm"
                                                    className="mb-4"
                                                    placeholder="Amount">

                                                </Form.Control>
                                                <Col className="d-flex justify-content-center gap-2 mb-4">
                                                    <Button variant="light" size="sm" className="btn-outline-info ">500</Button>
                                                    <Button variant="light" size="sm" className="btn-outline-info ">1000</Button>
                                                    <Button variant="light" size="sm" className="btn-outline-info ">2000</Button>
                                                    <Button variant="light" size="sm" className="btn-outline-info ">5000</Button>
                                                    <Button variant="light" size="sm" className="btn-outline-info ">10000</Button>
                                                </Col>
                                                <Col className="d-flex  justify-content-center  gap-3 mb-5">
                                                    <Form.Label>Apply Coupon</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        placeholder="Enter Code"
                                                        className=""
                                                        style={{ width: 120 }}
                                                    />
                                                    <Button variant="primary" size="sm" >Apply Coupon</Button>
                                                </Col>
                                                <Col className="d-flex  justify-content-center">
                                                    <Button variant="primary">Recharge</Button>
                                                </Col>

                                            </Modal.Body>
                                        </Modal>
                                    </div>

                                    <Dropdown >
                                        <Dropdown.Toggle variant="info" size="sm" className="rechargeshipment">
                                            Unknown
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to="/Settings/company-profile">Profile</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/Settings/AccountSettingDetails">Settings</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/login">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </header>
        </>
    )
}