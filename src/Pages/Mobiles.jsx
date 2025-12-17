import React, { useContext, useEffect } from "react";
import "../Styles/Pages.css";
import { ButtonsContext } from "../context/Buttonscontext.js";
import { WishlistContext } from "../context/Wishlistcontext.js";
import Allproducts from "../ProductsData/Allproducts.js";
import { BuyNowContext } from "../context/buynowContext.js";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../redux/addtocart/addtocartSlice.js";

const Mobiles = () => {
  const { buyNow } = useContext(BuyNowContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mobile = Allproducts.filter(
    (item) => item.category.toLowerCase() === "mobile"
  );

  const {
    quickViewProduct,
    openQuickView,
    closeQuickView,
    addToCartAndNavigate,
  } = useContext(ButtonsContext);

  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Check if the current quick view product is already in cart
  const isInCart = quickViewProduct
    ? cartItems.some((item) => item.id === quickViewProduct.id)
    : false;

  return (
    <div className="computer-pg">
      <div className="pgtop-bar">
        <div className="pages-name">
          <p>Home</p>
          <h4>Mobiles</h4>
        </div>

        <div className="sort-count">
          <p>{mobile.length} Products</p>
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
          {mobile.map((product) => (
            <div
              className="single-card"
              key={product.id}
              onClick={() => openQuickView(product)}
            >
              {/* WISHLIST FEATURE */}
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
                  {isInWishlist(product.id) ? "💖" : "🤍"} <br />
                  <p className="wishlist-word">
                    {isInWishlist(product.id) ? "Remove" : "Wishlist"}
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

      {/* QUICK VIEW */}
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
                  {/* ADD / REMOVE CART BUTTON */}
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

export default Mobiles;
