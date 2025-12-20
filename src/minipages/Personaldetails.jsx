import React, { useState, useEffect } from "react";
import { useAuth } from "../context/userContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Personaldetails = () => {
  const { currentUser, userData } = useAuth(); // get logged in user & data
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // const [isEdit, setIsEdit] = useState(false);
  const [editfullName, setEditfullName] = useState(false);
  const [editEmail, setEditemail] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  useEffect(() => {
    if (!userData) return;

    setfullName(userData.fullName || "");
    setEmail(userData.email || "");
    setAddress(userData.address || "");
  }, [userData]);

  const savefullName = async () => {
    if (!currentUser) return;

    const ref = doc(db, "users", currentUser.uid);
    await updateDoc(ref, { fullName });
    setEditfullName(false);
  };

  const saveEmail = async () => {
    if (!currentUser) return;
    const ref = doc(db, "users", currentUser.uid);
    await updateDoc(ref, { email });
    setEditemail(false);
  };

  const saveAddress = async () => {
    if (!currentUser) return;
    const ref = doc(db, "users", currentUser.uid);
    await updateDoc(ref, { address });
    setEditAddress(false);
  };

  return (
    <div className="personalinfo-box">
      <h1 style={{ marginBottom: "20px" }}>Personal Information</h1>

      <div className="maintxt-container">
        <div className="txt-container">
          <div className="topicbox-text">
            <h3>Your Name</h3>
            <p className="edit-btn" onClick={() => setEditfullName(true)}>
              Edit
            </p>
          </div>

          <div className="input-button">
            <input
              className="personal-inp"
              value={fullName}
              disabled={!editfullName}
              onChange={(e) => setfullName(e.target.value)}
            />
            <button className="personal-save" onClick={savefullName}>
              Save
            </button>
          </div>
        </div>

        <div className="txt-container">
          <div className="topicbox-text">
            <h3>Email Address</h3>
            <p className="edit-btn" onClick={() => setEditemail(true)}>
              Edit
            </p>
          </div>

          <div className="input-button">
            <input
              type="text"
              className="personal-inp"
              value={email}
              disabled={!editEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="personal-save" onClick={saveEmail}>
              Save
            </button>
          </div>
        </div>

        <div className="txt-container" style={{ cursor: "not-allowed" }}>
          <div className="topicbox-text" style={{ cursor: "not-allowed" }}>
            <h3 style={{ cursor: "not-allowed", color: "grey" }}>
              Mobile Number
            </h3>
            <p
              className="edit-btn"
              style={{ cursor: "not-allowed", color: "grey" }}
            >
              Edit
            </p>
          </div>

          <div className="input-button">
            <input
              type="text"
              className="personal-inp"
              // value={phone}
              // disabled={!isEdit}
              // onChange={(e) => setPhone(e.target.value)}
              style={{ cursor: "not-allowed", border: "1px solid grey" }}
            />
            <button
              className="personal-save"
              style={{ cursor: "not-allowed", backgroundColor: "grey" }}
            >
              Save
            </button>
          </div>
        </div>

        {/* ---------------- */}
        <div className="txt-container">
          <div className="topicbox-text">
            <h3>Address</h3>
            <p className="edit-btn" onClick={() => setEditAddress(true)}>
              Edit
            </p>
          </div>

          <div className="input-button">
            <textarea
              type="text"
              className="personal-addressinp"
              value={address}
              disabled={!editAddress}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button className="personal-save" onClick={saveAddress}>
              Save
            </button>
          </div>
        </div>

        {/* ---------------- */}
        <div className="txt-container">
          <div className="gender-txt">
            <p className="gender-heading">Your Gender</p>
          </div>

          <div className="txt-container">
            <div className="gender-mainboth">
              <div className="gender-radio">
                <input type="radio" className="radio-input" />
                <p className="gender-singleword">Male</p>
              </div>

              <div className="gender-radio">
                <input type="radio" className="radio-input" />
                <p className="gender-singleword">Female</p>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------- */}
      </div>
    </div>
  );
};

export default Personaldetails;
