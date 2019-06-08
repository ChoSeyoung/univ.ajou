import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Aside from './Components/Aside';

import Juyeon from './Juyeon/Juyeon';
import Woojeong from './Woojeong/Woojeong';
import Jiwon from './Jiwon/Jiwon';
import Login from './Jiwon/Login';
import Signup from './Jiwon/Signup';
import Haesoo from './Haesoo/Haesoo';
import Urllist from './Woojeong/Urllist';
import Timetable from './Woojeong/Timetable';

class App extends Component {
    render() {
        return (
            <Router>

                <Aside />

                <div id="content">
                <Switch>
                    <Route path="/meal" component={Jooyeon} />
                    
                    <Route path="/leisure" component={Haesoo} />

                    <Route path="/volunteer" component={Jiwon} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />

                    <Route path="/todo" component={Woojung} />
                    <Route path="/timetable" component={Timetable} />
                    <Route path="/urllist" component={Urllist} />
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
