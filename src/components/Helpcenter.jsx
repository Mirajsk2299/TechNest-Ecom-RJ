import React from "react";
import Helpimg from "../assets/helpline-img.avif";
import "../Styles/AllComponents.css";

const Helpcenter = () => {
  return (
    <div
      style={{
        height: "55vh",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundImage: `url(${Helpimg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", // 👉 image will NOT zoom
        backgroundPosition: "right",
      }}
    >
      <div
        className="help-text"
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          clipPath: "polygon(0 100%, 100% 100%, 85% 0, 0 0)",
        }}
      >
        <div
          className="help-header"
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: "1.5rem",
            // backgroundColor: "black",
          }}
        >
          <h1 style={{ fontSize: "2.2rem", color: "white" }}>
            Need Help? Check <br /> Out Our Help Center
          </h1>
          <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "white" }}>
            I'm a paragraph. Click here to add your own text <br /> and edit me.
            Let your users get to know you.
          </p>

          <button
            className="help-btn"
            style={{
              height: "2.9rem",
              width: "13rem",
              borderRadius: "25px",
              fontSize: "1.1rem",
              cursor: "pointer",
              border: "1px solid blue",
              color: "blue",
            }}
          >
            Go to Help Center
          </button>
        </div>
      </div>

      {/* <div className="help-img" style={{ width: "60%" }}>
        <img src={Helpimg} style={{ height: "100%" }} />
      </div> */}
    </div>
  );
};

export default Helpcenter;
