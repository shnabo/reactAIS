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
  <div>
    <div id="page-wrapper">
        <div id="header-wrapper">
          <header id="header" className="container">
            <div className="row">
              <div id="aislogo">
                <img id="aislogo" src="../../../public/images/AISLOGO.jpg" alt="" />
              </div>
              <div className="12u">

                  <nav id="nav">
                    <LinkContainer to="/"><a id="navigation">Home</a></LinkContainer>
                    <LinkContainer to="/about"><a id="navigation">About Us</a></LinkContainer>
                    <LinkContainer to="/services"><a id="navigation">Services</a></LinkContainer>
                    <LinkContainer to="/contact"><a id="navigation">Contact</a></LinkContainer>
                  </nav>


              </div>
            </div>
          </header>
          <div id="banner">
            <div className="container">
              <div className="row">
                <div className="6u 12u(mobile)">


                    <p>"An investment in knowledge pays the best interest." - Benjamin Franklin</p>


                </div>
                <div className="6u 12u(mobile)">


                    <a className="bordered-feature-image"><img src="../../../public/images/banner.jpg" alt="" /></a>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="content-wrapper">
          <div id="content">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            </div>
        </div>

        <div id="features-wrapper">
          <div id="features">
            <div className="container">
              <div className="row">
                <div className="3u 12u(mobile)">


                    <section>
                      <a href="#" className="bordered-feature-image"><img src="../../../public/images/pic01.jpg" alt="" /></a>
                      <h2>About Us</h2>
                      <p>
                        We have been serving the GTA for 25 yrs, offering a variety of services to be your information advantage.
                      </p>
                    </section>

                </div>
                <div className="3u 12u(mobile)">


                    <section>
                      <a href="#" className="bordered-feature-image"><img src="../../../public/images/pic02.jpg" alt="" /></a>
                      <LinkContainer to="/services"><a id="navigation"><h2>Services</h2></a></LinkContainer>
                      <p>
                       We offer a wide range of services as well as packages to get you started based on your needs.
                      </p>
                    </section>


                </div>
                <div className="3u 12u(mobile)">


                    <section>
                      <a href="#" className="bordered-feature-image"><img src="../../../public/images/pic03.jpg" alt="" /></a>
                      <h2>Contact Us</h2>
                      <p>
                        Leave us your name and e-mail address and we will respond to your inquiry within 24 hours.
                      </p>
                    </section>

                </div>
                <div className="3u 12u(mobile)">

                    <section>
                      <a href="#" className="bordered-feature-image"><img src="../../../public/images/pic04.jpg" alt="" /></a>
                      <h2>Our Privacy Policy</h2>
                      <p>
                        Privacy is our utmost concern. We do not share any data with any outside parties. Our main and only point of contact is the client, you!
                      </p>
                    </section>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-wrapper">
          <footer id="footer" className="container">
            <div className="row">
              <div className="8u 12u(mobile)">


                  <section>
                    <h2>Links to Important Stuff</h2>
                    <div>
                      <div className="row">
                        <div className="3u 12u(mobile)">
                          <ul className="link-list last-child">
                            <li><a href="#">Neque amet dapibus</a></li>
                          </ul>
                        </div>
                        <div className="3u 12u(mobile)">
                          <ul className="link-list last-child">
                            <li><a href="#">Neque amet dapibus</a></li>
                          </ul>
                        </div>
                        <div className="3u 12u(mobile)">
                          <ul className="link-list last-child">
                            <li><a href="#">Neque amet dapibus</a></li>
                          </ul>
                        </div>
                        <div className="3u 12u(mobile)">
                          <ul className="link-list last-child">
                            <li><a href="#">Neque amet dapibus</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

              </div>
              <div className="4u 12u(mobile)">


                  <section>
                    <h2>An Informative Text Blurb</h2>
                    <p>
                      Insert relevant information here.
                    </p>
                  </section>

              </div>
            </div>
          </footer>
        </div>




          <hr/>




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
    </div>
</Router>
);

export default App;
