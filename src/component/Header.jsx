import React from "react";
import { MdEmail } from "react-icons/md";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { BiSolidPhoneCall, BiRupee } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";



export default function Header() {


    return (
        <>
            <header>
                <section>
                    <Container fluid className="topheader">
                        <Row >
                            <Col className='d-flex justify-content-end  gap-3 me-5'>
                                <a><BiSolidPhoneCall /> <span style={{ fontFamily: "Work Sans, sans-serif" }}>Connect us at: </span>+91-7669133030</a>
                                <a ><MdEmail /><span style={{ fontFamily: "Work Sans, sans-serif" }}> Email: </span>care@nimbuspost.com</a>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container fluid className="headertwo">
                        <Row className="d-flex justify-content-center ">
                            <Col sm={1} md={2}>

                            </Col>

                            <Col sm={12} md={6}>
                                <form className="align-items-center">
                                    <div className="input-group justify-content-end mx-4" >
                                        <select className="form-select bg-dark text-white " style={{ maxWidth: 120 }}>
                                            <option >Shipment</option>
                                        </select>
                                        <input type="text" className="form-control " placeholder="Search AWB Number(s)" style={{ maxWidth: 190 }} />
                                        <button className="btn btn-dark" type="search"><IoSearchSharp /></button>
                                    </div>
                                </form>
                            </Col>
                            <Col sm={12} md={2} className="" >
                                <div className="input-group d-flex justify-content-end align-items-start">
                                    <button className="btn bg-dark text-light " type="button" ><BiRupee /> Recharge</button>
                                    <button className="btn border " type="button" >Balance <BiRupee /> 0</button>
                                </div>

                            </Col>

                            <Col sm={12} md={2} className="d-flex justify-content-end" >
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" >
                                        Unknown
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Profile</Dropdown.Item>
                                        <Dropdown.Item>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </header>
        </>
    )
}