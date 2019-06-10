import React, { Component, Fragment } from 'react';
import Calendar from 'react-calendar';
import flower from '../shared/image/lunch.png';
import '../shared/common.css';
 
class abcd extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
        <Fragment>

                <p className="vol_title">Calendar</p>
                <br /><br /><br />

                <img src={flower} alt="" style={{ position: "absolute", right: 50 }} />
                
                <br /><br /><br />

      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
      </Fragment>
    );
  }
} export default abcd;