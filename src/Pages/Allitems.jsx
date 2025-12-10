import React, { useContext } from "react";
import "../Styles/Pages.css";
import Allproducts from "../ProductsData/Allproducts.js";
import { ButtonsContext } from "../context/Buttonscontext.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/addtocart/addtocartSlice.js";

const Allitems = () => {
  const { quickViewProduct, openQuickView, closeQuickView } =
    useContext(ButtonsContext);

  const dispatch = useDispatch();

  return (
    <div
      className="allitems-pg"
      style={{
        height: "auto",
        width: "100%",
        padding: "1.2%",
        backgroundColor: "#D3D3D3",
      }}
    >
      <div className="pgtop-bar">
        <div className="pages-name">
          <p>Home</p>
          <h4>All Products</h4>
        </div>

        <div className="sort-count">
          <p>{Allproducts.length} Products</p>
          <p>Sort by: Recommended</p>
        </div>
      </div>

      <div
        className="allprod-second"
        style={{
          width: "95vw",
          backgroundColor: "#ffffff",
          padding: "1%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {Allproducts.map((product) => (
          <div
            key={product.id}
            style={{
              width: "22%",
              height: "23rem",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => openQuickView(product)}
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
                alignItems: "center",
                justifyContent: "center",
                gap: "7px",
              }}
            >
              <h3>{product.name}</h3>
              {product.productInfo && <p>{product.productInfo}</p>}
              <p>
                <strong>₹ {product.Price}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Overlay */}
      {quickViewProduct && (
        <div className="quickview-overlay" onClick={closeQuickView}>
          <div
            className="quickview-second"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="quickview-box">
              <div className="quickview-imgbox">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="quickview-img"
                />
              </div>

              <div className="quickview-text">
                <h2 className="quickview-name">{quickViewProduct.name}</h2>
                <p className="quickview-productInfo">
                  {quickViewProduct.productInfo}
                </p>
                <p className="quickview-description">
                  {quickViewProduct.description}
                </p>
                <h3 className="quickview-Price">₹{quickViewProduct.Price}</h3>
                <div className="quickview-buttons">
                  <button
                    className="quickview-allbuttons"
                    onClick={() => dispatch(addToCart(quickViewProduct))}
                  >
                    Add to Cart
                  </button>
                  <button className="quickview-allbuttons">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="quickview-closebtn">
              <button className="close-btn" onClick={closeQuickView}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Allitems;
