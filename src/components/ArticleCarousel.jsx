// 📄 FILE: src/components/ArticleCarousel.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllArticles } from '../data/articleData';
import './ArticleCarousel.css';

export default function ArticleCarousel() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the 3 most recent articles
    const allArticles = getAllArticles();
    setArticles(allArticles.slice(0, 3));
  }, []);

  const scrollToArticle = (index) => {
    setCurrentIndex(index);
    const carousel = document.querySelector('.carousel-track');
    if (carousel) {
      carousel.scrollTo({
        left: index * carousel.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleArticleClick = (article) => {
    const slug = article.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    navigate(`/article/${slug}`);
  };

  return (
    <div className="article-carousel">
      <div className="carousel-container">
        <div className="carousel-track">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="carousel-card"
              onClick={() => handleArticleClick(article)}
            >
              <div className="carousel-image">
                <img src={article.heroImage} alt={article.heroImageAlt} />
              </div>
              <div className="carousel-content">
                <span className="carousel-category">{article.subcategory}</span>
                <h3 className="carousel-title">{article.title}</h3>
                <p className="carousel-subtitle">{article.subtitle}</p>
                <span className="carousel-link">Read Article →</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination dots for mobile */}
        <div className="carousel-dots">
          {articles.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => scrollToArticle(index)}
              aria-label={`Go to article ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}