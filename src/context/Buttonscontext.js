import React, { createContext, useState } from "react";

export const ButtonsContext = createContext();

export const ButtonsProvider = ({ children }) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <ButtonsContext.Provider
      value={{ quickViewProduct, openQuickView, closeQuickView }}
    >
      {children}
    </ButtonsContext.Provider>
  );
};
