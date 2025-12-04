import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        height: "64vh ",
        width: "100%",
        backgroundColor: "#ffffffff",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "row",
      }}
    >
      <div className="footer-child">
        <div className="fchile-next">
          <h2>Store Location</h2>
          <div className="footer-secondchild">
            <p> 500 Terry Francine Street</p>
            <p> San Francisco, CA 94158</p>
            <p> info@mysite.com</p>
            <p> 123-456-7890</p>
          </div>
          <div
            className="footer-social"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: "2rem",
            }}
          >
            <i
              className="fab fa-facebook-f"
              style={{ fontSize: 22, cursor: "pointer" }}
            />
            <i
              className="fab fa-instagram"
              style={{ fontSize: 22, cursor: "pointer" }}
            />
            <i
              className="fab fa-twitter"
              style={{ fontSize: 22, cursor: "pointer" }}
            />
            <i
              className="fab fa-youtube"
              style={{ fontSize: 22, cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <div className="footer-child">
        <div className="fchile-next">
          <h2>Shop</h2>

          <ul className="footer-secondchild">
            <li>
              <Link to="#" className="footer-nav">
                Shop All
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-nav">
                Computers
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-nav">
                Tablets
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-nav">
                Drones & Cameras
              </Link>
            </li>

            <li className="dropdown">
              <Link
                to="#"
                className="footer-nav"
                style={{ marginRight: "2px" }}
              >
                Audio
              </Link>
              <div className="dropdown-right">
                <Link to="#">Headphones</Link>
                <Link to="#">Speakers</Link>
              </div>
            </li>

            <li>
              <Link to="#" className="footer-nav">
                Mobile
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-nav">
                T.V & Home Cinema
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-nav">
                Wearable Tech
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-nav">
                Sale
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-child">
        <div className="fchile-next">
          <h2>Customer Support</h2>

          <ul
            className="footer-secondchild"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            <li className="footer-nav">
              <Link to="#" className="footer-nav">
                Contact Us
              </Link>
            </li>

            <li className="footer-nav">
              <Link to="#" className="footer-nav">
                Help Center
              </Link>
            </li>

            <li className="footer-nav">
              <Link to="#" className="footer-nav">
                About Us
              </Link>
            </li>

            <li className="footer-nav">
              <Link to="#" className="footer-nav">
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-child">
        <div className="fchile-next">
          <h2>Policy</h2>

          <ul
            className="footer-secondchild"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            <li className="footer-nav">
              <Link to="#" className="footer-nav">
                Shipping & Returns
              </Link>
            </li>

            <li className="footer-nav">
              <Link to="#" className="footer-nav">
                Terms & Conditions
              </Link>
            </li>

            <li className="footer-nav">
              <Link to="#" className="footer-nav">
                Payment Methods
              </Link>
            </li>

            <li className="footer-nav">
              <Link to="#" className="footer-nav">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
