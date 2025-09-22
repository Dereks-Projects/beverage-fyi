// 📄 FILE: src/components/GlobalSearch.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GlobalSearch.css";

export default function GlobalSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allTerms, setAllTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const navigate = useNavigate();

  // 🔄 Load all terms from A–Z
  useEffect(() => {
    const loadAllTerms = async () => {
      const letters = "abcdefghijklmnopqrstuvwxyz".split("");
      const combinedTerms = [];

      for (const letter of letters) {
        try {
          const module = await import(`../data/${letter.toUpperCase()}.json`);
          const terms = module.default.map((item) => ({
            term: item.term,
            letter,
          }));
          combinedTerms.push(...terms);
        } catch (err) {
          console.warn(`Failed to load ${letter.toUpperCase()}.json`);
        }
      }

      setAllTerms(combinedTerms);
    };

    loadAllTerms();
  }, []);

  // 🔍 Filter terms when user types
  useEffect(() => {
    if (searchTerm.length === 0) {
      setFilteredTerms([]);
    } else {
      const lower = searchTerm.toLowerCase();
      const results = allTerms.filter((item) =>
        item.term.toLowerCase().includes(lower)
      );
      setFilteredTerms(results.slice(0, 10)); // limit to 10 results
    }
  }, [searchTerm, allTerms]);

  // 🔁 Navigate on result click
  const handleClick = (term, letter) => {
    navigate(`/definition/${letter.toUpperCase()}/${encodeURIComponent(term)}`);
    setSearchTerm("");
    setFilteredTerms([]);
  };

  return (
    <div className="global-search-wrapper">
      <input
        className="global-search-input"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredTerms.length > 0 && (
        <ul className="global-search-results">
          {filteredTerms.map(({ term, letter }) => (
            <li
              key={`${letter}-${term}`}
              onClick={() => handleClick(term, letter)}
              className="global-search-result-item"
            >
              {term}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
