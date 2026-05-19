import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="mt-32 flex flex-col lg:flex-row min-h-screen bg-surface-container-low overflow-hidden">
      <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center space-y-8">
        <span className="text-secondary-container font-bold tracking-[0.2em] uppercase text-sm">Our Philosophy</span>
        <h2 className="font-headline text-5xl md:text-7xl text-primary leading-tight">Light is the <br/> <span className="italic font-light">final layer</span>.</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
          We don&apos;t just sell color; we sell atmosphere. Skypaints are formulated with high-refraction minerals that interact with daylight, changing their mood from dawn to dusk.
        </p>
        <div className="pt-8">
          <a className="group flex items-center gap-4 text-primary font-bold text-lg" href="#">
            Read the Skypaints Story
            <span className="material-symbols-outlined bg-primary text-on-primary p-2 rounded-full group-hover:translate-x-2 transition-transform">east</span>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[500px]">
        <Image alt="Painter applying smooth lavender-tinted paint" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7fWuvaySJL6PljwBCEB6WIzM36nCF8TzRE8mfyOLqSevxf0Z4VRZ7KuBn9UQF3AUb3aqurrBp2AvqsMsHS3Z_vJ2sMNY2tu6EPUINoVzWKOBhfKRPiEZNz7n9rcXSehaB5QjDLbF1pLvprGQXsrRqsm450v8uptijGuGa7RE3u0HAWZuwSbhKaBOlTosjxCV_0DRpVO936GT2ENyK4UO9uj35EbMG4BQc1ePAeqlTN9oph3OXTkQM9jLpjyJJYt_KE2sXRiSjtEE" />
        <div className="absolute top-12 left-12 p-8 bg-white/40 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl max-w-xs hidden md:block">
          <p className="text-primary font-serif italic text-xl">&quot;The way the shadow moves across these walls is pure art.&quot;</p>
          <p className="mt-4 text-sm font-bold text-on-surface-variant">— Julianne V., Architect</p>
        </div>
      </div>
    </section>
  );
}
