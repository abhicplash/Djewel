import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/Pages/Shop";
import Product from "./components/Pages/Product";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import PNF from "./components/Pages/PNF";
import About from "./components/Pages/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/contact" element={<About />} />
          <Route path="/Product/:mubashir" element={<Product />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="*" element={<PNF />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
