require('./bootstrap');
import React from 'react';
import {render} from 'react-dom';
import {Switch, Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from './views/Home';
import Login from './views/Login';

render(<Router history={createHistory()}>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
    </Switch>
</Router>, document.getElementById('root'));