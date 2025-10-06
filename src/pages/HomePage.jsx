// 📄 FILE: src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  const scrollToStats = () => {
    document.getElementById('stats').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      {/* SECTION 1 - Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content-wrapper">
            {/* Logo and Site Title */}
            <div className="hero-brand">
              <img src="/beverage-logo-landingpage.svg" alt="Beverage.fyi" className="hero-brand-logo" />
              <span className="hero-brand-title">Beverage.fyi</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-main-title">
              We take your beverage knowledge to new heights.
            </h1>

            {/* Description Paragraph - UPDATED */}
            <p className="hero-description">
              Master beverage knowledge through our comprehensive terminology database, 
              personalized wine recommendations, and curated cocktail suggestions—<br/>all in one platform.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <button 
                className="hero-button hero-button-primary"
                onClick={scrollToStats}
              >
                Learn More
              </button>
              <button 
                className="hero-button hero-button-secondary"
                onClick={() => navigate('/terminology')}
              >
                Explore the Site
              </button>
            </div>

            {/* Tagline - Now for both mobile and desktop */}
            <p className="hero-tagline">
              This site is best paired with The Beverage Compass, available on Amazon Kindle.
            </p>

            {/* Video Player - Mobile Position */}
            <div className="hero-video-mobile">
              <div className="hero-video-wrapper">
                <iframe 
                  src="https://player.vimeo.com/video/1124882783?h=c083a41084"
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  allow="fullscreen; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Video Player - Desktop Position */}
          <div className="hero-video-desktop">
            <div className="hero-video-wrapper">
              <iframe 
                src="https://player.vimeo.com/video/1124882783?h=c083a41084"
                width="100%" 
                height="100%" 
                frameBorder="0"
                allow="fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - The Problem */}
      <section className="problem-section">
        <div className="section-container">
          <div className="problem-content">
            <h2 className="section-title">The beverage world is vast and intimidating</h2>
            <p className="section-subtitle">
              From wine varietals to cocktail terminology, the world of beverages can feel overwhelming. 
              Traditional resources are scattered, outdated, or locked behind expensive certifications.
            </p>
            <div className="problem-points">
              <div className="problem-point">
                <span className="problem-icon">🤔</span>
                <h3>Confusing Jargon</h3>
                <p>Industry terms and technical language create barriers to understanding</p>
              </div>
              <div className="problem-point">
                <span className="problem-icon">📚</span>
                <h3>Scattered Resources</h3>
                <p>Information lives in countless books, websites, and courses</p>
              </div>
              <div className="problem-point">
                <span className="problem-icon">💰</span>
                <h3>Expensive Education</h3>
                <p>Professional beverage education costs thousands of dollars</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - The Solution */}
      <section className="solution-section">
        <div className="section-container">
          <div className="solution-content">
            <h2 className="section-title">Your complete beverage education platform</h2>
            <p className="section-subtitle">
              We've built the tools and resources you need to master the world of beverages, 
              all in one accessible platform.
            </p>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">📖</div>
                <h3 className="feature-title">A-Z Terminology Database</h3>
                <p className="feature-description">
                  Comprehensive definitions for thousands of beverage terms, from Absinthe to Zinfandel
                </p>
                <button 
                  className="feature-link"
                  onClick={() => navigate('/terminology')}
                >
                  Explore Terms →
                </button>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🍷</div>
                <h3 className="feature-title">Wine Recommendation Engine</h3>
                <p className="feature-description">
                  Get personalized wine suggestions based on your preferences and food pairings
                </p>
                <button 
                  className="feature-link"
                  onClick={() => navigate('/wine-recommendations')}
                >
                  Find Wines →
                </button>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🍸</div>
                <h3 className="feature-title">Cocktail Suggestion System</h3>
                <p className="feature-description">
                  Discover classic and modern cocktails with recipes and preparation techniques
                </p>
                <button 
                  className="feature-link"
                  onClick={() => navigate('/cocktails')}
                >
                  Mix Cocktails →
                </button>
              </div>
              <div className="feature-card coming-soon">
                <div className="feature-icon">📱</div>
                <h3 className="feature-title">Coming Soon: Integrated Book</h3>
                <p className="feature-description">
                  The Beverage Compass will be available directly within the platform
                </p>
                <span className="coming-badge">In Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Stats/Impact Section */}
      <section id="stats" className="stats-section">
        <div className="section-container">
          <div className="stats-header">
            <h2 className="stats-title">
              Transform Your Knowledge About the <span className="bold-text">World of Beverages</span>
            </h2>
            <p className="stats-subtitle">
              The beverage industry isn't just massive—it's a gateway to culture, hospitality, and human connection. 
              Understanding beverages opens doors to new experiences and opportunities.
            </p>
          </div>

          <div className="stats-boxes">
            <div className="stat-box">
              <span className="stat-icon">💵</span>
              <div className="stat-content">
                <h3 className="stat-label">GLOBAL IMPACT</h3>
                <p className="stat-text">
                  The global beverage market reached $2.41 trillion in 2024—knowledge here has real value
                </p>
              </div>
            </div>

            <div className="stat-box">
              <span className="stat-icon">🍷</span>
              <div className="stat-content">
                <h3 className="stat-label">CAREER ADVANTAGE</h3>
                <p className="stat-text">
                  Beverage-savvy professionals earn 30% more in hospitality and service industries
                </p>
              </div>
            </div>

            <div className="stat-box">
              <span className="stat-icon">🌍</span>
              <div className="stat-content">
                <h3 className="stat-label">CULTURAL CONNECTION</h3>
                <p className="stat-text">
                  62% of travelers say local beverage knowledge enhances their travel experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - Book Section */}
      <section className="book-section">
        <div className="section-container">
          <div className="book-content">
            <div className="book-text">
              <h2 className="book-title">Don't Wait—Start Reading Today</h2>
              <h4 className="book-subtitle">The Beverage Compass: A Modern Guide to the World of Drinks</h4>
              <p className="book-description">
                While we work on integrating The Beverage Compass directly into our platform, you can start your 
                journey today. Written by a 20-year veteran of America's finest restaurants, this comprehensive 
                guide breaks down barriers and transforms intimidating beverage knowledge into accessible, 
                engaging education.
              </p>
              <div className="book-buttons">
                <button 
                  className="btn-dark"
                  onClick={() => window.open('https://www.amazon.com/dp/B0FQD4X2JT', '_blank')}
                >
                  Get It on Amazon
                </button>
                <button 
                  className="btn-dark-outline"
                  onClick={() => navigate('/terminology')}
                >
                  Explore the Platform
                </button>
              </div>
            </div>
            <div className="book-image">
              <img src="/beverage-book.png" alt="The Beverage Compass Book Cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - About Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-image">
              <img src="/founder.png" alt="Derek Engles" />
            </div>
            <div className="about-text">
              <h2 className="about-title">A lifelong sommelier & educator.</h2>
              <p className="about-description">
                For over two decades, I've worked in hospitality, serving more than 200,000 guests and leading teams across 
                award-winning restaurants and resorts. I've spent more than 30,000 hours as a sommelier and wine director, 
                developing training programs for Fortune 500 companies and Michelin-starred establishments.
              </p>
              <p className="about-description">
                The Beverage Compass, alongside Beverage.fyi, creates an ecosystem of learning that brings your understanding 
                of beverages around the world to new heights. Questions, comments, or collaborations? I'd love to hear from you!
              </p>
              <div className="about-buttons">
                <button 
                  className="btn-dark"
                  onClick={() => window.location.href = 'mailto:derekengles@gmail.com'}
                >
                  Contact Derek
                </button>
                <button 
                  className="btn-dark-outline"
                  onClick={() => navigate('/about')}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - Final CTA */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to elevate your beverage knowledge?</h2>
            <p className="cta-subtitle">
              Join thousands of professionals and enthusiasts mastering the world of beverages.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn-primary-large"
                onClick={() => navigate('/terminology')}
              >
                Explore the Platform
              </button>
              <button 
                className="btn-secondary-large"
                onClick={() => window.open('https://www.amazon.com/dp/B0FQD4X2JT', '_blank')}
              >
                Get the Book
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - Footer */}
      <footer className="homepage-footer">
        <a href="/about" className="footer-link">
          Copyright 2025 · All Rights Reserved
        </a>
      </footer>
    </div>
  );
}