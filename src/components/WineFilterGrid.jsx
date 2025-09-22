// 📄 FILE: src/components/WineFilterGrid.jsx
// Mobile filter grid component for wine recommendations

import React from 'react';
import '../styles/WineFilterGrid.css';

export default function WineFilterGrid({ filters, updateFilter, resetFilters }) {
  return (
    <div className="wine-filter-grid">
      {/* Color Filters */}
      <div className="filter-row">
        <button 
          className={`filter-btn ${filters.color === 'White' ? 'active' : ''}`}
          onClick={() => updateFilter('color', 'White')}
        >
          White
        </button>
        <button 
          className={`filter-btn ${filters.color === 'Red' ? 'active' : ''}`}
          onClick={() => updateFilter('color', 'Red')}
        >
          Red
        </button>
      </div>

      {/* Body Filters */}
      <div className="filter-row">
        <button 
          className={`filter-btn ${filters.body === 'Lighter Body' ? 'active' : ''}`}
          onClick={() => updateFilter('body', 'Lighter Body')}
        >
          Lighter Body
        </button>
        <button 
          className={`filter-btn ${filters.body === 'Fuller Body' ? 'active' : ''}`}
          onClick={() => updateFilter('body', 'Fuller Body')}
        >
          Fuller Body
        </button>
      </div>

      {/* Dryness Filters */}
      <div className="filter-row">
        <button 
          className={`filter-btn ${filters.dryness === 'Less Dry' ? 'active' : ''}`}
          onClick={() => updateFilter('dryness', 'Less Dry')}
        >
          Less Dry
        </button>
        <button 
          className={`filter-btn ${filters.dryness === 'More Dry' ? 'active' : ''}`}
          onClick={() => updateFilter('dryness', 'More Dry')}
        >
          More Dry
        </button>
      </div>

      {/* Origin Filters */}
      <div className="filter-row">
        <button 
          className={`filter-btn ${filters.origin === 'New World' ? 'active' : ''}`}
          onClick={() => updateFilter('origin', 'New World')}
        >
          New World
        </button>
        <button 
          className={`filter-btn ${filters.origin === 'Old World' ? 'active' : ''}`}
          onClick={() => updateFilter('origin', 'Old World')}
        >
          Old World
        </button>
      </div>

      {/* Reset Button */}
      <div className="reset-row">
        <button 
          className="reset-btn"
          onClick={resetFilters}
        >
          Reset
        </button>
      </div>
    </div>
  );
}