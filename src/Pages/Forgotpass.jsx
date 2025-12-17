import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/userContext.js";

const Forgotpass = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();

  const handleReset = async () => {
    try {
      await resetPassword(email);
      alert("Password reset email sent! Check your Inbox / Spam");
      setEmail("");
    } catch (err) {
      alert(err.message);
    }
  };
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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
            />

            <button className="forgot-main-btn" onClick={handleReset}>
              Send Reset Link
            </button>

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
