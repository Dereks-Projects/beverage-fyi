// 📄 FILE: src/pages/HomePageNew.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ArticleCarousel from "../components/ArticleCarousel";
import "../styles/HomePage.css";

export default function HomePageNew() {
  const navigate = useNavigate();

  const scrollToOpportunity = () => {
    document.getElementById('opportunity').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage-new">
      {/* SECTION 1 - Hero Section (keeping existing) */}
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
              We take your knowledge to new heights.
            </h1>

            {/* Description Paragraph */}
            <p className="hero-description">
              Master beverage knowledge through our detailed articles, comprehensive terminology database, 
              personalized wine recommendations, and curated cocktail suggestions.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <button 
                className="hero-button hero-button-primary"
                onClick={scrollToOpportunity}
              >
                Learn More
              </button>
              <button 
                className="hero-button hero-button-secondary"
                onClick={() => navigate('/explore-articles')}
              >
                Explore the Site
              </button>
            </div>

            {/* Tagline */}
            <p className="hero-tagline">
              Scroll down for more ways to learn about the world of beverages.
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

      {/* SECTION 2 - The Opportunity (Reframed) */}
      <section id="opportunity" className="opportunity-section">
        <div className="section-container">
          <div className="opportunity-content">
            <h2 className="section-title">Every venue's success hinges on beverage expertise</h2>
            <p className="section-subtitle">
              Restaurants, bars, and hospitality businesses thrive when their teams have instant access 
              to accurate, current beverage knowledge. Traditional training is expensive, inconsistent, 
              and outdated the moment it's printed.
            </p>
            <div className="opportunity-points">
              <div className="opportunity-point">
                <span className="opportunity-icon">💰</span>
                <h3>Revenue Driver</h3>
                <p>Beverages represent 30-40% of restaurant revenue</p>
              </div>
              <div className="opportunity-point">
                <span className="opportunity-icon">📈</span>
                <h3>Competitive Edge</h3>
                <p>Knowledgeable staff increase check averages by 23%</p>
              </div>
              <div className="opportunity-point">
                <span className="opportunity-icon">⭐</span>
                <h3>Team Confidence</h3>
                <p>Instant answers build expertise across all experience levels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Platform Features (Clean) */}
      <section className="platform-section">
        <div className="section-container">
          <div className="platform-content">
            <h2 className="section-title">Everything you need to master beverage knowledge</h2>
            <p className="section-subtitle">
              Where industry expertise meets instant accessibility for every level of learning.
            </p>
            <div className="platform-grid">
              <div className="platform-card">
                <div className="platform-icon">📖</div>
                <h3 className="platform-title">A-Z Terminology</h3>
                <p className="platform-description">
                  Comprehensive database of beverage terms and definitions
                </p>
                <button 
                  className="platform-link"
                  onClick={() => navigate('/terminology')}
                >
                  Explore Terms →
                </button>
              </div>
              <div className="platform-card">
                <div className="platform-icon">📚</div>
                <h3 className="platform-title">Expert Articles</h3>
                <p className="platform-description">
                  In-depth guides on wine, spirits, beer, and emerging categories
                </p>
                <button 
                  className="platform-link"
                  onClick={() => navigate('/explore-articles')}
                >
                  Read Articles →
                </button>
              </div>
              <div className="platform-card">
                <div className="platform-icon">🍷</div>
                <h3 className="platform-title">Wine & Cocktails</h3>
                <p className="platform-description">
                  Smart recommendations and classic recipes at your fingertips
                </p>
                <button 
                  className="platform-link"
                  onClick={() => navigate('/wine-recommendations')}
                >
                  Get Started →
                </button>
              </div>
              <div className="platform-card platform-coming-soon">
                <div className="platform-icon">📱</div>
                <h3 className="platform-title">The Beverage Compass</h3>
                <p className="platform-description">
                  Complete guide coming soon to the platform
                </p>
                <span className="coming-badge">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Value Proposition */}
      <section className="value-section">
        <div className="section-container">
          <div className="value-content">
            <h2 className="value-title">
              Transform your beverage IQ in real-time
            </h2>
            <p className="value-subtitle">
              The beverage industry rewards expertise. Make knowledge your competitive advantage.
            </p>
            <div className="value-boxes">
              <div className="value-box">
                <span className="value-icon">🎯</span>
                <div className="value-text">
                  <h3>Profit Center</h3>
                  <p>Beverage expertise drives 35% of hospitality profits—make it your advantage</p>
                </div>
              </div>
              <div className="value-box">
                <span className="value-icon">🚀</span>
                <div className="value-text">
                  <h3>Accessible Excellence</h3>
                  <p>From novice to expert—accessible knowledge for every level</p>
                </div>
              </div>
              <div className="value-box">
                <span className="value-icon">🔓</span>
                <div className="value-text">
                  <h3>No Gatekeeping</h3>
                  <p>The industry's most comprehensive resource, free from barriers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - Fresh Perspectives (Articles) */}
      <section className="perspectives-section">
        <div className="section-container">
          <div className="perspectives-header">
            <h2 className="section-title">Fresh Perspectives</h2>
            <p className="section-subtitle">
              Clear insights on complex topics. Cutting through complexity with actionable beverage knowledge you can use today.
            </p>
          </div>
          <ArticleCarousel />
          <div className="perspectives-footer">
            <button 
              className="btn-outline"
              onClick={() => navigate('/explore-articles')}
            >
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6 - About/Vision (Humble) */}
      <section className="vision-section">
        <div className="section-container">
          <div className="vision-content">
            <div className="vision-image">
              <img src="/founder.png" alt="Derek Engles" />
            </div>
            <div className="vision-text">
              <h2 className="vision-title">Built with purpose</h2>
              <p className="vision-description">
                After two decades in hospitality, I built Beverage.fyi to solve a simple problem: 
                professionals need instant access to reliable beverage knowledge. This platform 
                represents everything I've learned, organized the way working professionals actually need it.
              </p>
              <p className="vision-description">
                The Beverage Compass book and this platform work together as a complete system—one 
                you can trust because it's built from real experience, not theory.
              </p>
              <div className="vision-buttons">
                <button 
                  className="btn-dark"
                  onClick={() => navigate('/terminology')}
                >
                  Enter the Site
                </button>
                <button 
                  className="btn-dark-outline"
                  onClick={() => window.location.href = 'mailto:derekengles@gmail.com'}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - CTA */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Start exploring</h2>
            <p className="cta-subtitle">
              Explore the site and see how we can positively impact your beverage knowledge today.
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
                onClick={() => window.location.href = 'mailto:derekengles@gmail.com'}
              >
                Connect with Derek
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - Footer */}
      <footer className="hp-footer">
        <div className="hp-footer-container">
          <div className="hp-footer-content">
            <p className="hp-footer-tagline">A Trusted Resource for Beverage Professionals</p>
            <div className="hp-footer-links">
              <a href="/about">About</a>
              <span className="hp-footer-separator">•</span>
              <a href="/terms">Terms of Use</a>
              <span className="hp-footer-separator">•</span>
              <a href="/privacy">Privacy Policy</a>
            </div>
            <p className="hp-footer-copyright">© 2025 Beverage.fyi. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}