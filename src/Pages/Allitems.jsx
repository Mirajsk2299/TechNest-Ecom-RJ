import React, { useState } from "react";
import "../Styles/Pages.css";
import Allproducts from "../ProductsData/Allproducts.js";

const Allitems = () => {
  // const computers = Allproducts.filter(
  //   (item) => item.category.toLowerCase() === "computers"
  // );

  return (
    <div
      className="computer-pg"
      style={{ height: "auto", width: "100%", padding: "1.2%" }}
    >
      <div className="pgtop-bar">
        <div className="pages-name">
          <p>Home</p>
          <p>All Products</p>
        </div>

        <div className="main-pgname">
          <h1>All Products</h1>
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
          padding: "2%",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {Allproducts.map((product) => (
              <div
                key={product.id}
                style={{
                  width: "220px",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                {/* image */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />

                {/* name */}
                <h4>{product.name}</h4>

                {/* prices */}
                <p>
                  <span style={{ textDecoration: "line-through" }}>
                    ₹{product.oldPrice}
                  </span>{" "}
                  <strong>₹{product.currentPrice}</strong>
                </p>

                {/* productInfo */}
                {product.productInfo && <p>{product.productInfo}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ------------ */}
    </div>
  );
};

export default Allitems;
