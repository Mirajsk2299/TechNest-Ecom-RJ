import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/userContext.js";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await register(fullName, email, address, password);
      navigate("/");
      alert("Registered Successfully & Logged In");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="registerpg-mainbox">
      <div className="registerpg-second">
        <div className="register-container">
          <div className="register-box">
            <h2>Register</h2>

            <label>Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Enter Full Name"
            />

            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
            />

            <label>Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Enter Address"
            />

            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />

            <label>Confirm Password</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
            />

            <button className="register-main-btn" onClick={handleRegister}>
              Register
            </button>

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
