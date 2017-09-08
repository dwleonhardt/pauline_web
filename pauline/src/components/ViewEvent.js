import React, { Component } from 'react';
import { Col, Row, Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
//




const ViewEvents = (props) => {

  if (props.event) {
    return (
      <div>
        <Modal show={props.eventModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>{props.event.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instructions</h4>
            <p>{props.event.instructions}</p>
            <hr/>
            <h4>Notes</h4>
            <p>{props.event.notes}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => props.closeEvent()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  else {
    return (
      <div>
        <Modal show={props.eventModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Something Went Wrong...</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ViewEvents;
