// 📄 FILE: src/pages/WineRecommendationsPage.jsx
// PROFESSIONAL VERSION - No inline styles

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import WineFilterGrid from '../components/WineFilterGrid';
import WineResultsList from '../components/WineResultsList';
import wineData from '../data/WineRecommendations.json';
import '../styles/WineRecommendationsPage.css';  // Import the CSS file

export default function WineRecommendationsPage() {
  const [filters, setFilters] = useState({
    color: null,
    body: null,
    dryness: null,
    origin: null
  });

  const [filteredWines, setFilteredWines] = useState([]);

  useEffect(() => {
    // Check if ANY filter is selected
    const hasActiveFilter = filters.color || filters.body || filters.dryness || filters.origin;
    
    if (!hasActiveFilter) {
      // No filters = show nothing (keeps page short)
      setFilteredWines([]);
      return;
    }

    // Apply filters
    let results = wineData;

    if (filters.color) {
      results = results.filter(wine => wine.color === filters.color);
    }
    if (filters.body) {
      results = results.filter(wine => wine.body === filters.body);
    }
    if (filters.dryness) {
      results = results.filter(wine => wine.dryness === filters.dryness);
    }
    if (filters.origin) {
      results = results.filter(wine => wine.origin === filters.origin);
    }

    setFilteredWines(results);
  }, [filters]);

  const updateFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? null : value
    }));
  };

  const resetFilters = () => {
    setFilters({
      color: null,
      body: null,
      dryness: null,
      origin: null
    });
  };

  return (
    <>
      <Helmet>
        <title>Wine Recommendations & Food Pairing Guide | Beverage.fyi</title>
        <link rel="canonical" href="https://beverage.fyi/wine-recommendations" />
      </Helmet>
      
      <div className="wine-page">
        <main className="wine-content">
          {/* Mobile - Using proper CSS classes */}
          <div className="hide-on-desktop">
            <div className="wine-mobile-header">
              <h2 className="wine-mobile-title">Wine Recommendations</h2>
              <p className="wine-mobile-subtitle">
                Explore the world of wine with confidence. Use the filters below to find your next great bottle.
              </p>
            </div>

            <WineFilterGrid 
              filters={filters}
              updateFilter={updateFilter}
              resetFilters={resetFilters}
            />

            <div className="wine-results-section">
              <WineResultsList wines={filteredWines} />
            </div>
          </div>

          {/* Desktop - Using proper CSS classes */}
          <div className="desktop-only">
            <div className="desktop-container">
              <div className="wine-desktop-header">
                <h1 className="wine-desktop-title">Wine Recommendations</h1>
                <p className="wine-desktop-subtitle">
                  Explore the world of wine with confidence. Use the filters below to find your next great bottle.
                </p>
              </div>

              <div className="wine-desktop-layout">
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
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}