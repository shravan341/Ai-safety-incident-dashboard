// NavigationBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          AI Dashboard
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/account" className="user-icon">
          <i className="fas fa-user"></i>
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
