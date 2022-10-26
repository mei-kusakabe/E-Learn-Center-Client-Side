import React from 'react';
import { useContext } from 'react';
import { Button, Image, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import LeftSideNav from '../../LeftSideNav/LeftSideNav';
import "./Header.css"


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='header'>
            <Navbar collapseOnSelect className='nav-bg text-white' expand="lg" variant="light">
                <Container>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/2936/2936735.png" alt="Logo" width="50" height="35" className="d-inline-block align-text-top" />
                        <Navbar.Brand href="/home" className='fw-bold text-white'>E-learning Centre</Navbar.Brand>
                    </div>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="/courseCategories" className='pe-2 text-white fw-bold'>Courses</Nav.Link>
                            <Nav.Link href="/faq" className='pe-2 text-white fw-bold'>FAQ</Nav.Link>
                            <Nav.Link href="/blog" className='pe-2 text-white fw-bold'>Blog</Nav.Link>
                            <Nav.Link eventKey={2} href="/about" className='pe-2 text-white fw-bold'>
                                About Us
                            </Nav.Link>
                            <Nav>
                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                <span>{user?.displayName}</span>
                                                <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                            </>
                                            :
                                            <>
                                                <Link to='/login' style={{ textDecoration: 'none' }} className='text-white fw-bold'>Login</Link>
                                                <Link to='/register' style={{ textDecoration: 'none' }} className='text-white fw-bold'>Register</Link>
                                            </>
                                    }


                                </>
                                <Link to="/profile" style={{ textDecoration: 'none' }} className='text-white fw-bold'>
                                    {user?.photoURL ?
                                        <Image
                                            style={{ height: '50px' }}
                                            roundedCircle
                                            src={user?.photoURL}>
                                        </Image>
                                        : <FaUser></FaUser>
                                    }
                                </Link>
                            </Nav>

                            {/* <Nav.Link href="/login" className='pe-2'>Login</Nav.Link>
                            <Nav.Link href="/register" className='pe-2'>Sign Up</Nav.Link> */}
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