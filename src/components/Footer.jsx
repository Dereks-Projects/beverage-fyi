// 📄 FILE: src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>

        <nav className="footer-links" aria-label="Footer">
          <Link to="/">Home</Link>
          <span className="dot">•</span>
          <Link to="/terminology">Terminology</Link>
          <span className="dot">•</span>
          <Link to="/wine-recommendations">Wine Recommendations</Link>
          <span className="dot">•</span>
          <Link to="/about">About</Link>
        </nav>

        <div className="footer-copy">
          &copy; 2025{" "}
          <a href="mailto:derekengles@gmail.com">Derek Engles</a> – All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
}