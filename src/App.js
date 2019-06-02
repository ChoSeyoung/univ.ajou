import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Aside from './components/Aside';

import Jooyeon from './Jooyeon/Jooyeon';
import Woojung from './Woojung/Woojeong';
import Jiwon from './Jiwon/Jiwon';
import Haesoo from './Haesoo/Haesoo';
import Urllist from './woojung/Urllist';
import Timetable from './woojung/Timetable';

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