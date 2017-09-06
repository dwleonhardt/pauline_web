import React, { Component } from 'react';
import { Col, Row, Button, Modal } from 'react-bootstrap';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
//
function onChange(time) {
  console.log(time);
}




const ScheduleModal = (props) => {

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
              onChange={onChange}
              use12Hours
            />
            <p>End</p>
            <TimePicker
              showSecond={false}
              defaultValue={moment(props.endTime)}
              className="end"
              onChange={onChange}
              use12Hours
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.close}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default ScheduleModal;
