// 📄 FILE: src/pages/ArticlePage.jsx
// PURPOSE: Individual article display page - renders full article content
// Accessed via /article/:slug route

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import { getArticleBySlug } from '../data/articleData';
import '../styles/ArticlePage.css';

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  
  useEffect(() => {
    // Fetch article by slug
    const foundArticle = getArticleBySlug(slug);
    
    if (!foundArticle) {
      // Redirect to explore page if article not found
      navigate('/explore-articles');
      return;
    }
    
    setArticle(foundArticle);
    
    // Scroll to top when article loads
    window.scrollTo(0, 0);
  }, [slug, navigate]);
  
  // Loading state
  if (!article) {
    return (
      <div className="article-page-loading">
        
        <div className="loading-container">
          <p>Loading article...</p>
        </div>
        <Footer />
        <MobileNav />
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{article.title} | Beverage.fyi</title>
        <link rel="canonical" href={`https://beverage.fyi/article/${slug}`} />
      </Helmet>
      
      <div className="article-page">
      
      
      <article className="article-container">
        {/* Hero Section */}
        <header className="article-hero">
          <div className="article-hero-content">
            <div className="article-meta">
              <span className="article-category">{article.subcategory || article.category}</span>
              
            </div>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-subtitle">{article.subtitle}</p>
          </div>
          
          <div className="article-hero-image-container">
            <img 
              src={article.heroImage} 
              alt={article.heroImageAlt}
              className="article-hero-image"
            />
            <div className="article-hero-overlay"></div>
          </div>
        </header>
        
        {/* Article Content */}
        <div className="article-content">
          {/* Introduction */}
          <p className="article-introduction">
            {article.introductionparagraph}
          </p>
          
          {/* Section 1 */}
          <section className="article-section">
            <h2 className="article-section-title">{article.paragraph1title}</h2>
            <p className="article-paragraph">{article.paragraph1}</p>
          </section>
          
          {/* Quote */}
          <blockquote className="article-quote">
            {article.bodyquote}
          </blockquote>
          
          {/* Section 2 */}
          <section className="article-section">
            <h2 className="article-section-title">{article.paragraph2title}</h2>
            <p className="article-paragraph">{article.paragraph2}</p>
          </section>
          
          {/* Body Image */}
          <figure className="article-body-image-container">
            <img 
              src={article.bodyImage} 
              alt={article.bodyImageAlt}
              className="article-body-image"
              loading="lazy"
            />
            
          </figure>
          
          {/* Section 3 */}
          <section className="article-section">
            <h2 className="article-section-title">{article.paragraph3title}</h2>
            <p className="article-paragraph">{article.paragraph3}</p>
          </section>
          
          {/* Conclusion */}
          <div className="article-conclusion">
            <h2 className="article-conclusion-title">Conclusion</h2>
            <p className="article-conclusion-text">
              {article.conclusion}
            </p>
          </div>
          
          {/* Back to Articles Button */}
          <div className="article-navigation">
            <button 
              className="back-to-articles"
              onClick={() => navigate('/explore-articles')}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M19 12H5M5 12L12 19M5 12L12 5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              Back to Articles
            </button>
          </div>
        </div>
      </article>
      
      <Footer />
      <MobileNav />
    </div>
    </>
  );
};

export default ArticlePage;