// 📄 FILE: src/components/TermList.jsx
// 🧠 PURPOSE: Renders a vertical list of all terms for a letter. Each term is a clickable button/link.

import React from "react";
import "../styles/TermList.css";
import { useNavigate } from "react-router-dom";

// props: terms (array), letter (string)
export default function TermList({ terms = [], letter }) {
  const navigate = useNavigate();

  // Handler for clicking a term
  const handleTermClick = (term) => {
    // URL-encode the term for the route
    const termSlug = encodeURIComponent(term);
    navigate(`/definition/${letter}/${termSlug}`);
  };

  // If no terms, show a message
  if (!terms.length) {
    return <div className="empty-list">No terms found for this letter.</div>;
  }

  return (
    <ul className="term-list">
      {terms.map((item) => (
        <li key={item.term}>
          <button
            className="term-btn"
            type="button"
            onClick={() => handleTermClick(item.term)}
            aria-label={`See definition for ${item.term}`}
          >
            {item.term}
          </button>
        </li>
      ))}
    </ul>
  );
}
