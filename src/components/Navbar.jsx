import React from "react";
import { Link } from "react-router-dom";
import "../Styles/AllComponents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      {/* Upper Navbar */}
      <div
        className="upper-nav"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div className="web-name" style={{ marginLeft: "2rem" }}>
          <Link to="/" className="nav-link">
            <h1 style={{ cursor: "pointer" }}>TechNest </h1>
          </Link>
        </div>

        <div
          className="nav-items"
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "2rem",
            gap: "1.5rem",
          }}
        >
          <div className="nav-srch">
            <Link to="searchpg" className="nav-link">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ fontSize: "25px", cursor: "pointer" }}
              />
            </Link>
          </div>

          <div
            className="nav-login"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faUser}
              style={{
                marginRight: "0.3rem",
                fontSize: "25px",
                cursor: "pointer",
              }}
            />

            <Link
              className="log-link"
              to="login"
              style={{
                fontSize: "20px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Log In
            </Link>
          </div>

          <div
            className="wish-cart"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
            }}
          >
            <div
              className="wishlist-icon"
              style={{ alignItems: "center", display: "flex" }}
            >
              <Link to="wishlistpage" className="nav-link">
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    marginRight: "0.2rem",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                />
              </Link>

              <span style={{ fontSize: "20px" }}>0</span>
            </div>
            <div
              className="cart-icon"
              style={{ alignItems: "center", display: "flex" }}
            >
              <Link to="cartpage" className="nav-link">
                <FontAwesomeIcon
                  icon={faCartArrowDown}
                  style={{
                    marginRight: "0.2rem",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                />
              </Link>

              <span style={{ fontSize: "20px" }}>0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <nav
        className="lower-nav"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0.8rem",
          backgroundColor: "#e4e1e1ff",
          gap: "12%",
        }}
      >
        <div className="lowernav-left" style={{ marginLeft: "2rem" }}>
          <ul>
            <li>
              <Link to="allitems" className="nav-link">
                Shop All
              </Link>
            </li>
            <li>
              <Link to="computers" className="nav-link">
                Computers
              </Link>
            </li>
            <li>
              <Link to="tablets" className="nav-link">
                Tablets
              </Link>
            </li>
            <li>
              <Link to="dronescam" className="nav-link">
                Drones & Cameras
              </Link>
            </li>

            <li className="dropdown">
              <Link to="#" className="nav-link ">
                Audios
              </Link>

              <div className="dropdown-menu">
                <Link to="headphone">Headphones</Link>
                <Link to="speaker">Speakers</Link>
              </div>
            </li>

            <li>
              <Link to="mobiles" className="nav-link">
                Mobiles
              </Link>
            </li>
            <li>
              <Link to="tvcinemas" className="nav-link">
                T.V & Home Cinemas
              </Link>
            </li>
            <li>
              <Link to="wearables" className="nav-link">
                Wearable Tech
              </Link>
            </li>
            <li>
              <Link to="onsale" className="nav-link">
                On Sale
              </Link>
            </li>
            <li>
              <Link to="contactus" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
