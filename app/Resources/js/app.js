import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './Layout';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import NoMatch from './components/NoMatch';

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="*" component={NoMatch} />
        </Route>
    </Router>
), document.getElementById('app'));