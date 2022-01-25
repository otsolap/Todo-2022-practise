import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../imgs/Avatar_sm.png'
import { faLinkedin, faGithub, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer() {
    return (
        <Container role="footer"
            className="justify-content-md-center bg-dark">
            <p className="text-center text-light">Otso Lappalainen | Buuti Oy</p>
            <Row>
                <Col md={4}
                    className="text-center"
                >
                    <a
                        target="_blank"
                        href="https://www.kultakammen.fi"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logo}
                            className="social-media-icon"
                            alt="Otso Lappalainen | Kultakammen"
                        />
                    </a>
                </Col>
                <Col md={4}
                    className="text-center"
                >
                    <a
                        className="social-media-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/otsolap/"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="brand-color"
                            aria-label="LinkedIn profile"
                            icon={faLinkedin} />
                    </a>
                </Col>
                <Col md={4}
                    className="text-center"
                >
                    <a
                        className="social-media-icon"
                        target="_blank"
                        href="https://github.com/otsolap"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="brand-color"
                            aria-label="Github profile"
                            icon={faGithub} />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}
