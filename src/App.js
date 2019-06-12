import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';



import Aside from './Components/Aside';

import Juyeon from './Juyeon/Juyeon';
import Woojeong from './Woojeong/Woojeong';
import Jiwon from './Jiwon/Jiwon';
import Haesoo from './Haesoo/Haesoo';
import abcd from './Haesoo/calendar';
import Login from './Jiwon/Login';
import Signup from './Jiwon/Signup';
import Urllist from './Woojeong/Urllist';
import Timetable from './Woojeong/Timetable';
import quizNew from './Juyeon/quiz-new/App';
import quizEnt from './Juyeon/quiz-ent/App';
import ent from './Juyeon/ent';
import calendar from './Haesoo/calendar';
import quizresult from './Juyeon/quizresult';

class App extends Component {
    render() {
        return (
            <Router>
                <Aside />
                <div id="content">

                <Switch>
                    <Route path="/meal" component={Juyeon} />
                    <Route path="/leisure" component={Haesoo} />
                    <Route path="/calendar" component={abcd} />
                    <Route path="/volunteer" component={Jiwon} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} /> 
                    <Route path="/todo" component={Woojeong} />
                    <Route path="/timetable" component={Timetable} />
                    <Route path="/urllist" component={Urllist} />
                    <Route path="/quiz/new" component={quizNew}/>
                    <Route path="/quiz/ent" component={quizEnt}/>
                    <Route path="/ent" component={ent}/>
                    <Route path="/calendar" component={calendar}/>
                    <Route path="/quizresult" component={quizresult}/>
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
