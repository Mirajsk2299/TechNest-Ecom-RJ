import React from "react";
import "../Styles/Pages.css";
import Allproducts from "../ProductsData/Allproducts.js";

const Allitems = () => {
  return (
    <div
      className="allitems-pg"
      style={{
        height: "auto",
        width: "100%",
        padding: "1.2%",
        backgroundColor: "#D3D3D3 ",
      }}
    >
      <div className="pgtop-bar">
        <div className="pages-name">
          <p>Home</p>
          <h4>All Products</h4>
        </div>

        <div className="sort-count">
          <p>8 Products</p>
          <p>Sort by: Recommended</p>
        </div>
      </div>
      {/* ----------- */}
      <div
        className="allprod-second"
        style={{
          height: "auto%",
          width: "95vw",
          backgroundColor: "#ffffff",
          padding: "1%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "centrer",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {/* <div> */}
        {/* <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        > */}
        {Allproducts.map((product) => (
          <div
            key={product.id}
            style={{
              width: "22%",
              height: "23rem",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "73%", objectFit: "cover" }}
            />
            <div
              className="allprod-textsection"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "centrer",
                justifyContent: "center",
                gap: "7px",
              }}
            >
              <h3>{product.name}</h3>
              {product.productInfo && <p>{product.productInfo}</p>}
              <p>
                {/* <span style={{ textDecoration: "line-through" }}>
                  ₹{product.oldPrice}
                </span> */}
                <strong>₹ {product.Price}</strong>
              </p>
            </div>
          </div>
        ))}
        {/* </div> */}
        {/* </div> */}
      </div>
      {/* ------------ */}
    </div>
  );
};

export default Allitems;
