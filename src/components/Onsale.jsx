import React, { useState } from "react";
import Onsaledata from "../ProductsData/Onsaledata.js";
import "../Styles/AllComponents.css";

const Onsale = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index >= Onsaledata.length - 4) {
      setIndex(0); // ⬅ loop to start
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(Onsaledata.length - 4); // ⬅ loop to last 3
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D3D3D3 ",
      }}
    >
      <div
        className="best-secons"
        style={{
          width: "95vw",
          height: "95%",
          backgroundColor: "#ffffffff ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2%",
        }}
      >
        <div className="htag-bestslr">
          <h1 style={{ fontSize: "2.5rem" }}>On Sale</h1>
        </div>

        <div className="carousel-container">
          <div className="carousel">
            <button onClick={prev} className="nav-btn">
              ◀
            </button>

            {Onsaledata.slice(index, index + 4).map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} />
                {/* <span className="sale-badge">Sale</span> */}
                {item.sale && <span className="sale-badge">Sale</span>}

                <div className="card-txt">
                  <div className="card-name">
                    <p>{item.name}</p>
                  </div>
                  <div className="prices">
                    <span className="old">₹{item.oldPrice}</span>
                    <span className="new">₹{item.currentPrice}</span>
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
          <button
            className="bestsell-btn"
            style={{
              width: "14rem",
              height: "3rem",
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
        </div>
      </div>
    </div>
  );
};

export default Onsale;
