import React from "react";
import landinglapi from "../assets/landing-laptop.avif";
import "../Styles/AllComponents.css";
import { Link } from "react-router-dom";

const Landingpg = () => {
  return (
    <div
      style={{
        height: "70vh",
        width: "100%",
        display: "flex",
        backgroundImage: `url(${landinglapi})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
      }}
    >
      <div
        className="landing-txt"
        style={{
          marginLeft: "10rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
          height: "auto",
        }}
      >
        <div
          className="bst-price"
          style={{
            backgroundColor: "red",
            width: "7rem",
            height: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ marginLeft: "0.5rem", color: "white" }}>Best Prices</p>
        </div>
        <div className="landing-maintxt">
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
            Incredible Prices <br /> on All Your <br /> Favorite Items
          </h1>
        </div>
        <div className="landing-moretxt">
          <p style={{ fontSize: "1.2rem" }}>
            Get more for less on selected brands
          </p>
        </div>
        <div className="landingbtn-box">
          <Link to="/computers">
            <button className="landing-btn">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landingpg;
