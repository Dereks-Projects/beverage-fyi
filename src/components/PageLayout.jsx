// 📄 FILE: src/components/PageLayout.jsx

import React from "react";
import Header from "./Header";
import "../styles/PageLayout.css";

export default function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <Header />
      <div className="page-content">{children}</div>
    </div>
  );
}
