import React from 'react';

export default function Palette() {
  return (
    <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto scroll-mt-32 animate-fade-in-up" id="palette" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
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
  );
}
