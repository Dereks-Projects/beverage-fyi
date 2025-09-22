// 📄 FILE: src/desktop/LetterButtonDesktop.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LetterButtonDesktop({ letter, firstTerm, lastTerm }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="dbtn"
      onClick={() => navigate(`/letter/${letter}`)}
      aria-label={`Browse terms for ${letter}`}
    >
      <div className="dbtn-left">{letter}</div>

      <div className="dbtn-middle">
        <div className="dbtn-term dbtn-term-first">{firstTerm || "—"}</div>
        <div className="dbtn-term dbtn-term-last">{lastTerm || "—"}</div>
      </div>

      <div className="dbtn-right" aria-hidden="true">
        <svg className="dbtn-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}
