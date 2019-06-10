import React, { Component } from 'react';
import '../shared/common.css';

class Aside extends Component{
    render(){
        return(
            <aside>
                <div className="pic"></div>
                <h1>hi, jiwon</h1>
                <h5><a href = "http://localhost:3000/login">login</a>/<a href = "http://localhost:3000/signup">signup</a></h5>
                <br /><br />
                <h2>
                <a href = "http://localhost:3000">home</a>
                <br />
                <a href = "http://localhost:3000/volunteer">volunteer</a>
                <br />
                <a href = "http://localhost:3000/leisure">Leisure</a>
                <br />
                <a href = "http://localhost:3000/univ">univ.</a>
                <br />
                <a href = "http://localhost:3000/board">board</a>
                <br />
                <a href = "http://localhost:3000/meal">meal</a>
                <br />
                <a href = "http://localhost:3000/todo">todo</a>
                <br />
                <a href = "http://localhost:3000/timetable">timetable</a>
                <br />
                <a href = "http://localhost:3000/urllist">urllist</a>
                </h2>
                <div className="copywriter">
                    <span>@ajou</span>
                </div>
            </aside>
        );
    }
}

export default Aside;