import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';

var resqueLogoLink = 'https://firebasestorage.googleapis.com/v0/b/rcd-static.appspot.com/o/images%2Fimg-1527022085855-gray-resQue-Logo-png-transsmall.png?alt=media&token=1d657178-7337-4b85-a655-b8cd7da5a751'

class Navigation extends Component {
  render() {
    return (
      <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>
          <LinkContainer to="/">
            <img
              src={resqueLogoLink}
              id="navbarLogo"
              className="d-inline-block align-top"
              alt="Resque logo"
              width = "175"
              height = "40"
            />
          </LinkContainer>
        </Navbar.Brand>

        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <NavDropdown alignRight title="More" id="basic-nav-dropdown">
            <LinkContainer to="/team">
              <NavDropdown.Item>Team</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/ebooks">
              <NavDropdown.Item>E-Books</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>

      </Navbar>
      </Container>
    )
  }
}
export default Navigation;
