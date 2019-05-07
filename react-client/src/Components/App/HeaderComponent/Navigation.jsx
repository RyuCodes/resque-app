import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap';

var resqueLogoLink = 'https://firebasestorage.googleapis.com/v0/b/rcd-static.appspot.com/o/images%2Fimg-1527022085855-gray-resQue-Logo-png-transsmall.png?alt=media&token=1d657178-7337-4b85-a655-b8cd7da5a751'

class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>
          <img
            src={resqueLogoLink}
            width="150"
            height="40"
            className="d-inline-block align-top"
            alt="Resque logo"
          />
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
          <NavDropdown title="More" id="basic-nav-dropdown">
            <LinkContainer to="/team">
              <NavDropdown.Item>Team</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item href="">eBook</NavDropdown.Item>
          </NavDropdown>
        </Nav>

      </Navbar>
    )
  }
}
export default Navigation;
