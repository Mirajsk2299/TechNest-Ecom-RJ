import React from "react";
import { Link } from "react-router-dom";

const Forgotpass = () => {
  return (
    <div className="forgotpg-mainbox">
      <div className="forgotpg-second">    
        <div className="forgot-container">
          <div className="forgot-box">
            <h2>Forgot Password</h2>

            <p className="forgot-info">
              Enter your registered email. We will send you reset instructions.
            </p>

            <label>Email</label>
            <input type="email" placeholder="Enter Email" />

            <button className="forgot-main-btn">Send Reset Link</button>

            <div className="bottom-row">
              <Link to="/login">
                <button className="goto-login-btn">Back to Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpass;
