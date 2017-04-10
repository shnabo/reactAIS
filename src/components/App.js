var React = require('react');
var ReactDOM = require ('react-dom');
var App = require('./components/App');



var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Simple SPA</h1>
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


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
