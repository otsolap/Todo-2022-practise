import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../imgs/Avatar_sm.png'

export default function Footer() {
    return <footer>
        <Container>
            <Row>
                <Col>
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Otso Lappalainen | Kultakammen"
                    />
                    Otso Lappalainen
                </Col>
            </Row>
        </Container>
    </footer>;
}
