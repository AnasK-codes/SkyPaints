import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Trending Interior Colour Combinations | Skypaints",
  description: "Discover the hottest interior colour combinations for Indian living rooms in 2026.",
};

export default function TrendingCombinationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-x-hidden">
        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Trends & Ideas</span>
          <h1 className="text-5xl lg:text-7xl font-headline tracking-tight text-primary leading-tight mb-8">
            Trending Interior Colour Combinations for Indian Living Rooms
          </h1>
          <div className="flex items-center justify-center gap-4 text-on-surface-variant font-medium">
            <span>By Skypaints Designers</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl mb-24 relative h-[600px] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <Image
            alt="A stunning modern living room with a two-tone colour combination"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7P521h11q4qYGpM0_t1AM-e5psuxAIFyZNS50mqwLUkKcE5yQnDkRqWAcPl3QHeTYxrpMrhnX5WaOdfHvn-fFE6Q-xaTh3mENG6x5d4k1vrP6BfCZUKX9I_lBaZ6IL4j4P4b8UyU15iig6ADefcNge4SF4LTSFzK72IgZJX4JU8yoNp_8oKlK1uYIeHrfozY3mPs5UOTZ16SgVNHT8IQYjrHQ-aXtdymif_jgw5DA9Ev5823oKZd33Oy4QDfT7kjXgHJ_tJPtKGk"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-headline prose-headings:text-primary prose-p:text-on-surface-variant prose-a:text-secondary hover:prose-a:text-primary transition-colors animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <p className="lead text-2xl text-primary font-medium mb-8">
            Your living room is the heart of your home. It's where you host Diwali parties, unwind after a long commute, and gather for family movie nights. The color palette you choose sets the stage for all these memories. Here are the most striking, modern color combinations dominating Indian interiors right now.
          </p>

          <h2>1. Earthy Terracotta & Warm White</h2>
          <p>
            A nod to traditional Indian roots but executed with a modern twist. Terracotta brings immense warmth and a grounded, rustic charm. Pairing it with a creamy, warm white prevents the room from feeling too dark or enclosed.
            <br /><strong>Best For:</strong> Rooms with wooden furniture, brass accents, and plenty of indoor plants.
          </p>

          <h2>2. Deep Teal & Mustard Yellow</h2>
          <p>
            This is a bold, high-contrast jewel-tone combination that screams luxury. The deep teal acts as a sophisticated, moody backdrop, while pops of mustard yellow (via painted accents, cushions, or a statement armchair) inject vibrant energy.
            <br /><strong>Best For:</strong> Formal living rooms with metallic gold decor and velvet upholstery.
          </p>

          <h2>3. Sage Green & Soft Grey</h2>
          <p>
            As urban living gets more chaotic, people are craving serenity. Sage green brings the tranquility of nature indoors. Paired with a soft, misty grey, this combination is incredibly soothing and modern.
            <br /><strong>Best For:</strong> Minimalist or Scandinavian-inspired Indian homes. It works beautifully with light oak wood and jute rugs.
          </p>

          <div className="bg-surface-container-low p-8 rounded-3xl my-12 border-l-4 border-secondary">
            <h3 className="text-secondary mt-0">The 60-30-10 Rule</h3>
            <p className="mb-0">When using a combination, stick to this designer secret: 60% of the room should be the dominant color (usually the lighter shade), 30% the secondary color (the accent wall), and 10% the bold accent color (decor and textiles).</p>
          </div>

          <h2>4. Charcoal & Blush Pink</h2>
          <p>
            A masterclass in balancing masculine and feminine energies. The dark, brooding charcoal provides depth and drama, while soft blush pink adds a layer of unexpected softness and elegance.
            <br /><strong>Best For:</strong> Contemporary apartments looking for a chic, sophisticated edge.
          </p>

          <h2>5. classic Indigo & Ivory</h2>
          <p>
            Indigo is deeply woven into India's textile history. Using a rich indigo blue on an accent wall, framed by crisp ivory, creates a timeless, regal aesthetic. It’s a cooler palette that feels refreshing during hot summers.
            <br /><strong>Best For:</strong> Traditional or transitional homes. It pairs exceptionally well with antique wooden furniture and silver artifacts.
          </p>

        </article>

        {/* CTA */}
        <section className="max-w-4xl mx-auto mt-24 bg-primary-container rounded-[3rem] p-12 md:p-16 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-4xl font-headline text-on-primary mb-6">Can't decide on a combination?</h2>
          <p className="text-xl text-on-primary-container mb-10 max-w-2xl mx-auto">
            Take the guesswork out of painting. Upload a photo of your room and try out these trending combinations with our Virtual Visualizer.
          </p>
          <Link href="/shades" className="bg-secondary-fixed text-on-secondary-fixed rounded-full px-10 py-5 font-bold text-lg hover:bg-secondary-fixed-dim transition-colors shadow-lg inline-block">
            Try Virtual Visualizer
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
