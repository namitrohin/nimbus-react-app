import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";
import {
    Settingsimg1, Settingsimg10, Settingsimg11, Settingsimg12, Settingsimg13, Settingsimg2, Settingsimg3,
    Settingsimg4, Settingsimg5, Settingsimg6, Settingsimg7, Settingsimg8, Settingsimg9
} from "../../utils/images";





export default function SettingsMain() {
    const cards = [
        // {
        //     title: 'Channel',
        //     text: 'Import orders from your online store',
        //     image: Settingsimg2,
        //     link: '',
        // },
        {
            title: 'Warehouse',
            text: 'Manage your pickup locations',
            image: Settingsimg3,
            link: '/Settings/warehouse',
        },
        {
            title: 'Employees',
            text: 'Allow access to team members',
            image: Settingsimg4,
            link: '/Settings/Employees',
        },
        // {
        //     title: 'API',
        //     text: 'Programmatically access NimbusPost data',
        //     image: Settingsimg5,
        //     link: '',
        // },
        // {
        //     title: 'Webhooks',
        //     text: 'Receive shipments status notification on URL',
        //     image: Settingsimg6,
        //     link: '',
        // },
        {
            title: 'Company Profile',
            text: 'Your company profile',
            image: Settingsimg7,
            link: '/Settings/company-profile',
        },
        // {
        //     title: 'Label Settings',
        //     text: 'Set your shipping label format',
        //     image: Settingsimg8,
        //     link: '',
        // },
        {
            title: 'Account Settings',
            text: 'Update your profile or password',
            image: Settingsimg9,
            link: '/Settings/AccountSettingDetails',
        },
        // {
        //     title: 'International KYC',
        //     text: 'Update your international KYC',
        //     image: Settingsimg10,
        //     link: '',
        // },
        // {
        //     title: 'Invoice Settings',
        //     text: 'Shipment invoice customization',
        //     image: Settingsimg11,
        //     link: '',
        // },
        // {
        //     title: 'Project weight freeze',
        //     text: 'Set weight dimension of your shipment',
        //     image: Settingsimg12,
        //     link: '',
        // },
        // {
        //     title: 'Product HSN/GST Mapping',
        //     text: 'Set GST HSN against your product',
        //     image: Settingsimg13,
        //     link: '',
        // },
    ];


    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="main_bar">
                        <section >
                            <Col className="border bg-white mt-5 rounded" >
                                <Col >
                                    <Row className="p-2">
                                        <Col>
                                            <Col style={{ backgroundColor: "#e7ecf3" }}>
                                                <h4 className=" text-white p-3 " style={{ backgroundColor: "#495662" }}>SETTINGS</h4>
                                                <Row>
                                                    <Col md={3} className="">
                                                        <Card style={{ width: '300px', height: "900px", backgroundColor: "#f1f5f9", borderColor: "#f1f5f9" }} className="m-2  ">
                                                            <Card.Body >
                                                                <Card.Title>Settings</Card.Title>
                                                                <Card.Text>
                                                                    Take your shipping experience a notch higher with us by regulating your panel settings as per your convenience and specific business requirements. From importing orders to managing labels and all other account settings, get everything at the tap of your finger for an uninterrupted experience.
                                                                </Card.Text>
                                                                <Card.Img variant="center" src={Settingsimg1} className="mt-5" />
                                                            </Card.Body>
                                                        </Card>

                                                    </Col>

                                                    <Col>
                                                        <Row className="g-3">
                                                            {cards.map((card, index) => (
                                                                <Col key={index} xs={12} sm={6} md={4} >
                                                                    <Link to={card.link}>
                                                                        <Card
                                                                            style={{
                                                                                width: "280px",
                                                                                borderRadius: '1.5rem',
                                                                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                                                                                backgroundColor: '#ffffff',
                                                                                minHeight: "240px"

                                                                            }}
                                                                            className="p-3 "
                                                                        >
                                                                            <div className="shadow"
                                                                                style={{
                                                                                    width: '74px',
                                                                                    height: '70px',
                                                                                    borderRadius: '17px',
                                                                                    display: 'flex',
                                                                                    justifyContent: 'center',
                                                                                    alignItems: 'center',
                                                                                    marginBottom: '9px',
                                                                                }}
                                                                            >
                                                                                <img src={card.image} alt={card.title} className="shadow " style={{ width: '30px', height: '30px' }} />
                                                                            </div>
                                                                            <Card.Body className="p-0 mt-4">
                                                                                <Card.Title style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1d1d1f' }}>
                                                                                    {card.title}
                                                                                </Card.Title>
                                                                                <Card.Text style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                                                                                    {card.text}
                                                                                </Card.Text>
                                                                            </Card.Body>
                                                                        </Card>
                                                                    </Link>
                                                                </Col>
                                                            ))}
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col >
                            </Col>

                        </section>
                    </Col>
                </Row>
            </Container >

        </>
    )
}
