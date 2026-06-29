"use client";
import React, { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

const CATEGORIES = [
  "All",
  "Interior Emulsion",
  "Exterior Shield",
  "Wood & Metal",
  "Distempers",
];

const SHADES = [
  {
    code: "SP-102",
    name: "Serene Lavender",
    hex: "#E6E6FA",
    category: "Interior Emulsion",
  },
  {
    code: "SP-405",
    name: "Midnight Velvet",
    hex: "#2E1065",
    category: "Interior Emulsion",
  },
  {
    code: "SP-011",
    name: "Alabaster Warm",
    hex: "#FDF5E6",
    category: "Exterior Shield",
  },
  {
    code: "SP-772",
    name: "Burnished Gold",
    hex: "#855300",
    category: "Wood & Metal",
  },
  {
    code: "SP-105",
    name: "Misty Dawn",
    hex: "#F0ECFC",
    category: "Distempers",
  },
  {
    code: "SP-221",
    name: "Coral Bliss",
    hex: "#FF7F50",
    category: "Interior Emulsion",
  },
  {
    code: "SP-333",
    name: "Forest Path",
    hex: "#228B22",
    category: "Exterior Shield",
  },
  {
    code: "SP-444",
    name: "Steel Grey",
    hex: "#708090",
    category: "Wood & Metal",
  },
  {
    code: "SP-555",
    name: "Soft Peach",
    hex: "#FFDAB9",
    category: "Distempers",
  },
];

export default function Palette() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredShades =
    activeCategory === "All"
      ? SHADES.slice(0, 5)
      : SHADES.filter((s) => s.category === activeCategory).slice(0, 5);

  return (
    <section
      className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto scroll-mt-32 animate-fade-in-up"
      id="palette"
      style={{ animationDelay: "300ms", animationFillMode: "both" }}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="font-headline text-4xl text-primary mb-4">
            The Skypaints Palette
          </h2>
          <p className="font-body text-on-surface-variant text-lg max-w-xl">
            A curated selection of our finest shades, organized by product
            finish to help you envision your perfect space.
          </p>
        </div>
        {/* Artisan Chips (Tabs) */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-label font-medium shadow-sm transition-all ${
                activeCategory === category
                  ? "bg-[#e8def8] text-[#1d192b]"
                  : "bg-surface-container-highest text-on-surface hover:bg-surface-container-low"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Swatch Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {filteredShades.map((shade, i) => (
          <div
            key={`${shade.code}-${i}`}
            className="bg-surface-container-lowest rounded-xl p-3 shadow-ambient hover:-translate-y-1 hover:scale-105 hover:shadow-elevated transition-transform duration-300 cursor-pointer group border border-outline-variant/10"
          >
            <div
              className="aspect-square rounded-lg mb-4 w-full shadow-inner"
              style={{ backgroundColor: shade.hex }}
            ></div>
            <div className="px-2 pb-2">
              <p className="font-body text-xs text-on-surface-variant uppercase tracking-wider mb-1">
                {shade.code}
              </p>
              <p className="font-headline text-primary font-medium text-sm leading-tight">
                {shade.name}
              </p>
            </div>
          </div>
        ))}

        {/* View All Card */}
        <Link
          href="/shades"
          className="bg-surface-container-lowest rounded-xl p-3 shadow-ambient hover:-translate-y-1 hover:scale-105 hover:shadow-elevated transition-transform duration-300 cursor-pointer group border border-outline-variant/10 flex flex-col justify-center items-center text-center hover:bg-primary-fixed/20 min-h-[180px]"
        >
          <Icon
            name="grid_view"
            className="text-3xl text-primary mb-2 group-hover:scale-110 transition-transform"
          />
          <p className="font-label text-primary text-sm font-medium">
            View All 1,200 <br />
            Shades
          </p>
        </Link>
      </div>
    </section>
  );
}
