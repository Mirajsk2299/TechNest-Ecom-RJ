import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/userContext.js";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/");
      alert("Logged In Successfully");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="Loginpg-mainbox">
      <div className="Loginpg-second">
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>

            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
            />

            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />

            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>

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
