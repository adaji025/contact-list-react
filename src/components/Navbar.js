import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
          <div className="container">
        <Link to="/" className="navbar-brand">
          Contact App
        </Link>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to='/' className="nav-link">Hello</Link>
            </li>
        </ul>
    </div>
      </nav>
  );
};

export default Navbar;
