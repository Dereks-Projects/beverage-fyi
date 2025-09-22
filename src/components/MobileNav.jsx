// 📄 FILE: src/components/MobileNav.jsx
// 🧠 PURPOSE: Persistent bottom navigation bar for mobile users, matching your mockup.
//             Contains 4 main navigation buttons/icons. (Icons are text for now.)

import React from "react";
import "../styles/MobileNav.css"; // Import CSS for MobileNav
import { useNavigate, useLocation } from "react-router-dom";

// Array of nav items, could be expanded later with icons
const navItems = [
  { label: "Home", path: "/" },
  { label: "Terminology", path: "/terminology" },                       
  { label: "Wine", path: "/wine-recommendations" },               // Now functional!
  { label: "About", path: "/about" },                             // Functional!
];

export default function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  // Home, Wine, and About buttons are functional for MVP
  // Other paths will not be recognized by router yet, but we wire them up for design

  return (
    <nav className="mobile-nav" role="navigation" aria-label="Main mobile navigation">
      {navItems.map((item, idx) => (
        <button
          key={item.label}
          className={`nav-btn${location.pathname === item.path ? " active" : ""}`}
          onClick={() => {
            if (item.path === "/" || item.path === "/about" || item.path === "/wine-recommendations" || item.path === "/terminology") {
              navigate(item.path);
            }
            // Other buttons (Guides) still do nothing for now
          }}
          type="button"
        >
          {/* Temporary text icons. Replace with SVG or icon font if desired. */}
          {item.label === "Home" && <span role="img" aria-label="Home">🏠</span>}
          {item.label === "Terminology" && <span role="img" aria-label="Terminology">📚</span>}
          {item.label === "Wine" && <span role="img" aria-label="Wine">🍷</span>}
          {item.label === "About" && <span role="img" aria-label="About">ℹ️</span>}
          <div className="nav-label">{item.label}</div>
        </button>
      ))}
    </nav>
  );
}