import React from "react";

import laptop from "../assets/jpgaming-laptop.avif";
import phone from "../assets/zpixel-max.avif";
import drone from "../assets/hkitech-quadcopter.avif";
import tablet from "../assets/space-tablet-s7.avif";
import sale from "../assets/sale.avif";
import bestsell from "../assets/bestsale.avif";

import hometv from "../assets/allure-55-led.avif";
import watch from "../assets/fitwatch-xdh.avif";
import speaker from "../assets/turn5-portable-speaker.avif";
import headphone from "../assets/mx50-wired.avif";

const Category = () => {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        backgroundColor: "#D3D3D3 ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2%",
      }}
    >
      <div
        className="category-secondbox"
        style={{
          backgroundColor: "#ffffffff ",
          width: "95vw",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2%",
          padding: "2%",
        }}
      >
        <div
          className="category-heading"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "8px",
          }}
        >
          <h1>Shop by Category</h1>
        </div>

        <div
          className="category-icons"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "30px",
            padding: "2%",
            placeItems: "center",
          }}
        >
          <div className="category-singleimg">
            <img className="singlecat-img" src={laptop} />

            <div className="singleimg-txt">
              <h2>Computers</h2>
            </div>
          </div>

          <div className="category-singleimg">
            <img className="singlecat-img" src={phone} />
            <div className="singleimg-txt">
              <h2>Mobile</h2>
            </div>
          </div>

          <div className="category-singleimg">
            <img className="singlecat-img" src={drone} />

            <div className="singleimg-txt">
              <h2>Drones & Cameras</h2>
            </div>
          </div>
          <div className="category-singleimg">
            <img className="singlecat-img" src={sale} />

            <div className="singleimg-txt">
              <h2>Sale</h2>
            </div>
          </div>
          <div className="category-singleimg">
            <img className="singlecat-img" src={tablet} />

            <div className="singleimg-txt">
              <h2>Tablets</h2>
            </div>
          </div>

          <div className="category-singleimg">
            <img className="singlecat-img" src={bestsell} />

            <div className="singleimg-txt">
              <h2>Best Sellers</h2>
            </div>
          </div>
          <div className="category-singleimg">
            <img className="singlecat-img" src={hometv} />

            <div className="singleimg-txt">
              <h2>T.V & Home Cinemas</h2>
            </div>
          </div>

          <div className="category-singleimg">
            <img className="singlecat-img" src={watch} />

            <div className="singleimg-txt">
              <h2>Wearable Tech</h2>
            </div>
          </div>

          <div className="category-singleimg">
            <img className="singlecat-img" src={speaker} />

            <div className="singleimg-txt">
              <h2>Speakers</h2>
            </div>
          </div>

          <div className="category-singleimg">
            <img className="singlecat-img" src={headphone} />

            <div className="singleimg-txt">
              <h2>Headphones</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
