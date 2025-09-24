// 📄 FILE: src/components/CocktailFilterGrid.jsx
// This component handles the filter buttons for cocktail base spirits
// It's simpler than WineFilterGrid because we only have ONE filter type (baseSpirit)

import React from 'react';
import '../styles/CocktailFilterGrid.css';

export default function CocktailFilterGrid({ filter, updateFilter, resetFilter }) {
  // Define all available base spirit options from our cocktails.json
  const baseSpirits = ['Vodka', 'Gin', 'Rum', 'Tequila', 'Whiskey', 'More'];

  return (
    <div className="cocktail-filter-grid">
      {/* Main filter row - we'll display spirits in rows of 2 on mobile, 3 on tablet/desktop */}
      <div className="filter-row spirits-row-1">
        {/* First row: Vodka and Gin */}
        <button
          className={`filter-btn ${filter === 'Vodka' ? 'active' : ''}`}
          onClick={() => updateFilter('Vodka')}
        >
          Vodka
        </button>
        <button
          className={`filter-btn ${filter === 'Gin' ? 'active' : ''}`}
          onClick={() => updateFilter('Gin')}
        >
          Gin
        </button>
      </div>

      <div className="filter-row spirits-row-2">
        {/* Second row: Rum and Tequila */}
        <button
          className={`filter-btn ${filter === 'Rum' ? 'active' : ''}`}
          onClick={() => updateFilter('Rum')}
        >
          Rum
        </button>
        <button
          className={`filter-btn ${filter === 'Tequila' ? 'active' : ''}`}
          onClick={() => updateFilter('Tequila')}
        >
          Tequila
        </button>
      </div>

      <div className="filter-row spirits-row-3">
        {/* Third row: Whiskey and More */}
        <button
          className={`filter-btn ${filter === 'Whiskey' ? 'active' : ''}`}
          onClick={() => updateFilter('Whiskey')}
        >
          Whiskey
        </button>
        <button
          className={`filter-btn ${filter === 'More' ? 'active' : ''}`}
          onClick={() => updateFilter('More')}
        >
          More
        </button>
      </div>

      {/* Reset button row - same style as wine page */}
      <div className="reset-row">
        <button className="reset-btn" onClick={resetFilter}>
          Reset
        </button>
      </div>
    </div>
  );
}