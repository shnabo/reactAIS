import React from 'react';


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


export default Services;
