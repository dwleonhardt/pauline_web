import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Pauline</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">About</NavItem>
          <NavItem eventKey={2} href="#">Contact</NavItem>
          <NavItem eventKey={2} href="/add-items">Add Items</NavItem>
          <NavItem eventKey={2} href="/daily-schedule">Daily Schedule</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} href="#">Login</NavItem>
        </Nav>

      </Navbar>
    );
  }
}

export default Navigation;
