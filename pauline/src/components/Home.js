import React, { Component } from 'react';
import {Jumbotron, Button, Col, Row, Panel, FormControl, FormGroup, Modal } from 'react-bootstrap';
import pauline_logo from '../assets/pauline_logo.png';
import Navigation from './Nav';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Col md={8} mdOffset={2} className="container" style={styles.padLogin}>
          <Panel style={styles.header}>
            <h1 className="text-center">Welcome</h1>
            <Panel>
              <FormGroup style={styles.pad}>
                <div style={styles.padButton} className="text-center">
                  <Button bsStyle="primary" href="/daily-schedule">Enter</Button>
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
    backgroundColor: '#2fa9ef'
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
