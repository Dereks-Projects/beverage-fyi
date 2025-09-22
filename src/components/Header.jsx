// 📄 FILE: src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const [search, setSearch] = useState("");
  const [allTerms, setAllTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const navigate = useNavigate();

  // Load all terms once from A-Z
  useEffect(() => {
    async function loadAllTerms() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      const loaded = [];

      for (const letter of letters) {
        try {
          const module = await import(`../data/${letter}.json`);
          const terms = module.default.map((item) => ({
            term: item.term,
            letter: letter,
          }));
          loaded.push(...terms);
        } catch (err) {
          console.error(`Error loading ${letter}.json`, err);
        }
      }

      setAllTerms(loaded);
    }

    loadAllTerms();
  }, []);

  // Filter by startsWith instead of includes
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredTerms([]);
    } else {
      const query = search.trim().toLowerCase();
      const filtered = allTerms.filter((item) =>
        item.term.toLowerCase().startsWith(query)
      );
      setFilteredTerms(filtered);
    }
  }, [search, allTerms]);

  // Navigate to selected term
  const handleSelect = (term, letter) => {
    navigate(`/definition/${letter}/${encodeURIComponent(term)}`);
    setSearch("");
    setFilteredTerms([]);
  };

  return (
    <header className="header">
      <h1 className="header-title">Beverage.fyi</h1>
      <h2 className="header-subtitle">Professional Beverage Resource</h2>

      <div className="header-searchbar">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredTerms.length > 0 && (
          <ul className="search-results">
            {filteredTerms.map((item, idx) => (
              <li key={idx} onClick={() => handleSelect(item.term, item.letter)}>
                {item.term}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
