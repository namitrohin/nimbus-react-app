import {
  Container, Row, Col, Button, Table, Nav, Form, InputGroup,

} from "react-bootstrap";
import { MdPeople } from "react-icons/md";
import { useState } from "react";

import LegalEntity from "./LegalEntity";
import Aggrement from "./Aggrement";
import BankDetails from "./BankDetails";
import BasicCompanyInfo from "./BasicCompanyInfo";
import SoleProprietorship from "../kyc/SoleProprietorship";
import Partnership from "../kyc/PartnershipAndLLP";
import PublicAndPrivateLTD from "../kyc/PublicAndPrivateLTD";
import PartnershipAndLLP from "../kyc/PartnershipAndLLP";

export default function CompanyProfile() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedType, setSelectedTab] = useState("");
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="main_bar">
            <section>
              <Col className="border bg-white mt-5 rounded">
                <Row className="w-100 d-flex justify-content-between align-items-start p-3">
                  <Col md={5} className="d-flex align-items-start gap-2">
                    <MdPeople size={25} /> <h4> Profile and Company Details</h4>
                  </Col>
                </Row>
                <Nav
                  size='sm'

                  className="p-2 "
                  variant="tabs"
                  onSelect={(selectedKey) => setActiveTab(selectedKey)}
                  defaultActiveKey="/home"
                  activeKey={activeTab}
                >

                  <div className="d-flex " style={{ fontSize: 13 }}>
                    <Nav.Item>
                      <Nav.Link className="primary-text" eventKey="home">Basic Company Info.</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="primary-text" eventKey="bankDetails">Bank Details.</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="primary-text" eventKey="kycDetails">Kyc Details.</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="primary-text" eventKey="agreement">Aggrement</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="primary-text" eventKey="legalEntity">
                        Legal Entity (For Invoicing)
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </Nav>
                <div className="mt-2 m-3">
                  {activeTab === "home" && (
                    <BasicCompanyInfo />
                  )}
                  {activeTab === "bankDetails" && (
                    <BankDetails />
                  )}
                  {activeTab === "kycDetails" && (
                    <Row>
                      <Col md={12}>
                        <Form>
                          <Row className="mb-3">
                            <Col md={6}>
                              <Form.Label>Select Type of KYC</Form.Label>
                              <Form.Select
                                size="sm"
                                aria-label="Default select example"

                                required
                                onChange={(e) => setSelectedTab(e.target.value)}
                              >
                                <option>Select Type</option>
                                <option value="1">Sole Proprietorship</option>
                                <option value="2">Partnership</option>
                                <option value="3">
                                  Limited Liability Partnership
                                </option>
                                <option value="4">
                                  Public Limited Company
                                </option>
                                <option value="5">
                                  Private Limited Company
                                </option>
                              </Form.Select>
                            </Col>
                          </Row>
                          {selectedType === "1" && (
                            <SoleProprietorship />
                          )}
                          {selectedType === "2" && (
                            <PartnershipAndLLP />
                          )}
                          {selectedType === "3" && (
                            <PartnershipAndLLP />
                          )}
                          {selectedType === "4" && (
                            <PublicAndPrivateLTD />
                          )}
                          {selectedType === "5" && (
                            <PublicAndPrivateLTD />
                          )}
                        </Form>
                      </Col>
                    </Row>
                  )}
                  {activeTab === "agreement" && (
                    <Aggrement />
                  )}
                  {activeTab === "legalEntity" && (

                    <LegalEntity />



                  )}
                </div>
              </Col>
            </section>
          </Col>
        </Row >
      </Container >
    </>
  );
}
