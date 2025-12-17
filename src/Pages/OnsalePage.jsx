import React, { useEffect } from "react";

const OnsalePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="onsalepage-main">
      <div className="onsalepage-second">Onsalepage</div>
    </div>
  );
};

export default OnsalePage;
