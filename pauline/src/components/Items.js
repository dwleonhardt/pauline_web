import React, { Component } from 'react';
import { Col, FormGroup, FormControl, HelpBlock, ControlLabel, Button, Modal } from 'react-bootstrap';
import Navigation from './Nav';

class ItemModal extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      instructions: ''
    }

  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }
  postEvent(){
    fetch('https://paulineserver.herokuapp.com/daily_items', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then((res) => {
      console.log(res);
      this.props.getItems();
      this.props.toggleModals();
    })
  }

  render() {
    return (
        <Modal show={this.props.itemModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Schedule Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Col md={6} mdOffset={3}>
              <FormGroup controlId="form">
                <ControlLabel>Title</ControlLabel>
                <FormControl type="text" placeholder="Title" name="title" onChange={(e) => {
                  this.handleInputChange(e)
                }} value={this.state.title}/>
                <FormControl.Feedback />
                <HelpBlock>This will be the title of the schedule item</HelpBlock>
              </FormGroup>
            </Col>
            <Col md={6} mdOffset={3}>
              <FormGroup controlId="formBasicText">
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Instructions</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="Instructions" name="instructions" onChange={(e) => {
                    this.handleInputChange(e)
                  }} value={this.state.instructions}/>
                </FormGroup>
              </FormGroup>
            </Col>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={() => this.postEvent()}>Submit</Button>
          </Modal.Footer>
        </Modal>
        );
  }
}

export default ItemModal;
