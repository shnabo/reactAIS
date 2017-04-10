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
        </ul>
        <div className="content">

        </div>
      </div>
    )
  }
});

module.exports = App;
