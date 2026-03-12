import React from "react";
import "./Footer.css";

import demoIcon from "../assets/images/demo.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";
import facebook from "../assets/images/facebook.svg";

export default function Footer() {
  return (
    <footer className="footer">

      {/* CTA SECTION */}

      <div className="footer-cta">

        <h2 className="cta-title">
          The future of clinical intelligence is here
        </h2>

        <p className="cta-text">
          Doctors should spend their time on patients not documentation,
          not scan queues, not paperwork.
        </p>

        <button className="cta-btn">
          Request A Demo
          <img src={demoIcon} alt="demo" />
        </button>

      </div>


      {/* MAIN FOOTER */}

      <div className="footer-main">

        <div className="footer-container">

          {/* LEFT */}

          <div className="footer-col">

            <h3 className="footer-logo">AROGYA AI</h3>

            <p className="footer-desc">
              Intelligent Clinical Co-Pilot for Modern Healthcare
            </p>

          </div>


          {/* AI AGENTS */}

          <div className="footer-col">

            <h4 className="footer-heading">AI AGENTS</h4>

            <ul>
              <li>AI Nurse</li>
              <li>AI Receptionist</li>
              <li>AI Consultant</li>
              <li>AI Scribe</li>
              <li>AI Pharmacist</li>
              <li>AI Medical Coder</li>
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

        <p>
          © 2026 <span>Arogya AI</span>. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>

        <div className="footer-social">

          <div className="social-circle">
            <img src={twitter} alt="twitter" />
          </div>

          <div className="social-circle">
            <img src={linkedin} alt="linkedin" />
          </div>

          <div className="social-circle">
            <img src={facebook} alt="facebook" />
          </div>

        </div>

      </div>

    </footer>
  );
}