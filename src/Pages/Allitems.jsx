import React, { useContext } from "react";
import "../Styles/Pages.css";
import Allproducts from "../ProductsData/Allproducts.js";
import { ButtonsContext } from "../context/Buttonscontext.js";
import { WishlistContext } from "../context/Wishlistcontext.js";
import { useDispatch, useSelector } from "react-redux";
import { BuyNowContext } from "../context/buynowContext.js";

import {
  addToCart,
  removeFromCart,
} from "../redux/addtocart/addtocartSlice.js";

const Allitems = () => {
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
              position: "relative",
            }}
            onClick={() => openQuickView(product)}
          >
            {/* Wishlist logo */}
            <button
              className="wishlogo-btn"
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();

                isInWishlist(product.id)
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product);
              }}
            >
              {isInWishlist(product.id) ? "💖" : "🤍"}
              <p className="wishlist-word">
                {isInWishlist(product.id) ? " Remove" : "Wishlist"}
              </p>
            </button>

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

      {/* Quick View */}
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
    </div>
  );
};

export default Allitems;
