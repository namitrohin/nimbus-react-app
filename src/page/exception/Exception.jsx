import React, { useState } from "react";
import { Button, Col, Container, Dropdown, DropdownToggle, Form, Row } from "react-bootstrap";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { FaPrint } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { LuArrowDown } from "react-icons/lu";



export default function Exception() {
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
                            <Col className="border bg-white mt-4 rounded" >
                                <Col>
                                    <Row className="w-100 d-flex justify-content-between align-items-start  p-2 ">
                                        <Col md={5} className=" d-flex align-items-start gap-2 " >
                                            <RiCheckboxMultipleBlankFill size={25} />
                                            <h4 >NDR</h4>
                                        </Col>

                                        <Col md={4} className="d-flex gap-2 justify-content-end " >
                                            {/* <Button type="submit" variant="light" size="sm" className="btn-outline-dark">MOHIT</Button> */}
                                            <Button variant="light" className="btn-outline-dark btn-sm"><LuArrowDown />Export</Button>
                                            <Button variant="light" className="btn-outline-dark btn-sm" onClick={() => navigate('')}> CSV Update</Button>
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
                                                    <Form.Label>Order ID(s)</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Order id(s)" />
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>AWB no (s)</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="AWB no(s)" />
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Method</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>

                                                <Col md={2}>
                                                    <Form.Label>Courier </Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>


                                            </Row>
                                            <Row>



                                                <Col md={2}>
                                                    <Form.Label>Attempts </Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>select</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Channel</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label> Tag (s)</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Tag(s) " />
                                                </Col>

                                                <Col md={2} className="d-flex align-items-end  justify-content-end">
                                                    <Button type="button" className="me-2 btn-success btn-sm" >Apply</Button>
                                                    <Button type="button" className="me-2 btn-danger btn-sm" onClick={HandleClear}>Clear</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    )}
                                    <hr />

                                    <section className="">
                                        <Row>
                                            <Col className="">
                                                <div className="d-flex gap-5 mb-3 md-2">
                                                    <Button variant="light" size="sm" className={`  shadow pe-3 px-3 ${selected === 'All' ? 'active' : ''}`} onClick={() => handleSelect('All')}>All </Button>
                                                    <Button variant="light" size="sm" className={` shadow pe-3 px-3 ${selected === 'Action Required' ? 'active' : ''}`} onClick={() => handleSelect('Action Required')}>Action Required (0)</Button>
                                                    <Button variant="light" size="sm" className={` shadow pe-3 px-3 ${selected === 'Action Requested' ? 'active' : ''}`} onClick={() => handleSelect('Action Requested')}>Action Requested (0)</Button>
                                                    <Button variant="light" size="sm" className={` shadow pe-3 px-3 ${selected === 'Delivered' ? 'active' : ''}`} onClick={() => handleSelect('Delivered')}>Delivered (0)</Button>
                                                    <Button variant="light" size="sm" className={` shadow  pe-3 px-3 ${selected === 'Out for Delevery' ? 'active' : ''}`} onClick={() => handleSelect('Out for Delevery')}>RTO (0)</Button>

                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                </section>
                            </Col>
                        </section>
                    </Col>
                </Row >
            </Container >






        </>
    )
}


