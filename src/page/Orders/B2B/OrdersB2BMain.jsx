import React, { useState } from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Container, Form, Row, Table } from "react-bootstrap";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { HiArrowSmUp } from "react-icons/hi";
import { LuArrowDown } from "react-icons/lu";
import { useNavigate } from "react-router-dom";



export default function OrdersB2BMain() {
    const navigate = useNavigate();
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
        <Container fluid className="main_bar">
            <Row >
                <Col >
                    <section>
                        <Col className="border bg-white mt-5 rounded" >

                            <Row className="w-100 d-flex justify-content-between align-items-start  p-3 ">
                                <Col md={5} className=" d-flex align-items-start gap-2 " >
                                    <RiCheckboxMultipleBlankFill size={25} />
                                    <h4 >B2B Orders</h4>
                                </Col>

                                <Col md={4} className="d-flex gap-2 justify-content-end " >
                                    {/* <Button type="submit" variant="light" size="sm" className="btn-outline-dark">MOHIT</Button> */}
                                    <Button variant="light" className="btn-outline-dark btn-sm"><LuArrowDown />Export</Button>
                                    <Button variant="light" className="btn-outline-dark btn-sm"><HiArrowSmUp />Import</Button>
                                    <Button variant="light" className="btn-outline-dark btn-sm" onClick={() => navigate('/b2b/create')}><FaPlus /> Create B2B Order</Button>
                                    <Button variant="light" className={showForm ? " btn-outline-dark btn-sm" : "btn btn-light btn-outline-dark btn-sm"} onClick={handleClose}>{showForm ? "⨯ Close" : "▼ Filter"}</Button>
                                </Col>
                            </Row>

                            <section className="mx-3">
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
                                            <Col md={3}>
                                                <Form.Label>Order Tag(s)</Form.Label>
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
                            <section className="mx-3 ">
                                <Row>
                                    <Col className="mb-3" >
                                        <ButtonGroup>
                                            <Button type="" size="sm" className={`btn-light btn-outline-secondary ${selected === 'All Order' ? 'active' : ''}`} onClick={() => handleSelect('All Order')}>All Order</Button>
                                            <Button type="" size="sm" className={`btn-light btn-outline-secondary ${selected === 'Not Shipped' ? 'active' : ''}`} onClick={() => handleSelect('Not Shipped')}>Not Shipped (0)</Button>
                                            <Button type="" size="sm" className={`btn-light btn-outline-secondary ${selected === 'Booked' ? 'active' : ''}`} onClick={() => handleSelect('Booked')}>Booked (0)</Button>
                                            <Button type="" size="sm" className={`btn-light btn-outline-secondary ${selected === 'Cancelled' ? 'active' : ''}`} onClick={() => handleSelect('Cancelled')}>Cancelled (0)</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} sm={6}>

                                        <Table>
                                            <thead>
                                                <tr >
                                                    <th >
                                                        <input type="checkbox" />
                                                    </th>
                                                    <th> Channel</th>
                                                    <th> Order</th>
                                                    <th>Date</th>
                                                    <th> Product</th>
                                                    <th> Payment</th>
                                                    <th> Method</th>
                                                    <th> Customer</th>
                                                    <th> Phone</th>
                                                    <th> Weight</th>
                                                    <th> IVR Status</th>
                                                    <th> Tags</th>
                                                    <th> Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>nill</td>
                                                    <td>nill</td>
                                                    <td>nill</td>
                                                    <td>nill</td>
                                                    <td></td>
                                                    <td>nill</td>
                                                    <td>nill</td>
                                                    <td>nill</td>
                                                    <td></td>
                                                    <td>nill</td>
                                                    <td>nill</td>
                                                    <td>nill</td>
                                                </tr>
                                            </tbody>

                                        </Table>
                                    </Col>
                                </Row>
                            </section>
                        </Col>
                    </section>

                </Col>
            </Row >
        </Container >
    )
}

