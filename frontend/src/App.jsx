import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    setCart((previousCart) => [
      ...previousCart,
      product
    ]);

  };

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Products
              onAddToCart={addToCart}
            />
          }
        />

      </Routes>

    </>
  );
}

export default App;