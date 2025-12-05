import React from "react";
import Drone from "../assets/offer-drone.avif";
import "../Styles/AllComponents.css";
import { Link } from "react-router-dom";

const Tspecial = () => {
  return (
    <div
      style={{
        height: "70vh",
        width: "100%",
        backgroundColor: "#D3D3D3 ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "95vw",
          height: "95%",
          backgroundColor: "#ffffffff ",
          display: "flex",
          flexDirection: "row",
          backgroundImage: `url(${Drone})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            clipPath: "polygon(0 100%, 100% 100%, 85% 0, 0 0)",
          }}
        >
          <div
            className="tspecial-box"
            style={{
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <p
              style={{
                backgroundColor: "red",
                color: "white ",
                fontSize: "20px",
              }}
            >
              Today's Special
            </p>
            <p
              style={{
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              Best Arial View in Town
            </p>
            <h1
              style={{
                fontSize: "90px",
                fontWeight: "bold",
              }}
            >
              <span style={{ color: "blue" }}> 30%</span> OFF
            </h1>
            <p
              style={{
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              on professional camera drones
            </p>
            <div className="last-txt">
              <p>Limited quantities.</p>
              <p>See product detail pages for availability.</p>
            </div>
            <Link to="Dronescam">
              <button
                className="Tspecial-btn"
                style={{
                  width: "10rem",
                  height: "3rem",
                  borderRadius: "25px",
                  border: "none",
                  backgroundColor: "blue",
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tspecial;
