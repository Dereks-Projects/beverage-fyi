// 📄 FILE: src/pages/HomePage.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();
  const vimeoRef = useRef(null);

  const scrollToStats = () => {
    document.getElementById('stats').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Create Vimeo iframe with autoplay
    if (vimeoRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = "https://player.vimeo.com/video/1124882783?h=c083a41084&autoplay=1&loop=1&muted=1&background=1";
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.frameBorder = "0";
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.style.position = "absolute";
      iframe.style.top = "0";
      iframe.style.left = "0";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      
      vimeoRef.current.appendChild(iframe);
    }
  }, []);

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

            {/* Description Paragraph */}
            <p className="hero-description">
              Beverage.fyi is a learning portal that covers the entire world of beverages. 
              From key terms to wine pairing to cocktail recommendations, we have you covered.
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

            {/* Video Player - Mobile Position */}
            <div className="hero-video-mobile">
              <div className="hero-video-wrapper" ref={vimeoRef}></div>
            </div>

            {/* Tagline - Mobile Only */}
            <p className="hero-tagline">
              This site is best paired with The Beverage Compass, available on Amazon Kindle. 
              Scroll down to learn more about this powerful book & web application combo.
            </p>
          </div>

          {/* Video Player - Desktop Position */}
          <div className="hero-video-desktop">
            <div className="hero-video-wrapper" ref={vimeoRef}></div>
          </div>
        </div>
      </section>

      {/* REST OF YOUR SECTIONS REMAIN UNCHANGED */}
      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <div className="section-container">
          <div className="stats-header">
            <h2 className="stats-title">
              Transform Your Knowledge About the <span className="bold-text">World of Beverages</span>
            </h2>
            <p className="stats-subtitle">
              Our web application and book combination elevate your understanding of beverages from around the world, from Absinthe to Zinfandel.
            </p>
          </div>

          <div className="stats-boxes">
            <div className="stat-box">
              <span className="stat-icon">💵</span>
              <div className="stat-content">
                <h3 className="stat-label">GLOBAL IMPACT</h3>
                <p className="stat-text">
                  In 2024, the global alcoholic beverages market was estimated at about USD $2.41 trillion.
                </p>
              </div>
            </div>

            <div className="stat-box">
              <span className="stat-icon">🍷</span>
              <div className="stat-content">
                <h3 className="stat-label">HOSPITALITY IMPACT</h3>
                <p className="stat-text">
                  Restaurants with curated beverage menus report 30% higher revenue compared to those without.
                </p>
              </div>
            </div>
          </div>

          <p className="stats-quote">
            <em>According to a Travel Agent Central survey, 62% of travelers feel a trip is wasted if they don't experience the local culture during their travels.</em>
          </p>
        </div>
      </section>

      {/* Book Section */}
      <section id="section2" className="book-section">
        <div className="section-container">
          <div className="book-content">
            <div className="book-text">
              <h2 className="book-title">The Beverage Compass</h2>
              <h4 className="book-subtitle">A Modern Guide to the World of Drinks</h4>
              <p className="book-description">
                Finally, a beverage guide that speaks to everyone, from curious enthusiasts to seasoned professionals.
                Written by a 20-year veteran of America's finest restaurants, The Beverage Compass breaks down the 
                barriers that have kept beverage knowledge locked behind industry doors. This comprehensive guide transforms 
                intimidating wine lists, mysterious spirits, and complex coffee culture into accessible, engaging education. Follow the link below to purchase your copy today!
              </p>
              <div className="book-buttons">
                <button 
                  className="btn-dark"
                  onClick={() => window.open('https://www.amazon.com/dp/B0FQD4X2JT', '_blank')}
                >
                  Buy the Book
                </button>
                <button 
                  className="btn-dark-outline"
                  onClick={() => navigate('/terminology')}
                >
                  Enter the Site
                </button>
              </div>
            </div>
            <div className="book-image">
              <img src="/beverage-book.png" alt="The Beverage Compass Book Cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                  onClick={() => navigate('/terminology')}
                >
                  Enter the Site
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="homepage-footer">
        <a href="/about" className="footer-link">
          Copyright 2025 · All Rights Reserved
        </a>
      </footer>
    </div>
  );
}