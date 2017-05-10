import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Services = ({ match }) => (
  <div>
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

    <Route path={`${match.url}/:serviceId`}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

export default Services
