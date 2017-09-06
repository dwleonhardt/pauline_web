import React, { Component } from 'react';
import { Col, FormGroup, FormControl, HelpBlock, ControlLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from './Nav';
import DayView from './DayView';
import ScheduleModal from './ScheduleModal';


class DailySchedule extends React.Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      dateString: '',
      showModal: false
    }
  }

  componentDidMount() {
    this.weekConverter(this.state.today);
    this.updateDay(this.state.today);
  }

  getRange = (range) => {
    return fetch(`https://paulineserver.herokuapp.com/scheduled_items/${range}`)
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson = responseJson.sort(function(x, y){
        return x.start_time - y.start_time;
      })
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

  weekConverter = (date) => {
    let dateCopy = new Date(date);
    let day = dateCopy.getDay();
    let sunday = dateCopy.getDate() - day + (day === 0 ? -6:0);
    let weekStart = new Date(dateCopy.setDate(sunday)).toUTCString();
    let saturday = dateCopy.getDate() - day + (day === 0 ? -6:8);
    let weekEnd = new Date(dateCopy.setDate(saturday)).toUTCString();
    let range = JSON.stringify({start:`${weekStart}`, end:`${weekEnd}`});
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

  open = () => {
    this.setState({showModal: true});
  }

  close = () => {
    this.setState({showModal: false});
  }


  render() {
    return (
      <div>
        <Navigation />
        <div className="container" >
          <DayView dailyItems={this.state.dailyItems}/>
          <ScheduleModal {...this.state} open={this.open} close={this.close}/>
        </div>
      </div>
    )
 }

}

export default DailySchedule;
