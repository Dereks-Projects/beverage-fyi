// 📄 FILE: src/desktop/LetterGridDesktop.jsx
import React, { useMemo } from "react";
import LetterButtonDesktop from "./LetterButtonDesktop";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function LetterGridDesktop() {
  // Eagerly import all letter JSON files once (Vite)
  const letterData = useMemo(() => {
    const modules = import.meta.glob("../data/*.json", { eager: true });
    const map = {};
    LETTERS.forEach((ltr) => {
      const key = `../data/${ltr}.json`;
      const mod = modules[key];
      const arr = mod && mod.default ? mod.default : [];
      map[ltr] = Array.isArray(arr) ? arr : [];
    });
    return map;
  }, []);

  const items = useMemo(() => {
    return LETTERS.map((ltr) => {
      const arr = letterData[ltr] || [];
      const firstTerm = arr.length ? arr[0].term : "";
      const lastTerm = arr.length ? arr[arr.length - 1].term : "";
      return { letter: ltr, firstTerm, lastTerm };
    });
  }, [letterData]);

  return (
    <div className="desktop-letter-grid">
      {items.map(({ letter, firstTerm, lastTerm }) => (
        <LetterButtonDesktop
          key={letter}
          letter={letter}
          firstTerm={firstTerm}
          lastTerm={lastTerm}
        />
      ))}
    </div>
  );
}
