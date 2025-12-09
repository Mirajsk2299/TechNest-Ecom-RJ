import React from "react";
import sampleimg from "../assets/mobile/zpixel-max.avif";
const Cartpage = () => {
  return (
    <div className="Cartpg-mainbox">
      <div className="Cartpg-secondl">
        <div className="cartpg-headder">
          <h3>My Shopping Cart </h3>
          <p>
            2 items in your Cart <span>/ Your Cart is Empty</span>
          </p>
        </div>
        <div className="cartpg-address">
          <div className="address-boxl">
            <p>
              <strong>Deliver to :</strong> Miraj Shaikh
            </p>
            <p>Ho no 201, Thomas Colony, Pune</p>
          </div>

          <div className="address-changebtn">
            <button className="changebtn-cart">Change</button>
          </div>
        </div>
        <div className="products-addedpg">
          {/* --------------single product pg headding start---------------- */}
          <div className="single-productsrow">
            <div className="singleproduct-details">
              <h4 style={{ marginLeft: "25%" }}>Product</h4>
            </div>

            <div className="singleproduct-countremove">
              <h4>Qunatity</h4>
            </div>

            <div className="singleproduct-totalprice">
              <h4>Total Price</h4>
            </div>
          </div>
          {/* ------------------------------ */}

          {/* --------------single product pg headding start---------------- */}
          <div className="single-mainproductsrow">
            <div className="singleproduct-maindetails">
              <div className="cardpg-imgmain">
                <div className="lastbox-descripimg">
                  <img src={sampleimg} alt="Loading" />
                </div>

                <div className="lastbox-descrip">
                  <h4>Asus Tuf F15</h4>
                  <p>Product Details</p>
                  <p>Price 999</p>
                </div>
              </div>
            </div>
            <div className="singleproduct-maincountremove">
              <div className="incre-decre">
                <button className="increse-decresebtn">-</button>
                <p className="count-num">225</p>
                <button className="increse-decresebtn">+</button>
              </div>
              <div className="removebtn-cardpg">
                <button className="cart-removebtn">Remove</button>
              </div>
            </div>

            <div className="singleproduct-maintotalprice">
              <h4>$ 500.00</h4>
            </div>
          </div>
          <hr style={{ color: "1px solid grey", width: "90%" }} />

          {/* -----------111111111111111111111--------------------- */}
          <div className="single-mainproductsrow">
            <div className="singleproduct-maindetails">
              <div className="cardpg-imgmain">
                <div className="lastbox-descripimg">
                  <img src={sampleimg} alt="Loading" />
                </div>

                <div className="lastbox-descrip">
                  <h4>iphone 15 pro max</h4>
                  <p>Product Details</p>
                  <p>Price 999</p>
                </div>
              </div>
            </div>
            <div className="singleproduct-maincountremove">
              <div className="incre-decre">
                <button className="increse-decresebtn">-</button>
                <p className="count-num">2</p>
                <button className="increse-decresebtn">+</button>
              </div>
              <div className="removebtn-cardpg">
                <button className="cart-removebtn">Remove</button>
              </div>
            </div>

            <div className="singleproduct-maintotalprice">
              <h4>$ 500.00</h4>
            </div>
          </div>
          <hr style={{ color: "1px solid grey", width: "90%" }} />

          {/* -----------111111111111111111111--------------------- */}

          {/* -----------111111111111111111111--------------------- */}
          <div className="single-mainproductsrow">
            <div className="singleproduct-maindetails">
              <div className="cardpg-imgmain">
                <div className="lastbox-descripimg">
                  <img src={sampleimg} alt="Loading" />
                </div>

                <div className="lastbox-descrip">
                  <h4>Lenove Slim 3</h4>
                  <p>Product Details</p>
                  <p>Price 999</p>
                </div>
              </div>
            </div>
            <div className="singleproduct-maincountremove">
              <div className="incre-decre">
                <button className="increse-decresebtn">-</button>
                <p className="count-num">2</p>
                <button className="increse-decresebtn">+</button>
              </div>
              <div className="removebtn-cardpg">
                <button className="cart-removebtn">Remove</button>
              </div>
            </div>

            <div className="singleproduct-maintotalprice">
              <h4>$ 500.00</h4>
            </div>
          </div>
          <hr style={{ color: "1px solid grey", width: "90%" }} />

          {/* -----------111111111111111111111--------------------- */}

          {/* -----------111111111111111111111--------------------- */}
          <div className="single-mainproductsrow">
            <div className="singleproduct-maindetails">
              <div className="cardpg-imgmain">
                <div className="lastbox-descripimg">
                  <img src={sampleimg} alt="Loading" />
                </div>

                <div className="lastbox-descrip">
                  <h4>Samsung s24 Ultra</h4>
                  <p>Product Details</p>
                  <p>Price 999</p>
                </div>
              </div>
            </div>
            <div className="singleproduct-maincountremove">
              <div className="incre-decre">
                <button className="increse-decresebtn">-</button>
                <p className="count-num">2</p>
                <button className="increse-decresebtn">+</button>
              </div>
              <div className="removebtn-cardpg">
                <button className="cart-removebtn">Remove</button>
              </div>
            </div>

            <div className="singleproduct-maintotalprice">
              <h4>$ 500.00</h4>
            </div>
          </div>
          <hr style={{ color: "1px solid grey", width: "90%" }} />

          {/* -----------111111111111111111111--------------------- */}

          {/* -----------111111111111111111111--------------------- */}
          <div className="single-mainproductsrow">
            <div className="singleproduct-maindetails">
              <div className="cardpg-imgmain">
                <div className="lastbox-descripimg">
                  <img src={sampleimg} alt="Loading" />
                </div>

                <div className="lastbox-descrip">
                  <h4>oppo Reno 15</h4>
                  <p>Product Details</p>
                  <p>Price 999</p>
                </div>
              </div>
            </div>
            <div className="singleproduct-maincountremove">
              <div className="incre-decre">
                <button className="increse-decresebtn">-</button>
                <p className="count-num">2</p>
                <button className="increse-decresebtn">+</button>
              </div>
              <div className="removebtn-cardpg">
                <button className="cart-removebtn">Remove</button>
              </div>
            </div>

            <div className="singleproduct-maintotalprice">
              <h4>$ 500.00</h4>
            </div>
          </div>
          <hr style={{ color: "1px solid grey", width: "90%" }} />

          {/* -----------111111111111111111111--------------------- */}

          {/* -----------111111111111111111111--------------------- */}
          <div className="single-mainproductsrow">
            <div className="singleproduct-maindetails">
              <div className="cardpg-imgmain">
                <div className="lastbox-descripimg">
                  <img src={sampleimg} alt="Loading" />
                </div>

                <div className="lastbox-descrip">
                  <h4>Productname</h4>
                  <p>Product Details</p>
                  <p>Price 999</p>
                </div>
              </div>
            </div>
            <div className="singleproduct-maincountremove">
              <div className="incre-decre">
                <button className="increse-decresebtn">-</button>
                <p className="count-num">2</p>
                <button className="increse-decresebtn">+</button>
              </div>
              <div className="removebtn-cardpg">
                <button className="cart-removebtn">Remove</button>
              </div>
            </div>

            <div className="singleproduct-maintotalprice">
              <h4>$ 500.00</h4>
            </div>
          </div>
          <hr style={{ color: "1px solid grey", width: "90%" }} />

          {/* -----------111111111111111111111--------------------- */}

          {/* -----------111111111111111111111--------------------- */}
          <div className="single-mainproductsrow">
            <div className="singleproduct-maindetails">
              <div className="cardpg-imgmain">
                <div className="lastbox-descripimg">
                  <img src={sampleimg} alt="Loading" />
                </div>

                <div className="lastbox-descrip">
                  <h4>Productname</h4>
                  <p>Product Details</p>
                  <p>Price 999</p>
                </div>
              </div>
            </div>
            <div className="singleproduct-maincountremove">
              <div className="incre-decre">
                <button className="increse-decresebtn">-</button>
                <p className="count-num">2</p>
                <button className="increse-decresebtn">+</button>
              </div>
              <div className="removebtn-cardpg">
                <button className="cart-removebtn">Remove</button>
              </div>
            </div>

            <div className="singleproduct-maintotalprice">
              <h4>$ 500.00</h4>
            </div>
          </div>
          <hr style={{ color: "1px solid grey", width: "90%" }} />

          {/* -----------111111111111111111111--------------------- */}

          {/* -----------111111111111111111111--------------------- */}
          <div className="single-mainproductsrow">
            <div className="singleproduct-maindetails">
              <div className="cardpg-imgmain">
                <div className="lastbox-descripimg">
                  <img src={sampleimg} alt="Loading" />
                </div>

                <div className="lastbox-descrip">
                  <h4>Productname</h4>
                  <p>Product Details</p>
                  <p>Price 999</p>
                </div>
              </div>
            </div>
            <div className="singleproduct-maincountremove">
              <div className="incre-decre">
                <button className="increse-decresebtn">-</button>
                <p className="count-num">2</p>
                <button className="increse-decresebtn">+</button>
              </div>
              <div className="removebtn-cardpg">
                <button className="cart-removebtn">Remove</button>
              </div>
            </div>

            <div className="singleproduct-maintotalprice">
              <h4>$ 500.00</h4>
            </div>
          </div>
          <hr style={{ color: "1px solid grey", width: "90%" }} />

          {/* -----------111111111111111111111--------------------- */}

          {/* -----------111111111111111111111--------------------- */}
          <div className="single-mainproductsrow">
            <div className="singleproduct-maindetails">
              <div className="cardpg-imgmain">
                <div className="lastbox-descripimg">
                  <img src={sampleimg} alt="Loading" />
                </div>

                <div className="lastbox-descrip">
                  <h4>Productname</h4>
                  <p>Product Details</p>
                  <p>Price 999</p>
                </div>
              </div>
            </div>
            <div className="singleproduct-maincountremove">
              <div className="incre-decre">
                <button className="increse-decresebtn">-</button>
                <p className="count-num">2</p>
                <button className="increse-decresebtn">+</button>
              </div>
              <div className="removebtn-cardpg">
                <button className="cart-removebtn">Remove</button>
              </div>
            </div>

            <div className="singleproduct-maintotalprice">
              <h4>$ 500.00</h4>
            </div>
          </div>
          <hr style={{ color: "1px solid grey", width: "90%" }} />

          {/* -----------111111111111111111111--------------------- */}
        </div>
      </div>
      <div className="Cartpg-secondr">
        <div className="secondr-upper">
          <div className="upperbox-headingname">
            <h2>Price Details</h2>
          </div>

          <div className="upperheading-second">
            <p>
              Price <span>(6)</span> items
            </p>
            <p>$ 599</p>
          </div>

          <div className="upperheading-second">
            <p>Discount</p>
            <p>$ 00</p>
          </div>

          <div className="upperheading-second">
            <p>Delivery fee</p>
            <p>$ 10</p>
          </div>
          <hr />
          <div className="upperheading-second">
            <h3>Total Amount</h3>
            <p>$ 600</p>
          </div>
          <hr />

          <div className="upperheading-second">
            <h3 className="you-save">
              You Will Save <span>$ 500</span> on this Order
            </h3>
          </div>
        </div>
        <div className="palce-orderbtn">
          <button>Place Order</button>
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
