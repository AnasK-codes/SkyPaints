'use client';

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
              <button className="text-primary font-label font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
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
              <button className="text-primary font-label font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
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
              <button className="text-primary font-label font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                View Shades <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* 3. COST CALCULATOR */}
        <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto scroll-mt-32 animate-fade-in-up" id="calculator" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          <div className="bg-surface-container-low rounded-xl p-1 lg:p-4">
            <div className="bg-surface rounded-xl p-8 lg:p-16 border border-outline-variant/10 shadow-ambient">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-headline text-4xl text-primary mb-4">Estimate Your Canvas</h2>
                <p className="font-body text-on-surface-variant text-lg">Input your project dimensions below for a refined estimation of required materials and approximate investment.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Form Inputs */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project Type */}
                    <div className="space-y-2 relative">
                      <label className="font-label text-sm text-on-surface-variant ml-4 block">Project Type</label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-highest rounded-full px-6 py-4 font-body text-on-surface border-none outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all appearance-none">
                          <option>Interior Walls</option>
                          <option>Exterior Walls</option>
                          <option>Wood Finishes</option>
                          <option>Metal Surfaces</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    {/* Area Input */}
                    <div className="space-y-2">
                      <label className="font-label text-sm text-on-surface-variant ml-4 block">Area (sq.ft)</label>
                      <input className="w-full bg-surface-container-highest rounded-full px-6 py-4 font-body text-on-surface border-none outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant" placeholder="e.g. 500" type="number" />
                    </div>
                    {/* Product Type */}
                    <div className="space-y-2 md:col-span-2 relative">
                      <label className="font-label text-sm text-on-surface-variant ml-4 block">Product Selection</label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-highest rounded-full px-6 py-4 font-body text-on-surface border-none outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all appearance-none">
                          <option>Premium Luxury Emulsion</option>
                          <option>Advanced Washable Plastic</option>
                          <option>Classic Distemper</option>
                          <option>All-Weather Exterior Shield</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    {/* Surface Condition */}
                    <div className="space-y-2 relative">
                      <label className="font-label text-sm text-on-surface-variant ml-4 block">Surface Condition</label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-highest rounded-full px-6 py-4 font-body text-on-surface border-none outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all appearance-none">
                          <option>Fresh Painting (Needs Primer)</option>
                          <option>Repainting (Good Condition)</option>
                          <option>Repainting (Needs Repair)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    {/* Number of Coats */}
                    <div className="space-y-2 relative">
                      <label className="font-label text-sm text-on-surface-variant ml-4 block">Number of Coats</label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-highest rounded-full px-6 py-4 font-body text-on-surface border-none outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all appearance-none">
                          <option>2 Coats (Recommended)</option>
                          <option>1 Coat (Touch up)</option>
                          <option>3 Coats (Drastic color change)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="bg-surface-container-highest text-primary px-8 py-4 rounded-full font-label font-semibold hover:bg-surface-container-high transition-colors w-full md:w-auto">
                      Generate Estimate
                    </button>
                  </div>
                </div>
                
                {/* Results Card */}
                <div className="lg:col-span-5 relative">
                  {/* Background decorative glow */}
                  <div className="absolute inset-0 bg-primary-fixed/20 rounded-xl blur-2xl -z-10 translate-y-4"></div>
                  <div className="bg-gradient-to-br from-primary-container to-primary text-on-primary rounded-xl p-10 shadow-elevated h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-8 opacity-80">
                        <span className="font-label text-sm uppercase tracking-wider">Estimated Investment</span>
                        <span className="material-symbols-outlined">receipt_long</span>
                      </div>
                      <div className="space-y-6">
                        <div className="flex justify-between items-end border-b border-on-primary/10 pb-4">
                          <div>
                            <p className="font-label text-on-primary/70 text-sm mb-1">Required Quantity</p>
                            <p className="font-headline text-2xl">~ 12 Litres</p>
                          </div>
                          <p className="font-body text-on-primary/80">₹ 4,500</p>
                        </div>
                        <div className="flex justify-between items-end border-b border-on-primary/10 pb-4">
                          <div>
                            <p className="font-label text-on-primary/70 text-sm mb-1">Estimated Labour</p>
                            <p className="font-headline text-2xl">Standard Team</p>
                          </div>
                          <p className="font-body text-on-primary/80">₹ 3,200</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-on-primary/20">
                      <p className="font-label text-on-primary/70 text-sm mb-2">Total Approximate Cost</p>
                      <p className="font-headline text-5xl tracking-tight text-secondary-fixed">₹ 7,700</p>
                      <p className="font-body text-xs text-on-primary/50 mt-4 leading-relaxed">
                        *This is an approximate estimation. Actual costs may vary based on precise surface condition, localized labour rates, and final product selection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. COLOUR CATALOG (Tabbed Interface) */}
        <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-headline text-4xl text-primary mb-4">The Skypaints Palette</h2>
              <p className="font-body text-on-surface-variant text-lg max-w-xl">A curated selection of our finest shades, organized by product finish to help you envision your perfect space.</p>
            </div>
            {/* Artisan Chips (Tabs) */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              <button className="whitespace-nowrap px-6 py-2 rounded-full font-label font-medium bg-secondary-fixed text-on-secondary-fixed shadow-sm transition-all">Interior Emulsion</button>
              <button className="whitespace-nowrap px-6 py-2 rounded-full font-label font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-low transition-all">Exterior Shield</button>
              <button className="whitespace-nowrap px-6 py-2 rounded-full font-label font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-low transition-all">Wood & Metal</button>
              <button className="whitespace-nowrap px-6 py-2 rounded-full font-label font-medium bg-surface-container-highest text-on-surface hover:bg-surface-container-low transition-all">Distempers</button>
            </div>
          </div>
          
          {/* Swatch Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Swatch 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-3 shadow-ambient hover:-translate-y-1 hover:shadow-elevated transition-all cursor-pointer group border border-outline-variant/10">
              <div className="aspect-square rounded-lg mb-4 w-full" style={{ backgroundColor: '#E6E6FA' }}></div>
              <div className="px-2 pb-2">
                <p className="font-body text-xs text-on-surface-variant uppercase tracking-wider mb-1">SP-102</p>
                <p className="font-headline text-primary font-medium text-sm leading-tight">Serene Lavender</p>
              </div>
            </div>
            
            {/* Swatch 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-3 shadow-ambient hover:-translate-y-1 hover:shadow-elevated transition-all cursor-pointer group border border-outline-variant/10">
              <div className="aspect-square rounded-lg mb-4 w-full" style={{ backgroundColor: '#2E1065' }}></div>
              <div className="px-2 pb-2">
                <p className="font-body text-xs text-on-surface-variant uppercase tracking-wider mb-1">SP-405</p>
                <p className="font-headline text-primary font-medium text-sm leading-tight">Midnight Velvet</p>
              </div>
            </div>
            
            {/* Swatch 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-3 shadow-ambient hover:-translate-y-1 hover:shadow-elevated transition-all cursor-pointer group border border-outline-variant/10">
              <div className="aspect-square rounded-lg mb-4 w-full" style={{ backgroundColor: '#FDF5E6' }}></div>
              <div className="px-2 pb-2">
                <p className="font-body text-xs text-on-surface-variant uppercase tracking-wider mb-1">SP-011</p>
                <p className="font-headline text-primary font-medium text-sm leading-tight">Alabaster Warm</p>
              </div>
            </div>
            
            {/* Swatch 4 */}
            <div className="bg-surface-container-lowest rounded-xl p-3 shadow-ambient hover:-translate-y-1 hover:shadow-elevated transition-all cursor-pointer group border border-outline-variant/10">
              <div className="aspect-square rounded-lg mb-4 w-full" style={{ backgroundColor: '#855300' }}></div>
              <div className="px-2 pb-2">
                <p className="font-body text-xs text-on-surface-variant uppercase tracking-wider mb-1">SP-772</p>
                <p className="font-headline text-primary font-medium text-sm leading-tight">Burnished Gold</p>
              </div>
            </div>
            
            {/* Swatch 5 */}
            <div className="bg-surface-container-lowest rounded-xl p-3 shadow-ambient hover:-translate-y-1 hover:shadow-elevated transition-all cursor-pointer group border border-outline-variant/10">
              <div className="aspect-square rounded-lg mb-4 w-full" style={{ backgroundColor: '#F0ECFC' }}></div>
              <div className="px-2 pb-2">
                <p className="font-body text-xs text-on-surface-variant uppercase tracking-wider mb-1">SP-105</p>
                <p className="font-headline text-primary font-medium text-sm leading-tight">Misty Dawn</p>
              </div>
            </div>
            
            {/* Swatch 6 */}
            <div className="bg-surface-container-lowest rounded-xl p-3 shadow-ambient hover:-translate-y-1 hover:shadow-elevated transition-all cursor-pointer group border border-outline-variant/10 flex flex-col justify-center items-center text-center bg-surface-container-low hover:bg-primary-fixed/20">
              <span className="material-symbols-outlined text-3xl text-primary mb-2">grid_view</span>
              <p className="font-label text-primary text-sm font-medium">View All 1,200 <br />Shades</p>
            </div>
          </div>
        </section>

        {/* 6. SHADE FINDER (Mood Cards) */}
        <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
          <h2 className="font-headline text-4xl text-primary mb-12 text-center">Set the Atmosphere</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mood 1 */}
            <div className="relative overflow-hidden rounded-xl aspect-[3/4] group cursor-pointer shadow-ambient hover:shadow-elevated transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E6E6FA] to-[#B0C4DE] opacity-90"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-primary border border-white/20">
                  <span className="material-symbols-outlined text-sm">air</span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl text-primary mb-2">Calm & Serene</h3>
                  <p className="font-body text-sm text-primary/80 mb-6">Soft lavenders, cool blues, and gentle neutrals for restful spaces.</p>
                  <span className="inline-block border border-primary/20 rounded-full px-4 py-2 text-xs font-label text-primary backdrop-blur-md">Explore Mood</span>
                </div>
              </div>
            </div>
            
            {/* Mood 2 */}
            <div className="relative overflow-hidden rounded-xl aspect-[3/4] group cursor-pointer shadow-ambient hover:shadow-elevated transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5E6] to-[#DEB887] opacity-90"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-secondary border border-white/20">
                  <span className="material-symbols-outlined text-sm">wb_sunny</span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl text-secondary mb-2">Warm & Inviting</h3>
                  <p className="font-body text-sm text-secondary/80 mb-6">Earthy terracottas, rich ochres, and creamy off-whites for gathering areas.</p>
                  <span className="inline-block border border-secondary/20 rounded-full px-4 py-2 text-xs font-label text-secondary backdrop-blur-md">Explore Mood</span>
                </div>
              </div>
            </div>
            
            {/* Mood 3 */}
            <div className="relative overflow-hidden rounded-xl aspect-[3/4] group cursor-pointer shadow-ambient hover:shadow-elevated transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E1065] to-[#170040] opacity-90"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl text-white mb-2">Bold & Dramatic</h3>
                  <p className="font-body text-sm text-white/80 mb-6">Deep charcoals, royal purples, and intense emeralds for statement rooms.</p>
                  <span className="inline-block border border-white/20 rounded-full px-4 py-2 text-xs font-label text-white backdrop-blur-md">Explore Mood</span>
                </div>
              </div>
            </div>
            
            {/* Mood 4 */}
            <div className="relative overflow-hidden rounded-xl aspect-[3/4] group cursor-pointer shadow-ambient hover:shadow-elevated transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0FFF0] to-[#8FBC8F] opacity-90"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-[#2F4F4F] border border-white/20">
                  <span className="material-symbols-outlined text-sm">psychiatry</span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl text-[#2F4F4F] mb-2">Fresh & Natural</h3>
                  <p className="font-body text-sm text-[#2F4F4F]/80 mb-6">Sage greens, botanical hues, and crisp whites to bring the outdoors in.</p>
                  <span className="inline-block border border-[#2F4F4F]/20 rounded-full px-4 py-2 text-xs font-label text-[#2F4F4F] backdrop-blur-md">Explore Mood</span>
                </div>
              </div>
            </div>
          </div>
        </section>

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
