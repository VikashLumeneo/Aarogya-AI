import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Logo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";

function Navbar() {

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // click outside close
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">

      {/* Logo → Home link */}
      <Link to="/" className="logo-button">
        <img src={Logo} alt="Logo" />
      </Link>

      {/* Right Menu */}
      <div className="nav-right">

        <div className="product-wrapper" ref={dropdownRef}>

          <button
            className={`nav-item ${showDropdown ? "active" : ""}`}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Product
          </button>

          {showDropdown && (
            <div className="dropdown">

              <Link
                to="/ai-scribe"
                className="dropdown-item"
                onClick={() => setShowDropdown(false)}
              >
                AI Scribe
              </Link>

              <Link
                to="/ai-radiologist"
                className="dropdown-item"
                onClick={() => setShowDropdown(false)}
              >
                AI Radiologist
              </Link>

            </div>
          )}

        </div>

        <button className="nav-item">Intelligence</button>
        <button className="nav-item">Solutions</button>

        <button className="demo-button">
          Book a Demo
        </button>

        <button className="login-button">
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;