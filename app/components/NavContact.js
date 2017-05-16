import React from 'react';


const Contact = () => (
  <div>
    <h2>Contact Us</h2>
    <p>
      <strong>
        Please leave us your name, e-mail address and a short message and we will respond to your inquiry within 24 hours
      </strong>
    </p>
    <p>
      <strong>
      Name: <input></input>
    </strong>
    </p>
    <p>
      <strong>
      Email: <input></input>
    </strong>
    </p>
  <p>
    <strong>
    Message: <input></input>
  </strong>
  </p>
  <p>
    <button className="contact-us"> Submit </button>

  </p>
  </div>
)

export default Contact;
