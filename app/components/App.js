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
import Services from './ServiceLinks.js';
import {NavigationLinks} from './NavigationLinks.js';


const App= () => (

<Router>
  <div>
    <div id="page-wrapper">
        <div id="header-wrapper">
          <header id="header" className="container">
            <div className="row">

              <div className="12u">
                <h1> AIS Investigation Services </h1>
                  <NavigationLinks />


              </div>
            </div>
          </header>
          <div id="banner">
            <div className="container">

              <div className="row">
                <div className="6u 12u(mobile)">



                    <p>"An investment in knowledge pays the best interest." - Benjamin Franklin</p>


                </div>
                <div className="6u 12u(mobile)" >


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

        <div id="features-wrapper">
          <div id="features">
            <div className="container">
              <div className="row">
                <div className="3u 12u(mobile)">


                    <section>
                      <a href="#" className="bordered-feature-image"><img src="../../../public/images/pic01.jpg" alt="" /></a>
                      <h2>About Us</h2>
                      <p>
                        AIS Services is a full service investigation firm located in the Greater Toronto Area. We began in 1986, primarily focusing on
                        Insurance Investigation. As technology and time progressed, we expanded our service offerings to better serve our clients and cater to their personal needs in addition to commercial.
                      </p>

                      <p>
                        We offer both commercial and personal services, check out our list of Services to learn more.
                      </p>
                    </section>

                </div>
                <div className="3u 12u(mobile)">


                    <section>
                      <a href="#" className="bordered-feature-image"><img src="../../../public/images/pic02.jpg" alt="" /></a>
                      <LinkContainer to="/services"><a id="navigation"><h2>Services</h2></a></LinkContainer>
                      <p>
                       We offer a wide range of services depending on your needs. We also offer packages if you are just getting started.
                     </p>
                     <p>
                       We serve Southern Ontario, however if you are located outside this region do not hesitate to contact us for a quote and we will accomodate you best we can with our network of investigators.
                     </p>


                    </section>


                </div>
                <div className="3u 12u(mobile)">


                    <section>
                      <a href="#" className="bordered-feature-image"><img src="../../../public/images/pic03.jpg" alt="" /></a>
                      <h2>Contact Us</h2>
                      <p>
                        Leave us your name and e-mail address and a brief message, we will respond to your inquiry within 24 hours.
                      </p>
                    </section>

                </div>
                <div className="3u 12u(mobile)">

                    <section>
                      <a href="#" className="bordered-feature-image"><img src="../../../public/images/pic04.jpg" alt="" /></a>
                      <h2>Our Privacy Policy</h2>
                      <p>
                        Privacy is our highest priority. We do not share any data(whether public or otherwise) with any third parties. Our main and only point of contact is the client, you!
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
                    <h2>Resources</h2>
                    <div>
                      <div className="row">
                        <div className="3u 12u(mobile)">
                          <ul className="link-list last-child">
                            <li><a href="#">Insurance Fraud</a></li>
                          </ul>
                        </div>
                        <div className="3u 12u(mobile)">
                          <ul className="link-list last-child">
                            <li><a href="#">Privacy Act</a></li>
                          </ul>
                        </div>
                        <div className="3u 12u(mobile)">
                          <ul className="link-list last-child">
                            <li><a href="#">Ontario Government</a></li>
                          </ul>
                        </div>
                        <div className="3u 12u(mobile)">
                          <ul className="link-list last-child">
                            <li><a href="#">Freedom of Information</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

              </div>
              <div className="4u 12u(mobile)">


                  <section>

                  </section>

              </div>
            </div>
          </footer>
        </div>




          <hr/>


      </div>
    </div>
</Router>
);

export default App;
