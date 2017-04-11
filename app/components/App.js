import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Services = ({ match }) => (
  <div>
    <h2>Services</h2>
    <ul>
      <li>
        <Link to={`${match.url}/surveillance`}>
          Surveillance
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/insurancefraud`}>
          Insurance Fraud
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/backgroundchecks`}>
          Background Checks
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:serviceId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)
export default BasicExample
