import React from "react";

const Contactus = () => {
  return (
    <div className="contactuspg-mainbox">
      <div className="contactuspg-second">
        <div className="contact-card">
          <h2>Contact Us</h2>

          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Contact No</label>
          <input type="text" placeholder="Enter your contact number" />

          <label>Message</label>
          <textarea placeholder="Enter your message"></textarea>

          <button className="contact-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
