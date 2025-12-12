import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ButtonsProvider } from "../src/context/Buttonscontext";
import { WishlistProvider } from "../src/context/Wishlistcontext";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/montserrat";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { AuthProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ButtonsProvider>
          <WishlistProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </WishlistProvider>
        </ButtonsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
