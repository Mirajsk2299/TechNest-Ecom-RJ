import React, { useContext, useEffect } from "react";
import "../Styles/Pages.css";
import { ButtonsContext } from "../context/Buttonscontext.js";
import { WishlistContext } from "../context/Wishlistcontext.js";
import { BuyNowContext } from "../context/buynowContext.js";
import Allproducts from "../ProductsData/Allproducts.js";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../redux/addtocart/addtocartSlice.js";

const Dronescam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const drones = Allproducts.filter(
    (item) => item.category.toLowerCase() === "drones"
  );

  const { buyNow } = useContext(BuyNowContext);

  const { quickViewProduct, openQuickView, closeQuickView } =
    useContext(ButtonsContext);

  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = quickViewProduct
    ? cartItems.some((item) => item.id === quickViewProduct.id)
    : false;

  return (
    <div className="computer-pg">
      <div className="pgtop-bar">
        <div className="pages-name">
          <p>Home</p>
          <h4>Drones & Cameras</h4>
        </div>

        <div className="sort-count">
          <p>{drones.length} Products</p>
          <p>Sort by: Recommended</p>
        </div>
      </div>

      <div className="computer-second">
        {/* ------------ side bar */}
        <div className="side-bar">
          <p>Features Coming Soon</p>
        </div>
        {/* ------------------------------- */}

        <div className="for-cards">
          {drones.map((product) => (
            <div
              className="single-card"
              key={product.id}
              onClick={() => openQuickView(product)}
            >
              <div className="wishlist-logo">
                <button
                  className="wishlogo-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    isInWishlist(product.id)
                      ? removeFromWishlist(product.id)
                      : addToWishlist(product);
                  }}
                >
                  {isInWishlist(product.id) ? "💖" : "🤍"}
                  <br />
                  <p className="wishlist-word">
                    {isInWishlist(product.id) ? " Remove" : "Wishlist"}
                  </p>
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

      {/* quickview card start */}
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
                    onClick={() =>
                      isInCart
                        ? dispatch(removeFromCart(quickViewProduct.id))
                        : dispatch(addToCart(quickViewProduct))
                    }
                  >
                    {isInCart ? "Remove / Cart" : "Add to Cart"}
                  </button>

                  <button className="quickview-allbuttons" onClick={buyNow}>
                    Buy Now
                  </button>
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
      {/* quickview card end */}
    </div>
  );
};

export default Dronescam;
