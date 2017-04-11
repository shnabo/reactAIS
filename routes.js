var React = require('react');
var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;
var Home = require('./app/components/Home.js');


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route name="/contact" component={About}>
    </Route>
  </Router>
  );
