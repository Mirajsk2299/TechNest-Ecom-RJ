import React, { useContext } from "react";
import "../Styles/Pages.css";
import { ButtonsContext } from "../context/Buttonscontext.js";
import Allproducts from "../ProductsData/Allproducts.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/addtocart/addtocartSlice.js";

const Computers = () => {
  const computers = Allproducts.filter(
    (item) => item.category.toLowerCase() === "computers"
  );

  const { quickViewProduct, openQuickView, closeQuickView } =
    useContext(ButtonsContext);

  const dispatch = useDispatch();

  return (
    <div className="computer-pg">
      <div className="pgtop-bar">
        <div className="pages-name">
          <p>Home</p>
          <h4>Computers</h4>
        </div>

        <div className="sort-count">
          <p>8 Products</p>
          <p>Sort by: Recommended</p>
        </div>
      </div>

      <div className="computer-second">
        {/* ------------ side bar */}
        <div className="side-bar">
          <p>Filters</p>
        </div>
        {/* ------------------------------- */}

        <div className="for-cards">
          {computers.map((product) => (
            <div
              className="single-card"
              key={product.id}
              onClick={() => openQuickView(product)}
            >
              <div className="wishlist-logo">
                <button className="wishlogo-btn">
                  ❤️ <br /> <p className="wishlist-word"> Wishlist</p>
                </button>
              </div>

              <img
                className="card-images"
                src={product.image}
                alt={product.name}
              />
              <hr />
              <div className="card-texbox">
                <h3 className="cards-name">{product.name}</h3>

                {product.productInfo && (
                  <p className="cards-prodinfo">{product.productInfo}</p>
                )}

                <p className="cards-prices">
                  <strong>₹ {product.Price}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* quickview card  start */}
      {quickViewProduct && (
        <div className="quickview-overlay" onClick={closeQuickView}>
          <div
            className="quickview-second"
            onClick={(e) => e.stopPropagation()}
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
                    onClick={() => {
                      dispatch(addToCart(quickViewProduct));
                      // closeQuickView();
                    }}
                  >
                    Add to cart
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
      {/* quickview card  end */}
    </div>
  );
};

export default Computers;
