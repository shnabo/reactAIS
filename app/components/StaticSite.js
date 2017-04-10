var React = require('react');
var ReactDOM = require('react-dom');

var Ais = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li>Home</li>
          <li>Stuff</li>
          <li>Contact</li>
        </ul>
        <div className="content">

        </div>
      </div>
    )
  }
});
