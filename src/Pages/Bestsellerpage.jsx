import React, { useEffect } from "react";

const Bestsellerpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bestsellerpg-main">
      <div className="bestsellerpg-second">Bestsellerpage</div>
    </div>
  );
};

export default Bestsellerpage;
