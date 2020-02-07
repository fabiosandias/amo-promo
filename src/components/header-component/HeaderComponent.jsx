import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default props => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Amo Promo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/search">Cotar seguro viagem</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

