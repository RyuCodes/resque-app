import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>
          <img
            src="http://v.fastcdn.co/t/65d56731/fcac0456/1554921619-29699837-220x58-resQue-Logo-w-colors.png"
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
          <Nav.Link href="">Contact</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="">Team</NavDropdown.Item>
            <NavDropdown.Item href="">eBook</NavDropdown.Item>
          </NavDropdown>
        </Nav>

      </Navbar>
    )
  }
}
export default Navigation;
