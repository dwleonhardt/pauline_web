import React, { Component } from 'react';
import {Jumbotron, Button, Col, Row, Panel, FormControl, FormGroup } from 'react-bootstrap';
import Navigation from './Nav';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Col md={8} mdOffset={2} className="container" style={styles.padLogin}>
          <Panel style={styles.header}>
            <p className="text-center">Login</p>
            <Panel>
              <FormGroup style={styles.pad}>
                <Col md={6}>
                  <p style={styles.form}>Username</p>
                  <FormControl type="text" />
                </Col>
                <Col md={6}>
                  <p style={styles.form}>Password</p>
                  <FormControl type="password" />
                </Col>
                <div style={styles.padButton} className="text-center">
                  <Button href="/daily-schedule">Login</Button>
                </div>
              </FormGroup>
            </Panel>
          </Panel>
        </Col>
      </div>
    );
  }
}

const styles = {
  header: {
    color: 'white',
    backgroundColor: '#F41127'
  },
  form: {
    color: 'black'
  },
  pad: {
    paddingBottom: '10%',
    paddingTop: '10%'
  },
  padLogin: {
    paddingTop: '10%'
  },
  padButton: {
    paddingTop: '10%'
  }
}

export default Home;
