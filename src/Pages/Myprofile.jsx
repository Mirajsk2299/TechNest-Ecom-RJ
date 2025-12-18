import React, { useState } from "react";
import profile from "../assets/urgentimg/logosample.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/userContext.js";
import Personaldetails from "../minipages/Personaldetails";
import Gmailinfo from "../minipages/Gmailinfo";
import Paninfo from "../minipages/Paninfo";

const Myprofile = () => {
  const { logout, currentUser, userData } = useAuth();
  const [personalinfo, setPersonalinfo] = useState(null);

  const navigate = useNavigate();
  const navigatelogin = useNavigate();

  const navigateOrders = () => {
    navigate("/myorders");
  };

  const navloginBtn = () => {
    navigatelogin("/login");
  };

  return (
    <div className="profile-main">
      <div className="profile-second">
        <div className="profile-leftbox">
          <div className="profile-leftupper">
            <div className="profile-imgbox">
              <img src={profile} alt="Loading..." />
            </div>
            <div className="profile-hollo">
              {currentUser ? (
                <h2>{userData?.fullName}</h2>
              ) : (
                <h2>Not logged In</h2>
              )}
            </div>
          </div>
          <div className="profile-leftlower">
            <div className="profile-orders">
              {/* <img alt="Loading..." /> */}
              <i className="fa-solid fa-store fa-2x store"></i>

              <h3 style={{ width: "200px" }} onClick={navigateOrders}>
                My Orders
              </h3>
              <i
                onClick={navigateOrders}
                className="fa-solid fa-chevron-right fa-1x arrow"
              ></i>
            </div>
            <hr className="line-profile" />

            <div className="account-setting">
              <div className="account-photo">
                {/* <img alt="Loading..." /> */}
                <i class="fa-regular fa-user fa-2x"></i>
                <h3>Account Settings</h3>
              </div>
              {/* <div className="settings-options"> */}
              <div className="single-settings">
                <p
                  className="single-settpara"
                  onClick={() => setPersonalinfo(<Personaldetails />)}
                >
                  Profile Information
                </p>
              </div>
              <div className="single-settings">
                <p
                  className="single-settpara"
                  onClick={() => setPersonalinfo(<Gmailinfo />)}
                >
                  Change Password
                </p>
              </div>
              <div className="single-settings">
                <p
                  className="single-settpara"
                  onClick={() => setPersonalinfo(<Paninfo />)}
                >
                  PAN Card Information
                </p>
              </div>
              {/* </div> */}
            </div>

            <hr className="line-profile" />
            {/* ----------------------------------------------- */}
            <div className="account-setting">
              <div className="account-photo">
                {/* <img alt="Loading..." /> */}
                <i class="fa-solid fa-wallet fa-2x"></i>
                <h3>Payments</h3>
              </div>
              {/* <div className="settings-options"> */}
              <div className="single-settings">
                <p className="payments-singletext">Gift Cards</p>
              </div>
              <div className="single-settings">
                <p className="payments-singletext">Saved UPI</p>
              </div>
              <div className="single-settings">
                <p className="payments-singletext">Saved Cards</p>
              </div>
              {/* </div> */}
            </div>

            <hr className="line-profile" />
            {/* ----------------------------------------------- */}
            <>
              {currentUser ? (
                <div className="profile-orders">
                  {/* <img alt="Loading..." /> */}
                  <i className="fa-solid fa-power-off fa-2x"></i>

                  <h3 className="login-icon" onClick={logout}>
                    Log Out
                  </h3>
                </div>
              ) : (
                <div className="profile-orders">
                  {/* <img alt="Loading..." /> */}
                  <i className="fa-solid fa-power-off fa-2x"></i>

                  <h3 className="login-icon" onClick={navloginBtn}>
                    Log In
                  </h3>
                </div>
              )}
            </>
            {/* ----------------------------------------------- */}
          </div>
        </div>
        <div className="profile-rightbox">{personalinfo}</div>
      </div>
    </div>
  );
};

export default Myprofile;
