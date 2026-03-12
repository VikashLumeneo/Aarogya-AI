import React from "react";
import "./Navbar.css";
import Logo from "../assets/images/Logo.svg";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <button className="logo-button">
       <img src={Logo} alt="Logo" />
      </button>

      {/* Right Side Menu */}
      <div className="nav-right">

        <button className="nav-item">
          Product
        </button>

        <button className="nav-item">
          Intelligence
        </button>

        <button className="nav-item">
          Solutions
        </button>

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