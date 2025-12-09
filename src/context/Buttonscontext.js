import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ButtonsContext = createContext();

export const ButtonsProvider = ({ children }) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const navigatehome = useNavigate();

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const goTohome = () => {
    navigatehome("/");
  };

  return (
    <ButtonsContext.Provider
      value={{ quickViewProduct, openQuickView, closeQuickView, goTohome }}
    >
      {children}
    </ButtonsContext.Provider>
  );
};
