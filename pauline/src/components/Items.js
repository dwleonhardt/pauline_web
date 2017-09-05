import React, { Component } from 'react';
import { Col, FormGroup, FormControl, HelpBlock, ControlLabel, Button } from 'react-bootstrap';
import Navigation from './Nav';

class Items extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      instructions: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    // console.log(event.target.name);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
    console.log(this.state);
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
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <form className="container">
          <Col md={6} mdOffset={3}>
            <h1>Add Schedule Item</h1>
          </Col>
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
            <Button bsStyle="primary" onClick={() => this.postEvent()}>Submit</Button>
          </Col>
        </form>
      </div>
    );
  }
}

export default Items;
