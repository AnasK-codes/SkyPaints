"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScrollParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroImageRef.current) {
            const scrolled = window.scrollY;
            heroImageRef.current.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05) translateZ(0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScrollParallax, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollParallax);
    };
  }, []);

  return (
    <>
      <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed-dim">
        {/* TopNavBar */}
        <Navbar />
        <main className="overflow-hidden">
          {/* 1. About Hero Section */}
          <section className="relative min-h-[716px] flex items-center px-8 md:px-12 pt-40 pb-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                ref={heroImageRef}
                className="w-full h-full object-cover brightness-75 opacity-95 scale-105 will-change-transform"
                fetchPriority="high"
                data-alt="A luxurious high-ceiling living room with walls painted in a sophisticated, soft lavender matte finish. The sunlight streams through large floor-to-ceiling windows, casting gentle shadows. The furniture is minimalist and high-end, featuring deep violet velvet textures. The entire scene feels serene, ethereal, and meticulously curated for a premium architectural publication."
                src="/images/about-cover.png"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-4xl animate-fade-in-up">
              <span className="font-label text-primary font-bold tracking-[0.3em] uppercase mb-4 block">
                Artisan Finishes
              </span>
              <h1 className="font-display text-6xl md:text-8xl text-primary leading-tight mb-8">
                About <br />
                <span className="italic text-on-primary-container">
                  Skypaints
                </span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
                Bringing color, protection, and beauty to every home. We curate
                atmospheric depth for modern spaces through precision and
                artistic vision.
              </p>
            </div>
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-96 h-96 rounded-full bg-secondary-fixed/30 blur-[120px] animate-pulse"></div>
            </div>
          </section>
          {/* 2. Company Story Section */}
          <section className="px-8 md:px-12 py-32 max-w-7xl mx-auto">
            <div
              className="grid lg:grid-cols-12 gap-16 items-center animate-fade-in-up"
              style={{ animationDelay: "100ms", animationFillMode: "both" }}
            >
              <div className="lg:col-span-7">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] ambient-shadow">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Skypaints Factory"
                    fill

                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/images/factory.jpeg"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="font-display text-4xl md:text-5xl text-primary mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                  <p>
                    Skypaints was created with a simple vision: to make premium
                    painting and cleaning solutions accessible, reliable, and
                    beautiful for every home.
                  </p>
                  <p>
                    What started as a small factory in 2020 has evolved into a
                    comprehensive sanctuary for homeowners. From interior wall
                    paints to exterior protection, waterproofing, and color
                    guidance, we help you transform your space with absolute
                    confidence.
                  </p>
                  <div className="pt-4">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500"></div>
                      <span className="font-label font-bold text-primary uppercase tracking-widest">
                        The Legacy of Light
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 3. Mission and Vision Section */}
          <section className="bg-surface-container-low py-32">
            <div
              className="max-w-7xl mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-12 animate-fade-in-up"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              <div className="bg-surface-container-lowest p-12 rounded-xl ambient-shadow transform hover:-translate-y-2 transition-transform duration-500 border border-outline-variant/10">
                <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    auto_awesome
                  </span>
                </div>
                <h3 className="font-display text-3xl text-primary mb-6">
                  Our Mission
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  To elevate the human experience through color and protection,
                  providing innovative surface solutions that safeguard the home
                  while inspiring the soul.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-12 rounded-xl ambient-shadow transform hover:-translate-y-2 transition-transform duration-500 border border-outline-variant/10">
                <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-secondary text-3xl">
                    visibility
                  </span>
                </div>
                <h3 className="font-display text-3xl text-primary mb-6">
                  Our Vision
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  To become the global benchmark for atmospheric architecture,
                  where every wall tells a story of durability, sustainability,
                  and unparalleled aesthetic depth.
                </p>
              </div>
            </div>
          </section>
          {/* 4. What We Do Section */}
          <section className="px-8 md:px-12 py-32 max-w-7xl mx-auto">
            <div
              className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up"
              style={{ animationDelay: "300ms", animationFillMode: "both" }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
                Our Expertise
              </h2>
              <p className="text-on-surface-variant text-lg">
                Beyond just color, we provide technical excellence for every
                vertical and horizontal surface in your sanctuary.
              </p>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up"
              style={{ animationDelay: "400ms", animationFillMode: "both" }}
            >
              {/* Service Cards */}
              <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6">
                  format_paint
                </span>
                <h4 className="font-headline text-2xl text-primary mb-4">
                  Interior Painting
                </h4>
                <p className="text-on-surface-variant">
                  Sophisticated finishes that define your indoor atmosphere with
                  VOC-free purity.
                </p>
              </div>
              <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6">
                  shield
                </span>
                <h4 className="font-headline text-2xl text-primary mb-4">
                  Exterior Protection
                </h4>
                <p className="text-on-surface-variant">
                  Weather-resistant shields that maintain curb appeal against
                  the harshest elements.
                </p>
              </div>
              <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6">
                  water_drop
                </span>
                <h4 className="font-headline text-2xl text-primary mb-4">
                  Waterproofing
                </h4>
                <p className="text-on-surface-variant">
                  Advanced molecular barriers to keep structural integrity and
                  moisture at bay.
                </p>
              </div>
              <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6">
                  texture
                </span>
                <h4 className="font-headline text-2xl text-primary mb-4">
                  Distemper
                </h4>
                <p className="text-on-surface-variant">
                  Classic matte finishes reimagined with modern durability and
                  rich pigmentation.
                </p>
              </div>
              <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6">
                  cleaning_services
                </span>
                <h4 className="font-headline text-2xl text-primary mb-4">
                  Wall Cleaning
                </h4>
                <p className="text-on-surface-variant">
                  Specialized restoration services that bring back the luster of
                  your original paint.
                </p>
              </div>
              <div className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 rounded-lg">
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6">
                  palette
                </span>
                <h4 className="font-headline text-2xl text-primary mb-4">
                  Color Consultation
                </h4>
                <p className="text-on-surface-variant">
                  Expert guidance to help you select the perfect palette for
                  your lifestyle.
                </p>
              </div>
            </div>
          </section>
          {/* 5. Why Choose SkyPaint (Bento Grid Style) */}
          <section className="bg-primary text-white py-32 px-8 md:px-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
              <div className="absolute top-10 left-10 w-96 h-96 bg-primary-fixed rounded-full blur-[100px]"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-container rounded-full blur-[100px]"></div>
            </div>
            <div
              className="max-w-7xl mx-auto relative z-10 animate-fade-in-up"
              style={{ animationDelay: "500ms", animationFillMode: "both" }}
            >
              <div className="mb-16">
                <h2 className="font-display text-4xl md:text-5xl mb-6">
                  Why Skypaints?
                </h2>
                <p className="text-on-primary-container text-xl max-w-2xl">
                  The intersection of luxury aesthetics and engineering
                  performance.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-secondary-container font-bold text-4xl mb-4">
                    01
                  </div>
                  <h5 className="text-2xl font-headline mb-4">
                    Premium Quality
                  </h5>
                  <p className="text-on-primary-container">
                    We use high-viscosity resins and earth pigments for superior
                    coverage.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-secondary-container font-bold text-4xl mb-4">
                    02
                  </div>
                  <h5 className="text-2xl font-headline mb-4">
                    Affordable Luxury
                  </h5>
                  <p className="text-on-primary-container">
                    High-end aesthetics curated at price points that respect
                    your investment.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-secondary-container font-bold text-4xl mb-4">
                    03
                  </div>
                  <h5 className="text-2xl font-headline mb-4">
                    Weather Protection
                  </h5>
                  <p className="text-on-primary-container">
                    Engineered to withstand humidity, UV rays, and extreme
                    temperature shifts.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-secondary-container font-bold text-4xl mb-4">
                    04
                  </div>
                  <h5 className="text-2xl font-headline mb-4">
                    Wide Product Range
                  </h5>
                  <p className="text-on-primary-container">
                    From artisanal finishes to heavy-duty industrial coatings.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-secondary-container font-bold text-4xl mb-4">
                    05
                  </div>
                  <h5 className="text-2xl font-headline mb-4">
                    Customer First
                  </h5>
                  <p className="text-on-primary-container">
                    Our relationship begins when the paint is dry, with
                    comprehensive support.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-secondary-container font-bold text-4xl mb-4">
                    06
                  </div>
                  <h5 className="text-2xl font-headline mb-4">Consultation</h5>
                  <p className="text-on-primary-container">
                    We understand your project needs, surface requirements, and
                    recommend the right paint solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* 6. Stats Section */}
          <section className="py-24 px-8 md:px-12 bg-surface">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-5xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                  Happy Customers
                </div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">
                  1000+
                </div>
                <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                  Color Choices
                </div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                  Customer Satisfaction
                </div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">
                  5+
                </div>
                <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                  Years of Trust
                </div>
              </div>
            </div>
          </section>
          {/* 7. Team Section */}
          <section className="py-32 px-8 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
                  The Visionaries
                </h2>
                <p className="text-on-surface-variant text-lg">
                  Meet the experts behind the palettes and the science of
                  Skypaints.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="group">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 ambient-shadow">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    data-alt="A professional portrait of Juzer Malak, founder of SkyPaints."
                    src="images/founder.png"
                  />
                </div>
                <h5 className="font-headline text-xl text-primary">
                  Juzer Malak
                </h5>
                <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">
                  Founder &amp; Creative Lead
                </p>
              </div>
              {/* Team Member 2 */}
              <div className="group">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 ambient-shadow">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    data-alt="A portrait of Qutbuddin Malak, Outreach partner of SkyPaints."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDso8K7OvChX7qR__7ZKhJjJPyXAe-E8rQ3CBD_KQQNB6DHF8bRHNGsU5GKHwLoTPbMalmYv33UwvOALxFTg_MiZ_6nBaHXHGXmeYtVnfaQlIPDTegSJhLQ9YnaSJicCjfdG_OPLk48vsTkj4DZlC5EFLYa9wZIe1qnOmC5BDGhoAm0w8Rpn2z2DVNaK64dApoktxBov9vawcP5kv3Wd-Ui2bqPpkLsAhbUVpelWAau2kCyjP5Ijr5vXXPyrGNPdkuo0kfTv2L-NZ0"
                  />
                </div>
                <h5 className="font-headline text-xl text-primary">
                  Qutbuddin Malak
                </h5>
                <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">
                  Outreach Partner
                </p>
              </div>
            </div>
          </section>
          {/* 8. CTA Section */}
          <section className="py-32 px-8">
            <div className="max-w-5xl mx-auto editorial-gradient rounded-xl p-16 md:p-24 relative overflow-hidden text-center text-white ambient-shadow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h2 className="font-display text-4xl md:text-6xl mb-8 relative z-10 leading-tight">
                Let’s Paint Your
                <br />
                Dream Space
              </h2>
              <p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-12 relative z-10">
                Skypaints is here to help you choose the right products and
                colors for a life lived in high definition.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                <a
                  className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-label font-bold text-sm tracking-widest uppercase hover:bg-secondary transition-colors ambient-shadow"
                  href="/products"
                >
                  Explore Products
                </a>
                <a
                  className="border border-white/20 text-white px-10 py-4 rounded-full font-label font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
                  href="/contact"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
