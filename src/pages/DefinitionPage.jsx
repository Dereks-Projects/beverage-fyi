import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DefinitionCard from "../components/DefinitionCard";
import Footer from "../components/Footer";
import "../styles/DefinitionCard.css";
import "../styles/DefinitionPage.css";

function capitalize(ltr) {
  return (ltr && typeof ltr === "string") ? ltr[0].toUpperCase() : "";
}

export default function DefinitionPage() {
  const { letter, term } = useParams();
  const [definition, setDefinition] = useState("");
  const [foundTerm, setFoundTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    import(`../data/${capitalize(letter)}.json`)
      .then((module) => {
        const decodedTerm = decodeURIComponent(term);
        const found = (module.default || []).find(
          (item) => item.term.toLowerCase() === decodedTerm.toLowerCase()
        );
        setFoundTerm(found ? found.term : decodedTerm);
        setDefinition(found ? found.definition : "Definition not found.");
        setLoading(false);
      })
      .catch(() => {
        setDefinition("Definition not found.");
        setFoundTerm("");
        setLoading(false);
      });
  }, [letter, term]);

  return (
    <>
      <Helmet>
        <title>{foundTerm ? `${foundTerm} - Definition` : 'Term Definition'} | Beverage.fyi</title>
        <link rel="canonical" href={`https://beverage.fyi/definition/${letter}/${term}`} />
      </Helmet>
      
      <div className="definition-page-wrapper">
        {/* ================= MOBILE (unchanged) ================= */}
        <div className="hide-on-desktop">
          <div className="definition-page">
            {loading ? (
              <div className="definition-loading">Loading…</div>
            ) : (
              <div className="definition-body">
                <DefinitionCard term={foundTerm} definition={definition} />
                <button
                  className="definition-back-btn"
                  type="button"
                  onClick={() => navigate(-1)}
                >
                  ← Back to list
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ================= DESKTOP ONLY ================= */}
        <div className="desktop-only">
          <div className="definition-desktop">
            {loading ? (
              <div className="definition-loading">Loading…</div>
            ) : (
              <div className="def-card-outer">
                {/* Fixed 800px-wide card, centered */}
                <div className="def-card-fixed">
                  <DefinitionCard term={foundTerm} definition={definition} />
                </div>

                {/* Centered back button below the card */}
                <button
                  className="desktop-back"
                  type="button"
                  onClick={() => navigate(-1)}
                  aria-label="Back to list"
                >
                  ← Back to list
                </button>
              </div>
            )}
          </div>

          {/* Footer (scrolls naturally, sits flush on short pages) */}
          <Footer />
        </div>
      </div>
    </>
  );
}