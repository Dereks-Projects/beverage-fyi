// 📄 FILE: src/components/MobileNav.jsx
// 🧠 PURPOSE: Persistent bottom navigation bar for mobile users, matching your mockup.
//             Contains 5 main navigation buttons/icons.

import React from "react";
import "../styles/MobileNav.css"; // Import CSS for MobileNav
import { useNavigate, useLocation } from "react-router-dom";

// Array of nav items - NOW WITH 5 ITEMS INCLUDING COCKTAILS
const navItems = [
  { label: "Home", path: "/" },
  { label: "Articles", path: "/explore-articles" },
  { label: "Terminology", path: "/terminology" },
  { label: "Wine", path: "/wine-recommendations" },
  { label: "Cocktails", path: "/cocktails" },
];

export default function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="mobile-nav" role="navigation" aria-label="Main mobile navigation">
      {navItems.map((item, idx) => (
        <button
          key={item.label}
          className={`nav-btn${location.pathname === item.path ? " active" : ""}`}
          onClick={() => {
            if (item.path === "/" || item.path === "/explore-articles" || item.path === "/wine-recommendations" || item.path === "/terminology" || item.path === "/cocktails") {
              navigate(item.path);
            }
          }}
          type="button"
        >
          {/* Temporary text icons. Replace with SVG or icon font if desired. */}
          {item.label === "Home" && <span role="img" aria-label="Home">🏠</span>}
          {item.label === "Articles" && <span role="img" aria-label="Articles">📝</span>}
          {item.label === "Terminology" && <span role="img" aria-label="Terminology">📚</span>}
          {item.label === "Wine" && <span role="img" aria-label="Wine">🍷</span>}
          {item.label === "Cocktails" && <span role="img" aria-label="Cocktails">🍸</span>}
          <div className="nav-label">{item.label}</div>
        </button>
      ))}
    </nav>
  );
}