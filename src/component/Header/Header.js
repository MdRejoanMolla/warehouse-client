import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import icon from '../picture/bike (1).png'
import './Header.css'

const Header = () => {
      const [user] = useAuthState(auth);
      const handleSignOut = () => {
            signOut(auth);
      }

      return (
            <Navbar collapseOnSelect expand="lg" sticky='top'
                  bg="primary" variant="dark">
                  <Container>
                        <Navbar.Brand className='d-flex' as={Link} to="/">
                              <img src={icon} alt="" />
                              <p className='m-2'><i className='bike'><strong>BIKE</strong> </i> <span className='ware'><strong> WAREHOUSE</strong></span></p>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/manageItem">Manage Item</Nav.Link>
                                    <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="/myItem">My Item</Nav.Link>
                                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

                              </Nav>
                              <Nav>
                                    <Nav.Link as={Link} to="/about">About </Nav.Link>
                                    {
                                          user ? <button className='btn btn-link text-warning text-decoration-none' onClick={handleSignOut}>sign out</button> :
                                                <Nav.Link as={Link} to="/login">
                                                      Login
                                                </Nav.Link>}

                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;