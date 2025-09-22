// 📄 FILE: src/components/LetterGrid.jsx
// 🧠 PURPOSE: Displays the grid of A–Z letter buttons with first/last terms.
//             When a button is clicked, navigates to the LetterPage for that letter.

import React, { useState, useEffect } from "react";
import "../styles/LetterGrid.css";
import { useNavigate } from "react-router-dom";

// Create an array of uppercase letters A-Z
const LETTERS = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("A".charCodeAt(0) + i)
);

export default function LetterGrid() {
  const navigate = useNavigate();
  const [letterData, setLetterData] = useState({});

  // Load all letter data on mount
  useEffect(() => {
    const loadData = async () => {
      const data = {};
      
      for (const letter of LETTERS) {
        try {
          // Dynamic import for each letter's JSON
          const module = await import(`../data/${letter}.json`);
          const terms = module.default || [];
          
          if (Array.isArray(terms) && terms.length > 0) {
            data[letter] = {
              firstTerm: terms[0].term || "",
              lastTerm: terms[terms.length - 1].term || ""
            };
          } else {
            data[letter] = { firstTerm: "", lastTerm: "" };
          }
        } catch (error) {
          console.log(`Could not load data for letter ${letter}:`, error);
          data[letter] = { firstTerm: "", lastTerm: "" };
        }
      }
      
      setLetterData(data);
      console.log("Loaded letter data:", data); // Debug log
    };

    loadData();
  }, []);

  // Handler for when a letter is clicked
  const handleLetterClick = (letter) => {
    navigate(`/letter/${letter}`);
  };

  return (
    <div className="letter-grid">
      {LETTERS.map((letter) => {
        const { firstTerm = "", lastTerm = "" } = letterData[letter] || {};
        
        return (
          <button
            key={letter}
            className="letter-btn"
            type="button"
            onClick={() => handleLetterClick(letter)}
            aria-label={`Browse terms starting with ${letter}`}
          >
            <div className="letter-content">
              <div className="letter-left">
                <div className="letter-main">{letter}</div>
                {(firstTerm || lastTerm) && (
                  <div className="letter-terms">
                    <div className="term-first">{firstTerm}</div>
                    <div className="term-last">{lastTerm}</div>
                  </div>
                )}
              </div>
              <div className="letter-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}