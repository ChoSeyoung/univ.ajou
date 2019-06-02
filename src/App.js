import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Aside from './components/Aside';

import Juyeon from './Juyeon/Juyeon';
import Woojeong from './Woojeong/Woojeong';
import Jiwon from './Jiwon/Jiwon';
import Login from './Jiwon/Login';
import Signup from './Jiwon/Signup';
import Haesoo from './Haesoo/Haesoo';
import Urllist from './woojeong/Urllist';
import Timetable from './woojeong/Timetable';

class App extends Component {
    render() {
        return (
            <Router>

                <Aside />

                <div id="content">
                <Switch>
                    <Route path="/meal" component={Juyeon} />
                    
                    <Route path="/leisure" component={Haesoo} />

                    <Route path="/volunteer" component={Jiwon} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />

                    <Route path="/todo" component={Woojeong} />
                    <Route path="/timetable" component={Timetable} />
                    <Route path="/urllist" component={Urllist} />
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;