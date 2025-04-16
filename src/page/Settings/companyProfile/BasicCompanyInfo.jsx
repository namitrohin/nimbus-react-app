import React from "react";
import { Button, Col, Row, Form } from "react-bootstrap";

export default function BasicCompanyInfo() {
  return (
    <>
      <Row>
        <Col md={12}>
          <Form>
            <Col className="mb-3 d-flex gap-3 mt-3">
              <Col md={3} className="mb-3">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Company Name </Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter Company Name"
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Website URL </Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Enter URL" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Your Company Logo</Form.Label>
                  <Form.Control size="sm" type="file" />
                </Form.Group>
              </Col>
            </Col>
            <Col className="mb-3 d-flex gap-3 mt-3">
              <Col md={3}>
                <Form.Group controlId="formExtra1">
                  <Form.Label>
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter Email"
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId="formExtra2">
                  <Form.Label>
                    Contact No. <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter Contact No."
                    required
                  />
                </Form.Group>
              </Col>
            </Col>
            <Col md={6} className="mb-3 " style={{ width: "635px" }}>
              <Form.Group
                size="sm"
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  {" "}
                  Company Address <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control size="sm" as="textarea" rows={3} required />
              </Form.Group>
            </Col>
            <Col className="mb-3 d-flex gap-3 mt-3">
              <Col md={3}>
                <Form.Group controlId="formExtra2">
                  <Form.Label>
                    City <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="City"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Label>
                  State <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select size="sm" required>
                  <option>Select State</option>
                  <option value="1">Andaman & Nicobar Islands</option>
                  <option value="2">Andhra Pradesh</option>
                  <option value="3">Arunachal Pradesh</option>
                  <option value="4">Assam</option>
                  <option value="5">Bihar</option>
                  <option value="6">Chandigarh</option>
                  <option value="7">Chhattisgarh</option>
                  <option value="8">Dadra & Nagar Haveli</option>
                  <option value="9">Daman & Diu</option>
                  <option value="10">Delhi</option>
                  <option value="11">Goa</option>
                  <option value="12">Gujarat</option>
                  <option value="13">Haryana</option>
                  <option value="14">Himachal Pradesh</option>
                  <option value="15">Jammu & Kashmir</option>
                  <option value="16">Jharkhand</option>
                  <option value="17">Karnataka</option>
                  <option value="18">Kerala</option>
                  <option value="19">Ladakh</option>
                  <option value="20">Lakshdweep</option>
                  <option value="21">Madhya Pradesh</option>
                  <option value="22">Maharashtra</option>
                  <option value="23">Manipur</option>
                  <option value="24">Meghalaya</option>
                  <option value="25">Mizoram</option>
                  <option value="26">Nagaland</option>
                  <option value="27">Odisha</option>
                  <option value="28">Other Territory</option>
                  <option value="29">Puducherry</option>
                  <option value="30">Punjab</option>
                  <option value="31">Rajasthan</option>
                  <option value="32">Sikkim</option>
                  <option value="33">Tamil Nadu</option>
                  <option value="34">Telangana</option>
                  <option value="35">Tripura</option>
                  <option value="36">Uttar Pradesh</option>
                  <option value="37">Uttarakhand</option>
                  <option value="38">West Bengal</option>
                </Form.Select>
              </Col>
            </Col>
            <Col className="mb-3">
              <Col md={3}>
                <Form.Group>
                  <Form.Label>
                    Pincode <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Pincode"
                    className="mb-3"
                    required
                  />
                </Form.Group>
              </Col>
            </Col>
            <Button size="sm" variant="success" type="submit">
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
