import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './style.scss';
import Game from './pages/game';
import Record from './pages/record';

ReactDOM.render(
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/record">Record</Link>
        </nav>
        <Switch>
            <Route exact path="/" component={Game}></Route>
            <Route path="/record" component={Record}></Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);
