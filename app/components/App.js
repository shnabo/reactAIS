import React from 'react';
import Home from './NavHome.js';
import Contact from './NavContact'
import About from './NavAbout.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



const InsuranceInvestigation = () => (
  <div>
    <h2> Insurance Investigation Services</h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)
const SpousalInvestigation = () => (
  <div>
    <h2> Spousal Investigation </h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)
const BackgroundChecks = () => (
  <div>
    <h2> Checking Your Back's </h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)
const LossPrevention = () => (
  <div>
    <h2> Loss Prevention </h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)
const InternalDisputeInvestigation = () => (
  <div>
    <h2> Internal Dispute Investigation </h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)

const CommercialResidentialDebugging = () => (
  <div>
    <h2> Commercial and Residential Debugging </h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)
const LitigationSupport = () => (
  <div>
    <h2> Spousal Investigation </h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)
const ProcessServing = () => (
  <div>
    <h2> Background checks </h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.serviceId}</h3>
  </div>
)

const Services = ({ match }) => (
  <div>
    <h2>Services</h2>
    <ul>
      <li>
        <div>
        <Link to={`${match.url}/insurance`}>
          Insurance Investigation
        </Link>
        </div>
      </li>
      <li>
        <Link to={`${match.url}/spousal`}>
          Spousal Investigation
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/backgroundchecks`}>
          Background Checks
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/lossprevention`}>
          Loss Prevention
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/internaldisputes`}>
          Internal Dispute Investigation
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/securityconsultation`}>
          Debugging - Commerical & Residential
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/litigationsupport`}>
          Litigation Support
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/processserving`}>
          Process Serving
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:serviceId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const App= () => (
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
      <Route path="/services/insurance" component={InsuranceInvestigation}/>
    </div>
  </Router>
)
export default App;
