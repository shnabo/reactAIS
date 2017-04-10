var React = require('react');
var ReactDOM = require ('react-dom');



var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Simple SPA2</h1>
          <div className="header">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact </li>
          </div>
      </div>
    );
    }
  });

module.exports = App;
