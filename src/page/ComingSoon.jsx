import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { comingSoonBanner } from "../utils/images";


export default function ComingSoon() {
    return (
        <>
            <Container fluid className="text-center" style={{ maxHeight: '100vh ' }}>
                <img src={comingSoonBanner} className="w-50" style={{ objectFit: 'contain' }} />
            </Container>

        </>
    )
}