"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';

// Generate 1200 mock shades
const CATEGORIES = ["Interior Emulsion", "Exterior Shield", "Wood & Metal", "Distempers"];

const generateMockShades = () => {
  const shades = [];
  const baseHues = [0, 30, 60, 120, 180, 240, 280, 320];
  for (let i = 1; i <= 1200; i++) {
    const category = CATEGORIES[i % 4];
    const hue = baseHues[i % baseHues.length] + Math.random() * 20;
    const saturation = 20 + Math.random() * 60;
    const lightness = 30 + Math.random() * 60;
    
    shades.push({
      id: `SP-${i.toString().padStart(4, '0')}`,
      name: `Shade ${i}`,
      category,
      hex: `hsl(${hue.toFixed(0)}, ${saturation.toFixed(0)}%, ${lightness.toFixed(0)}%)`
    });
  }
  return shades;
};

const ALL_SHADES = generateMockShades();
const INITIAL_LOAD_COUNT = 60;
const LOAD_MORE_COUNT = 60;

export default function ShadesGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedCount, setDisplayedCount] = useState(INITIAL_LOAD_COUNT);
  
  const observerTarget = useRef<HTMLDivElement>(null);

  const filteredShades = useMemo(() => {
    return ALL_SHADES.filter(shade => {
      const matchesSearch = shade.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            shade.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || shade.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const displayedShades = filteredShades.slice(0, displayedCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && displayedCount < filteredShades.length) {
          setDisplayedCount(prev => Math.min(prev + LOAD_MORE_COUNT, filteredShades.length));
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, displayedCount, filteredShades.length]);

  useEffect(() => {
    setDisplayedCount(INITIAL_LOAD_COUNT);
  }, [searchQuery, activeCategory]);

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 py-8">
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 sticky top-20 z-30 bg-surface/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-outline-variant/10">
        <div className="w-full md:w-1/3 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            type="text" 
            placeholder="Search by name or code (e.g. SP-0010)" 
            className="w-full bg-surface-container-highest rounded-full pl-12 pr-6 py-3 font-body text-on-surface border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search shades"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
          {["All", ...CATEGORIES].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-label font-medium shadow-sm transition-all text-sm ${
                activeCategory === cat 
                  ? "bg-primary text-on-primary" 
                  : "bg-surface-container-highest text-on-surface hover:bg-surface-container-low"
              }`}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {displayedShades.map((shade) => (
          <div key={shade.id} className="bg-surface-container-lowest rounded-xl p-3 shadow-sm hover:-translate-y-1 hover:shadow-md hover:scale-105 transition-all cursor-pointer group border border-outline-variant/10">
            <div className="aspect-square rounded-lg mb-3 w-full shadow-inner" style={{ backgroundColor: shade.hex }}></div>
            <div className="px-1 pb-1">
              <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-wider mb-0.5">{shade.id}</p>
              <p className="font-headline text-primary font-medium text-sm leading-tight truncate">{shade.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Loading Indicator / Observer Target */}
      {displayedCount < filteredShades.length && (
        <div ref={observerTarget} className="py-12 flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}

      {/* Empty State */}
      {filteredShades.length === 0 && (
        <div className="text-center py-20">
          <p className="font-body text-on-surface-variant text-lg">No shades found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
