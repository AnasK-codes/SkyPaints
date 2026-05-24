import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Top 5 Heat-Reflective Exterior Paints | Skypaints",
  description: "Keep your Indian home cool this summer with our top 5 heat-reflective exterior paints.",
};

export default function HeatReflectivePaintsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-x-hidden">
        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Weather & Durability</span>
          <h1 className="text-5xl lg:text-7xl font-headline tracking-tight text-primary leading-tight mb-8">
            Top 5 Heat-Reflective Exterior Paints to Keep Your Indian Home Cool
          </h1>
          <div className="flex items-center justify-center gap-4 text-on-surface-variant font-medium">
            <span>By Skypaints Experts</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl mb-24 relative h-[600px] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <Image
            alt="A beautifully painted bright exterior of an Indian home basking in sunlight"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS4oNHilHUZbxIVEo8szEBxdU-LwtK7s5Le6fFL3KXuotMQ-7udnp7smueumDEcpAekOm6DbSqjYG4Mj8kxTFlysy95ksyt-ivB73UazB7uERHcItqxocXdC9021BvsVPE80GTQqWXa9kPF84LF_bIDBUwO0Pkoyra4xEAHayLmUotnNKJAngDH2ubfpODnhceq0SmFJZ2JZOON-s-Qg_FqtdTU5WU-D3COWqKMq7CpcgmvMZivkpvJFUAJUccyrkfADUWlYMGQJ8"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-headline prose-headings:text-primary prose-p:text-on-surface-variant prose-a:text-secondary hover:prose-a:text-primary transition-colors animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <p className="lead text-2xl text-primary font-medium mb-8">
            Indian summers are notoriously harsh. With temperatures routinely crossing 40°C (104°F) in many parts of the country, keeping your home cool becomes a top priority. While air conditioning is a standard solution, your first line of defense is actually right on your exterior walls: heat-reflective paint.
          </p>

          <h2>What is Heat-Reflective Paint?</h2>
          <p>
            Standard exterior paints absorb a significant amount of solar radiation, transferring that heat directly through your walls and into your living spaces. Heat-reflective exterior paints (also known as cool roof or sun-reflective paints) are engineered with specialized solar-reflective pigments. These pigments bounce infrared radiation back into the atmosphere, significantly reducing the surface temperature of your exterior walls.
          </p>

          <h2>The Benefits of Heat-Reflective Paint in India</h2>
          <ul>
            <li><strong>Lower Indoor Temperatures:</strong> Can reduce indoor temperatures by up to 5°C.</li>
            <li><strong>Reduced Energy Bills:</strong> Less reliance on ACs translates to massive savings on electricity.</li>
            <li><strong>Increased Wall Lifespan:</strong> Thermal expansion and contraction cause micro-cracks. Keeping the walls cooler reduces this stress.</li>
          </ul>

          <div className="bg-surface-container-low p-8 rounded-3xl my-12 border-l-4 border-secondary">
            <h3 className="text-secondary mt-0">Pro Tip: The Roof Matters Most</h3>
            <p className="mb-0">While painting exterior walls is crucial, don't forget your terrace! A significant portion of heat enters through flat concrete roofs. Applying a specialized high-albedo roof coating can drastically cut down top-floor temperatures.</p>
          </div>

          <h2>Top 5 Features to Look For</h2>
          <ol>
            <li><strong>High SRI (Solar Reflectance Index):</strong> The higher the SRI, the better the paint is at rejecting solar heat. Look for an SRI of 100 or above for maximum efficiency.</li>
            <li><strong>Elastomeric Properties:</strong> The paint should have high stretchability to bridge existing hairline cracks and prevent new ones from forming due to temperature fluctuations.</li>
            <li><strong>Anti-Fungal & Anti-Algal Protection:</strong> Summer heat is often followed by the monsoon. The paint must be able to withstand extreme humidity and prevent black spots.</li>
            <li><strong>Dust Pick-up Resistance (DPUR):</strong> A white or light-colored paint reflects heat best, but it also shows dirt easily. DPUR technology keeps the walls looking fresh for years.</li>
            <li><strong>Waterproofing Guarantee:</strong> Excellent heat reflection should go hand-in-hand with robust waterproofing capabilities.</li>
          </ol>

          <h2>Color Choices for Maximum Cooling</h2>
          <p>
            The laws of physics apply here: lighter colors reflect more light and heat. While brilliant white is the absolute champion of heat reflection, modern pigment technology allows for pastel shades—like soft yellows, pale blues, and mint greens—that offer excellent reflective properties without blinding your neighbors.
          </p>
        </article>

        {/* CTA */}
        <section className="max-w-4xl mx-auto mt-24 bg-primary-container rounded-[3rem] p-12 md:p-16 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-4xl font-headline text-on-primary mb-6">Ready to beat the heat this summer?</h2>
          <p className="text-xl text-on-primary-container mb-10 max-w-2xl mx-auto">
            Protect your home from extreme temperatures and reduce your energy bills with our advanced heat-reflective exterior coatings.
          </p>
          <Link href="/products" className="bg-secondary-fixed text-on-secondary-fixed rounded-full px-10 py-5 font-bold text-lg hover:bg-secondary-fixed-dim transition-colors shadow-lg inline-block">
            Explore Weather-Proof Paints
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
