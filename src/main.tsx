import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './app.ts';
import Layout from './pages/layout';
import Home from './pages/home';
import Game from './pages/game';
import Record from './pages/record';

ReactDOM.render(
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/game" component={Game}></Route>
                <Route path="/record" component={Record}></Route>
            </Switch>
        </Layout>
    </Router>,
    document.getElementById('root')
);
