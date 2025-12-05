import React from "react";
import Visa from "../assets/visa.avif";
import Mastercard from "../assets/mastercard.avif";
import AmeriacanExp from "../assets/american-exp.avif";
import Unionpay from "../assets/union-pay.avif";
import JCB from "../assets/jcb.avif";
import Dinners from "../assets/diners.avif";
import Discover from "../assets/Discover.avif";
import Paypal from "../assets/paypal.avif";

const Footerbanks = () => {
  return (
    <div
      style={{
        height: "19vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.9rem",
      }}
    >
      <hr style={{ width: "90%" }} />

      <p>We accept the following paying methods</p>
      <div
        className="bank-cards"
        style={{ display: "flex", flexDirection: "row", gap: "4rem" }}
      >
        <div className="single-cards">
          <img className="banks-img" src={Visa} alt="Loading..." />
        </div>

        <div className="single-cards">
          <img className="banks-img" src={Mastercard} alt="Loading..." />
        </div>

        <div className="single-cards">
          <img className="banks-img" src={AmeriacanExp} alt="Loading..." />
        </div>

        <div className="single-cards">
          <img className="banks-img" src={Unionpay} alt="Loading..." />
        </div>

        <div className="single-cards">
          <img className="banks-img" src={JCB} alt="Loading..." />
        </div>

        <div className="single-cards">
          <img className="banks-img" src={Dinners} alt="Loading..." />
        </div>

        <div className="single-cards">
          <img className="banks-img" src={Discover} alt="Loading..." />
        </div>

        <div className="single-cards">
          <img className="banks-img" src={Paypal} alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Footerbanks;
