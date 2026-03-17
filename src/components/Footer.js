import React from "react";
import "./Footer.css";

import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";
import facebook from "../assets/images/facebook.svg";

export default function Footer() {
  return (
    <footer className="footer">

      {/* MAIN */}
      <div className="footer-main">
        <div className="footer-container">

          {/* LEFT */}
          <div className="footer-col">
            <h3 className="footer-logo">AROGYA AI</h3>

            <p className="footer-desc">
               Clinical Intelligence Platform for Modern Healthcare
            </p>
          </div>

          {/* AI AGENTS */}
          <div className="footer-col">
            <h4 className="footer-heading">AI AGENTS</h4>

            <ul>
              <li>AI Intake</li>
              <li>AI Scribe</li>
              <li>AI Diagnostics</li>
              <li>AI Radiology</li>
              <li>AI Medication</li>
              <li>AI Care Coordinator</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>

            <ul>
              <li>Products</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>About</li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">

          <p>
            © 2026 <span>Arogya AI</span>. All rights reserved.
          </p>

          <div className="footer-links">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>

          <div className="footer-social">

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="social-circle">
                <img src={twitter} alt="twitter" />
              </div>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="social-circle">
                <img src={linkedin} alt="linkedin" />
              </div>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="social-circle">
                <img src={facebook} alt="facebook" />
              </div>
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
}