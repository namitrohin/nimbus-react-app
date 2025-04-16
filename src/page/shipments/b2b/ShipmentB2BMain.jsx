import React, { useState } from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Container, Dropdown, DropdownToggle, Form, Row } from "react-bootstrap";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { FaPrint } from "react-icons/fa6";
import { HiArrowSmUp } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export default function ShipmentB2BMain() {
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
                                        <Col md={5} className=" d-flex align-items-start gap-2 " >
                                            <RiCheckboxMultipleBlankFill size={25} />
                                            <h4 >B2B Shipment</h4>
                                        </Col>

                                        <Col md={4} className="d-flex gap-2 justify-content-end " >
                                            {/* <Button type="submit" variant="light" size="sm" className="btn-outline-dark">MOHIT</Button> */}
                                            <Button variant="light" className="btn-outline-dark btn-sm"><FaPrint size={10} /><IoIosSettings /></Button>
                                            <Button variant="light" className="btn-outline-dark btn-sm"><HiArrowSmUp />Import</Button>
                                            <Button variant="light" className="btn-outline-dark btn-sm" onClick={() => navigate('/shipment-b2b/manifest-b2b')}><FaPrint size={12} /> Manifest</Button>
                                            <Button variant="light" className={showForm ? " btn-outline-dark btn-sm" : "btn btn-light btn-outline-dark btn-sm"} onClick={handleClose}>{showForm ? "⨯ Close" : "▼ Filter"}</Button>
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
                                                        size="sm"
                                                        type="date"
                                                        name=""
                                                        placeholder="Date" />
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Label>Order ID(s):</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Order id(s)" />
                                                </Col>

                                                <Col md={3}>
                                                    <Form.Label>Search Query:</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Search Anything" />
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Label>AWB no(s):</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="AWB no(s)" />
                                                </Col>
                                            </Row>
                                            <Row className="">
                                                <Col md={3}>
                                                    <Form.Label>Product Name(s):</Form.Label>
                                                    <Form.Control
                                                        size="sm"
                                                        type="text"
                                                        name=""
                                                        placeholder="Product Name " />
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Channel</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Label>Type:</Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>All</option>
                                                    </Form.Select>
                                                </Col>

                                                <Col md={2}>
                                                    <Form.Label>Wherehouse </Form.Label>
                                                    <Form.Select size="sm">
                                                        <option>select</option>
                                                    </Form.Select>
                                                </Col>

                                                <Col md={2} className="d-flex align-items-end">
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
                                                    <Button variant="light" size="sm" className={`  shadow  ${selected === 'All' ? 'active' : ''}`} onClick={() => handleSelect('All')}>All </Button>
                                                    <Button variant="light" size="sm" className={` shadow ${selected === 'Booked' ? 'active' : ''}`} onClick={() => handleSelect('Booked')}>Booked (0)</Button>
                                                    <Button variant="light" size="sm" className={` shadow ${selected === 'Pending Pickup' ? 'active' : ''}`} onClick={() => handleSelect('Pending Pickup')}>Pending Pickup (0)</Button>
                                                    <Button variant="light" size="sm" className={` shadow  ${selected === 'In transit' ? 'active' : ''}`} onClick={() => handleSelect('In transit')}>In Transit (0)</Button>
                                                    <Button variant="light" size="sm" className={` shadow  ${selected === 'Out for Delevery' ? 'active' : ''}`} onClick={() => handleSelect('Out for Delevery')}>Out for Delevery (0)</Button>
                                                    <Button variant="light" size="sm" className={` shadow ${selected === 'Delivered' ? 'active' : ''}`} onClick={() => handleSelect('Delivered')}>Delivered (0)</Button>
                                                    <div>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="light" size="sm" className={` shadow  ${selected === 'More in Transit' ? 'active' : ''}`} onClick={() => handleSelect('More in Transit')}>More in Transit
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item onClick={() => handleSelect('Option 1')}>
                                                                    Option 1
                                                                </Dropdown.Item>
                                                                <Dropdown.Item onClick={() => handleSelect('Option 1')}>
                                                                    Option 1
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>

                                                        </Dropdown>

                                                    </div>
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


