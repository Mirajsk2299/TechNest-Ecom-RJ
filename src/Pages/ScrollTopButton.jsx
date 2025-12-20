import React, { useState } from "react";

const ScrollTopButton = () => {
  const [show, setShow] = useState(false);
  window.onscroll = () => {
    setShow(window.scrollY > 200);
  };

  return (
    <div>
      {show && (
        <button
          onClick={() => window.scrollTo(0, 0)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            zIndex: 9999,
            borderRadius: " 30px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default ScrollTopButton;
