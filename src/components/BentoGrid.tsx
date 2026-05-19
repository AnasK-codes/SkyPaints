import Image from "next/image";

export default function BentoGrid() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <h2 className="font-headline text-4xl md:text-5xl text-center mb-20 text-primary">Everything a Home Needs</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
        {/* Bento 1 */}
        <div className="md:col-span-2 md:row-span-2 bg-surface-container rounded-xl p-12 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-headline text-primary mb-4">The Architectural Series</h3>
            <p className="text-on-surface-variant max-w-xs">Ultra-matte finishes designed for modern structure and clarity.</p>
          </div>
          <div className="relative z-10 flex gap-4 mt-8">
            <span className="px-4 py-1 rounded-full border border-primary/20 text-xs font-bold text-primary">MATTE</span>
            <span className="px-4 py-1 rounded-full border border-primary/20 text-xs font-bold text-primary">SCUFF-PROOF</span>
          </div>
          <div className="absolute bottom-0 right-0 w-2/3 h-1/2 translate-y-12 translate-x-12 opacity-40 group-hover:scale-110 transition-transform">
          <Image alt="Modernist white architecture" fill className="object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw7nPrsSYWVuwdmsLxKZUlYioTU-wsXDGUybZ24ZcO16ZMkpOHQ041-WLmRg-tTDSYDfzeXgPMKFHq_Cf6T--6BC9wdDYnCPdf0_-u6AHfeHD26ZHiRIqca6aLGJ_LakeQxYcbg3hAjsz5BbHDJtoH22WULKrdOOS-Nf0zWYOXkkUAZlQgrUExJU5v9PD9xTrC9N7-MoosHPShtnhyvxq8GwPuwPoLJhJj1pWc84fLKy20T_S0l472BEd1-s9oGOjCxxEj5-fP9nI" />
        </div>
        </div>
        {/* Bento 2 */}
        <div className="md:col-span-2 bg-secondary-fixed rounded-xl p-8 flex items-center justify-between group cursor-pointer">
          <div>
            <h3 className="text-2xl font-headline text-on-secondary-fixed mb-2">Heritage Gloss</h3>
            <p className="text-on-secondary-fixed-variant text-sm">High-shine enamels for timeless woodwork.</p>
          </div>
          <span className="material-symbols-outlined text-4xl text-on-secondary-fixed group-hover:rotate-45 transition-transform">auto_awesome</span>
        </div>
        {/* Bento 3 */}
        <div className="md:col-span-1 bg-surface-container-highest rounded-xl p-8 flex flex-col justify-center text-center group cursor-pointer">
          <span className="material-symbols-outlined text-4xl text-primary mb-4 mx-auto">shield_with_heart</span>
          <h3 className="text-xl font-bold text-primary">Kitchen &amp; Bath</h3>
          <p className="text-xs text-on-surface-variant mt-2">Steam resistant &amp; antimicrobial.</p>
        </div>
        {/* Bento 4 */}
        <div className="md:col-span-1 bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
          <h3 className="text-xl font-bold">Exterior Guard</h3>
          <p className="text-xs opacity-80">Weather protection for up to 15 years.</p>
          <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-20">
          <Image alt="Modern dark blue exterior wall" fill className="object-cover object-right-bottom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMwnssgEWVXILsAk7IT1c8IsKitbx_kbKLr7ypG9HaGlH_nJZ8aU-RLj-z2wCxJopTl-5sDqwszfMRilRb1LyUdnmVY1zMuj3xP3_jgMx1Wsl1HuHcLKvf9Y7ptq3_ri0PU42DDi9Phw3jfb1O4j2hJ_PmdXpjZNVKJtkfq1ceRXFD5n9syl95j2RcIhqKIknzp_WjvaBzWCFSA3WQW-_Uu31TsLwiGUJNfRbWEKYoTD5OR5iiBVtrIR5yfsf62gJbDc6WR8BJQ3Q" />
        </div>
        </div>
      </div>
    </section>
  );
}
