// 📄 FILE: src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import ScrollToTop from "./components/ScrollToTop"; // New import
import HomePage from "./pages/HomePage";
import TerminologyPage from "./pages/TerminologyPage";
import LetterPage from "./pages/LetterPage";
import DefinitionPage from "./pages/DefinitionPage";
import AboutPage from "./pages/AboutPage";
import WineRecommendationsPage from "./pages/WineRecommendationsPage";
import "./styles/global.css";
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CocktailPage from './pages/CocktailPage';
import ExploreArticles from './pages/ExploreArticles';
import ArticlePage from './pages/ArticlePage';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app-shell">
      {/* Header - hidden on home page */}
      {!isHomePage && <Header />}

      {/* Main scrollable area */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terminology" element={<TerminologyPage />} />
          <Route path="/letter/:letter" element={<LetterPage />} />
          <Route path="/definition/:letter/:term" element={<DefinitionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/wine-recommendations" element={<WineRecommendationsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cocktails" element={<CocktailPage />} />
          <Route path="/explore-articles" element={<ExploreArticles />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
      </main>

      {/* Mobile nav - hidden on home page */}
      {!isHomePage && <MobileNav />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add this line - it sits inside Router but outside Routes */}
      <AppContent />
    </BrowserRouter>
  );
}