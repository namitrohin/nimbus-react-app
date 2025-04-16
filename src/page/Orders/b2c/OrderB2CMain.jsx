import React, { useState } from "react";
import { Button, ButtonGroup, Col, Container, DropdownButton, Form, Row } from "react-bootstrap";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { HiArrowSmUp } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { LuArrowDown } from "react-icons/lu";
import { Link } from "react-router-dom";


export default function OrderB2CMain() {
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
                    <Col className="main_bar">
                        <section>
                            <Col className="border bg-white mt-5 rounded" >
                                <Col>
                                    <Row className="w-100 d-flex justify-content-between align-items-start  p-3 ">
                                        <Col md={5} className=" d-flex align-items-start gap-2 " >
                                            <RiCheckboxMultipleBlankFill size={25} />
                                            <h4 > Orders</h4>
                                        </Col>

                                        <Col md={4} className="d-flex gap-2 justify-content-end " >
                                            <Button variant="light" className=" btn-outline-dark btn-sm"><LuArrowDown />Export</Button>
                                            <Button variant="light" className=" btn-outline-dark btn-sm"><HiArrowSmUp />Import</Button>
                                            <DropdownButton title="Create Order" size="sm" variant="white" className="btn-outline-dark border border-dark rounded">
                                                <Link to="/b2c/create-forward" className="dropdown-item"><FaPlus />Create forward Order</Link>
                                                <Link to="/b2c/create-Reverse" className="dropdown-item"><FaPlus />Create Reverse Order</Link>
                                                <Link to="/b2c/create-Qc" className="dropdown-item"><FaPlus />Create Reverse QC Order</Link>
                                            </DropdownButton>
                                            <Button variant="light" className={showForm ? " btn-outline-dark btn-sm" :
                                                "btn-outline-dark btn-sm"} onClick={handleClose}>{showForm ? "⨯ Close" : "▼ Filter"}</Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <section className="mx-3 ">
                                    {showForm && (
                                        <Form>
                                            <Row className="mb-3 ">
                                                <Col md={3}>
                                                    <Form.Label>From Date</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="date"
                                                        name=""
                                                        placeholder="Date" />
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Label>Order ID(s)</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="separated by comma" />
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Label>Product Name</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Product name to search" />
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Label>Search Query</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Search Anything" />
                                                </Col>
                                            </Row>
                                            <Row className="">
                                                <Col md={3}>
                                                    <Form.Label>Channel</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>Select Channel</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Type</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>IVR Verification</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Whatsapp Status</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>All</option>
                                                        <option>Confirm</option>
                                                        <option>Cancelled</option>
                                                        <option>Address change</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Label>Order Tag(s)</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Tag name here" />
                                                </Col>
                                                <Col md={12} className="d-flex align-items-end justify-content-end gap-2 mt-4">
                                                    <Button variant="success" size="sm">Apply</Button>
                                                    <Button variant="danger" size="sm" onClick={HandleClear}>Clear</Button>
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
                                                <Button variant="light" size="sm" className={` btn-outline-dark ${selected === 'All Order' ? 'active' : ''}`} onClick={() => handleSelect('All Order')}>All Order</Button>
                                                <Button variant="light" size="sm" className={` btn-outline-dark ${selected === 'Not Shipped' ? 'active' : ''}`} onClick={() => handleSelect('Not Shipped')}>Not Shipped (0)</Button>
                                                <Button variant="light" size="sm" className={` btn-outline-dark ${selected === 'Booked' ? 'active' : ''}`} onClick={() => handleSelect('Booked')}>Booked (0)</Button>
                                                <Button variant="light" size="sm" className={` btn-outline-dark ${selected === 'Cancelled' ? 'active' : ''}`} onClick={() => handleSelect('Cancelled')}>Cancelled (0)</Button>
                                                <Button variant="light" size="sm" className={` btn-outline-dark ${selected === 'Fulfilled Order' ? 'active' : ''}`} onClick={() => handleSelect('Fulfilled Order')}>Fulfilled Order (0)</Button>
                                            </ButtonGroup>

                                        </Col>
                                        <Col className="d-flex justify-content-end">
                                            <Link to="">+ Add Segment</Link>
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

