import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { MenuIcon } from '@heroicons/react/solid';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" variant="primary" className='header'>
                <Container className='header-container'>
                    <Navbar.Brand as={Link} to="/" className='m-0'>
                        <span className='brand-logo text-white fw-bold'>Best Photography</span>
                    </Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <div className='d-flex align-items-center user-profile-div'>
                        {
                            user && <NavDropdown id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => signOut(auth)}>
                                    Sign Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        }
                        {
                            user ? <div>
                                <span className='text-white'>{user.displayName || user.email}</span>
                                <img className='user-profile ms-2' src={user.photoURL} alt="" />
                            </div> : <>
                            <Link to="login" className='py-2 px-4 bg-white rounded text-decoration-none me-2'>
                                Login
                            </Link>
                            <Link to="register" className='py-2 px-4 bg-primary text-white text-decoration-none rounded'>
                                Register
                            </Link>
                            </>
                        }
                        <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav">
                            <MenuIcon width={32} height={32}></MenuIcon>
                        </Navbar.Toggle>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;