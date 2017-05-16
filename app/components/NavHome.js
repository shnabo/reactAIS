var React = require('react');

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="4u 12u(mobile)">


          <section>
            <header>
              <h2>Who We Are</h2>
              <h3>A Brief History...</h3>
            </header>
            <a className="feature-image"><img src="../../../public/images/pic05.jpg" alt="" /></a>
            <p>
              Since 1986, our business has operated on simple principles of trust, honesty and professional quality.
              Our team of investigators and security experts are highly skilled in gathering evidence and producing
              court quality reports.  We utilize the latest intelligence gathering techniques and procedures ensure cost
               effective results. We exceed our client’s needs and expectations. We ensure our clients' concerns are met with
               the utmost regard for their privacy.
            </p>
          </section>

      </div>
      <div className="4u 12u(mobile)">


          <section>
            <header>
              <h2>What We Do</h2>
              <h3>Core Services</h3>
            </header>
            <ul className="check-list">
              <li>Surveillance</li>
              <li>Witness Location</li>
              <li>Insurance Investigation</li>
              <li>General Inquiries</li>
              <li>Background Checks</li>
            </ul>
          </section>

      </div>
      <div className="4u 12u(mobile)">


          <section>
            <header>
              <h2>What People Are Saying</h2>
              <h3>And a final subheading about our clients</h3>
            </header>
            <ul className="quote-list">
              <li>
                <img src="../../../public/images/pic06.jpg" alt="" />
                <p>"Very professional, easy to communicate with and discreet</p>
                <span>Jane Doe, CEO of UntitledCorp</span>
              </li>
              <li>
                <img src="../../../public/images/pic07.jpg" alt="" />
                <p>"Our company regularly uses AIS' services and is always pleased with the results</p>
                <span>John Doe, President of FakeBiz</span>
              </li>
              <li>
                <img src="../../../public/images/pic08.jpg" alt="" />
                <p>"Very detail-oriented and professional</p>
                <span>Mary Smith, CFO of UntitledBiz</span>
              </li>
            </ul>
          </section>

      </div>
    </div>
  </div>
)

export default Home;
