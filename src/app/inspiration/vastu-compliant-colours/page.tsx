import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Top 10 Vastu-Compliant Wall Colours | Skypaints",
  description: "Discover the best Vastu-compliant colours for your home to invite wealth, peace, and positivity in 2026.",
};

export default function VastuColoursPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-x-hidden">
        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Inspiration & Planning</span>
          <h1 className="text-5xl lg:text-7xl font-headline tracking-tight text-primary leading-tight mb-8">
            Top 10 Vastu-Compliant Wall Colours for Wealth & Positivity
          </h1>
          <div className="flex items-center justify-center gap-4 text-on-surface-variant font-medium">
            <span>By Skypaints Experts</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl mb-24 relative h-[600px] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <Image
            alt="A beautifully lit living room featuring a calming vastu-compliant pale yellow wall"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyWkVnya0FbXD62uMzuyBa1KJv8ZGhXq_S49sDzZRgzFVa593hX35mqemZfKjztZyCQP46iLZWIn-Hv1KIpwsADdHrzsY6E5fvwzidCF2nYJdgtgZwRBxs_zOgaopR0Lvw4256WygriDnmlPJGyFg5XSeON4xDdxoX_bDvxoQMfi-gGmaDkg1IeqTW3duaYLfnd7cTVHfztWiac8q4hzN0ngvoI4y_6-J6GRFb-x3I-NyyeYxGIRaapgjclZ76M874o7_1Y0SfdBY"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-headline prose-headings:text-primary prose-p:text-on-surface-variant prose-a:text-secondary hover:prose-a:text-primary transition-colors animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <p className="lead text-2xl text-primary font-medium mb-8">
            In India, a home is more than just brick and mortar; it's a sanctuary of energy. Vastu Shastra, the ancient Indian science of architecture, emphasizes the profound impact colors have on our psychological well-being and the cosmic energy (Prana) of a space.
          </p>

          <h2>Why Vastu Colours Matter</h2>
          <p>
            According to Vastu, every direction is governed by a specific element (Water, Fire, Earth, Air, and Space) and a planetary lord. Using the correct colors harmonizes these elements, inviting prosperity, good health, and peace, while incorrect colors can lead to energetic imbalances.
          </p>

          <h2>Room-by-Room Vastu Colour Guide</h2>
          
          <h3>1. The Master Bedroom (South-West)</h3>
          <p>
            The master bedroom is the zone of stability and relationships. The Earth element dominates here.
            <br /><strong>Ideal Colours:</strong> Earthy browns, warm beige, and soft peaches.
            <br /><strong>Avoid:</strong> Bright reds (too aggressive) or deep blues (represents water, which destabilizes earth).
          </p>

          <h3>2. The Living Room (North-West or East)</h3>
          <p>
            This is where you entertain guests and socialize. It should have an inviting, expansive energy.
            <br /><strong>Ideal Colours:</strong> White, pale yellow, and soft florals. Yellow invokes the sun's energy, bringing joy and warmth.
          </p>

          <h3>3. The Kitchen (South-East)</h3>
          <p>
            The South-East is the zone of Agni (Fire). Your kitchen colors should honor this element to ensure health and abundance.
            <br /><strong>Ideal Colours:</strong> Vibrant oranges, saffron, warm pinks, and subtle reds. 
            <br /><strong>Avoid:</strong> Black and blue, as water extinguishes fire.
          </p>

          <div className="bg-surface-container-low p-8 rounded-3xl my-12 border-l-4 border-secondary">
            <h3 className="text-secondary mt-0">Vastu Myth-Busting</h3>
            <p className="mb-0">You don't need to paint the entire room a bright, overwhelming color to be Vastu-compliant! A neutral room with a single Vastu-aligned accent wall, or even Vastu-colored decor and furnishings, is perfectly effective.</p>
          </div>

          <h3>4. The Puja Room (North-East)</h3>
          <p>
            The North-East (Ishan Kona) is the most sacred zone of the house, governed by Water and Space. It requires utmost purity and tranquility.
            <br /><strong>Ideal Colours:</strong> Pure white, light yellow, or serene light blue.
          </p>

          <h3>5. Children’s Bedroom (West)</h3>
          <p>
            Colors here should stimulate creativity, focus, and joy without causing hyperactivity.
            <br /><strong>Ideal Colours:</strong> Soft greens (for growth and study focus) and cheerful pastel blues.
          </p>

          <h2>The Universal Balancer: White</h2>
          <p>
            When in doubt, white is the safest Vastu color. It represents purity, peace, and the Space element. It acts as a blank canvas, allowing positive energy to flow freely throughout the house without obstruction.
          </p>
        </article>

        {/* CTA */}
        <section className="max-w-4xl mx-auto mt-24 bg-primary-container rounded-[3rem] p-12 md:p-16 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-4xl font-headline text-on-primary mb-6">Bring harmony to your walls.</h2>
          <p className="text-xl text-on-primary-container mb-10 max-w-2xl mx-auto">
            Browse our carefully curated shade card to find the perfect Vastu-compliant tones for every direction of your home.
          </p>
          <Link href="/tools#vastu" className="bg-secondary-fixed text-on-secondary-fixed rounded-full px-10 py-5 font-bold text-lg hover:bg-secondary-fixed-dim transition-colors shadow-lg inline-block">
            Browse Vastu Shade Card
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
