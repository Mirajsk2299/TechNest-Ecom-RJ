import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="registerpg-mainbox">
      <div className="registerpg-second">
        <div className="register-container">
          <div className="register-box">
            <h2>Register</h2>

            <label>Full Name</label>
            <input type="text" placeholder="Enter Full Name" />

            <label>Email</label>
            <input type="email" placeholder="Enter Email" />

            <label>Password</label>
            <input type="password" placeholder="Enter Password" />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" />

            <button className="register-main-btn">Register</button>

            <div className="bottom-row">
              <Link to="/login">
                <p className="already-text">
                  Already
                  <br />
                  have account?
                </p>
              </Link>
              <Link to="/login">
                <button className="goto-login-btn">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
