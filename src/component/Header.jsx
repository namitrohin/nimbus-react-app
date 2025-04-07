import React from "react";
import { MdEmail } from "react-icons/md";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { BiSolidPhoneCall, BiRupee } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
    console.log('HEADER');
    return (
        <>
            <header>
                <section>
                    <Container fluid className="topheader">
                        <Col className='d-flex justify-content-end  gap-3'>
                            <a><BiSolidPhoneCall /> <span style={{ fontFamily: "Work Sans, sans-serif" }}>Connect us at: </span>+91-7669133030</a>
                            <a ><MdEmail /><span style={{ fontFamily: "Work Sans, sans-serif" }}> Email: </span>care@nimbuspost.com</a>
                        </Col>
                    </Container>
                </section>

                <section>
                    <Container fluid className="headertwo pt-2 pb-2">
                        <Row className="d-flex justify-content-end gap-1 ">

                            <Col md={12}>
                                <div className="d-flex gap-3 align-items-center justify-content-end">

                                    <form >
                                        <div className="input-group justify-content-end " >
                                            <select className="form-select bg-dark text-white " size="sm" style={{ maxWidth: 120 }}>
                                                <option >Shipment</option>
                                            </select>
                                            <input type="text" className="form-control " placeholder="Search AWB Number(s)" />
                                            <button className="btn btn-dark " type="search"><IoSearchSharp /></button>
                                        </div>
                                    </form>

                                    <div>
                                        <div className="input-group d-flex justify-content-start ">
                                            <button className="btn bg-dark text-light btn-sm" type="button" ><BiRupee /> Recharge</button>
                                            <button className="btn border btn-sm" type="button" >Balance <BiRupee /> 0</button>
                                        </div>
                                    </div>

                                    <Dropdown >
                                        <Dropdown.Toggle variant="light" size="sm">
                                            Unknown
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Profile</Dropdown.Item>
                                            <Dropdown.Item>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </header>
        </>
    )
}