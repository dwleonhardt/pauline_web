import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Pauline</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">About</NavItem>
          <NavItem eventKey={2} href="#">Contact</NavItem>
          <NavItem eventKey={2}>
            <Link to={{pathname: '/add-items'}}>Add Items</Link>
          </NavItem>

        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} href="#">Login</NavItem>
        </Nav>

      </Navbar>
    );
  }
}

export default Navigation;
