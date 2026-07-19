"use client";

import React, { useEffect, useRef } from "react";

export default function ParallaxHero() {
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScrollParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroImageRef.current) {
            const scrolled = window.scrollY;
            heroImageRef.current.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05) translateZ(0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScrollParallax, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollParallax);
    };
  }, []);

  return (
    <section className="relative min-h-[716px] flex items-center px-8 md:px-12 pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          ref={heroImageRef}
          className="w-full h-full object-cover brightness-75 opacity-95 scale-105 will-change-transform"
          fetchPriority="high"
          data-alt="A luxurious high-ceiling living room with walls painted in a sophisticated, soft lavender matte finish. The sunlight streams through large floor-to-ceiling windows, casting gentle shadows. The furniture is minimalist and high-end, featuring deep violet velvet textures. The entire scene feels serene, ethereal, and meticulously curated for a premium architectural publication."
          src="/images/about-cover.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-4xl animate-fade-in-up">
        <span className="font-label text-primary font-bold tracking-[0.3em] uppercase mb-4 block">
          Artisan Finishes
        </span>
        <h1 className="font-display text-6xl md:text-8xl text-primary leading-tight mb-8">
          About <br />
          <span className="italic text-on-primary-container">Skypaints</span>
        </h1>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
          Bringing color, protection, and beauty to every home. We curate
          atmospheric depth for modern spaces through precision and artistic
          vision.
        </p>
      </div>
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-96 h-96 rounded-full bg-secondary-fixed/30 blur-[120px] animate-pulse"></div>
      </div>
    </section>
  );
}
