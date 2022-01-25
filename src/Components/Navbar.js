import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from '../imgs/Avatar_sm.png'

export default function Nav() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#"
                    className="social-media-icon"
                >
                    <img
                        src={logo}
                        width="80px"
                        height="80px"
                        className="d-inline-block align-top"
                        alt="Otso Lappalainen | Kultakammen"
                    />
                    Todo App
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
