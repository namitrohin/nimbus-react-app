import React, { useState } from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Container, Form, Row } from "react-bootstrap";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { HiArrowSmUp } from "react-icons/hi";
import { LuArrowDown } from "react-icons/lu";
import { useNavigate } from "react-router-dom";


export default function OrderDocument() {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(true);
    const [selected, setSelected] = useState('All Order');
    const handleSelect = (e) => {
        setSelected(e);
    };
    const HandleClear = () => {
    }
    const handleClose = () => {
        setShowForm(!showForm);
    };

    return (
        <>
            <Container fluid >
                <Row >
                    <Col className="main_bar" >
                        <section>
                            <Col className="border bg-white mt-5 rounded" >
                                <Col>
                                    <Row className="w-100 d-flex justify-content-between align-items-start  p-3 ">
                                        <Col md={4} className=" d-flex align-items-start gap-2 " >
                                            <RiCheckboxMultipleBlankFill size={25} />
                                            <h4 >B2B Orders</h4>
                                        </Col>

                                        <Col md={5} className="d-flex gap-2 justify-content-end " >
                                            {/* <Button type="submit" variant="light" size="sm" className="btn-outline-dark">MOHIT</Button> */}
                                            <Button variant="light" className="btn-outline-dark btn-sm"><LuArrowDown />Export</Button>
                                            <Button variant="light" className="btn-outline-dark btn-sm"><HiArrowSmUp />Import</Button>
                                            <Button variant="light" className="btn-outline-dark btn-sm" onClick={() => navigate('/document/create-forward')}><FaPlus /> Create Forward Order</Button>
                                            <Button variant="light" className={showForm ? " btn-outline-dark btn-sm" : "btn btn-light btn-outline-dark btn-sm"} onClick={handleClose}>{showForm ? "⨯ Close" : "▼ Filter"}</Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <section className="mx-3">
                                    {showForm && (
                                        <Form>
                                            <Row className="mb-3 ">
                                                <Col md={2}>
                                                    <Form.Label>From Date:</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="date"
                                                        name=""
                                                        placeholder="Date" />
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Order ID(s):</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="separated by comma" />
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Product Name:</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Product name to search" />
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Search Query:</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Search Anything" />
                                                </Col>
                                            </Row>
                                            <Row className="">

                                                <Col md={2}>
                                                    <Form.Label>Type:</Form.Label>
                                                    <Form.Select
                                                        size="sm">
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>IVR Verification:</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Whatsapp Status</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>select</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Order Tag(s):</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Tag name here" />
                                                </Col>
                                                <Col md={2} className="d-flex align-items-end">
                                                    <Button type="button" className="me-2 btn-success btn-sm" >Apply</Button>
                                                    <Button type="button" className="me-2 btn-danger btn-sm" onClick={HandleClear}>Clear</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    )}
                                    <hr />
                                </section>
                                <section className="mx-3">
                                    <Row>
                                        <Col >
                                            <ButtonGroup>
                                                <Button type="" size="sm" className={`btn-light btn-outline-secondary ${selected === 'All Order' ? 'active' : ''}`} onClick={() => handleSelect('All Order')}>All Order</Button>
                                                <Button type="" size="sm" className={`btn-light btn-outline-secondary ${selected === 'Not Shipped' ? 'active' : ''}`} onClick={() => handleSelect('Not Shipped')}>Not Shipped (0)</Button>
                                                <Button type="" size="sm" className={`btn-light btn-outline-secondary ${selected === 'Booked' ? 'active' : ''}`} onClick={() => handleSelect('Booked')}>Booked (0)</Button>
                                                <Button type="" size="sm" className={`btn-light btn-outline-secondary ${selected === 'Cancelled' ? 'active' : ''}`} onClick={() => handleSelect('Cancelled')}>Cancelled (0)</Button>
                                            </ButtonGroup>
                                        </Col>
                                    </Row>
                                </section>
                            </Col>
                        </section>

                    </Col>
                </Row >
            </Container >






        </>
    )
}


