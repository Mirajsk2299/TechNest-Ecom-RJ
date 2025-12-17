import "./App.css";
import { Routes, Route } from "react-router-dom";

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
import Cartpage from "../src/Pages/Cartpage.jsx";
import Register from "../src/Pages/Register.jsx";
import Forgotpass from "../src/Pages/Forgotpass.jsx";
import Wishlistpage from "../src/Pages/Wishlistpage.jsx";
import Contactus from "../src/Pages/Contactus.jsx";
import Bestsellerpage from "../src/Pages/Bestsellerpage.jsx";
import OnsalePage from "../src/Pages/OnsalePage.jsx";
import Myorders from "../src/Pages/Myorders.jsx";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
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
        <Route path="/bestsellerpage" element={<Bestsellerpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlistpage" element={<Wishlistpage />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/onsalePage" element={<OnsalePage />} />
        <Route path="/myorders" element={<Myorders />} />
      </Routes>

      <Helpcenter />
      <Footer />
      <Footerbanks />
      <Lastline />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
