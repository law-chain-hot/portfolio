import React from 'react';
import './NavComponent.css';



import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Route, BrowserRouter as Router } from 'react-router-dom'

function NavComponent() {
    return (
        <Navbar bg="dark" expand="sm" variant="dark" className='bar-shadow'>
            <Navbar.Brand href="https://law-chain-hot.github.io/portfolio/">Luo's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/portfolio">Home</Nav.Link>
                    {/* <Nav.Link href="/portfolio#about">About</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                <Nav.Link href="https://law-chain-hot.github.io/homepage/">Old Version</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}



export default NavComponent;


