import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Loginpg-mainbox">
      <div className="Loginpg-second">
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>

            <label>Email</label>
            <input type="email" placeholder="Enter Email" />

            <label>Password</label>
            <input type="password" placeholder="Enter Password" />

            <button className="login-btn">Login</button>

            <div className="bottom-row">
              <Link to="/forgotpass">
                <p className="forgot">
                  Forgot <br /> Password?
                </p>
              </Link>
              <Link to="/register">
                <button className="register-btn">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
