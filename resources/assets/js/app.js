require('./bootstrap');
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import Example from './components/Example';
import Login from './views/Login';
import Layout from './components/Layout';

render(
    <Router history={createHistory()}>
        <Switch>
            <Route exact path="/" component={Example} />
            <Route path="/:login" component={Login} />
        </Switch>
    </Router>, document.getElementById('root'));