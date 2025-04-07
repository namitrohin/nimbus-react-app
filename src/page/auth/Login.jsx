import React from 'react'
import { Container, Row, Col, Button, FormCheck, Form } from 'react-bootstrap'
import { sidebarlogo, google, loginbanner } from '../../utils/images';
import { Link } from 'react-router-dom';
import { Radio } from '@mui/material';
// import Register from './Register';



function Login() {
    return (

        <Container fluid className='login_wrapper ' >
            <Row>
                <Col md={6}>
                    <h4 className='loginheader'>An Advanced Tech-Enabled Shipping Platform <br />Trusted By 1 Lac + Global Seller</h4>
                    <img src={loginbanner} style={{ width: 700 }} className='loginbanner ' />
                </Col>
                <Col md={6} className=" loginlogo text-center">

                    <Container className=" d-flex justify-content-center align-items-center  ">
                        <Row >
                            <Form>
                                <Col className=''>
                                    <img src={sidebarlogo} alt="nimbus" style={{ height: 50 }} />
                                    <h2 className='mb-3 mt-3'>Welcome back!</h2>
                                    <p className='mb-4 mt-3 '>Login to Your Account</p>
                                </Col>
                                <Col className="login justify-content-start">

                                    <Form.Control
                                        className=" mb-3 rounded rounded-3"
                                        name="userName"
                                        type='text'
                                        placeholder='User ID'
                                        required

                                    />

                                    <Form.Control
                                        className="mb-3 rounded rounded-3"
                                        name="password"
                                        type='text'
                                        placeholder='Password'
                                        required
                                    />
                                    <Col className=" d-flex justify-content-between align-items-center mt-3 mb-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Remember Me
                                            </label>
                                        </div>
                                        <Link className='text-danger mb-3 '>Forgor Password</Link>
                                    </Col>
                                    <Button type="submit" className="me-2 rounded rounded-3 mb-4" style={{ backgroundColor: "#284365", width: 400 }} >Log in</Button>
                                    <Col className='text-end'>
                                        <p>Don't have an account? <Link to={'/Register'} className='text-danger'>Register</Link ></p>
                                    </Col>


                                </Col>
                            </Form>
                        </Row>
                    </Container >




                </Col>

            </Row>
        </Container>



    )
}

export default Login
