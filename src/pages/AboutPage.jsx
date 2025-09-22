// 📄 FILE: src/pages/AboutPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutpage">

      {/* Mission Section */}
      <section className="about-mission">
        <div className="section-container">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              Beverage.fyi exists to democratize beverage knowledge. For too long, the intricacies of wine, 
              spirits, and cocktails have been locked behind industry doors. We're changing that by creating 
              accessible, professional-grade resources for everyone from curious enthusiasts to seasoned sommeliers.
            </p>
            <p className="mission-text">
              Whether you're a bartender perfecting your craft, a restaurant owner building a wine program, 
              or simply someone who appreciates a well-made cocktail, Beverage.fyi is your comprehensive 
              reference guide to the world of beverages.
            </p>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="about-creator">
        <div className="section-container">
          <div className="creator-content">
            <div className="creator-image">
              <img src="/founder.png" alt="Derek Engles" />
            </div>
            <div className="creator-text-content">
              <h2 className="section-title">Meet Derek Engles</h2>
              <p className="creator-bio">
                With over two decades in hospitality, Derek has served more than 200,000 guests and led 
                beverage programs at award-winning establishments across the country. As a certified sommelier 
                with 30,000+ hours of experience, he's developed training programs for Fortune 500 companies 
                and Michelin-starred restaurants.
              </p>
              <p className="creator-bio">
                Derek's passion for education led to the creation of <em>The Beverage Compass</em>, a comprehensive 
                guidebook that breaks down complex beverage knowledge into accessible, engaging content. Combined 
                with Beverage.fyi, these resources create a complete ecosystem for beverage education.
              </p>
              <div className="creator-cta">
                <button 
                  className="btn-dark"
                  onClick={() => window.open('https://www.amazon.com/dp/B0FQD4X2JT', '_blank')}
                >
                  Get The Book on Amazon
                </button>
                <button 
                  className="btn-dark-outline"
                  onClick={() => window.location.href = 'mailto:derekengles@gmail.com'}
                >
                  Contact Derek
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <div className="section-container">
          <h2 className="section-title center">What You'll Find Here</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">Terminology</h3>
              <p className="feature-description">
                Comprehensive A-Z glossary of beverage terms, from basic to advanced, 
                ensuring you never encounter an unfamiliar term again.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Wine Recommendations</h3>
              <p className="feature-description">
                Curated selections organized by style, occasion, and food pairings 
                to help you make confident choices every time.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Professional Resources</h3>
              <p className="feature-description">
                Industry-standard information trusted by beverage directors 
                at hotels, airlines, and restaurants worldwide.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">The Beverage Compass</h3>
              <p className="feature-description">
                Our companion textbook provides deep dives into wine regions, 
                spirit production, and cocktail history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Notice */}
      <section className="about-beta">
        <div className="section-container">
          <div className="beta-content">
            <h2 className="beta-title">This is Just the Beginning</h2>
            <p className="beta-text">
              You're experiencing the beta version of Beverage.fyi. We're constantly adding new features, 
              expanding our database, and refining the user experience based on feedback from professionals 
              like you. Join us as we build the future of beverage education.
            </p>
            <button 
              className="btn-primary"
              onClick={() => navigate('/terminology')}
            >
              Start Exploring
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="about-footer">
        <div className="section-container">
          <div className="legal-links">
            <a href="/privacy" className="legal-link">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="/terms" className="legal-link">Terms of Use</a>
            
          </div>
        </div>
      </section>

      {/* Desktop Footer */}
      <div className="desktop-only">
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;