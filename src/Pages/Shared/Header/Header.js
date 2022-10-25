import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../../LeftSideNav/LeftSideNav';



const Header = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect className='' expand="lg" bg="light" variant="light">
                <Container>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/2936/2936735.png" alt="Logo" width="50" height="35" className="d-inline-block align-text-top" />
                        <Navbar.Brand href="/home" className='fw-bold'>E-learning Centre</Navbar.Brand>
                    </div>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="/courseCategories" className='pe-2'>Courses</Nav.Link>
                            {/* <NavDropdown href="#features" title="Courses" className='pe-2' id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Programming Languages</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Data Science and Machine Learning
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Design
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Development
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">
                                Photography
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">
                                English
                            </NavDropdown.Item>
                        </NavDropdown> */}
                            <Nav.Link href="/faq" className='pe-2'>FAQ</Nav.Link>
                            <Nav.Link href="/blog" className='pe-2'>Blog</Nav.Link>
                            <Nav.Link eventKey={2} href="/about" className='pe-2'>
                                About Us
                            </Nav.Link>
                            <Nav.Link href="/login" className='pe-2'>Login</Nav.Link>
                            <Nav.Link href="/register" className='pe-2'>Sign Up</Nav.Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;