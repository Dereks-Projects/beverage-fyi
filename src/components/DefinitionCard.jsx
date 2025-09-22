// 📄 FILE: src/components/DefinitionCard.jsx
// 🧠 PURPOSE: Displays a single term and its full definition, styled as a card.

import React from "react";
import "../styles/DefinitionCard.css";

// Props: term (string), definition (string)
export default function DefinitionCard({ term, definition }) {
  if (!term) return null;

  return (
    <div className="definition-card">
      <h3 className="definition-term">{term}</h3>
      <p className="definition-text">{definition}</p>
    </div>
  );
}
