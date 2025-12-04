import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "../src/components/Navbar.jsx";
import Landingpg from "../src/components/Landingpg.jsx";
import Landinglower from "../src/components/Landinglower.jsx";
import Rulesbar from "../src/components/Rulesbar.jsx";
import Bestseller from "../src/components/Bestseller.jsx";
import Category from "../src/components/Category.jsx";
import Bestprice from "../src/components/Bestprice.jsx";
import Onsale from "../src/components/Onsale.jsx";
import Brands from "../src/components/Brands.jsx";
import Newsletter from "../src/components/Newsletter.jsx";
import Helpcenter from "../src/components/Helpcenter.jsx";
import Tspecial from "../src/components/Tspecial.jsx";
import Footer from "../src/components/Footer.jsx";
import Footerbanks from "../src/components/Footerbanks.jsx";
import Lastline from "../src/components/Lastline.jsx";
import Computers from "../src/Pages/Computers.jsx";
import Dronescam from "../src/Pages/Dronescam.jsx";
import Headphone from "../src/Pages/Headphone.jsx";
import Mobiles from "../src/Pages/Mobiles.jsx";
import Speaker from "../src/Pages/Speaker.jsx";
import Tablets from "../src/Pages/Tablets.jsx";
import Wearables from "../src/Pages/Wearables.jsx";
import Tvcinemas from "../src/Pages/Tvcinemas.jsx";
import Allitems from "../src/Pages/Allitems.jsx";
import Searchpg from "../src/Pages/Searchpg.jsx";

import Login from "../src/Pages/Login.jsx";
import Wishlist from "../src/Pages/Wishlist.jsx";
import Cart from "../src/Pages/Cart.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landingpg />
                <Landinglower />
                <Rulesbar />
                <Bestseller />
                <Category />
                <Bestprice />
                <Onsale />
                <Tspecial />
                <Brands />
                <Newsletter />
              </>
            }
          />

          <Route path="/computers" element={<Computers />} />
          <Route path="/dronescam" element={<Dronescam />} />
          <Route path="/headphone" element={<Headphone />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/wearables" element={<Wearables />} />
          <Route path="/tvcinemas" element={<Tvcinemas />} />
          <Route path="/allitems" element={<Allitems />} />
          <Route path="/onsale" element={<Onsale />} />
          <Route path="/searchpg" element={<Searchpg />} />

          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Helpcenter />
        <Footer />
        <Footerbanks />
        <Lastline />
      </BrowserRouter>
    </div>
  );
}

export default App;
