import React, { useContext } from "react";
import masimg from "../assets/urgentimg/logosample.jpg";
import { WishlistContext } from "../context/Wishlistcontext.js";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../context/userContext.js";

import {
  addToCart,
  removeFromCart,
} from "../redux/addtocart/addtocartSlice.js";

const Wishlistpage = () => {
  const { userData } = useAuth();

  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Check if a product is in cart
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="Wishlistpg-mainbox">
      <div className="Wishlistpg-second">
        {/* Left */}
        <div className="wishlistpg-left">
          <div className="logo-hello">
            <div className="logohello-logo">
              <img src={masimg} alt="Loading" />
            </div>

            <div className="logohello-hello">
              <h2>Hello {userData?.fullName}</h2>
            </div>
          </div>

          <div className="wishlistleft-lower">
            <h4>Feature Coming Soon</h4>
          </div>
        </div>

        {/* Right */}
        <div className="wishlistpg-right">
          <div className="wishlist-heading">
            <h3> My Wishlist</h3>
            <p>
              {wishlist.length > 0
                ? `${wishlist.length} Items in Wishlist`
                : "No items in wishlist"}
            </p>
          </div>

          <div className="wishlist-mainbox">
            {wishlist.length === 0 && (
              <h3 style={{ padding: "20px", textAlign: "center" }}>
                No items in wishlist 🙂
              </h3>
            )}

            {wishlist.map((item) => (
              <React.Fragment key={item.id}>
                <div className="single-wishproduct">
                  <div className="wishlistimg-textmain">
                    <div className="mainwish-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="wishlist-proddetails">
                      <h3>{item.name}</h3>
                      {item.productInfo && <p>{item.productInfo}</p>}
                      <h3>₹ {item.Price}</h3>
                    </div>
                  </div>

                  <div className="wish-buttonsall">
                    {/* REMOVE FROM WISHLIST */}
                    <div className="wishbtns-upper">
                      <div
                        className="bin"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <p className="wishlist-iconlast">🗑️</p>
                        <p>Remove</p>
                      </div>
                    </div>

                    {/* ADD / REMOVE FROM CART */}
                    <div className="wishbtns-lower">
                      <button
                        onClick={() =>
                          isInCart(item.id)
                            ? dispatch(removeFromCart(item.id))
                            : dispatch(addToCart(item))
                        }
                      >
                        {isInCart(item.id) ? "Remove from Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>

                <hr style={{ color: "1px solid grey", width: "100%" }} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlistpage;
