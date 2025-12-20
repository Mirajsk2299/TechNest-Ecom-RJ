import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/userContext.js";

const Changepassmini = () => {
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
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "25px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{ textAlign: "center", marginBottom: "15px", color: "#333" }}
        >
          Change Password
        </h2>

        <p
          style={{
            fontSize: "14px",
            color: "#666",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Enter your registered email. We will send you reset instructions.
        </p>

        <label style={{ fontSize: "14px", color: "#333" }}>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        />

        <button
          onClick={handleReset}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Send Reset Link
        </button>

        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "#007bff",
              fontSize: "14px",
            }}
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Changepassmini;
