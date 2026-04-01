// components/ScrollToHash.tsx
"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    const scroll = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    
    setTimeout(scroll, 700);

    window.addEventListener("hashchange", scroll);
    return () => window.removeEventListener("hashchange", scroll);
  }, []);

  return null;
}