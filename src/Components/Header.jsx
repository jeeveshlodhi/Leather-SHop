import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h2>Leather Shop</h2>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/belts"><li>Belts</li></Link>
        <Link to="/wallet"><li>Wallet</li></Link>
        <Link to="/boots"><li>Boots</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
      </ul>
    </div>
  );
};

export default Header;
