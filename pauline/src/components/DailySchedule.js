import React, { Component } from 'react';
import { Col, FormGroup, FormControl, HelpBlock, ControlLabel, Button } from 'react-bootstrap';
import moment from 'moment';
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
      showModal: false,
      startTime: new Date(),
      endTime: new Date(),
      items: []
    }
  }

  componentDidMount() {
    this.weekConverter(this.state.today);
    this.updateDay(this.state.today);

    return fetch('https://paulineserver.herokuapp.com/daily_items')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({items: responseJson});
    })
  }

  getRange = (range) => {
    return fetch(`https://paulineserver.herokuapp.com/scheduled_items/${range}`)
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson = responseJson.sort(function(x, y){
        return x.start_time - y.start_time;
      })
      let copy = Object.assign({}, this.state);
      copy.dailyItems = responseJson;
      this.setState(copy);
    })
  }

  weekConverter = (date) => {
    let dateCopy = new Date(date);
    let day = dateCopy.getDay();
    let sunday = dateCopy.getDate() - day + (day === 0 ? -6:-1);
    let weekStart = new Date(dateCopy.setDate(sunday)).toUTCString();
    let saturday = dateCopy.getDate() - day + (day === 0 ? -6:10);
    let weekEnd = new Date(dateCopy.setDate(saturday)).toUTCString();
    let range = JSON.stringify({start:`${weekStart}`, end:`${weekEnd}`});
    console.log(range);
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

  open = () => {
    this.setState({showModal: true});
  }

  close = () => {
    this.setState({showModal: false});
  }

  setTime = (slotInfo) => {
    let copy = Object.assign({}, this.state);
    if (slotInfo.start && slotInfo.end) {
      copy.startTime = slotInfo.start;
      copy.endTime = slotInfo.end;
      copy.showModal = true;
    }
    else if (slotInfo.start) {
      console.log(slotInfo.start);
      copy.startTime = slotInfo.start;
    }
    else {
      console.log(slotInfo.end);
      copy.endTime = slotInfo.end;
    }
    this.setState(copy);
  }

  setItem = (id) => this.setState({ itemId: id });

  submitItem = () => {
    var item = {
      'daily_item_id': this.state.itemId,
      'start_time': moment.utc(this.state.startTime).format(),
      'end_time': moment.utc(this.state.endTime).format()
    }
    console.log(this.state.startTime);
    fetch('https://paulineserver.herokuapp.com/scheduled_items', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item)
    })
    .then((res) => {
      this.weekConverter(this.state.today);
      this.setState({ showModal: false });
      console.log(res);
    })
  }

  render() {
    console.log(moment.utc(this.state.startTime).format());
    return (
      <div>
        <Navigation />
        <div className="container" >
          <DayView {...this.state} setTime={this.setTime}/>
          <ScheduleModal {...this.state} open={this.open} close={this.close} setTime={this.setTime} setItem={this.setItem} submitItem={this.submitItem}/>
        </div>
      </div>
    )
 }

}

export default DailySchedule;
