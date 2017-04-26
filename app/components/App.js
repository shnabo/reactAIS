import React from 'react';
import Home from './NavHome.js';
import Contact from './NavContact';
import About from './NavAbout.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import NavLink from 'react-router-dom';
import InsuranceInvestigation,
{
  SpousalInvestigation,
  BackgroundChecks,
  LossPrevention,
  InternalDisputeInvestigation,
  CommercialResidentialDebugging,
  SecurityConsultation,
  LitigationSupport,
  ProcessServing,
  LicensePlateLookup,
  ConflictOfInterest
} from './AvailableServices.js';


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
// Navigation bar
const App= () => (
  <Router>
    <div className="topnav" id="myTopnav">
      <div style={navStyle}>
        <p id="navigation"><LinkContainer to="/" activeClassName="home"><NavItem textDecoration="none"><button style={navStyle} className="btn btn-success">Home</button></NavItem></LinkContainer></p>
        <p id="navigation"><LinkContainer to="/about"><NavItem><button className="btn btn-success">About Us</button></NavItem></LinkContainer></p>
        <p id="navigation"><LinkContainer to="/services"><NavItem><button className="btn btn-success">Services</button></NavItem></LinkContainer></p>
        <p id="navigation"><LinkContainer to="/contact"><NavItem ><button className="btn btn-success" textDecoration="none">Contact</button></NavItem></LinkContainer></p>
      </div>


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
const navStyle = {
  textDecorationStyle: 'none',
  textDecorationLine: 'none',
  textDecoration: 'none',
  box: 'border-box',
}


export default App;
