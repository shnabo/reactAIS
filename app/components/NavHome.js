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
              Duis neque nisi, dapibus sed mattis quis, rutrum accumsan sed.
              Suspendisse eu varius nibh. Suspendisse vitae magna eget odio amet mollis
              justo facilisis quis. Sed sagittis mauris amet tellus gravida lorem ipsum.
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
              <li>Detailed Reporting</li>
              <li>Insurance Investigation</li>
              <li>Spousal Investigation</li>
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
                <p>"Neque nisidapibus mattis"</p>
                <span>Jane Doe, CEO of UntitledCorp</span>
              </li>
              <li>
                <img src="../../../public/images/pic07.jpg" alt="" />
                <p>"Lorem ipsum consequat!"</p>
                <span>John Doe, President of FakeBiz</span>
              </li>
              <li>
                <img src="../../../public/images/pic08.jpg" alt="" />
                <p>"Magna veroeros amet tempus"</p>
                <span>Mary Smith, CFO of UntitledBiz</span>
              </li>
            </ul>
          </section>

      </div>
    </div>
  </div>
)

export default Home;
