// 📄 FILE: src/pages/CocktailPage.jsx
// Main cocktail page - structured exactly like WineRecommendationsPage.jsx
// but adapted for cocktails with single filter (baseSpirit)

import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import CocktailFilterGrid from '../components/CocktailFilterGrid';
import CocktailResultsList from '../components/CocktailResultsList';
import cocktailData from '../data/cocktails.json'; // Import the cocktails.json from data folder
import '../styles/CocktailPage.css'; // Import the CSS file

export default function CocktailPage() {
  // State for the single filter (baseSpirit)
  // Unlike wine which has 4 filters, cocktails only have 1
  const [filter, setFilter] = useState(null);

  // State for filtered cocktails
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  // Effect to filter cocktails whenever filter changes
  useEffect(() => {
    // Check if a filter is selected
    if (!filter) {
      // No filter = show nothing (keeps page short like wine page)
      setFilteredCocktails([]);
      return;
    }

    // Apply the baseSpirit filter
    const results = cocktailData.filter(cocktail => cocktail.baseSpirit === filter);
    setFilteredCocktails(results);
  }, [filter]);

  // Function to update filter (simpler than wine since we only have one)
  const updateFilter = (value) => {
    // Toggle: if clicking the same filter, deselect it
    setFilter(prevFilter => prevFilter === value ? null : value);
  };

  // Function to reset the filter
  const resetFilter = () => {
    setFilter(null);
  };

  return (
    <div className="cocktail-page">
      <main className="cocktail-content">
        {/* Mobile Layout - Using proper CSS classes */}
        <div className="hide-on-desktop">
          {/* Mobile Header Section */}
          <div className="cocktail-mobile-header">
            <h2 className="cocktail-mobile-title">Cocktail Recipes</h2>
            <p className="cocktail-mobile-subtitle">
              Discover classic cocktails by base spirit. Select a spirit below to explore recipes.
            </p>
          </div>

          {/* Filter Grid Component */}
          <CocktailFilterGrid 
            filter={filter}
            updateFilter={updateFilter}
            resetFilter={resetFilter}
          />

          {/* Results Section */}
          <div className="cocktail-results-section">
            <CocktailResultsList cocktails={filteredCocktails} />
          </div>
        </div>

        {/* Desktop Layout - Using proper CSS classes */}
        <div className="desktop-only">
          <div className="desktop-container">
            {/* Desktop Header Section */}
            <div className="cocktail-desktop-header">
              <h1 className="cocktail-desktop-title">Cocktail Recipes</h1>
              <p className="cocktail-desktop-subtitle">
                Discover classic cocktails by base spirit. Select a spirit below to explore recipes.
              </p>
            </div>

            {/* Desktop Two-Column Layout */}
            <div className="cocktail-desktop-layout">
              {/* Left Column: Filters */}
              <div className="cocktail-desktop-filters">
                <CocktailFilterGrid 
                  filter={filter}
                  updateFilter={updateFilter}
                  resetFilter={resetFilter}
                />
              </div>
              
              {/* Right Column: Results */}
              <div className="cocktail-desktop-results">
                <CocktailResultsList cocktails={filteredCocktails} />
              </div>
            </div>
          </div>
          
          {/* Footer only on desktop */}
          <Footer />
        </div>
      </main>
    </div>
  );
}