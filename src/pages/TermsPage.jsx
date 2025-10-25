// 📄 FILE: src/pages/TermsPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import '../styles/LegalPages.css';

const TermsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Terms of Use | Beverage.fyi</title>
        <link rel="canonical" href="https://beverage.fyi/terms" />
      </Helmet>
      
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

          <h1 className="legal-title">Terms of Use</h1>
          <p className="legal-updated">Last Updated: October 2025</p>

          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Beverage.fyi ("the Website"), you agree to be bound by these 
              Terms of Use and all applicable laws and regulations. If you do not agree with any 
              of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Beverage.fyi 
              for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="legal-list">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on Beverage.fyi;</li>
              <li>remove any copyright or other proprietary notations from the materials;</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and 
              may be terminated by Beverage.fyi at any time. Upon terminating your viewing of these 
              materials or upon the termination of this license, you must destroy any downloaded 
              materials in your possession whether in electronic or printed format.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Disclaimer</h2>
            <p>
              The materials on Beverage.fyi are provided "as is". Beverage.fyi makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties, including 
              without limitation, implied warranties or conditions of merchantability, fitness for a 
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              Further, Beverage.fyi does not warrant or make any representations concerning the accuracy, 
              likely results, or reliability of the use of the materials on its Internet website or 
              otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Educational Purpose</h2>
            <p>
              The information provided on Beverage.fyi is for educational and informational purposes only. 
              It is not intended to be a substitute for professional advice. Always seek the guidance of 
              qualified professionals with any questions you may have regarding beverage service, alcohol 
              laws, or health-related concerns.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Limitations</h2>
            <p>
              In no event shall Beverage.fyi or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on Beverage.fyi, even if 
              Beverage.fyi or an authorized representative has been notified orally or in writing of 
              the possibility of such damage. Because some jurisdictions do not allow limitations on 
              implied warranties, or limitations of liability for consequential or incidental damages, 
              these limitations may not apply to you.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, 
              and software, is the property of Beverage.fyi or its content suppliers and is protected 
              by international copyright laws. The compilation of all content on this site is the 
              exclusive property of Beverage.fyi and is protected by international copyright laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. User Conduct</h2>
            <p>You agree not to use the Website to:</p>
            <ul className="legal-list">
              <li>Upload or transmit viruses or any other type of malicious code;</li>
              <li>Violate any applicable laws or regulations;</li>
              <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others;</li>
              <li>Harvest or collect email addresses or other contact information from other users;</li>
              <li>Transmit spam, chain letters, or other unsolicited email;</li>
              <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Website.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Links to Third-Party Sites</h2>
            <p>
              Beverage.fyi has not reviewed all of the sites linked to its website and is not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply 
              endorsement by Beverage.fyi of the site. Use of any such linked website is at the user's 
              own risk.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Age Restrictions</h2>
            <p>
              This Website contains information about alcoholic beverages. You must be of legal drinking 
              age in your jurisdiction to access content related to alcohol. By accessing such content, 
              you confirm that you meet the legal age requirements in your location.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Modifications</h2>
            <p>
              Beverage.fyi may revise these Terms of Use at any time without notice. By using this 
              website, you are agreeing to be bound by the then current version of these Terms of Use.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of 
              the United States and you irrevocably submit to the exclusive jurisdiction of the courts 
              in that State or location.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Contact Information</h2>
            <p>
              Questions about the Terms of Use should be sent to us at{' '}
              <a href="mailto:derekengles@gmail.com" className="legal-link">derekengles@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>

      {/* Desktop Footer */}
      <div className="desktop-only">
        <Footer />
      </div>
    </div>
    </>
  );
};

export default TermsPage;