import React from 'react';

export default function ShadeFinder() {
  return (
    <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto scroll-mt-32 animate-fade-in-up" id="moods" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
      <h2 className="font-headline text-4xl text-primary mb-12 text-center">Set the Atmosphere</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Mood 1 */}
        <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/4] p-8 md:p-10 flex flex-col justify-between group cursor-pointer shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-[#D9E2F2] to-[#C1CCE6]">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-[#2A2E4D] border border-white/10">
            <span className="material-symbols-outlined text-xl">air</span>
          </div>
          <div>
            <h3 className="font-headline text-3xl text-[#2A2E4D] mb-3">Calm & Serene</h3>
            <p className="font-body text-sm text-[#2A2E4D]/80 leading-relaxed">Soft lavenders, cool blues, and gentle neutrals for restful spaces.</p>
          </div>
        </div>
        
        {/* Mood 2 */}
        <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/4] p-8 md:p-10 flex flex-col justify-between group cursor-pointer shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-[#FDF0D9] to-[#EED6A5]">
          <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-[#5A4018] border border-black/5">
            <span className="material-symbols-outlined text-xl">wb_sunny</span>
          </div>
          <div>
            <h3 className="font-headline text-3xl text-[#5A4018] mb-3">Warm & Inviting</h3>
            <p className="font-body text-sm text-[#5A4018]/80 leading-relaxed">Earthy terracottas, rich ochres, and creamy off-whites for gathering areas.</p>
          </div>
        </div>
        
        {/* Mood 3 */}
        <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/4] p-8 md:p-10 flex flex-col justify-between group cursor-pointer shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-[#3B225F] to-[#251040]">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/90 border border-white/10">
            <span className="material-symbols-outlined text-xl">auto_awesome</span>
          </div>
          <div>
            <h3 className="font-headline text-3xl text-white mb-3">Bold & Dramatic</h3>
            <p className="font-body text-sm text-white/80 leading-relaxed">Deep charcoals, royal purples, and intense emeralds for statement rooms.</p>
          </div>
        </div>
        
        {/* Mood 4 */}
        <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/4] p-8 md:p-10 flex flex-col justify-between group cursor-pointer shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-[#D9EFD6] to-[#A8CFA1]">
          <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-[#2A4D2E] border border-black/5">
            <span className="material-symbols-outlined text-xl">psychiatry</span>
          </div>
          <div>
            <h3 className="font-headline text-3xl text-[#2A4D2E] mb-3">Fresh & Natural</h3>
            <p className="font-body text-sm text-[#2A4D2E]/80 leading-relaxed">Sage greens, botanical hues, and crisp whites to bring the outdoors in.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
