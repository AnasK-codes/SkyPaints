import React from 'react';

export default function VastuGuide() {
  return (
    <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto scroll-mt-32 animate-fade-in-up" id="vastu" style={{ animationDelay: '250ms', animationFillMode: 'both' }}>
      <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-16 border border-outline-variant/10 shadow-ambient">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="material-symbols-outlined text-5xl text-secondary-fixed mb-4">explore</span>
          <h2 className="font-headline text-4xl text-primary mb-4">Vastu Colour Guide</h2>
          <p className="font-body text-on-surface-variant text-lg">Harmonize your space with ancient wisdom. Discover the ideal hues for every directional zone in your home to invite prosperity and peace.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* North */}
          <div className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant/5 hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8F5E9] rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline text-2xl text-primary">North</h3>
              <span className="text-xs font-bold text-[#2E7D32] bg-[#E8F5E9] px-3 py-1 rounded-full">WATER</span>
            </div>
            <p className="font-body text-sm text-on-surface-variant mb-6">Ideal for living rooms and entrances. Represents career and wealth.</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E8F5E9] border border-black/5 shadow-sm"></div>
              <div className="w-8 h-8 rounded-full bg-[#E0F7FA] border border-black/5 shadow-sm"></div>
              <span className="text-xs font-medium text-on-surface-variant">Pista Green, Light Blue</span>
            </div>
          </div>

          {/* East */}
          <div className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant/5 hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFF8E1] rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline text-2xl text-primary">East</h3>
              <span className="text-xs font-bold text-[#F57F17] bg-[#FFF8E1] px-3 py-1 rounded-full">AIR/WOOD</span>
            </div>
            <p className="font-body text-sm text-on-surface-variant mb-6">Perfect for family lounges and study areas. Symbolizes health and growth.</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFFDE7] border border-black/5 shadow-sm"></div>
              <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-black/5 shadow-sm"></div>
              <span className="text-xs font-medium text-on-surface-variant">White, Light Yellow</span>
            </div>
          </div>

          {/* South */}
          <div className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant/5 hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFEBEE] rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline text-2xl text-primary">South</h3>
              <span className="text-xs font-bold text-[#C62828] bg-[#FFEBEE] px-3 py-1 rounded-full">FIRE</span>
            </div>
            <p className="font-body text-sm text-on-surface-variant mb-6">Best suited for bedrooms and relaxation areas. Represents fame and energy.</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFCDD2] border border-black/5 shadow-sm"></div>
              <div className="w-8 h-8 rounded-full bg-[#FFE0B2] border border-black/5 shadow-sm"></div>
              <span className="text-xs font-medium text-on-surface-variant">Light Pink, Orange</span>
            </div>
          </div>

          {/* West */}
          <div className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant/5 hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E3F2FD] rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline text-2xl text-primary">West</h3>
              <span className="text-xs font-bold text-[#1565C0] bg-[#E3F2FD] px-3 py-1 rounded-full">SPACE/METAL</span>
            </div>
            <p className="font-body text-sm text-on-surface-variant mb-6">Ideal for dining rooms and children's rooms. Symbolizes creativity and gains.</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#BBDEFB] border border-black/5 shadow-sm"></div>
              <div className="w-8 h-8 rounded-full bg-[#F5F5F5] border border-black/5 shadow-sm"></div>
              <span className="text-xs font-medium text-on-surface-variant">Blue, Silver/Grey</span>
            </div>
          </div>

          {/* North-East */}
          <div className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant/5 hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFF3E0] rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline text-2xl text-primary">North-East</h3>
              <span className="text-xs font-bold text-[#E65100] bg-[#FFF3E0] px-3 py-1 rounded-full">WATER/EARTH</span>
            </div>
            <p className="font-body text-sm text-on-surface-variant mb-6">The sacred zone (Ishan). Best for prayer rooms and meditation spaces.</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFF9C4] border border-black/5 shadow-sm"></div>
              <div className="w-8 h-8 rounded-full bg-[#E0F7FA] border border-black/5 shadow-sm"></div>
              <span className="text-xs font-medium text-on-surface-variant">Soft Yellow, Mint</span>
            </div>
          </div>

          {/* South-East */}
          <div className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant/5 hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FCE4EC] rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline text-2xl text-primary">South-East</h3>
              <span className="text-xs font-bold text-[#AD1457] bg-[#FCE4EC] px-3 py-1 rounded-full">FIRE</span>
            </div>
            <p className="font-body text-sm text-on-surface-variant mb-6">The Agni zone. Perfect for kitchens. Represents passion and vitality.</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFCC80] border border-black/5 shadow-sm"></div>
              <div className="w-8 h-8 rounded-full bg-[#F48FB1] border border-black/5 shadow-sm"></div>
              <span className="text-xs font-medium text-on-surface-variant">Bright Orange, Pink</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
