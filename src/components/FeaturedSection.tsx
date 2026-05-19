import Image from "next/image";

export default function FeaturedCarousel() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div className="space-y-4">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">Season of Serenity</h2>
          <p className="text-on-surface-variant max-w-lg">Explore curated palettes designed to bring the tranquility of nature into your private sanctuary.</p>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="p-4 rounded-full bg-surface-container hover:bg-surface-container-high text-primary transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="p-4 rounded-full bg-surface-container hover:bg-surface-container-high text-primary transition-all">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-primary/5 transition-transform hover:-translate-y-2">
          <Image alt="Golden Hour Palette" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACNezK4UKE0imkRuFUTH873h8KbB-qVZnS0_FJiaW41watg-FDSCRuUHx3ttk7mr7HFb-a-_ROiNYqJhpleJS2-D3nEqUUY9v3Z5t5r_s5AA0RpkHkc03NjyUc4vBjoY1Av1tdegidffiOP26TsNh9qVq2g7iXAVP-w9fZijDlqpftPrLnDYW80_0mb3_5hMTqC9fuYjI9EHSDRdMuZ6vfJ5EENtTgyR-dgOnqUdbNWnrgLK-6NxZK0JDRgtvaz4U__d6B137i4eY" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-on-primary">
            <span className="text-sm font-medium tracking-widest uppercase opacity-70 mb-2 block">Warmth</span>
            <h3 className="font-headline text-3xl mb-4">Golden Hour</h3>
            <button className="flex items-center gap-2 text-sm font-bold border-b border-on-primary/30 pb-1">Discover Palette</button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-primary/5 transition-transform hover:-translate-y-2 translate-y-8">
          <Image alt="Midnight Mist Palette" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj1NfQhnxPOjiSPDeosjPn_fEvA9ivP3oeb_RpXbroCozPaVx7qm9L1iDCniciIXSOnWkoww0CL2gUk6o2AByJMyIoowaXYo87WP0hoXkaZzi4k0Idmn9sJJ0DpI6dcbSgnko4M8cpWwDf-ajE2jVWk-cFkmpRvVXQ3Nt6nPYwO_zaWUTLhViHStMUO6_SU0kfr0C_ybJMrNbryMCJG-XPdePJ540u72kaHIe5DbAQtzSESYZRCdAYMFgh4QPcibcP3KtF-CIi1XQ" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-on-primary">
            <span className="text-sm font-medium tracking-widest uppercase opacity-70 mb-2 block">Depth</span>
            <h3 className="font-headline text-3xl mb-4">Midnight Mist</h3>
            <button className="flex items-center gap-2 text-sm font-bold border-b border-on-primary/30 pb-1">Discover Palette</button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-primary/5 transition-transform hover:-translate-y-2">
          <Image alt="Ethereal Sage Palette" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFt2yaSRZuEf6krSTj5Eh1qypJ7Gxh1NsWdhumEPibOWLVCEA9K69Hl9fCeMt5exjrtiHrgthh30GY5YFm0cT5z3ivTkYsjRIR7jaSVcKffLIgvq5UGsZntvcQEqIe4ybd_R7uUvIF0WjkYOuEpdlv05ZQ5vsWF5E0sDnp9-tk8SdGAKDSwUrKUEAQj_WYEfpyoIwOxYiKy5-CUqbqzqdHEM7JdW-Q3Iy6q5ytkv6bdhPF5lhNJRzg2sjO6U72Uk0eTUm8NNApzfs" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-on-primary">
            <span className="text-sm font-medium tracking-widest uppercase opacity-70 mb-2 block">Balance</span>
            <h3 className="font-headline text-3xl mb-4">Ethereal Sage</h3>
            <button className="flex items-center gap-2 text-sm font-bold border-b border-on-primary/30 pb-1">Discover Palette</button>
          </div>
        </div>
      </div>
    </section>
  );
}
