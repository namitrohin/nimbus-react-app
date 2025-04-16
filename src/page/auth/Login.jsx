import React from 'react'
import { Container, Row, Col, Button, FormCheck, Form, InputGroup, Card, Carousel } from 'react-bootstrap'
import { sidebarlogo, google, loginbanner3, loginbanner4, loginbanner5 } from '../../utils/images';
import { Link } from 'react-router-dom';
import { MdOutlineEmail, MdPassword } from "react-icons/md";
import { Height } from '@mui/icons-material';
// import Register from './Register';



function Login() {
    return (

        <Container fluid className='login_wrapper' >
            <Row>
                <Col className='d-flex justify-content-end'>
                    <Col md={6} className='login_carousel'>
                        <Carousel
                            fade
                            interval={2500}
                            indicators={true}
                            controls={false}
                        >
                            <Carousel.Item className="h-100">
                                <img className={'d-block w-100 '} src={loginbanner3} alt="slide1" />
                            </Carousel.Item>
                            <Carousel.Item className="h-100">
                                <img className={'d-block w-100 '} src={loginbanner4} alt="slide2" />
                            </Carousel.Item>
                            <Carousel.Item className="h-100">
                                <img className={'d-block w-100 '} src={loginbanner5} alt="slide3" />
                            </Carousel.Item>
                        </Carousel>

                        {/* <img src={loginbanner} className='login_img' style={{ width: 460 }} /> */}
                    </Col>
                    <Col md={6} className="  ">
                        <section>
                            <Form >
                                <Card className=' login_card'>
                                    <Col className='login_layout'>
                                        <Col className=' text-center' >
                                            <img src={sidebarlogo} alt="nimbus" style={{ height: 40 }} />

                                            <h4 className=' mt-2 text-start'>Login </h4>
                                        </Col>
                                        <Col className='text-start'>
                                            <Form.Label className=''>User Id</Form.Label>
                                            <InputGroup  >
                                                <Form.Control
                                                    className="  rounded-start-1 "
                                                    name="userName"
                                                    type='text'
                                                    placeholder='User ID'
                                                    required
                                                />
                                                <InputGroup.Text className='bg-white rounded-end-1'>
                                                    <i><MdOutlineEmail />
                                                    </i></InputGroup.Text>
                                            </InputGroup>
                                        </Col>
                                        <Col className='text-start'>
                                            <Form.Label>Password</Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    className=" rounded-start-1"
                                                    name="password"
                                                    type='text'
                                                    placeholder='Password'
                                                    required
                                                />
                                                <InputGroup.Text className='bg-white rounded-end-1'>
                                                    <i><MdPassword />
                                                    </i></InputGroup.Text>
                                            </InputGroup>
                                            <Col className=" d-flex justify-content-between  mt-2">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="form-check-label text-primery" >
                                                        Remember Me
                                                    </label>
                                                </div>
                                                <Link to={'/forgot-password'} className='text-danger'>Forgor Password</Link>
                                            </Col>
                                            <Col className=' '>
                                                <Button type="submit" className="login_button btn-outline btn-primery " >Log in</Button>
                                            </Col>
                                        </Col>

                                        <Col className='text-center mt-4 '>
                                            <p>Don't have an account? <Link to={'/Register'} className='text-danger ' >Sign Up</Link ></p>
                                        </Col>
                                    </Col>
                                </Card>
                            </Form>
                        </section >
                    </Col>
                </Col>
            </Row >

        </Container >



    )
}

export default Login
