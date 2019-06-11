import React, { Component, Fragment } from 'react';
import Calendar from 'react-calendar';
import '../shared/common.css';
import './hs.css';
import Wj from '../Woojeong/Woojeong';

class abcd extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <Fragment>

        <p className="vol_title">Calendar</p>
        <div className="haesoo-wrapper">
          <Calendar className="hs" onChange={this.onChange} value={this.state.date} />
          <Wj />
        </div>
      </Fragment>
    );
  }
} export default abcd;