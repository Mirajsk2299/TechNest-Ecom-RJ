import React from "react";
import rediphone from "../assets/rediphone-home.avif";
import blueheadphone from "../assets/headphone-home.avif";

const Landinglower = () => {
  return (
    <div
      style={{
        minHeight: "70vh",
        height: "auto",
        width: "100%",
        backgroundColor: "#D3D3D3 ",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // padding: "1rem",
        // placeItems: "center",
        // display: "grid",
        // gridTemplateColumns: "1fr 1fr",
        // padding: "1rem",
      }}
    >
      <div
        className="lwdiv-box"
        style={{
          height: "65vh",
          width: "95vw",
          backgroundColor: "#ffffffff ",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "2%",
        }}
      >
        <div
          className="left-photo"
          style={{
            backgroundImage: `url(${rediphone})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "48%",
            height: "90%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="lowerlanding-text"
            style={{
              marginLeft: "8%",
              color: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="lwupper-txt" style={{ marginBottom: "0.5rem" }}>
              <p style={{ fontSize: "1.2rem" }}>Holiday Deals</p>
            </div>

            <div className="lwmid-txt" style={{ marginBottom: "0rem" }}>
              <h1
                style={{
                  fontSize: "3rem",
                  // fontFamily: '"Montserrat", sans-serif',
                }}
              >
                Up to <br /> 30% off
              </h1>
            </div>

            <div className="lwlast-txt" style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "1.2rem" }}>Selected Smartphone Brands</p>
            </div>

            <div className="lowerlandinf-btn">
              <button
                className="lwlanding-btn"
                style={{
                  height: "2.5rem",
                  cursor: "pointer",

                  width: "8rem",
                  borderRadius: "20px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Shop
              </button>
            </div>
          </div>
        </div>

        <div
          className="right-photo"
          style={{
            backgroundImage: `url(${blueheadphone})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "48%",
            height: "90%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="lowerlanding-text"
            style={{
              marginLeft: "8%",
              color: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="lwupper-txt" style={{ marginBottom: "0.5rem" }}>
              <p style={{ fontSize: "1.2rem" }}>Just In</p>
            </div>

            <div className="lwmid-txt" style={{ marginBottom: "0rem" }}>
              <h1
                style={{
                  fontSize: "3rem",
                  // fontFamily: '"Montserrat", sans-serif',
                }}
              >
                Take Your <br /> Sound <br />
                AnyWere
              </h1>
            </div>

            <div className="lwlast-txt" style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "1.2rem" }}>Top Headphone Brands</p>
            </div>

            <div className="lowerlandinf-btn">
              <button
                className="lwlanding-btn"
                style={{
                  height: "2.5rem",
                  cursor: "pointer",
                  width: "8rem",
                  borderRadius: "20px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landinglower;
