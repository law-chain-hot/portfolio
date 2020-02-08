import React from 'react';
import './NavComponent.css';


import { Link, NavLink } from 'react-router-dom'
import { Nav, Navbar, NavDropdown,  } from 'react-bootstrap';
// import { Route, BrowserRouter as Router } from 'react-router-dom'

function NavComponent() {
    return (
        <Navbar bg="dark" expand="sm" variant="dark" className='bar-shadow'>
            <Navbar.Brand className='brand-words' href="https://law-chain-hot.github.io/portfolio/">Luo's portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/home" className="link-words">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/history">History</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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


