import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { faTruckPickup } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

const Rulesbar = () => {
  return (
    <div
      style={{
        minHeight: "25vh",
        height: "auto",
        width: "100%",
        backgroundColor: "#D3D3D3 ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="rules-box"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5%",
          backgroundColor: "white",
          width: "95vw",
        }}
      >
        <div className="rulesuni-box">
          <div className="unirl-icon">
            <FontAwesomeIcon icon={faMotorcycle} size="4x" />
          </div>

          <p className="rulesuni-para">
            Curb-side <br /> pickup
          </p>
        </div>
        <div className="rulesuni-box">
          <div className="unirl-icon">
            <FontAwesomeIcon icon={faTruckPickup} size="3x" />
          </div>

          <p className="rulesuni-para">
            Free shipping on <br /> orders over $50
          </p>
        </div>
        <div className="rulesuni-box">
          <div className="unirl-icon">
            <FontAwesomeIcon icon={faTags} size="3x" />
          </div>

          <p className="rulesuni-para">
            Low prices <br /> Guaranteed
          </p>
        </div>
        <div className="rulesuni-box">
          <div className="unirl-icon">
            <FontAwesomeIcon icon={faClockRotateLeft} size="3x" />
          </div>

          <p className="rulesuni-para">
            Available to <br /> you 24/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rulesbar;
