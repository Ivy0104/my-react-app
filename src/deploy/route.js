import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { Suspense } from 'react';

import V404 from '../views/v-404'

const context = require.context('../routes', true, /\.js$/)

let routes = []
context.keys().forEach(key => {
  routes = [...routes, ...context(key).default]
})


const RouteWithSubRoutes = route => (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );

export const App = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
        <Switch>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        <Route path="*" component={V404} />
        </Switch>
      </Suspense>
    </Router>
  );
