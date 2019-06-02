import React from 'react';
import '../shared/common.css';

class Aside extends React.Component{
    render(){
        return(
            <aside>
                <div className="pic"></div>
                <h1>hi, traveler</h1>
                <h5>login / logout</h5>
                <br /><br />
                <h2>
                <a href = "http://localhost:3000">home</a>,
                <br />
                <a href = "http://localhost:3000/volunteer">volunteer</a>,
                <a href = "http://localhost:3000/leisure">Leisure</a>,
                <br />
                <a href = "http://localhost:3000/univ">univ.</a>,
                <a href = "http://localhost:3000/board">board</a>,
                <a href = "http://localhost:3000/meal">meal</a>,
                <br />
                <a href = "http://localhost:3000/todo">todo</a>,
                <a href = "http://localhost:3000/timetable">timetable</a>,
                <a href = "http://localhost:3000/urllist">urllist</a>,
                </h2>
                <div className="copywriter">
                    <span>@ajou</span>
                </div>
            </aside>
        );
    }
}

export default Aside;