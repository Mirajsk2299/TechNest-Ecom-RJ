import React from "react";

const Personaldetails = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "40px" }}>Personal Information</h1>

      <div className="maintxt-container">
        <div className="txt-container">
          <div className="topicbox-text">
            <h3>Your Name</h3>
            <p className="edit-btn">Edit</p>
          </div>

          <div className="input-button">
            <input className="personal-inp" />
            <button className="personal-save">Save</button>
          </div>
        </div>

        {/**/}

        <div className="txt-container">
          <div className="topicbox-text">
            <h3>Email Address</h3>
            <p className="edit-btn">Edit</p>
          </div>

          <div className="input-button">
            <input type="text" className="personal-inp" />
            <button className="personal-save">Save</button>
          </div>
        </div>

        <div className="txt-container">
          <div className="topicbox-text">
            <h3>Mobile Number</h3>
            <p className="edit-btn">Edit</p>
          </div>

          <div className="input-button">
            <input type="text" className="personal-inp" />
            <button className="personal-save">Save</button>
          </div>
        </div>

        {/* ---------------- */}
        <div className="txt-container">
          <div className="topicbox-text">
            <h3>Address</h3>
            <p className="edit-btn">Edit</p>
          </div>

          <div className="input-button">
            <textarea type="text" className="personal-addressinp" />
            <button className="personal-save">Save</button>
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
