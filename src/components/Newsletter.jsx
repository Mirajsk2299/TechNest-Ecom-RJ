import React from "react";
import "../Styles/AllComponents.css";

const Newsletter = () => {
  return (
    <div
      style={{
        height: "55vh",
        width: "100%",
        backgroundColor: "#D3D3D3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="news-second"
        style={{
          height: "85%",
          width: "95vw",
          backgroundColor: "#3775fcff ",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10%",
        }}
      >
        <div
          className="news-heading"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <h1 style={{ color: "white" }}>Newsletter</h1>
          <p style={{ color: "white" }}>
            Sign up to receive updates on new arrivals and special offers
          </p>
        </div>

        <div
          className="inp-btn"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            // gap: "1rem",
          }}
        >
          <div
            className="input-box"
            style={{
              width: "40rem",
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <label
              style={{
                display: "block",
                fontSize: "18px",
                marginBottom: "5px",
                color: "white",
              }}
            >
              Email *
            </label>

            <input
              className="news-inp"
              placeholder="Enter your email..."
              type="email"
              style={{
                width: "100%",
                padding: "10px",
                border: "1.5px solid #ccc",
                borderRadius: "25px",
                outline: "none",
                background: "transparent",
                height: "3rem",
                fontSize: "17px",
                paddingLeft: "25px",
              }}
            />

            <p
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "5px",
                color: "white",
              }}
            >
              <span className="news-exclamat">!</span> Enter an email address
              like example@gmail.com
            </p>
          </div>

          <div
            className="btn-box"
            style={{
              width: "18rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              className="news-btn"
              style={{
                width: "15rem",
                height: "3rem",
                borderRadius: "25px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                fontSize: "17px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div
          className="check-box"
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <input type="checkbox" className="checkbox-container" />
          <p style={{ color: "white" }}>
            Yes, Subscribe me to your newsletter. *
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
