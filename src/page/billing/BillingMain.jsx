import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { RiCheckboxMultipleBlankFill, RiCurrencyFill } from "react-icons/ri";
import { IoCalculatorOutline } from "react-icons/io5";
import { GrCurrency } from "react-icons/gr";
import { FaWallet, FaShippingFast, FaFileInvoice } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import PriceCalculator from "./PriceCalculator";




export default function BillingMain() {
    const [activeTab, setActiveTab] = useState('calculator');
    const tabs = [
        { name: 'calculator', label: 'Price Calculator', link: 'price-calculator', icon: <IoCalculatorOutline size={13} /> },
        { name: 'cod', label: 'COD Remittance', link: 'cod-remittance', icon: <GrCurrency size={13} /> },
        { name: 'wallet', label: 'Wallet Transactions', link: '', icon: <FaWallet size={13} /> },
        { name: 'shipping', label: 'Shipping Charges', link: '', icon: <FaShippingFast size={13} /> },
        { name: 'invoice', label: 'Invoice', link: '', icon: <FaFileInvoice size={13} /> },
        { name: 'credit', label: 'Credit Notes', link: '', icon: <FaRegNoteSticky size={13} /> },
        { name: 'tds', label: 'TDS', link: '', icon: <RiCurrencyFill size={13} /> },
    ];

    return (
        <>
            <Container fluid >
                <Row >
                    <Col className="main_bar" >
                        <section>
                            <Col className="border bg-white mt-4 rounded " style={{ height: 900 }} >
                                <Col>
                                    <Row className="w-100 d-flex justify-content-between align-items-start  p-2 ">
                                        <Col className="d-flex align-items-start gap-2 mb-4 " >
                                            <RiCheckboxMultipleBlankFill size={25} />
                                            <h4 >Billing Price Calculator</h4>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <ul className="nav nav-tabs p-2 small">
                                        {tabs.map((tab) => (
                                            <li className="nav-item " key={tab.name}>
                                                <Link
                                                    to={tab.link}
                                                    className={`nav-link  d-flex align-items-center  ${activeTab === tab.name ? 'active' : ''}`}
                                                    onClick={() => setActiveTab(tab.name)}
                                                >
                                                    <p > {tab.icon} {tab.label}</p>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    outlet start <br />

                                    <Outlet />

                                    outlet end

                                </Col>
                            </Col>

                        </section>
                    </Col>
                </Row >
            </Container >






        </>
    )
}


