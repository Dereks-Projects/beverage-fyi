// 📄 FILE: src/pages/AboutPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutpage">

      {/* Hero Statement */}
      <section className="about-hero-statement">
        <div className="section-container">
          <h1 className="hero-statement-title">
            Your comprehensive beverage resource—whether you're studying, exploring, or serving.
          </h1>
          <p className="hero-statement-tagline">
            No paywalls. No gatekeeping. Just reliable beverage knowledge, organized the way you need it.
          </p>
        </div>
      </section>

      {/* Platform Section */}
      <section className="about-platform">
        <div className="section-container">
          <h2 className="section-title">More Than Just a Website—It's a Complete System</h2>
          <div className="platform-content">
            <p className="platform-text">
              Beverage.fyi isn't a blog or a collection of articles. It's a knowledge platform built 
              from the ground up to help you find beverage information quickly and reliably—whether 
              you're verifying a cocktail spec during service, researching an unfamiliar wine region, 
              studying for a certification exam, or exploring a spirit you enjoyed at a restaurant.
            </p>
            <p className="platform-text">
              Every feature was designed around how people actually search for beverage information: 
              instant search for terminology, wine recommendations organized by real scenarios, verified 
              cocktail specifications, and articles that go deeper than surface-level content.
            </p>
            <div className="platform-features">
              <div className="platform-feature-item">
                <span className="feature-icon">✓</span>
                <span>Comprehensive terminology database with practical definitions</span>
              </div>
              <div className="platform-feature-item">
                <span className="feature-icon">✓</span>
                <span>Wine recommendations organized by food, occasion, and budget</span>
              </div>
              <div className="platform-feature-item">
                <span className="feature-icon">✓</span>
                <span>Accurate cocktail specifications with historical context</span>
              </div>
              <div className="platform-feature-item">
                <span className="feature-icon">✓</span>
                <span>In-depth articles on regions, techniques, and industry topics</span>
              </div>
              <div className="platform-feature-item">
                <span className="feature-icon">✓</span>
                <span>Zero paywalls, zero ads—just information you can trust</span>
              </div>
            </div>
            <p className="platform-text-emphasis">
              Whether you're a curious enthusiast, a home bartender, a hospitality professional, 
              or studying for your sommelier certification—this resource is for you.
            </p>
          </div>
        </div>
      </section>

      {/* Why I Built This */}
      <section className="about-why">
        <div className="section-container">
          <h2 className="section-title">Why I Built This</h2>
          <div className="why-content">
            <p className="why-text">
              After two decades in the beverage industry, I've been fortunate to learn from incredible 
              mentors, work alongside talented professionals, and serve guests who genuinely cared about 
              what they were drinking. This industry has given me so much—knowledge, experiences, and a 
              career I'm grateful for.
            </p>
            <p className="why-text">
              But I kept noticing the same frustrations: professionals spending time hunting for basic 
              information that should be instantly accessible. Students paying for multiple subscriptions 
              just to study. Enthusiasts hitting paywalls when trying to learn more about a wine or spirit 
              they enjoyed.
            </p>
            <p className="why-text">
              I wanted to create something different—a comprehensive resource that's free, reliable, and 
              organized around how people actually search for information. No gatekeeping. No premium tiers. 
              Just the knowledge that should be accessible to anyone interested in beverages.
            </p>
            <p className="why-text-final">
              This is my way of giving back to a community and industry that's given me a career and 
              countless opportunities to learn and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="about-creator">
        <div className="section-container">
          <h2 className="section-title">A Hospitality Professional Turned Technology Creator</h2>
          <div className="creator-content">
            <div className="creator-image">
              <img src="/founder.png" alt="Derek Engles" />
            </div>
            <div className="creator-text-content">
              <p className="creator-bio">
                I'm Derek Engles, and I've spent the last 20 years working in hospitality—serving guests, 
                managing beverage programs, and training teams at restaurants, hotels, and Fortune 500 companies. 
                Along the way, I became a certified sommelier and had the privilege of learning from some of 
                the best professionals in the industry.
              </p>
              <p className="creator-bio">
                A few years ago, I started learning to code. Not because I wanted to change careers, but 
                because I wanted to build something useful for the beverage community. Beverage.fyi is the 
                result of that journey—I designed it, wrote the code, and filled it with insights from my 
                years of professional experience.
              </p>
              <p className="creator-bio">
                I also wrote <em>The Beverage Compass</em>, a comprehensive guidebook covering wine regions, 
                spirit production, cocktail history, and service techniques. The book is available now on 
                Amazon Kindle, and I'm working on integrating its content directly into this platform so 
                everything is in one place.
              </p>
              <p className="creator-bio">
                Building this platform has been a learning experience in itself—combining what I know about 
                beverages with what I've learned about technology. It's not perfect, but it's built with care, 
                and it gets better as I continue to develop new features and add more content.
              </p>
              <p className="creator-bio-emphasis">
                If you have feedback, suggestions, or just want to say hello, I'd love to hear from you. 
                This project exists because of the beverage community, and I want it to serve that community well.
              </p>
              <div className="creator-cta">
                <button 
                  className="btn-dark"
                  onClick={() => window.open('https://www.amazon.com/dp/B0FQD4X2JT', '_blank')}
                >
                  The Beverage Compass
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

      {/* What You Get Section */}
      <section className="about-features">
        <div className="section-container">
          <h2 className="section-title">What You'll Find Here</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">Terminology Database</h3>
              <p className="feature-description">
                Comprehensive definitions written from practical experience—not just dictionary 
                definitions, but explanations that help you understand how terms are actually used 
                in the industry.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Wine Recommendations</h3>
              <p className="feature-description">
                Organized by food pairings, occasions, and budgets—the way you actually shop for wine. 
                Straightforward recommendations without pretentious tasting notes.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Cocktail Library</h3>
              <p className="feature-description">
                Classic specifications, modern variations, and historical context. Proportions are 
                verified and accurate, perfect for reference during service or studying recipes.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Industry Articles</h3>
              <p className="feature-description">
                In-depth coverage of wine regions, production methods, service techniques, and industry 
                topics—written for people who want more than surface-level information.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Fast & Reliable</h3>
              <p className="feature-description">
                Built with performance in mind. Instant search, optimized loading, and a clean interface 
                that respects your time—especially important when you need information quickly.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Always Free</h3>
              <p className="feature-description">
                No premium tiers. No paywalls. No "sign up to continue." If it's on this site, it's 
                freely accessible to everyone. That's not changing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Built to Serve the Beverage Community</h2>
            <p className="cta-text">
              This isn't a corporate product managed by a committee. It's a professional tool built 
              by a professional, thoughtfully designed to help anyone interested in beverages—from 
              curious enthusiasts to working sommeliers.
            </p>
            <p className="cta-text">
              The platform works well right now, and it continues to improve every week as I add new 
              features, expand the database, and refine the user experience based on feedback from people 
              like you.
            </p>
            <p className="cta-text-emphasis">
              Whether you're here to study, explore, or just find quick answers—I hope this resource 
              proves useful. And if you have suggestions or feedback, I'm always listening.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn-primary"
                onClick={() => navigate('/terminology')}
              >
                Explore the Database
              </button>
              <button 
                className="btn-secondary"
                onClick={() => window.location.href = 'mailto:derekengles@gmail.com'}
              >
                Send Feedback
              </button>
            </div>
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