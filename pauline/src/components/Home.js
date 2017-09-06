import React, { Component } from 'react';
import {Jumbotron, Button, Col } from 'react-bootstrap';
import Navigation from './Nav';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Col md={8} mdOffset={2} className="container">
          <Jumbotron>
            <h1>Welcome to Pauline</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
        </Col>
      </div>
    );
  }
}

export default Home;
