import React, { Component } from 'react';
import { Col, Row, Button, Modal } from 'react-bootstrap';


const ScheduleModal = (props) => {

    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={props.open}
        >
          Launch demo modal
        </Button>

        <Modal show={props.showModal} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.close}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default ScheduleModal;
