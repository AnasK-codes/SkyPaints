import React from 'react';

export default function CostCalculator() {
  return (
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
  );
}
