import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Cognitran</h1>
      </Link>
      <div className="navigation">
        <Link to="/" className="item">
          <h2>Home</h2>
        </Link>
        <Link to="/products" className="item">
          <h2>Products</h2>
        </Link>
        <Link to="/careers" className="item">
          <h2>Careers</h2>
        </Link>
        <Link to="/news" className="item">
          <h2>News</h2>
        </Link>
        <Link to="/contact" className="item">
          <h2>Contact</h2>
        </Link>
      </div>
    </div>
  );
}
