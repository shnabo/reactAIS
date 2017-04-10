import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <div className="nav">
          <Link to="app">Home</Link>
          <Link to="about">About</Link>
          <Link to="services">Services</Link>
          <Link to="contact">Contact</Link>

          {/* this is the important part */}
          <RouteHandler/>
        </div>
      );
    }
  });
  var routes = (
    <Route name="app" path="/" handler={App}>
      <Route name="login" path="/login" handler={LoginHandler}/>
    </Route>
  );

 Router.run(routes,function (Handler) {
   React.render(<Handler/>, document.body);
 }
