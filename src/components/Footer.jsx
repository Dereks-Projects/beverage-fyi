// 📄 FILE: src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* LEFT SECTION */}
        <div className="footer-left">
          <h2 className="footer-title">
            Beverage<span className="yellow-period">.</span>fyi
          </h2>
          <p className="footer-tagline">
            The beverage resource you've been looking for.
          </p>

          {/* CTA BUTTONS */}
          <div className="footer-cta">
            <a href="mailto:derekengles@gmail.com" className="cta-button cta-outline">
              Let's Collaborate
            </a>
            <Link to="/explore-articles" className="cta-button cta-filled">
              Explore our Library
            </Link>
          </div>

          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <Link to="/">Home</Link>
          <Link to="/explore-articles">Articles</Link>
          <Link to="/terminology">Terminology</Link>
          <Link to="/wine-recommendations">Wine Pairing</Link>
          <Link to="/cocktails">Cocktail Suggestions</Link>
          <Link to="/about">About Us</Link>
          <a href="mailto:derekengles@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}