// 📄 FILE: src/pages/TerminologyPage.jsx
// The A-Z letter grid navigation page with title and subtitle

import React from "react";
import LetterGrid from "../components/LetterGrid";              // existing mobile grid
import LetterGridDesktop from "../desktop/LetterGridDesktop";   // new desktop grid
import Footer from "../components/Footer";                      // new desktop footer
import '../styles/TerminologyPage.css'; 

export default function TerminologyPage() {
  return (
    <div className="homepage">
      <main className="homepage-content">
        {/* Mobile */}
        <div className="hide-on-desktop">
          {/* Mobile Header Section - NEW */}
          <div className="terminology-mobile-header">
            <h2 className="terminology-mobile-title">Terminology</h2>
            <p className="terminology-mobile-subtitle">
              Enjoy this collection of key terms that compliment our book, The Beverage Compass.
            </p>
          </div>
          <LetterGrid />
        </div>

        {/* Desktop-only block */}
        <div className="desktop-only">
          <div className="desktop-container">
            {/* Desktop Header Section - NEW */}
            <div className="terminology-desktop-header">
              <h1 className="terminology-desktop-title">Terminology</h1>
              <p className="terminology-desktop-subtitle">
                Enjoy this collection of key terms that compliment our book, <br/>The Beverage Compass.
              </p>
            </div>
            <LetterGridDesktop />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}