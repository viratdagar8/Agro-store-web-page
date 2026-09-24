import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">AGRO</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </div>

    </nav>
  );
};

export default Navbar;