// 📄 FILE: src/pages/ExploreArticles.jsx
// PURPOSE: Main articles listing page with featured article, category filter, and article grid
// This is the hub page for all article content

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles, getCategories, getFeaturedArticle } from '../data/articleData';
import '../styles/ExploreArticles.css';

const ARTICLES_PER_PAGE = 6; // 2 rows of 3 cards

const ExploreArticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArticles, setFilteredArticles] = useState([]);
  
  const allArticles = getAllArticles();
  const featuredArticle = getFeaturedArticle();
  const categories = ['all', ...getCategories()];
  
  // Filter articles based on selected category
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
    
    // Filter articles (exclude featured from grid)
    const articlesToShow = allArticles.slice(1); // Remove featured article
    
    if (selectedCategory === 'all') {
      setFilteredArticles(articlesToShow);
    } else {
      setFilteredArticles(
        articlesToShow.filter(article => 
          article.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    }
    
    // Reset to first page when category changes
    setCurrentPage(1);
  }, [selectedCategory, searchParams]);
  
  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };
  
  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);
  
  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <>
      <Helmet>
        <title>Explore Beverage Articles | Beverage.fyi</title>
        <link rel="canonical" href="https://beverage.fyi/explore-articles" />
      </Helmet>
      
      <div className="explore-articles-page">
        
        
        <main className="explore-articles-container">
          {/* Page Title */}
          <div className="explore-articles-header">
            <h1 className="explore-articles-title">
              Explore the World of Beverages
            </h1>
            
            {/* Category Filter */}
            <div className="category-filter-container">
              <div className="category-filter">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={selectedCategory === category}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Featured Article */}
          {selectedCategory === 'all' && featuredArticle && (
            <FeaturedArticle article={featuredArticle} />
          )}
          
          {/* Articles Grid */}
          {currentArticles.length > 0 ? (
            <>
              <div className="articles-grid">
                {currentArticles.map((article) => (
                  <ArticleCard 
                    key={article.title} 
                    article={article} 
                  />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination-container">
                  <div className="pagination-dots">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i + 1}
                        className={`pagination-dot ${currentPage === i + 1 ? 'active' : ''}`}
                        onClick={() => setCurrentPage(i + 1)}
                        aria-label={`Go to page ${i + 1}`}
                        aria-current={currentPage === i + 1 ? 'page' : undefined}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="no-articles">
              <p>No articles found in this category.</p>
            </div>
          )}
        </main>
        
        <Footer />
        <MobileNav />
      </div>
    </>
  );
};

export default ExploreArticles;