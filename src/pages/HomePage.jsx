// 📄 FILE: src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  const scrollToSection2 = () => {
    document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      {/* SECTION 1 - Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src="/beverage-logo-white.svg" alt="Beverage.fyi Logo" className="hero-logo" />
          <h1 className="hero-title">
            <span className="hero-title-small">Welcome to</span>
            <span className="hero-title-main"> Beverage.fyi</span>
          </h1>
          <h3 className="hero-subtitle">A dedicated resource for beverage professionals & enthusiasts.</h3>
          
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => navigate('/terminology')}
            >
              Enter the Site
            </button>
            <button 
              className="btn-secondary"
              onClick={scrollToSection2}
            >
              About the Book
            </button>
          </div>
          <p className="scroll-hint">
            Scroll down for more about our book, <br/> <span className="book-name">The Beverage Compass</span>.
          </p>
        </div>
      </section>

      {/* SECTION 2 - Book Section */}
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
                intimidating wine lists, mysterious spirits, and complex coffee culture into accessible, engaging education.
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

      {/* SECTION 3 - About Section */}
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
                of beverages around the world to new heights.
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

      {/* FOOTER */}
      <footer className="homepage-footer">
        <a href="/about" className="footer-link">
          Copyright 2025 · All Rights Reserved
        </a>
      </footer>
    </div>
  );
}