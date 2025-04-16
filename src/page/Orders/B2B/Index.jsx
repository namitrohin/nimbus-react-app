import React, { useState } from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Container, Form, Row } from "react-bootstrap";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { HiArrowSmUp } from "react-icons/hi";
import { LuArrowDown } from "react-icons/lu";
import Mainlayout from "../../../component/Mainlayout";


export default function Index() {
    const [showForm, setShowForm] = useState(false);
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
            <Mainlayout />
            <Container fluid >
                <Row >
                    <Col style={{ backgroundColor: "#12263f", height: 85 }} >
                        <section>
                            <Col className="border bg-white mt-5 rounded" style={{ height: 520 }}>
                                <Col>
                                    <Row className="w-100 d-flex justify-content-between align-items-start  p-3 ">
                                        <Col md={5} className=" d-flex align-items-start gap-2 " >
                                            <RiCheckboxMultipleBlankFill size={25} />
                                            <h4 >B2B Orders</h4>
                                        </Col>
                                        <Col md={3} className=" d-flex justify-content-end gap-3 ">
                                            <p className="fw-bold">B2B Business inquiry</p>
                                            <div className="d-flex justify-content-center gap-1">
                                                <BiSolidPhoneCall size={20} />
                                                <p>  88999999999</p>
                                            </div>
                                        </Col>
                                        <Col md={4} className="d-flex gap-2 justify-content-end " >
                                            <Button type="button" className="btn btn-light btn-outline-dark btn-sm"><LuArrowDown />Export</Button>
                                            <Button type="button" className="btn btn-light btn-outline-dark btn-sm"><HiArrowSmUp />Import</Button>
                                            <Button type="button" className="btn btn-light btn-outline-dark btn-sm"><FaPlus /> Create B2B Order</Button>
                                            <Button type="button" className={showForm ? "btn btn-light btn-outline-dark btn-sm" : "btn btn-light btn-outline-dark btn-sm"} onClick={handleClose}>{showForm ? "⨯ Close" : "▼ Filter"}</Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <section className="mx-3">
                                    {showForm && (
                                        <Form>
                                            <Row className="mb-3 ">
                                                <Col md={3}>
                                                    <Form.Label>From Date:</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        name=""
                                                        placeholder="Date" />
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Label>Order ID(s):</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name=""
                                                        placeholder="separated by comma" />
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Label>Product Name:</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name=""
                                                        placeholder="Product name to search" />
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Label>Search Query:</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name=""
                                                        placeholder="Search Anything" />
                                                </Col>
                                            </Row>
                                            <Row className="">
                                                <Col md={3}>
                                                    <Form.Label>Channel:</Form.Label>
                                                    <Form.Select>
                                                        <option>Select Channel</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Type:</Form.Label>
                                                    <Form.Select>
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>IVR Verification:</Form.Label>
                                                    <Form.Select>
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Label>Order Tag(s):</Form.Label>
                                                    <Form.Control
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

