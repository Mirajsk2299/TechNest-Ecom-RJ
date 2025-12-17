import React, { useContext } from "react";
import { ContactContext } from "../context/contactContext.js";
import { useAuth } from "../context/userContext.js";

const Contactus = () => {
  const { currentUser } = useAuth();

  const {
    name,
    email,
    contact,
    message,
    handleName,
    handleEmail,
    handleContact,
    handleMessage,
    sendMessage,
  } = useContext(ContactContext);
  return (
    <div className="contactuspg-mainbox">
      <div className="contactuspg-second">
        <div className="contact-card">
          <h2>Contact Us</h2>

          <label>Name</label>
          <input
            value={name}
            onChange={handleName}
            type="text"
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Enter your email"
          />

          <label>Contact No</label>
          <input
            value={contact}
            onChange={handleContact}
            type="text"
            placeholder="Enter your contact number"
          />

          <label>Message</label>
          <textarea
            value={message}
            onChange={handleMessage}
            placeholder="Enter your message"
          ></textarea>

          <>
            {currentUser ? (
              <>
                <button onClick={sendMessage} className="contact-btn">
                  Send Message
                </button>
              </>
            ) : (
              <>
                <button
                  className="contact-btn"
                  style={{ cursor: "not-allowed" }}
                >
                  Not Logged In
                </button>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
