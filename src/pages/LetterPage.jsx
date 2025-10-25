import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header"; // Header is global, but we'll keep the import for clarity
import TermList from "../components/TermList";
import Footer from "../components/Footer";
import "../styles/LetterPage.css"; // mobile styles (unchanged)

function capitalize(ltr) {
  return (ltr && typeof ltr === "string") ? ltr[0].toUpperCase() : "";
}

export default function LetterPage() {
  const { letter } = useParams();
  const navigate = useNavigate();

  const [terms, setTerms] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const cap = capitalize(letter);

  useEffect(() => {
    setLoading(true);
    import(`../data/${cap}.json`)
      .then((module) => {
        setTerms(module.default || []);
        setLoading(false);
      })
      .catch(() => {
        setTerms([]);
        setLoading(false);
      });
  }, [letter]);

  const filteredTerms = search
    ? terms.filter((item) =>
        item.term.toLowerCase().includes(search.toLowerCase())
      )
    : terms;

  return (
    <>
      <Helmet>
        <title>Terms Starting with {cap} | Beverage.fyi</title>
        <link rel="canonical" href={`https://beverage.fyi/letter/${letter}`} />
      </Helmet>
      
      <div className="letter-page-wrapper">
        {/* ====================== MOBILE (UNCHANGED) ====================== */}
        {/* Keep your current mobile markup exactly as-is; we just wrap it so it hides on desktop */}
        <div className="hide-on-desktop">
          <div className="letter-page">
            <h2 className="letter-heading">Terms starting with "{cap}"</h2>

            <div className="letter-searchbar">
              <input
                type="text"
                className="letter-search-input"
                placeholder="Search terms…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {loading ? (
              <div className="letter-loading">Loading…</div>
            ) : (
              <TermList terms={filteredTerms} letter={cap} />
            )}

            <button
              className="letter-back-btn"
              type="button"
              onClick={() => navigate("/terminology")}
            >
              ← Back to list
            </button>
          </div>
        </div>

        {/* ====================== DESKTOP-ONLY ====================== */}
        {/* All styling for this section will live in desktop.css inside @media (min-width: 1024px) */}
        <div className="desktop-only">
          <div className="letterpage-desktop">
            {/* Optional extra hero (matches your mock).
                Note: Global Header is already rendered in App.jsx. */}
            
            {/* Classic link grid (blue, underlined). No search on desktop per your mock. */}
            {loading ? (
              <div className="letter-loading">Loading…</div>
            ) : (
              <nav className="lpd-grid" aria-label={`Terms starting with ${cap}`}>
                {terms.map((item) => {
                  const encoded = encodeURIComponent(item.term);
                  return (
                    <Link
                      key={item.term}
                      className="lpd-link"
                      to={`/definition/${cap}/${encoded}`}
                    >
                      {item.term}
                    </Link>
                  );
                })}
              </nav>
            )}

            {/* Centered back button under the grid */}
            <button
              type="button"
              className="lpd-back"
              onClick={() => navigate("/terminology")}
              aria-label="Back to list"
            >
              ← back to list
            </button>
          </div>

          {/* Footer should scroll naturally and sit at bottom on short pages */}
          <Footer />
        </div>
      </div>
    </>
  );
}