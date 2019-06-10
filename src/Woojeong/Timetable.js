import React, { Component, Fragment } from "react";
import '../shared/common.css';
import './Timetable.css';

class Timetable extends Component {

    state = {
        school: '수원고등학교',
        subject: []
    }

    componentDidMount() {
        fetch("plz?grade=1&semester=1")
            .then(res => (res.json()))
            .then(data => this.setState({ subject: data.rs }))
            .catch(err => console.log(err))
    }

 
    _filterHandler = () => {
        const a = document.getElementById("grade").value;
        const b = document.getElementById("semester").value;
        
        fetch("/plz?grade="+a+"&semester="+b)
            .then(res => (res.json()))
            .then(data => this.setState({ subject: data.rs }))
            .catch(err => console.log(err))
    }

    render() {
        const { subject } = this.state;
        const subData = subject.map(function(data){
            return(
                <tr>
                    <td className="each-class-body">{data.time}</td>
                    <td>{data.mon}</td>
                    <td>{data.tue}</td>
                    <td>{data.wed}</td>
                    <td>{data.thu}</td>
                    <td>{data.fri}</td>
                </tr>
            );
        })
        return (
            <Fragment>
                <p className="vol_title">Timetable</p>
                <div className="filter_group">
                    <select id="grade" className='filter' onChange={this._filterHandler}>
                        <option value="1">1학년</option>
                        <option value="2">2학년</option>
                        <option value="3">3학년</option>
                    </select>

                    <select id="semester" className='filter' onChange={this._filterHandler}>
                        <option value="1">1학기</option>
                        <option value="2">2학기</option>
                    </select>
                </div>
                <br /><br />

                <table className="timeTable">
                    <thead>
                        <tr>   
                            <td className="each-class-head each-class-body">교시</td>
                            <td className="each-class-head">월</td>
                            <td className="each-class-head">화</td>
                            <td className="each-class-head">수</td>
                            <td className="each-class-head">목</td>
                            <td className="each-class-head">금</td>
                        </tr>

                        <tr>

                        </tr>
                    </thead>

                    <tbody>
                        {subData}
                    </tbody>
                </table >
            </Fragment>
        );

    }
}

export default Timetable;
