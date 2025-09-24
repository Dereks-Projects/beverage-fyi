// 📄 FILE: src/components/CocktailResultsList.jsx
// This component displays the filtered cocktail results
// Shows cocktail cards with name and recipes

import React from 'react';
import '../styles/CocktailResultsList.css';

export default function CocktailResultsList({ cocktails }) {
  // If no cocktails match the filter or no filter is selected
  if (!cocktails || cocktails.length === 0) {
    return (
      <div className="cocktail-results-container">
        <p className="no-results">
          No cocktails match your current filters. Try adjusting your selections or reset to see all options.
        </p>
      </div>
    );
  }

  return (
    <div className="cocktail-results-container">
      {/* Header showing how many results were found */}
      <div className="results-header">
        <h3 className="results-count">
          {cocktails.length} {cocktails.length === 1 ? 'Cocktail' : 'Cocktails'} Found
        </h3>
      </div>

      {/* Grid of cocktail cards */}
      <div className="cocktails-grid">
        {cocktails.map((cocktail, index) => (
          <div key={index} className="cocktail-card">
            {/* Cocktail name as the card header */}
            <h4 className="cocktail-name">{cocktail.cocktail}</h4>
            
            {/* Recipe ingredients */}
            <div className="cocktail-recipe">
              <p className="recipe-label">Ingredients:</p>
              <p className="recipe-text">{cocktail.recipe1}</p>
            </div>

            {/* Recipe instructions */}
            <div className="cocktail-instructions">
              <p className="recipe-label">Instructions:</p>
              <p className="recipe-text">{cocktail.recipe2}</p>
            </div>

            {/* Base spirit tag at the bottom */}
            <div className="cocktail-spirit-tag">
              <span className="spirit-label">Base:</span>
              <span className="spirit-value">{cocktail.baseSpirit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}