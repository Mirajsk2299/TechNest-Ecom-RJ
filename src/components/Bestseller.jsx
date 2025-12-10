import React, { useState } from "react";
import Onsaledata from "../ProductsData/Allproducts.js";
import "../Styles/AllComponents.css";
import { Link } from "react-router-dom";

const Onsale = () => {
  const Bestsellerroducts = Onsaledata.filter((item) => item.Bestseller);

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % Bestsellerroducts.length);
  };

  const prev = () => {
    setIndex(
      (prev) => (prev - 1 + Bestsellerroducts.length) % Bestsellerroducts.length
    );
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(Bestsellerroducts[(index + i) % Bestsellerroducts.length]);
    }
    return items;
  };

  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D3D3D3",
      }}
    >
      <div
        className="best-secons"
        style={{
          width: "95vw",
          height: "95%",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2%",
        }}
      >
        <div className="htag-bestslr">
          <h1 style={{ fontSize: "2.5rem" }}>Best Seller</h1>
        </div>

        <div className="carousel-container">
          <div className="carousel">
            <button onClick={prev} className="nav-btn">
              ◀
            </button>

            {getVisibleItems().map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} />
                {item.sale && <span className="sale-badge">Sale</span>}
                <hr style={{ width: "100%" }} />

                <div className="card-txt">
                  <div className="card-name">
                    <p>{item.name}</p>
                  </div>
                  <div className="prices">
                    <span className="old">₹{item.oldprice}</span>
                    <span className="new">₹{item.Price}</span>
                  </div>
                </div>
              </div>
            ))}

            <button onClick={next} className="nav-btn">
              ▶
            </button>
          </div>
        </div>

        <div className="bstslr-btn">
          <Link to="/bestsellerpage">
            <button
              className="bestsell-btn"
              style={{
                width: "14rem",
                height: "2.8rem",
                borderRadius: "25px",
                border: "none",
                backgroundColor: "rgba(71, 71, 253, 1)",
                color: "white",
                fontSize: "1.1rem",
                cursor: "pointer",
                fontWeight: "350",
              }}
            >
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onsale;
