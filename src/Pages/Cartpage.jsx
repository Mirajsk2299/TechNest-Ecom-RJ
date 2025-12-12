import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/userContext.js";

import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/addtocart/addtocartSlice.js";

const Cartpage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0
  );

  const { userData, currentUser, logout } = useAuth();

  return (
    <div className="Cartpg-mainbox">
      <div className="Cartpg-secondl">
        <div className="cartpg-headder">
          <h3>My Shopping Cart </h3>
          <p>{totalItems} Items in your Cart</p>
        </div>
        <div className="cartpg-address">
          {/* <div className="address-boxl">
            <p>
              <strong>Deliver to :</strong> Miraj Sk
            </p>
            <p>Pune 412101</p>
          </div> */}
          <div className="address-boxl">
            {currentUser ? (
              <>
                <p>
                  <strong>Deliver to : </strong> {userData?.fullName}
                </p>

                <p>
                  <strong>Address : </strong>
                  {userData?.address}
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Deliver to :</strong>
                </p>
                <p>Not Logged In</p>
              </>
            )}
          </div>

          {/* <div className="address-changebtn">
            <button className="changebtn-cart">Change</button>
          </div> */}

          {currentUser ? (
            <div className="address-changebtn">
              <button className="changebtn-cart">Change</button>
            </div>
          ) : (
            <div className="address-changebtn">
              <button
                className="changebtn-cartdisabled"
                // disabled={true}
                style={{
                  cursor: "not-allowed",
                  opacity: 0.6,
                  width: "65%",
                  height: "50%",
                }}
              >
                Change
              </button>
            </div>
          )}
        </div>

        <div className="products-addedpg">
          {/* ------- Header Row ------- */}
          <div className="single-productsrow">
            <div className="singleproduct-details">
              <h4 style={{ marginLeft: "25%" }}>Product</h4>
            </div>
            <div className="singleproduct-countremove">
              <h4>Quantity</h4>
            </div>
            <div className="singleproduct-totalprice">
              <h4>Total Price</h4>
            </div>
          </div>

          {/* ------- CART ITEMS ------- */}
          {cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <div className="single-mainproductsrow">
                {/* PRODUCT DETAILS */}
                <div className="singleproduct-maindetails">
                  <div className="cardpg-imgmain">
                    <div className="lastbox-descripimg">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="lastbox-descrip">
                      <h4>{item.name}</h4>
                      <p>{item.productInfo}</p>
                      <p>Price: ₹ {item.Price}</p>
                    </div>
                  </div>
                </div>

                {/* INCREASE / DECREASE / REMOVE */}
                <div className="singleproduct-maincountremove">
                  <div className="incre-decre">
                    <button
                      className="increse-decresebtn"
                      onClick={() => dispatch(decreaseQty(item.id))}
                    >
                      -
                    </button>

                    <p className="count-num">{item.quantity}</p>

                    <button
                      className="increse-decresebtn"
                      onClick={() => dispatch(increaseQty(item.id))}
                    >
                      +
                    </button>
                  </div>

                  <div className="removebtn-cardpg">
                    <button
                      className="cart-removebtn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* TOTAL PRICE */}
                <div className="singleproduct-maintotalprice">
                  <h4>₹ {item.Price * item.quantity}</h4>
                </div>
              </div>
              <hr style={{ color: "1px solid grey", width: "95%" }} />
            </React.Fragment>
          ))}

          {/* ------- EMPTY CART ------- */}
          {cartItems.length === 0 && (
            <h3 style={{ textAlign: "center", marginTop: "100px" }}>
              Your Cart is Empty
            </h3>
          )}
        </div>
      </div>

      {/* PRICE SUMMARY */}
      <div className="Cartpg-secondr">
        <div className="secondr-upper">
          <h2>Price Details</h2>

          <div className="upperheading-second">
            <p>
              Price <span>({totalItems}) items</span>
            </p>
            <p>₹ {totalAmount}</p>
          </div>

          <div className="upperheading-second">
            <p>Discount</p>
            <p>₹ 00</p>
          </div>

          <div className="upperheading-second">
            <p>Delivery Fee</p>
            <p>₹ 0</p>
          </div>

          <hr />

          <div className="upperheading-second">
            <h3>Total Amount</h3>
            <p>₹ {totalAmount}</p>
          </div>

          <hr />

          <div className="upperheading-second">
            <h3 className="you-save">
              You Can Save <span>₹ 100</span> on Every Order
            </h3>
          </div>
        </div>

        <div className="palce-orderbtn">
          <button disabled={cartItems.length === 0}>Place Order</button>
        </div>

        <div className="securepayment-text">
          <p>
            Safe and Secure Payments. Easy Returns. 100% Authentic Products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
