'use client';

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CostCalculator from "@/components/CostCalculator";
import Palette from "@/components/Palette";
import ShadeFinder from "@/components/ShadeFinder";
import VastuGuide from "@/components/VastuGuide";

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        {/* 1. HERO SECTION */}
        <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8 z-10 relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl -z-10"></div>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-primary tracking-tight leading-[1.1]">
                Master your <br />canvas.
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                Estimate painting cost, explore Vastu-friendly colours, and discover curated Skypaints shades designed to elevate your environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  className="bg-gradient-to-br from-primary-container to-primary text-on-primary px-8 py-4 rounded-full font-label font-medium shadow-ambient shadow-ambient-hover transition-all duration-300 text-center"
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Use Cost Calculator
                </button>
                <button className="border border-outline-variant/20 text-primary hover:bg-surface-container-low px-8 py-4 rounded-full font-label font-medium transition-all duration-300 text-center">
                  Explore Colour Catalog
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-7 relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-elevated relative">
                <Image
                  alt="Premium paint tools"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBakElGk148CGFvTqog6_vVltuSEsEtXSJRibca91qJ6GPbx47kkJuK0OzkajehSOiwup76wbhT-UTpa3NcTxxd1DJXOfAIGUxuUlZBlbLBAisiyZ43OM0FTI_43lZkQ88Sd4E-9TlH07oCGtJO7rKh2Uxr7hTgwnEahYlDTBRmbS1oEIuLJUy6WZQrd3JwPXnEV3qib82RlZRuPL35SJoePtFWW_BhZ2MCrDva4SuYwbM1elB9zAINGlaEq2rGNh5R2R5JqRUsowY"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>
              </div>
              {/* Floating decorative card */}
              <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest/80 backdrop-blur-xl p-6 rounded-lg shadow-elevated border border-outline-variant/10 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                    <span className="material-symbols-outlined fill-icon">palette</span>
                  </div>
                  <div>
                    <p className="font-headline text-primary font-semibold">1,200+ Shades</p>
                    <p className="text-label-md text-on-surface-variant">Curated for elegance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OVERVIEW SECTION */}
        <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-10 shadow-ambient shadow-ambient-hover transition-all duration-500 group flex flex-col items-start border border-outline-variant/5">
              <div className="w-16 h-16 rounded-full bg-surface-container-low text-primary flex items-center justify-center mb-8 group-hover:bg-primary-fixed transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">calculate</span>
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4">Paint Cost Calculator</h3>
              <p className="font-body text-on-surface-variant mb-8 flex-grow">Accurately estimate materials, labour, and total investment for your project before a single drop is poured.</p>
              <button className="text-primary font-label font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
                Calculate Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            
            {/* Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-10 shadow-ambient shadow-ambient-hover transition-all duration-500 group flex flex-col items-start border border-outline-variant/5">
              <div className="w-16 h-16 rounded-full bg-surface-container-low text-primary flex items-center justify-center mb-8 group-hover:bg-primary-fixed transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">home_pin</span>
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4">Vastu Colour Guide</h3>
              <p className="font-body text-on-surface-variant mb-8 flex-grow">Harmonize your space with ancient wisdom. Discover the ideal hues for every directional zone in your home.</p>
              <button className="text-primary font-label font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300" onClick={() => document.getElementById('vastu')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Vastu <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            
            {/* Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-10 shadow-ambient shadow-ambient-hover transition-all duration-500 group flex flex-col items-start border border-outline-variant/5">
              <div className="w-16 h-16 rounded-full bg-surface-container-low text-primary flex items-center justify-center mb-8 group-hover:bg-primary-fixed transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">format_paint</span>
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4">Colour Catalog</h3>
              <p className="font-body text-on-surface-variant mb-8 flex-grow">Browse our extensive library of premium finishes, from velvety distempers to weather-defying exteriors.</p>
              <button className="text-primary font-label font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300" onClick={() => document.getElementById('palette')?.scrollIntoView({ behavior: 'smooth' })}>
                View Shades <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* 3. COST CALCULATOR */}
        <CostCalculator />
        
        {/* 4. VASTU GUIDE */}
        <VastuGuide />

        {/* 5. COLOUR CATALOG (Tabbed Interface) */}
        <Palette />

        {/* 6. SHADE FINDER (Mood Cards) */}
        <ShadeFinder />

        {/* 8. FAQ */}
        <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[800px] mx-auto animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
          <h2 className="font-headline text-3xl text-primary mb-12 text-center">Inquiries</h2>
          <div className="space-y-4">
            <details className="bg-surface-container-low rounded-xl group" open>
              <summary className="list-none cursor-pointer p-6 font-headline text-lg text-primary flex justify-between items-center select-none">
                How accurate is the Cost Calculator?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-on-surface-variant">expand_more</span>
              </summary>
              <div className="px-6 pb-6 pt-0 font-body text-on-surface-variant leading-relaxed">
                The calculator provides a highly accurate estimate based on standard industry coverage rates and current material costs. However, highly textured surfaces, extreme color changes (e.g., black to white), or significant wall damage requiring extensive putty work may alter the final volume of paint needed.
              </div>
            </details>
            
            <details className="bg-surface-container-low rounded-xl group">
              <summary className="list-none cursor-pointer p-6 font-headline text-lg text-primary flex justify-between items-center select-none">
                Do you offer physical shade cards?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-on-surface-variant">expand_more</span>
              </summary>
              <div className="px-6 pb-6 pt-0 font-body text-on-surface-variant leading-relaxed">
                Yes, while our digital catalog is meticulously color-calibrated, we recommend viewing physical swatches in your room's specific lighting. You can order a curated 'Atelier Swatch Box' directly to your home through our online store.
              </div>
            </details>
            
            <details className="bg-surface-container-low rounded-xl group">
              <summary className="list-none cursor-pointer p-6 font-headline text-lg text-primary flex justify-between items-center select-none">
                Can your experts assist with Vastu compliance?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-on-surface-variant">expand_more</span>
              </summary>
              <div className="px-6 pb-6 pt-0 font-body text-on-surface-variant leading-relaxed">
                Absolutely. Our premium consulting service pairs you with color specialists trained in Vastu Shastra principles. They can help navigate complex floor plans to ensure your color choices promote harmony and positive energy flow.
              </div>
            </details>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="px-8 md:px-16 lg:px-24 mb-12 max-w-[1600px] mx-auto animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
          <div className="bg-primary-container rounded-xl p-12 md:p-24 text-center relative overflow-hidden shadow-elevated">
            {/* Abstract gradient orb */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/40 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl text-on-primary mb-6 leading-tight">Need help choosing the perfect colour?</h2>
              <p className="font-body text-on-primary/80 text-lg mb-10">Our color consultants are available to provide personalized recommendations for your unique space.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full font-label font-bold flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300">
                  <span className="material-symbols-outlined fill-icon">forum</span>
                  Chat on WhatsApp
                </button>
                <button className="bg-transparent border border-outline-variant/30 text-on-primary hover:bg-white/5 px-8 py-4 rounded-full font-label font-medium transition-all duration-300">
                  Submit an Inquiry
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
