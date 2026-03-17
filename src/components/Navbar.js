import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Logo from "../assets/images/Logo.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

  const location = useLocation();

  const productActive =
    location.pathname === "/ai-scribe" ||
    location.pathname === "/ai-radiologist";

  // ✅ Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setMobileMenu(false);
        setShowDropdown(false);
      }

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Close on route change
  useEffect(() => {
    setMobileMenu(false);
    setShowDropdown(false);
  }, [location.pathname]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${mobileMenu ? "active" : ""}`}
          onClick={() => {
            const newState = !mobileMenu;
            setMobileMenu(newState);

            // 🔥 always close dropdown when menu closes
            if (!newState) setShowDropdown(false);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* RIGHT MENU */}
        <div className={`nav-right ${mobileMenu ? "open" : ""}`}>

          {/* PRODUCT */}
          <div className="product-wrapper" ref={dropdownRef}>
            <button
              className={`nav-item ${
                showDropdown || productActive ? "active" : ""
              }`}
              onClick={() => setShowDropdown(prev => !prev)}
            >
              Product
            </button>

            <div className={`dropdown ${showDropdown ? "show" : ""}`}>
              <Link
                to="/ai-scribe"
                className="dropdown-item"
              >
                AI Scribe
              </Link>

              <Link
                to="/ai-radiologist"
                className="dropdown-item"
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