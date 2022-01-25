import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from '../imgs/Avatar_sm.png'

export default function Nav() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Otso Lappalainen | Kultakammen"
                    />
                    Todo App</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
