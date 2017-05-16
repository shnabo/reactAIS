import React from 'react';
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
  ConflictOfInterest,
  CorporateInvestigation,
} from './AvailableServices.js';
import {Route} from 'react-router-dom';
import Home from './NavHome.js';
import Contact from './NavContact';
import About from './NavAbout.js';
import Services from './NavServices.js';

export const MainContent = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
    <Route path="/services" component={Services}/>

    <Route path="/services/insurance" component={InsuranceInvestigation}/>
    <Route path="/services/spousal" component={SpousalInvestigation}/>
    <Route path="/services/corporate" component={CorporateInvestigation}/>
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
)
