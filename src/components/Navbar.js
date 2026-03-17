import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Logo from "../assets/images/Logo.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  const productActive =
    location.pathname === "/ai-scribe" ||
    location.pathname === "/ai-radiologist";

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO */}
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>

        {/* HAMBURGER */}
        <div
          className="hamburger"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </div>

        {/* RIGHT SIDE */}
        <div className={`nav-right ${mobileMenu ? "open" : ""}`}>
          
          {/* PRODUCT */}
          <div className="product-wrapper" ref={dropdownRef}>
            <button
              className={`nav-item ${
                showDropdown || productActive ? "active" : ""
              }`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Product
            </button>

            <div className={`dropdown ${showDropdown ? "show" : ""}`}>
              <Link
                to="/ai-scribe"
                className="dropdown-item"
                onClick={() => {
                  setShowDropdown(false);
                  setMobileMenu(false);
                }}
              >
                AI Scribe
              </Link>

              <Link
                to="/ai-radiologist"
                className="dropdown-item"
                onClick={() => {
                  setShowDropdown(false);
                  setMobileMenu(false);
                }}
              >
                AI Radiologist
              </Link>
            </div>
          </div>

          <button className="nav-item">Intelligence</button>
          <button className="nav-item">Solutions</button>

          {/* BUTTONS */}
          <div className="nav-buttons">
            <button className="demo-button">Book a Demo</button>
            <button className="login-button">Login</button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;