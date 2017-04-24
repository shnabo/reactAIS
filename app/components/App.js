import React from 'react';
import Home from './NavHome.js';
import Contact from './NavContact';
import About from './NavAbout.js';
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
    <h2> Spousal Investigation Services</h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ulldamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
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
       dolor in reprehenderitate velit esse cillum dolore eu fugiat nulla pariatur.
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
      exercitatios nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)
const InternalDisputeInvestigation = () => (
  <div>
    <h2> Internal Dispute Investigation </h2>
    <p> Lorem ipsum dolor is nisi ut aliquip ex ea commodo consequat. Duis aute irure
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
      exercitation ulln voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)
const LitigationSupport = () => (
  <div>
    <h2> Litigation Support </h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteuraecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)
const ProcessServing = () => (
  <div>
    <h2> Process Serving </h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       daecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)
const SecurityConsultation = () => (
  <div>
    <h2> Security Consultation </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       daecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.
     </p>
  </div>
)
const LicensePlateLookup = () => (
  <div>
    <h3> License Plate Look-Up </h3>
  </div>
)
const ConflictOfInterest = () => (
  <div>
    <h3> Conflict of Interest </h3>
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
        <div>
        <Link to={`${match.url}/spousal`}>
          Spousal Investigation
        </Link>
      </div>
      </li>
      <li>
        <div>
        <Link to={`${match.url}/backgroundchecks`}>
          Background Checks
        </Link>
      </div>
      </li>
      <li>
        <div>
        <Link to={`${match.url}/lossprevention`}>
          Loss Prevention
        </Link>
      </div>
      </li>
      <li>
        <div>
        <Link to={`${match.url}/internaldisputes`}>
          Internal Dispute Investigation
        </Link>
      </div>
      </li>
      <li>
        <div>
        <Link to={`${match.url}/commercialresidentialdebugging`}>
          Debugging - Commerical & Residential
        </Link>
      </div>
      </li>
      <li>
        <div>
        <Link to={`${match.url}/securityconsultation`}>
          Security Consultation
        </Link>
      </div>
      </li>
      <li>
        <div>
        <Link to={`${match.url}/litigationsupport`}>
          Litigation Support
        </Link>
      </div>
      </li>
      <li>
        <div>
        <Link to={`${match.url}/processserving`}>
          Process Serving
        </Link>
      </div>
      </li>
      <li>
        <div>
        <Link to={`${match.url}/licenseplatelookup`}>
          License Plate Look-Up
        </Link>
      </div>
      </li>
      <li>
        <div>
        <Link to={`${match.url}/conflictofinterest`}>
          Conflict of Interest
        </Link>
      </div>
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
    <div className="topnav" id="myTopnav">
      <ul>
        <li><Link to="/"><button className="btn btn-success">Home</button></Link></li>
        <li><Link to="/about"><button className="btn btn-success">About Us</button></Link></li>
        <li><Link to="/services"><button className="btn btn-success">Services</button></Link></li>
        <li><Link to="/contact"><button className="btn btn-success">Contact</button></Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/services/insurance" component={InsuranceInvestigation}/>
      <Route path="/services/spousal" component={SpousalInvestigation}/>
      <Route path="/services/backgroundchecks" component={BackgroundChecks}/>
      <Route path="/services/lossprevention" component={LossPrevention}/>
      <Route path="/services/internaldisputes" component={InternalDisputeInvestigation}/>
      <Route path="/services/commercialresidentialdebugging" component={CommercialResidentialDebugging}/>
      <Route path="/services/litigationsupport" component={LitigationSupport}/>
      <Route path="/services/processserving" component={ProcessServing}/>
      <Route path="/services/securityconsultation" component={SecurityConsultation}/>
      <Route path="/services/licenseplatelookup" component={LicensePlateLookup}/>
      <Route path="/services/conflictofinterest" component={ConflictOfInterest}/>




    </div>
  </Router>
)
export default App;
