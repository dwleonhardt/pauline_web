import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import pauline_logo from '../assets/pauline_logo.png';
class Navigation extends Component {

  render() {
    return (
      <Navbar style={styles.nav}>
        <Navbar.Header>
          <Navbar.Brand >
            <span style={styles.brand}>
              <a href="/">
                <img style={styles.logo} src={pauline_logo} height="43" width="130" alt="Pauline" />
              </a>
            </span>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={4} href="#">
            <span style={styles.navItem}>Login</span>
          </NavItem>
        </Nav>

      </Navbar>
    );
  }
}

const styles = {
  nav: {
    backgroundColor: '#F41127'
  },
  navItem: {
    color: 'white'
  },
  brand: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    padding: '6px 14px'
  }
};

export default Navigation;
