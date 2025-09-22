// 📄 FILE: src/components/WineResultsList.jsx
// Accordion-style results list for wine recommendations

import React, { useState } from 'react';
import '../styles/WineResultsList.css';

export default function WineResultsList({ wines }) {
  const [expandedWine, setExpandedWine] = useState(null);

  // Toggle accordion item
  const toggleWine = (index) => {
    setExpandedWine(expandedWine === index ? null : index);
  };

  // Don't render anything if no wines match filters
  if (wines.length === 0) {
    return (
      <div className="wine-results-container">
        <div className="no-results">
          <p>No wines match your current filters. Try adjusting your selections or reset to see all options.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wine-results-container">
      <div className="results-header">
        <h3 className="results-count">
          {wines.length} wine{wines.length !== 1 ? 's' : ''} found
        </h3>
      </div>

      <div className="wine-results-list">
        {wines.map((wine, index) => (
          <div key={`${wine.name}-${index}`} className="wine-item">
            <button
              className={`wine-header ${expandedWine === index ? 'expanded' : ''}`}
              onClick={() => toggleWine(index)}
            >
              <span className="wine-name">{wine.name}</span>
              <span className="wine-toggle">
                {expandedWine === index ? '−' : '+'}
              </span>
            </button>
            
            {expandedWine === index && (
              <div className="wine-description">
                <p>{wine.description}</p>
                
                <div className="wine-details">
                  <span className="wine-detail">
                    <strong>Color:</strong> {wine.color}
                  </span>
                  <span className="wine-detail">
                    <strong>Body:</strong> {wine.body}
                  </span>
                  <span className="wine-detail">
                    <strong>Style:</strong> {wine.dryness}
                  </span>
                  <span className="wine-detail">
                    <strong>Origin:</strong> {wine.origin}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}