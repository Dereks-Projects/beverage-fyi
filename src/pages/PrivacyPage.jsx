// 📄 FILE: src/pages/PrivacyPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../components/Footer';
import '../styles/LegalPages.css';

const PrivacyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="legal-page">


      <main className="legal-content">
        <div className="legal-container">
          <button 
            className="back-button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            ← Back
          </button>

          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last Updated: October 2025</p>

          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Beverage.fyi ("we," "our," or "us") respects your privacy and is committed to protecting 
              your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you visit our website Beverage.fyi. Please read this privacy policy 
              carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            
            <h3>Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, and contact information 
              that you voluntarily give to us when you choose to participate in various activities related 
              to the Website, such as contacting us via email or subscribing to newsletters.
            </p>

            <h3>Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the Website, such as your IP 
              address, your browser type, your operating system, your access times, and the pages you have 
              viewed directly before and after accessing the Website.
            </p>

            <h3>Financial Data</h3>
            <p>
              We do not collect or store any financial information. All transactions related to book 
              purchases are processed through third-party platforms (such as Amazon) and are subject 
              to their privacy policies.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you to:</p>
            <ul className="legal-list">
              <li>Compile anonymous statistical data and analysis for use internally;</li>
              <li>Deliver targeted advertising, newsletters, and other information regarding our website to you;</li>
              <li>Email you regarding your inquiry;</li>
              <li>Improve the content and features of our Website;</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Website;</li>
              <li>Notify you of updates to our Website;</li>
              <li>Respond to product and customer service requests;</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations:</p>
            
            <h3>By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, 
              to investigate or remedy potential violations of our policies, or to protect the rights, 
              property, and safety of others, we may share your information as permitted or required by 
              applicable law, rule, or regulation.
            </p>

            <h3>Business Transfers</h3>
            <p>
              We may share or transfer your information in connection with, or during negotiations of, 
              any merger, sale of company assets, financing, or acquisition of all or a portion of our 
              business to another company.
            </p>

            <h3>Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our 
              behalf, including data analysis, email delivery, hosting services, customer service, and 
              marketing assistance.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Tracking Technologies</h2>
            
            <h3>Cookies and Web Beacons</h3>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on the 
              Website to help customize the Website and improve your experience. When you access the Website, 
              your personal information is not collected through the use of tracking technology. Most browsers 
              are set to accept cookies by default. You can remove or reject cookies, but be aware that such 
              action could affect the availability and functionality of the Website.
            </p>

            <h3>Internet-Based Advertising</h3>
            <p>
              We may use third-party software to serve ads on the Website, implement email marketing campaigns, 
              and manage other interactive marketing initiatives. This third-party software may use cookies or 
              similar tracking technology to help manage and optimize your online experience with us.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal 
              information. While we have taken reasonable steps to secure the personal information you provide 
              to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, 
              and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Policy for Children</h2>
            <p>
              We do not knowingly solicit information from or market to children under the age of 13. If we 
              learn that we have collected information from a child under age 13 without verification of 
              parental consent, we will delete that information as quickly as possible. If you believe we 
              might have any information from or about a child under 13, please contact us.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="legal-list">
              <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
              <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. California Privacy Rights</h2>
            <p>
              California residents have specific rights under the California Consumer Privacy Act (CCPA). 
              These rights include the right to know what personal information is being collected, the right 
              to know whether personal information is sold or disclosed and to whom, the right to say no to 
              the sale of personal information, the right to access personal information, and the right to 
              equal service and price, even for consumers who exercise their privacy rights.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Do Not Track Signals</h2>
            <p>
              We do not currently respond to "do not track" signals or other mechanisms that might enable 
              you to opt out of tracking on our website.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Third-Party Websites</h2>
            <p>
              The Website may contain links to third-party websites and applications of interest. Once you 
              use these links to leave our site, we do not have control over the privacy practices of these 
              other sites. We encourage you to be aware when you leave our site and to read the privacy 
              statements of each and every website that collects personally identifiable information.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time in order to reflect changes to our practices 
              or for other operational, legal, or regulatory reasons. The updated version will be indicated by 
              an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Beverage.fyi</strong><br />
              Email: <a href="mailto:derekengles@gmail.com" className="legal-link">derekengles@gmail.com</a>
            </p>
          </section>
        </div>
      </main>

      {/* Desktop Footer */}
      <div className="desktop-only">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPage;