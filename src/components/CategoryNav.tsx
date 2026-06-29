"use client";

import React, { useState, useEffect } from "react";

const CATEGORIES = [
  { id: "emulsions", label: "Emulsions" },
  { id: "distemper", label: "Distemper" },
  { id: "oil-paint", label: "Oil Paint" },
  { id: "synthetic-enamel", label: "Synthetic Enamel" },
  { id: "waterproofing", label: "Waterproofing" },
  { id: "putty-grout", label: "Putty & Grout" },
  { id: "stainers", label: "Stainers" },
  { id: "cleaning", label: "Cleaning Products" },
];

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState("");

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveCategory(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const category of CATEGORIES) {
        const element = document.getElementById(category.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset;
          const elementBottom = bottom + window.pageYOffset;

          if (
            scrollPosition >= elementTop &&
            scrollPosition <= elementBottom
          ) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="shop-by-category" className="py-24 px-8 bg-surface border-y border-outline-variant/20 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl mb-8 text-center text-primary">
          Shop by Category
        </h2>
        <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide snap-x justify-start md:justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-label font-medium transition-all snap-center ${
                activeCategory === cat.id
                  ? "bg-primary text-on-primary shadow-lg scale-105"
                  : "bg-surface-container hover:bg-surface-container-highest text-on-surface-variant"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
