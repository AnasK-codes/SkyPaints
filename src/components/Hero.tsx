"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const heroImages = [
  { src: "/images/hero-image-1.jpg", alt: "Modern living room painted with Skypaints premium lavender emulsion" },
  { src: "/images/hero-image-2.jpg", alt: "Elegant bedroom interior with Skypaints warm tone wall finish" },
  { src: "/images/hero-image-3.jpg", alt: "Contemporary home exterior painted with Skypaints weather-resistant paint" },
  { src: "/images/lavender-hero-2.png", alt: "Skypaints ethereal lavender paint finish on accent wall" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Balanced overlay gradient to preserve image clarity while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/20 to-transparent z-10 pointer-events-none"></div>
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
        >
          {heroImages.map((image, index) => (
            <div key={index} className="relative w-full h-full shrink-0">
              <Image
                alt={image.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                className="object-cover"
                src={image.src}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-6 md:space-y-8 px-4 md:px-8">
        <h1 className="font-headline text-6xl md:text-8xl text-primary tracking-tight leading-none text-glow">
          Transform Your <span className="italic font-light">Walls</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant leading-relaxed">
          Experience the atmospheric depth of Skypaints. Our artisanal finishes
          capture the shifting light of the celestial hours.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="bg-primary-container text-on-primary px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 shadow-xl shadow-primary-container/20"
          >
            Order Home Paints
          </Link>
          <Link
            href="/products"
            className="bg-surface-container-lowest/80 backdrop-blur-md text-primary px-10 py-4 rounded-full text-lg font-medium border border-outline-variant/20 transition-all hover:bg-white"
          >
            View Collection
          </Link>
        </div>
      </div>

      {/* Carousel Controls Container */}
      <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6 bg-surface-container-lowest/60 hover:bg-surface-container-lowest/80 backdrop-blur-xl px-4 md:px-6 py-3 rounded-full shadow-[0px_8px_30px_rgba(46,16,101,0.15)] border border-white/30 transition-all duration-300">
        <div className="flex gap-3 items-center">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full ${idx === currentIndex ? "bg-primary w-6 h-2 md:w-8" : "bg-primary/30 hover:bg-primary/60 w-2 h-2"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

