// 📄 FILE: src/components/ScrollToTop.jsx
// 🧠 PURPOSE: Automatically scrolls to top of page on route change

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}