import React from "react";
import bestprice from "../assets/saveupto-laptop.avif";
import { Link } from "react-router-dom";

const Bestprice = () => {
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
        className="bstprice-second"
        style={{
          height: "90%",
          width: "95vw",
          display: "flex",
          position: "relative",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="bstprice-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            flex: "1",
            clipPath: "polygon(0 100%, 100% 100%, 90% 0, 0 0)",
          }}
        >
          <img
            src={bestprice}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "left center",
            }}
          />
        </div>

        <div
          className="bestprice-text"
          style={{
            backgroundColor: "white",
            width: "28%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1.4rem",
          }}
        >
          <div
            className="bstprice-txtmain"
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>Save up to </p>
            <h1 style={{ fontSize: "80px", fontWeight: "bold" }}>$150</h1>
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>
              On selected laptop <br /> & tablets brands
            </p>
            <p style={{ fontSize: "18px" }}> Terms and conditions apply</p>
          </div>

          <Link to="tablets">
            <button
              className="bestprice-btn"
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

        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "62%",
            backgroundColor: "red",
            color: "white",
            width: "9rem",
            height: "9rem",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "14px",
            zIndex: 10,
          }}
        >
          <div
            className="badge box"
            style={{
              transform: "rotate(20deg)",
            }}
          >
            <h1>
              Best <br /> Price
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestprice;
