import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { buyNowbtn } from "../redux/addtocart/addtocartSlice.js";
import { ButtonsContext } from "../context/Buttonscontext.js";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";

export const BuyNowContext = createContext();

const BuyNowProvider = ({ children }) => {
  const navigate = useNavigate();
  const { quickViewProduct, closeQuickView } = useContext(ButtonsContext);

  const dispatch = useDispatch();

  const buyNow = () => {
    dispatch(buyNowbtn(quickViewProduct));
    navigate("/cartpage");
    closeQuickView();
  };

  return (
    <BuyNowContext.Provider value={{ buyNow }}>
      {children}
    </BuyNowContext.Provider>
  );
};

export default BuyNowProvider;
