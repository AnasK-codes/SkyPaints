import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "15 Modern Wall Texture Designs | Skypaints",
  description: "Give your bedroom a luxury makeover with these 15 modern wall texture paint designs.",
};

export default function WallTextureDesignsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-x-hidden">
        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Inspiration & Planning</span>
          <h1 className="text-5xl lg:text-7xl font-headline tracking-tight text-primary leading-tight mb-8">
            15 Modern Wall Texture Designs for a Luxury Bedroom Makeover
          </h1>
          <div className="flex items-center justify-center gap-4 text-on-surface-variant font-medium">
            <span>By Skypaints Designers</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl mb-24 relative h-[600px] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <Image
            alt="A close up of a luxurious metallic textured accent wall in a modern bedroom"
            src="/images/blog-texture-designs.png"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-headline prose-headings:text-primary prose-p:text-on-surface-variant prose-a:text-secondary hover:prose-a:text-primary transition-colors animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <p className="lead text-2xl text-primary font-medium mb-8">
            Flat, matte walls are safe, but they rarely make a statement. If you want to transform your bedroom from a simple sleeping space into a luxurious, 5-star hotel-like retreat, wall textures are your best friend. They add depth, character, and a tactile quality that ordinary paint simply cannot achieve.
          </p>

          <h2>Why Choose Textured Walls?</h2>
          <p>
            Beyond aesthetics, textured walls are incredibly practical. They are masters of disguise, hiding minor architectural flaws, uneven plastering, or old cracks that flat paint would highlight. Plus, they interact beautifully with bedroom lighting—especially warm bedside lamps—creating dramatic shadows and highlights.
          </p>

          <h2>Top Modern Texture Designs</h2>
          
          <h3>1. The Classic Spatula / Stucco</h3>
          <p>
            Inspired by Venetian plaster, this technique uses a trowel to create overlapping sweeps of paint. It mimics the look of natural stone or aged plaster, bringing a rustic yet highly sophisticated European charm to your bedroom. 
          </p>

          <h3>2. Metallic Glazes & Ombre</h3>
          <p>
            For a touch of pure glamour, metallic textures are unmatched. Gold, copper, or silver glazes are applied over a base color and manipulated with a sponge or rag. For an ethereal look, an Ombre texture—where a dark color seamlessly fades into a lighter metallic hue towards the ceiling—creates an illusion of height.
          </p>

          <h3>3. The Raw Concrete Look</h3>
          <p>
            Industrial chic is highly popular in modern urban apartments. A faux concrete texture behind the headboard offers a cool, minimalist, and slightly edgy vibe that pairs beautifully with warm wood tones and soft, plush bedding.
          </p>

          <div className="bg-surface-container-low p-8 rounded-3xl my-12 border-l-4 border-secondary">
            <h3 className="text-secondary mt-0">Designer Tip: The Single Accent Wall</h3>
            <p className="mb-0">Texture is powerful. Applying it to all four walls of a bedroom can make the space feel cramped and overwhelming. Stick to one accent wall—almost always the wall directly behind your bed’s headboard—to create a stunning focal point.</p>
          </div>

          <h3>4. Criss-Cross & Linen Textures</h3>
          <p>
            Using specialized brushes, painters can create a woven, fabric-like finish on the walls. This linen texture adds a soft, tailored, and extremely cozy feel to the bedroom, perfectly complementing fabric headboards and heavy drapes.
          </p>

          <h3>5. Dapple & Sponge Effects</h3>
          <p>
            One of the easiest and most affordable textures, dappling involves sponging a lighter or darker topcoat over a solid base. It creates a cloudy, mottled effect that is incredibly soothing—ideal for a restful bedroom environment.
          </p>

          <h2>Maintenance and Care</h2>
          <p>
            While textures look amazing, they can catch dust. A simple sweep with a soft microfiber duster once a month is usually all it takes to keep them looking fresh. Avoid scrubbing textured walls with hard brushes, as this can damage the raised patterns.
          </p>
        </article>

        {/* CTA */}
        <section className="max-w-4xl mx-auto mt-24 bg-primary-container rounded-[3rem] p-12 md:p-16 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-4xl font-headline text-on-primary mb-6">Ready to add dimension to your space?</h2>
          <p className="text-xl text-on-primary-container mb-10 max-w-2xl mx-auto">
            Browse our exclusive catalogue of premium texture paints and discover the perfect finish for your luxury makeover.
          </p>
          <Link href="/products" className="bg-secondary-fixed text-on-secondary-fixed rounded-full px-10 py-5 font-bold text-lg hover:bg-secondary-fixed-dim transition-colors shadow-lg inline-block">
            View Texture Paint Catalogue
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
