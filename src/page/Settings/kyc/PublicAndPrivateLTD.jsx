import React from "react";
import {
  Button,
  Col,
  Row,
  Form,
  InputGroup,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

import { FaInfoCircle } from "react-icons/fa";
export default function PublicAndPrivateLTD() {
  return (
    <>
      <Row className="mt-5">
        <Col md={12}>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="PartnershipId">
                  <Form.Label>
                    Document 1 - Company PAN Card Number{" "}
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control size="sm" type="text" placeholder="" required />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Group controlId="PartnershipId">
                  <Form.Label>
                    Enter Name on Pan Card{" "}
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control size="sm" type="text" placeholder="" required />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>
                    Upload Pan Card Image <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control size="sm" type="file" required />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Group controlId="PublicLtdId">
                  <Form.Label>Enter COI No.</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="" required />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>
                    Upload COI{" "}
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-coi">
                          Certificate of Incorporation
                        </Tooltip>
                      }
                    >
                      <span style={{ cursor: "pointer" }}>
                        <FaInfoCircle className="text-primary ms-1" />
                      </span>
                    </OverlayTrigger>{" "}
                    Image
                  </Form.Label>
                  <Form.Control size="sm" type="file" />
                </Form.Group>
              </Col>
            </Row>
            <Col md={6} sm={12}>
              <Col
                className="d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "#12263f", height: 60 }}
              >
                <p className="text-light text-center fs-3  ">Second Section</p>
              </Col>
            </Col>
            {/* <Row className="mt-5"> */}
            <Row className="mb-3 mt-5">
              <Col md={6}>
                <Form.Label>
                  Document Type <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  size="sm"
                  aria-label="Default select example"
                  required
                >
                  <option>select Document type</option>
                  <option value="1">Electricity Bill</option>
                  <option value="2">Lease / Rent Aggrement</option>
                  <option value="3">Telephone / Broadband Bill</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="d-flex flex-column align-items-start">
                <Form.Group controlId="document1" className="w-100">
                  <Form.Label>
                    Document ID <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control size="sm" type="text" placeholder="" required />
                </Form.Group>
              </Col>
              <Col md={3} className="d-flex flex-column align-items-end me-5">
                <Form.Group controlId="document2" className="w-100">
                  <Form.Label>
                    Name on Document <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control size="sm" type="text" placeholder="" required />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>
                    Upload Document Image <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control size="sm" type="file" required />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="success" size="sm" type="submit">
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
