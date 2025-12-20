import React, { useEffect } from "react";

const OnsalePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="onsalepage-main">
      <div className="onsalepage-second" style={{ padding: "2%" }}>
        <h2>Feature Will Be Available Soon</h2>
      </div>
    </div>
  );
};

export default OnsalePage;
