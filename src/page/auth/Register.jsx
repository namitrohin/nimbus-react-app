import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPeopleRoof, FaPerson } from "react-icons/fa6";
import { registerbanner } from '../../utils/images'

function Register() {
    const [trackWith, setTrackWith] = useState('AWB');

    const handleSwitchChange = (e) => {
        setTrackWith(e.target.value);

    };
    const [activeTab, setActiveTab] = useState("seller");
    return (
        <>
            <Container className="register_wraper">
                <Row>

                    <Col md={6}>
                        <section>
                            <Form>
                                <Card className="register_card shadow">
                                    <Col>

                                        <Col >
                                            <Nav
                                                size='sm'
                                                className="d-flex justify-content-center  "
                                                variant="tabs "
                                                onSelect={(selectedKey) => setActiveTab(selectedKey)}
                                                defaultActiveKey="/seller"
                                                activeKey={activeTab}
                                            >
                                                <div className="d-flex "  >
                                                    <Nav.Item>
                                                        <Nav.Link className="primary-text" eventKey="seller" ><FaPeopleRoof size={20} /> Are You a Seller</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link className="primary-text" eventKey="buyer"><FaPerson size={20} />Are You a Buyer</Nav.Link>
                                                    </Nav.Item>
                                                </div>
                                            </Nav>
                                            <div>
                                                {activeTab === "seller" && (
                                                    <div>
                                                        <Row >
                                                            <h4 className="text-center mt-2">Experience The Next-level Logistics</h4>
                                                            <Col md={6}>
                                                                <Form.Label>Name<span className="text-danger">*</span></Form.Label>
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="text"
                                                                    placeholder="Enter Name"
                                                                    name=""
                                                                    className="mb-1"
                                                                    required
                                                                />
                                                            </Col>
                                                            <Col md={6}>
                                                                <Form.Label> Email ID.<span className="text-danger">*</span></Form.Label>
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="text"
                                                                    name=""
                                                                    className="mb-1"
                                                                    placeholder="Email ID."
                                                                    maxLength={10}
                                                                    required
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={6}>
                                                                <Form.Label> Contact No.<span className="text-danger">*</span></Form.Label>
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="text"
                                                                    name=""
                                                                    className="mb-1"
                                                                    placeholder="Contact No."
                                                                    maxLength={10}
                                                                    required
                                                                />
                                                            </Col>
                                                            <Col md={6}>
                                                                <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                                                                <Form.Control
                                                                    size="sm"
                                                                    type="text"
                                                                    name=""
                                                                    className="mb-1"
                                                                    placeholder="Password"
                                                                    required
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Col md={12}>
                                                            <Form.Label> Company Name<span className="text-danger">*</span></Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                className="mb-1"
                                                                placeholder="Company Name"
                                                                required
                                                            />
                                                        </Col>
                                                        <Col md={12}>
                                                            <Form.Label>Website</Form.Label>
                                                            <Form.Control
                                                                size="sm"
                                                                type="text"
                                                                name=""
                                                                className="mb-1"
                                                                placeholder="website"
                                                                required
                                                            />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>What's Your Monthly Shipping Volume?</Form.Label>
                                                            <Form.Select
                                                                size="sm"
                                                                className="mb-1">

                                                                <option>0-100</option>
                                                                <option>100-1000</option>
                                                                <option>1000 or above</option>
                                                            </Form.Select>

                                                        </Col>
                                                        <Col md={12}>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" />
                                                                <label className="form-check-label">
                                                                    By submitting this form, you agree to NimbusPost’s user
                                                                    <Link className="text-danger"> Privacy Statement</Link>
                                                                    .
                                                                </label>
                                                            </div>
                                                        </Col>
                                                        <Col className='d-flex justify-content-center'>
                                                            <Button type="submit" className="login_button btn-outline btn-primery" >Sign Up</Button>
                                                        </Col>

                                                        <Col className='text-center mt-3 '>
                                                            <p>Have an Account? <Link to={'/login'} className='text-danger ' >Login</Link ></p>
                                                        </Col>

                                                    </div>
                                                )}
                                                {activeTab === "buyer" && (
                                                    <div className=" p-4">
                                                        <h4 className="text-center mt-5">Track With</h4>
                                                        <Col className="d-flex justify-content-center mt-5">
                                                            <div>
                                                                <div class="form-check me-5">
                                                                    <Form.Check
                                                                        type="radio"
                                                                        name="track_with"
                                                                        value='AWB'
                                                                        id="awb"
                                                                        onChange={handleSwitchChange}

                                                                    />
                                                                    <Form.Label htmlFor="awb">
                                                                        AWB
                                                                    </Form.Label>
                                                                </div>
                                                            </div>
                                                            <div class="form-check">
                                                                <Form.Check
                                                                    type="radio"
                                                                    name="track_with"
                                                                    value='Order ID'
                                                                    id="orderid"
                                                                    onChange={handleSwitchChange} />
                                                                <Form.Label htmlFor="orderid">
                                                                    Order ID
                                                                </Form.Label>

                                                            </div>

                                                        </Col>
                                                        <Col className="d-flex justify-content-center align-items-center mt-5">{trackWith === 'AWB' ?
                                                            <Col md={11}>
                                                                <Form.Label>AWB No.<span className="text-danger">*</span></Form.Label>
                                                                <Form.Control
                                                                    size="sm"
                                                                    label="AWB No."
                                                                    type="text"
                                                                    placeholder=" Airway Bill Number"
                                                                    className=""


                                                                />
                                                            </Col>
                                                            : <>
                                                                <Col className="d-flex ">
                                                                    <Col md={6}>
                                                                        <Form.Label>Order ID.<span className="text-danger">*</span></Form.Label>
                                                                        <Form.Control
                                                                            size="sm"
                                                                            label=" AWB No."
                                                                            type="text"
                                                                            placeholder="Order ID."
                                                                            className=" "
                                                                        />
                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <Form.Label>Mobile No.<span className="text-danger">*</span></Form.Label>
                                                                        <Form.Control
                                                                            size="sm"
                                                                            label=""
                                                                            type="text"
                                                                            placeholder="Mobile No."
                                                                            className="mx-2"
                                                                        />
                                                                    </Col>
                                                                </Col>
                                                            </>}
                                                        </Col>


                                                        <Col className='d-flex justify-content-center'>
                                                            <Button type="submit" className="login_button btn-outline btn-primery mt-5 mb-5" >Track Now</Button>
                                                        </Col>
                                                        <hr />
                                                        <Col className="text-center">
                                                            <h6 >Need Your Order Details?</h6>
                                                            <p style={{ fontSize: 13 }}>
                                                                Your AWB tracking number was sent to you via SMS upon<br />
                                                                order confirmation.
                                                            </p>
                                                        </Col>
                                                    </div>
                                                )}

                                            </div>



                                        </Col>


                                    </Col>
                                </Card>
                            </Form>
                        </section>
                    </Col>
                    <Col md={6} >
                        <Col className="register_img">
                            {/* <img src={registerbanner} alt="registerwallpaper" style={{ height: 400 }} /> */}
                        </Col>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Register;