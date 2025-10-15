// 📄 FILE: src/components/ArticleCard.jsx
// PURPOSE: Individual article card component for grid display
// Used in ExploreArticles page and potentially homepage carousel

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ArticleCard.css';

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/article/${article.slug}`);
  };

  // Extract first sentence for preview (up to first period)
  const getPreviewText = (text) => {
    const firstSentence = text.split('.')[0];
    return firstSentence.length > 120 
      ? firstSentence.substring(0, 117) + '...' 
      : firstSentence + '.';
  };

  return (
    <article 
      className="article-card" 
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`Read article: ${article.title}`}
    >
      <div className="article-card-image-container">
        <img 
          src={article.heroImage} 
          alt={article.heroImageAlt}
          className="article-card-image"
          loading="lazy"
        />
        <div className="article-card-overlay"></div>
      </div>
      
      <div className="article-card-content">
        <span className="article-card-category">
          {article.subcategory || article.category}
        </span>
        
        <h3 className="article-card-title">
          {article.title}
        </h3>
        
        <p className="article-card-subtitle">
          {article.subtitle}
        </p>
        
        <div className="article-card-arrow">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M5 12H19M19 12L12 5M19 12L12 19" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;