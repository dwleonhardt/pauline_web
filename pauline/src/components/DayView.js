import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


BigCalendar.momentLocalizer(moment);


const DayView = (props) => {
  let items;
  if (props.dailyItems && props.dailyItems.length) {
    items = props.dailyItems.map((item, i) => {
      item.start_time = new Date(item.start_time);
      item.end_time = new Date(item.end_time);
      return items = true;
    })
  }
  if (items) {
    return (
      <div>
        <BigCalendar
          selectable
          {...props}
          events={props.dailyItems}
          startAccessor='start_time'
          endAccessor='end_time'
          views={['week', 'day']}
          defaultView='week'
          onSelectSlot={(slotInfo) => props.setTime(slotInfo)}
        />
      </div>
    )
  }
  else {
    return (
        <div className="container">
          <h1>Please Wait...</h1>
        </div>
    )
  }
}

export default DayView;
