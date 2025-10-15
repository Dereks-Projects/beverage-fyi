// 📄 FILE: src/components/FeaturedArticle.jsx
// PURPOSE: Hero featured article component for ExploreArticles page
// Displays the most recent article (highest articlenumber) prominently

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FeaturedArticle.css';

const FeaturedArticle = ({ article }) => {
  const navigate = useNavigate();
  
  if (!article) return null;
  
  const handleClick = () => {
    navigate(`/article/${article.slug}`);
  };

  // Get first sentence of introduction for preview
  const getPreviewText = (text) => {
    const firstSentence = text.split('.')[0];
    return firstSentence + '.';
  };

  return (
    <section 
      className="featured-article"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`Featured article: ${article.title}`}
    >
      <div className="featured-article-image-container">
        <img 
          src={article.heroImage} 
          alt={article.heroImageAlt}
          className="featured-article-image"
          loading="eager" // Featured image loads immediately
        />
        <div className="featured-article-gradient"></div>
      </div>
      
      <div className="featured-article-content">
        <span className="featured-article-category">
          {article.subcategory || article.category}
        </span>
        
        <h2 className="featured-article-title">
          {article.title}
        </h2>
        
        <p className="featured-article-subtitle">
          {article.subtitle}
        </p>
        
        <p className="featured-article-preview">
          {getPreviewText(article.introductionparagraph)}
        </p>
        
        <div className="featured-article-cta">
          <span>Read Article</span>
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
    </section>
  );
};

export default FeaturedArticle;