import React from "react";

const Brands = () => {
  return (
    <div
      style={{
        height: "45vh",
        width: "100%",
        backgroundColor: "#D3D3D3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="brands-second"
        style={{
          height: "80%",
          width: "95vw",
          backgroundColor: "#fdfdfdff ",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10%",
        }}
      >
        <div className="barnds-heading">
          <h1 style={{ fontSize: "35px" }}>Brands</h1>
        </div>
        <div
          className="brands-name"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="brands">
            <h1 className="brands-head">Noise</h1>
          </div>
          <div className="brands">
            <h1 className="brands-head">Samsung</h1>
          </div>
          <div className="brands">
            <h1 className="brands-head">LAVA</h1>
          </div>
          <div className="brands">
            <h1 className="brands-head">Sony</h1>
          </div>
          <div className="brands">
            <h1 className="brands-head">Boat</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
