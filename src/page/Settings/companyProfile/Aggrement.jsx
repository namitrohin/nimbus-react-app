import React from "react";
import { Button,Col,Row,Form,Table } from "react-bootstrap";

export default function Aggrement() {
    return (
        <>
          <Row>
                      <Col className="px-3 pe-3">
                        <Table hover responsive
                          size="sm">
                          <thead>
                            <tr>
                              <th>Section Name</th>
                              <th>Version</th>
                              <th>Change Description</th>
                              <th>Doc Link</th>
                              <th>User Name</th>
                              <th>Acceptance Date</th>
                              <th>Published On</th>
                              <th>IP Address</th>
                              <th>Status</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr size="sm" className="p-2">
                              <td colSpan="9" size="sm" className="text-center text-muted ">
                                No Records found
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
        </>
    )
}