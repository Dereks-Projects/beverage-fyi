// 📄 FILE: src/desktop/WineRecommendationsDesktop.jsx
// Desktop version of wine recommendations - separate from mobile

import React from 'react';
import WineFilterGrid from '../components/WineFilterGrid';
import WineResultsList from '../components/WineResultsList';
import '../styles/desktop.css'; // Your existing desktop styles

export default function WineRecommendationsDesktop({ 
  filters, 
  updateFilter, 
  resetFilters, 
  filteredWines 
}) {
  return (
    <div className="wine-recommendations-desktop">
      <div className="wine-page-header">
      <h1 className="wine-page-title">Wine Recommendations</h1>
      <p className="wine-page-subtitle">
        Explore the world of wine with confidence. Use the filters below to find your next great bottle.
      </p>
    </div>

      <div className="wine-desktop-content">
        <div className="wine-desktop-filters">
          <WineFilterGrid 
            filters={filters}
            updateFilter={updateFilter}
            resetFilters={resetFilters}
          />
        </div>

        <div className="wine-desktop-results">
          <WineResultsList wines={filteredWines} />
        </div>
      </div>
    </div>
  );
}