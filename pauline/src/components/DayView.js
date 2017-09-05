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
        return (
          <Col key={i} md={8} offset={2}>

            <Row>
              {/* <Col md={2}>
                <p>{start_time}</p>

              </Col> */}
              <Col md={2}>
                <p>{item.title}</p>

              </Col>
              <Col md={6}>
                <p>{item.instructions}</p>

              </Col>
            </Row>
            <hr/>
          </Col>

        )
      })
    }
    if (items) {
      return (
        // <div>
        //   <Col md={8} offset={2}>
        //
        //     <Row>
        //       <Col md={2}>
        //         <p>Time:</p>
        //
        //       </Col>
        //       <Col md={2}>
        //         <p>Title:</p>
        //
        //       </Col>
        //       <Col md={6}>
        //         <p>Description:</p>
        //
        //       </Col>
        //     </Row>
        //     <hr/>
        //   </Col>
        //   {items}
        // </div>
        <div>
          <BigCalendar
            {...this.props}
            events={this.props.dailyItems}
            startAccessor='start_time'
            endAccessor='end_time'
            views={['week', 'day']}
            defaultView='week'
          />
        </div>
      )
    }
    else {
      return (
        <div className="container">
          <h1>Nothing Scheduled</h1>
        </div>
      )
    }
  }
}

export default DayView;
