import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Aside from './components/Aside';

import Jooyeon from './Jooyeon/Jooyeon';
import Woojung from './Woojung/Woojeong';
import Jiwon from './Jiwon/Jiwon';
import Haesoo from './Haesoo/Haesoo';

class App extends Component {
    render() {
        return (
            <Router>

                <Aside />

                <div id="content">
                <Switch>
                    <Route path="/meal" component={Jooyeon} />
                    <Route path="/todo" component={Woojung} />
                    <Route path="/leisure" component={Haesoo} />
                    <Route path="/volunteer" component={Jiwon} />
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;