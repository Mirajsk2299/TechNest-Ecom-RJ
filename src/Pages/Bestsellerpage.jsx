import React, { useEffect } from "react";

const Bestsellerpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bestsellerpg-main">
      <div className="bestsellerpg-second" style={{ padding: "2%" }}>
        <h2>Feature Will Be Available Soon</h2>
      </div>
    </div>
  );
};

export default Bestsellerpage;
