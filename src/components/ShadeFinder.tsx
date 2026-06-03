import React from 'react';

export default function ShadeFinder() {
  return (
    <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto scroll-mt-32 animate-fade-in-up" id="moods" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
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
  );
}
