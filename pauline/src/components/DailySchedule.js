import React, { Component } from 'react';
import { Col, FormGroup, FormControl, HelpBlock, ControlLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from './Nav';
import DayView from './DayView';


class DailySchedule extends React.Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      dateString: '',
    }
  }

  componentDidMount() {
    this.dayConverter(this.state.today);
    this.updateDay(this.state.today);
  }


  getRange = (range) => {
    return fetch(`https://paulineserver.herokuapp.com/scheduled_items/${range}`)
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson = responseJson.sort(function(x, y){
        return x.start_time - y.start_time;
      })
      // console.log(responseJson);
      if (this.state.dailyItems) {
        let copy = Object.assign({}, this.state);
        copy.dailyItems = responseJson;
        this.setState(copy);
        this.refreshDay();
      }
      else {
        let copy = Object.assign({}, this.state);
        copy.dailyItems = responseJson;
        this.setState(copy);
      }
    })
  }

  dayConverter = (date) => {
    let dateCopy = new Date(date);
    let dayStart = new Date(dateCopy.setHours(0,0,0,0)).toUTCString();
    let dayEnd = new Date(dateCopy.setDate(date.getDate() + 1)).toUTCString();
    let range = JSON.stringify({start:`${dayStart}`, end:`${dayEnd}`});
    this.updateDay(date);
    this.getRange(range);
  }

  updateDay = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateString = date.toLocaleDateString('en-US', options);
    let copy = Object.assign({}, this.state);
    copy.dateString = dateString;
    this.setState(copy);
  }

  refreshDay = () => {
    this.props.navigation.navigate('DailyItems',
      {
        dailyItems: this.state.dailyItems,
        today: this.state.today,
        dayConverter: this.dayConverter,
        refreshDay: this.refreshDay,
        updateDay: this.updateDay,
        dateString: this.state.dateString
      }
    )
  }


  render() {
    return (
      <div>
        <Navigation />
        <div className="container" >
          <DayView dailyItems={this.state.dailyItems}/>
        </div>
      </div>
    )
 }

}

export default DailySchedule;
