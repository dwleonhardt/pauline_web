import React, { Component } from 'react';
import { Col, Row, Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
//




const ScheduleModal = (props) => {

  const handleInputChange = (event) => {
    props.setItem(event.target.value);
  }

  const start = time => props.setTime({ start: time });

  const end = time => props.setTime({ end: time });


  let items = props.items.map((item, i) => (
    <option key={i} value={item.id}>{item.title}</option>
  ))

    return (
      <div>
        <Modal show={props.showModal} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Start</p>
            <TimePicker
              showSecond={false}
              defaultValue={moment(props.startTime)}
              className="start"
              onChange={start}
              use12Hours
            />
            <p>End</p>
            <TimePicker
              showSecond={false}
              defaultValue={moment(props.endTime)}
              className="end"
              onChange={end}
              use12Hours
            />
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select Item</ControlLabel>
              <FormControl componentClass="select" placeholder="Select Item" onChange={(e) => {
                handleInputChange(e)
              }}>
                <option value="select">Select Item</option>
                {items}
              </FormControl>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.submitItem}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default ScheduleModal;
