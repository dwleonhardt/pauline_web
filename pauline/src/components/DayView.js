import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


class DayView extends React.Component {
  render() {
    let items;
    if (this.props.dailyItems && this.props.dailyItems.length) {
      items = this.props.dailyItems.map((item, i) => {
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
            {...this.props}
            events={this.props.dailyItems}
            startAccessor='start_time'
            endAccessor='end_time'
            views={['week', 'day']}
            defaultView='week'
            onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
            )}
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
}

export default DayView;
