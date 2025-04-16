import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { FaHouseChimney } from "react-icons/fa6";
import { HiArrowSmUp } from "react-icons/hi";
import { LuArrowDown } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Warehouse() {

    return (
        <>
            <Container fluid >
                <Row>
                    <Col className="main_bar">
                        <section>
                            <Col className="border bg-white mt-5 rounded">
                                <Row className="w-100 d-flex justify-content-between align-items-start p-3">
                                    <Col md={5} className="d-flex align-items-start gap-2">
                                        <FaHouseChimney size={25} />
                                        <h4>Warehouse List</h4></Col>
                                    <Col md={4} className="d-flex gap-2 justify-content-end">
                                        <Button variant="light" size="sm" className=" btn-outline-dark" as={Link} to="/warehouse/AddWareHouse"><GoPlus /> New Warehouse</Button>
                                        <Button variant="light" size="sm" className="btn-outline-dark "><HiArrowSmUp />Import</Button>
                                        <Button variant="light" size="sm" className="btn-outline-dark "><LuArrowDown />Export</Button>
                                    </Col>
                                </Row>
                                <Col className="px-3 pe-3">
                                    <Table hover responsive>
                                        <thead>
                                            <tr>
                                                <th>Warehouse Name</th>
                                                <th>Contact Person</th>
                                                <th>Warehouse Details</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody className="">
                                            <tr className="p-2">
                                                <td colSpan="5" className="text-center text-muted ">
                                                    No Records found
                                                </td>
                                            </tr>
                                        </tbody>

                                    </Table>
                                </Col>

                            </Col>
                        </section>

                    </Col>
                </Row>
            </Container>
        </>
    )
}