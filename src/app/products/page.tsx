"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const scrollToCategory = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 100; // 100px offset for sticky navbar
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const PlaceholderImage = ({
  icon,
  bgClass,
  size = "text-5xl",
}: {
  icon: string;
  bgClass: string;
  size?: string;
}) => (
  <div
    className={`w-full h-full flex items-center justify-center ${bgClass} rounded-2xl`}
  >
    <span
      className={`material-symbols-outlined ${size} opacity-30 mix-blend-multiply`}
    >
      {icon}
    </span>
  </div>
);

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-surface selection:bg-primary-fixed selection:text-primary overflow-x-hidden">
        {/* SECTION 1: HERO SECTION */}
        <section className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div className="space-y-8 z-10">
              <span className="font-label text-sm uppercase tracking-widest text-primary/70 font-semibold border border-primary/20 px-4 py-2 rounded-full">
                Our Collection
              </span>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-primary tracking-tight leading-[1.1]">
                Every finish your surface needs.
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                Explore Skypaints' complete range of emulsions, oil paint,
                Taarpin, distemper, synthetic enamel, waterproofing, putty, lime
                wash, tile grout, stainers, and cleaning products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToCategory("shop-by-category")}
                  className="bg-primary text-on-primary px-8 py-4 rounded-full font-label font-medium shadow-ambient shadow-ambient-hover transition-all duration-300 text-center hover:bg-primary/90"
                >
                  Explore Categories
                </button>
                <button
                  onClick={() => scrollToCategory("shop-by-category")}
                  className="border border-outline-variant/30 text-primary hover:bg-surface-container-low px-8 py-4 rounded-full font-label font-medium transition-all duration-300 text-center"
                >
                  View Price List
                </button>
              </div>
            </div>

            {/* Right side: Premium Collage */}
            <div className="relative rounded-[2rem] bg-surface-container-low shadow-elevated p-6 grid grid-cols-2 grid-rows-2 gap-4 border border-outline-variant/10">
              <div className="relative rounded-2xl overflow-hidden group aspect-square">
                <Image
                  src="/images/products-hero/range-of-emulsions.png"
                  alt="Range of Emulsions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-headline text-on-primary text-xl leading-tight">
                    Premium Emulsions
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group aspect-square">
                <Image
                  src="/images/products-hero/range-of-putty.png"
                  alt="Putty Range"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-headline text-on-primary text-xl leading-tight">
                    Putty Range
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group aspect-square">
                <Image
                  src="/images/products-hero/range-of-waterproofing.png"
                  alt="Waterproofing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-headline text-on-primary text-xl leading-tight">
                    Waterproofing
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group aspect-square">
                <Image
                  src="/images/products-hero/sky-neo-range.png"
                  alt="Sky Neo Range"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-headline text-on-primary text-xl leading-tight">
                    Sky Neo Range
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SHOP BY CATEGORY */}
        <section
          id="shop-by-category"
          className="px-8 md:px-16 lg:px-24 mb-24 max-w-[1600px] mx-auto animate-fade-in-up"
          style={{ animationDelay: "100ms", animationFillMode: "both" }}
        >
          <div className="mb-12">
            <h2 className="font-headline text-4xl text-primary mb-4">
              Shop by category
            </h2>
            <p className="font-body text-on-surface-variant text-lg max-w-2xl">
              Choose a product category and view all related Skypaints products
              with their descriptions, sizes, pricing, and usage details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Emulsions (Large) */}
            <div className="lg:col-span-2 bg-primary text-on-primary rounded-[32px] p-10 md:p-12 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-700"></div>
              <div>
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="material-symbols-outlined text-4xl opacity-80">
                    format_paint
                  </span>
                  <span className="font-label text-sm uppercase tracking-wider opacity-80">
                    4 Products
                  </span>
                </div>
                <h3 className="font-headline text-4xl mb-4 relative z-10">
                  Emulsions
                </h3>
                <p className="font-body text-on-primary-container text-lg mb-8 max-w-md relative z-10">
                  Premium interior and exterior wall finishes for smooth, rich,
                  durable walls.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("emulsions")}
                className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-lg relative z-10"
              >
                View All Emulsions
              </button>
            </div>

            {/* 2. Oil Paint */}
            <div className="bg-primary-fixed text-on-primary-fixed rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-3xl opacity-70">
                    opacity
                  </span>
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    2 Products + Table
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">Oil Paint</h3>
                <p className="font-body text-on-primary-fixed-variant mb-8 text-sm">
                  Paint oil and Taarpin products for utility, application,
                  thinning, and professional paint work.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("oil-paint")}
                className="bg-surface-container-lowest text-primary px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View Oil Paint Range
              </button>
            </div>

            {/* 3. Distemper */}
            <div className="bg-[#FDF5E6] text-[#855300] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-3xl opacity-70">
                    texture
                  </span>
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    2 Products + Table
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">Distemper</h3>
                <p className="font-body text-[#855300]/80 mb-8 text-sm">
                  Economical and smooth wall coatings for clean, fresh,
                  budget-friendly interiors.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("distemper")}
                className="bg-surface-container-lowest text-[#855300] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Distemper
              </button>
            </div>

            {/* 4. Synthetic Enamel */}
            <div className="bg-[#FFDAB9] text-[#684000] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-3xl opacity-70">
                    brush
                  </span>
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    4 Products
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">
                  Synthetic Enamel
                </h3>
                <p className="font-body text-[#684000]/80 mb-8 text-sm">
                  Glossy durable finishes for metal, wood, primers, varnish, and
                  utility surfaces.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("synthetic-enamel")}
                className="bg-surface-container-lowest text-[#684000] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Enamel
              </button>
            </div>

            {/* 5. Waterproofing */}
            <div className="bg-[#E6F0FA] text-[#003366] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-3xl opacity-70">
                    water_drop
                  </span>
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    3 Products
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">Waterproofing</h3>
                <p className="font-body text-[#003366]/80 mb-8 text-sm">
                  Protection for roofs, terraces, damp walls, seepage, and
                  exterior surfaces.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("waterproofing")}
                className="bg-surface-container-lowest text-[#003366] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Waterproofing
              </button>
            </div>

            {/* 6. Putty, Lime Wash & Tile Grout */}
            <div className="bg-surface-container-highest text-on-surface rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-3xl opacity-70">
                    layers
                  </span>
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    4 Products
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">Putty & Grout</h3>
                <p className="font-body text-on-surface-variant mb-8 text-sm">
                  Base preparation and finishing solutions for smooth walls and
                  tile joints.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("putty-grout")}
                className="bg-surface-container-lowest text-primary px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm border border-outline-variant/20"
              >
                View All Putty & Grout
              </button>
            </div>

            {/* 7. Stainers */}
            <div className="bg-[#FBE4E4] text-[#93000A] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-3xl opacity-70">
                    invert_colors
                  </span>
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    2 Products
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">Stainers</h3>
                <p className="font-body text-[#93000A]/80 mb-8 text-sm">
                  Tinting and shade-control products for colour customization
                  and fine finishing.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("stainers")}
                className="bg-surface-container-lowest text-[#93000A] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Stainers
              </button>
            </div>

            {/* 8. Cleaning Products */}
            <div className="bg-secondary-fixed text-on-secondary-fixed rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-3xl opacity-70">
                    cleaning_services
                  </span>
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    9 Products + Table
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">
                  Cleaning Products
                </h3>
                <p className="font-body text-on-secondary-fixed-variant mb-8 text-sm">
                  Mr. Shine cleaning range for hygiene, floors, utensils,
                  fabrics, washrooms, and daily use.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("cleaning")}
                className="bg-surface-container-lowest text-on-secondary-fixed px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View Cleaning Range
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: CATEGORY FILTER BAR */}
        <section
          className="px-8 md:px-16 lg:px-24 mb-24 max-w-[1600px] mx-auto sticky top-24 z-40 animate-fade-in-up"
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          <div className="bg-surface-container-lowest/80 backdrop-blur-xl rounded-full p-2 shadow-ambient border border-outline-variant/20 flex gap-2 overflow-x-auto no-scrollbar">
            <button className="whitespace-nowrap px-6 py-3 rounded-full font-label font-bold bg-primary text-on-primary transition-all shadow-md">
              All
            </button>
            <button
              onClick={() => scrollToCategory("emulsions")}
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Emulsions
            </button>
            <button
              onClick={() => scrollToCategory("oil-paint")}
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Oil Paint
            </button>
            <button
              onClick={() => scrollToCategory("distemper")}
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Distemper
            </button>
            <button
              onClick={() => scrollToCategory("synthetic-enamel")}
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Synthetic Enamel
            </button>
            <button
              onClick={() => scrollToCategory("waterproofing")}
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Waterproofing
            </button>
            <button
              onClick={() => scrollToCategory("putty-grout")}
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Putty & Grout
            </button>
            <button
              onClick={() => scrollToCategory("stainers")}
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Stainers
            </button>
            <button
              onClick={() => scrollToCategory("cleaning")}
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Cleaning Products
            </button>
          </div>
        </section>

        {/* SECTION 4: PRODUCT SECTIONS */}
        <div className="px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto space-y-32">
          {/* CATEGORY 1: EMULSIONS */}
          <section id="emulsions" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Emulsions
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Premium interior and exterior wall emulsions designed for
                  smooth finish, modern appearance, durability, and wall
                  protection.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("shop-by-category")}
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                {
                  name: "Pro Royal Glow – Exterior & Interior Emulsion",
                  desc: "Premium smooth emulsion suitable for both interior and exterior walls. It gives walls a rich glow finish with smooth coverage and a refined appearance.",
                  features: [
                    "Rich royal glow finish",
                    "Smooth application",
                    "Interior and exterior use",
                    "Durable and long-lasting",
                    "Low odour",
                  ],
                  sizes: "20L, 10L, 4L, 1L, 500ml",
                  price: "Price on request",
                  image: "/images/emulsions/pro-royal-glow.png",
                },
                {
                  name: "Hi-Sheen – Exterior & Interior Emulsion",
                  desc: "High-gloss sheen emulsion designed for elegant modern walls. Suitable for homes, offices, commercial spaces, and exterior surfaces.",
                  features: [
                    "High gloss sheen finish",
                    "Bright and elegant look",
                    "Moisture and weather resistance",
                    "Smooth application",
                    "Durable coating",
                  ],
                  sizes: "20L, 10L, 1L, 500ml",
                  price: "Price on request",
                  image: "/images/emulsions/hi-sheen.png",
                },
                {
                  name: "Neo Smart Premium – Exterior & Interior Emulsion",
                  desc: "Ultra-smooth premium emulsion for luxury interiors and refined exterior walls. Designed for a rich matte finish and long-lasting colour brilliance.",
                  features: [
                    "Ultra-smooth rich matte finish",
                    "UV shield for fade-free walls",
                    "Anti-fungal and stain-resistant formula",
                    "Quick dry and easy clean",
                    "Premium quality finish",
                  ],
                  sizes: "20L, 10L, 4L, 1L, 500ml",
                  price: "Price on request",
                  image: "/images/emulsions/sky-neo-smart-premium.png",
                },
                {
                  name: "Neo Advance – Anti-Fungal Paint",
                  desc: "Advanced anti-fungal paint for interior and exterior walls. Designed to prevent fungus, algae, black patches, moisture damage, and dampness impact.",
                  features: [
                    "Advanced anti-fungal protection",
                    "Prevents fungus, algae, and black patches",
                    "Moisture and dampness resistance",
                    "Durable and long-lasting",
                    "Smooth, refined finish",
                  ],
                  sizes: "20L, 10L, 4L, 1L, 500ml",
                  price: "Price on request",
                  image: "/images/emulsions/sky-neo-advance.png",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-ambient hover:shadow-elevated transition-all border border-outline-variant/10 flex flex-col h-full group"
                >
                  <div className="w-full aspect-square rounded-[1.5rem] mb-6 relative flex items-center justify-center overflow-hidden border border-outline-variant/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-headline text-xl text-primary leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                  <ul className="list-disc list-inside text-sm text-on-surface-variant mb-6 space-y-1 flex-grow">
                    {product.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-end">
                    <div>
                      <p className="text-xs text-on-surface-variant mb-1">
                        Sizes: {product.sizes}
                      </p>
                      <p className="text-sm text-primary font-bold">
                        {product.price}
                      </p>
                    </div>
                    <button
                      className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary p-2 rounded-full transition-colors flex items-center justify-center"
                      aria-label="Enquire"
                    >
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Emulsions Pricing Table */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-ambient border border-outline-variant/10 overflow-x-auto mt-12">
              <h3 className="font-headline text-2xl text-primary mb-6">
                Emulsions Pricing
              </h3>

              <h4 className="font-label font-bold text-on-surface-variant mb-4 uppercase tracking-wide text-sm mt-8">
                Sky Neo Best Finish For Wall
              </h4>
              <table className="w-full text-left font-body text-sm min-w-[600px] mb-8">
                <thead>
                  <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                    <th className="py-3 font-semibold">Water Base</th>
                    <th className="py-3 font-semibold">50LTR</th>
                    <th className="py-3 font-semibold">20LTR</th>
                    <th className="py-3 font-semibold">10LTR</th>
                    <th className="py-3 font-semibold">4LTR</th>
                    <th className="py-3 font-semibold">1LTR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Neo Advance Water BasePrimer
                    </td>
                    <td className="py-4 text-primary">₹1550</td>
                    <td className="py-4 text-primary">₹1000</td>
                    <td className="py-4 text-primary">₹530</td>
                    <td className="py-4 text-primary">₹250</td>
                    <td className="py-4 text-primary">₹65</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Neo Smart Premium Water Base Primer
                    </td>
                    <td className="py-4 text-primary">₹1750</td>
                    <td className="py-4 text-primary">₹1100</td>
                    <td className="py-4 text-primary">₹580</td>
                    <td className="py-4 text-primary">₹365</td>
                    <td className="py-4 text-primary">₹70</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="font-label font-bold text-on-surface-variant mb-4 uppercase tracking-wide text-sm mt-8">
                Neo Smart Premium Emulsion
              </h4>
              <table className="w-full text-left font-body text-sm min-w-[800px] mb-8">
                <thead>
                  <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                    <th className="py-3 font-semibold">Emulsion</th>
                    <th className="py-3 font-semibold">20LTR</th>
                    <th className="py-3 font-semibold">10LTR</th>
                    <th className="py-3 font-semibold">4LTR</th>
                    <th className="py-3 font-semibold">1LTR</th>
                    <th className="py-3 font-semibold">500ML</th>
                    <th className="py-3 font-semibold">200ML</th>
                    <th className="py-3 font-semibold">100ML</th>
                    <th className="py-3 font-semibold">50ML</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Metalic Emulsion
                    </td>
                    <td className="py-4 text-primary">₹5000</td>
                    <td className="py-4 text-primary">₹2600</td>
                    <td className="py-4 text-primary">₹1080</td>
                    <td className="py-4 text-primary">₹290</td>
                    <td className="py-4 text-primary">₹155</td>
                    <td className="py-4 text-primary">₹97.50</td>
                    <td className="py-4 text-primary">₹52</td>
                    <td className="py-4 text-primary">₹32</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Sheen (white & Base)
                    </td>
                    <td className="py-4 text-primary">₹3510</td>
                    <td className="py-4 text-primary">₹1800</td>
                    <td className="py-4 text-primary">₹735</td>
                    <td className="py-4 text-primary">₹195</td>
                    <td className="py-4 text-primary">-</td>
                    <td className="py-4 text-primary">-</td>
                    <td className="py-4 text-primary">-</td>
                    <td className="py-4 text-primary">-</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="font-label font-bold text-on-surface-variant mb-4 uppercase tracking-wide text-sm mt-8">
                Interior & Exterior Emulsion Finish
              </h4>
              <table className="w-full text-left font-body text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                    <th className="py-3 font-semibold">Interior & Exterior</th>
                    <th className="py-3 font-semibold">20LTR</th>
                    <th className="py-3 font-semibold">10LTR</th>
                    <th className="py-3 font-semibold">4LTR</th>
                    <th className="py-3 font-semibold">1LTR</th>
                    <th className="py-3 font-semibold">500ML</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Interior Emulsion White
                    </td>
                    <td className="py-4 text-primary">₹1150</td>
                    <td className="py-4 text-primary">₹620</td>
                    <td className="py-4 text-primary">₹254</td>
                    <td className="py-4 text-primary">₹71.5</td>
                    <td className="py-4 text-primary">-</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Interior Emulsion Shade
                    </td>
                    <td className="py-4 text-primary">₹1400</td>
                    <td className="py-4 text-primary">₹700</td>
                    <td className="py-4 text-primary">₹430</td>
                    <td className="py-4 text-primary">₹110</td>
                    <td className="py-4 text-primary">₹60</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Exterior Emulsion White
                    </td>
                    <td className="py-4 text-primary">₹2500</td>
                    <td className="py-4 text-primary">₹1275</td>
                    <td className="py-4 text-primary">₹590</td>
                    <td className="py-4 text-primary">₹152</td>
                    <td className="py-4 text-primary">-</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-4 text-on-surface font-medium">
                      Exterior Emulsion Shade
                    </td>
                    <td className="py-4 text-primary">₹2700</td>
                    <td className="py-4 text-primary">₹1375</td>
                    <td className="py-4 text-primary">₹640</td>
                    <td className="py-4 text-primary">₹165</td>
                    <td className="py-4 text-primary">₹86</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CATEGORY 2: OIL PAINT */}
          <section id="oil-paint" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Oil Paint
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Utility products for paint-related applications, surface work,
                  finishing support, and professional use. This category
                  includes Paint Oil and Taarpin.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("shop-by-category")}
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Paint Oil",
                  desc: "Utility paint oil available in multiple pack sizes for professional and general paint-related use.",
                  features: [
                    "Available in small and bulk pack sizes",
                    "Useful for paint-related applications",
                    "Economical utility product",
                    "Dealer and bulk supply support available",
                  ],
                  sizes: "Multiple pack sizes",
                  price: "Price on request",
                  image: "/images/oil-paint/paint-oil.png",
                },
                {
                  name: "Taarpin",
                  desc: "Paint-related support product used for application, thinning, finishing, cleaning support, and general surface work.",
                  features: [
                    "Useful in paint work",
                    "Supports application and finishing",
                    "Suitable for professional use",
                    "Available for bulk supply",
                  ],
                  sizes: "Packaging available on request",
                  price: "Price on request",
                  image: "/images/oil-paint/taarpin.png",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-ambient hover:shadow-elevated transition-all border border-outline-variant/10 flex flex-col h-full group"
                >
                  <div className="w-full aspect-square rounded-[1.5rem] mb-6 relative flex items-center justify-center overflow-hidden border border-outline-variant/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-headline text-xl text-primary leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                  <ul className="list-disc list-inside text-sm text-on-surface-variant mb-6 space-y-1 flex-grow">
                    {product.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-end">
                    <div>
                      <p className="text-xs text-on-surface-variant mb-1">
                        Sizes: {product.sizes}
                      </p>
                      <p className="text-sm text-primary font-bold">
                        {product.price}
                      </p>
                    </div>
                    <button
                      className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary p-2 rounded-full transition-colors flex items-center justify-center"
                      aria-label="Enquire"
                    >
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Table for Paint Oil */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-ambient border border-outline-variant/10">
              <h3 className="font-headline text-2xl text-primary mb-6">
                Paint Oil Pricing & Packaging
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 uppercase tracking-wide text-sm border-b border-outline-variant/20 pb-2">
                    Price Reference
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { s: "160 ML", p: "₹17.60" },
                      { s: "180 ML", p: "₹18.28" },
                      { s: "400 ML", p: "₹37.50" },
                      { s: "500 ML", p: "₹45.00" },
                      { s: "800 ML", p: "₹72.00" },
                      { s: "1 LTR", p: "₹87.00" },
                      { s: "2.5 LTR", p: "₹227.00" },
                      { s: "4.5 LTR", p: "₹383.00" },
                      { s: "5 LTR", p: "₹422.50" },
                      { s: "18 LTR", p: "₹1652.00" },
                      { s: "20 LTR", p: "₹1725.00" },
                      { s: "50 LTR", p: "₹4021.00" },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex justify-between text-sm font-body border-b border-outline-variant/5 pb-2"
                      >
                        <span className="text-on-surface">{item.s}</span>
                        <span className="font-semibold text-primary">
                          {item.p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 uppercase tracking-wide text-sm border-b border-outline-variant/20 pb-2">
                    Packing Details
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {[
                      { s: "180ml", q: "80 pcs" },
                      { s: "400ml", q: "40 pcs" },
                      { s: "500ml", q: "36 pcs" },
                      { s: "800ml", q: "24 pcs" },
                      { s: "1L", q: "20 pcs" },
                      { s: "2.5L", q: "6 pcs" },
                      { s: "4.5L", q: "4 pcs" },
                      { s: "5L", q: "4 pcs" },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex justify-between text-sm font-body border-b border-outline-variant/5 pb-2"
                      >
                        <span className="text-on-surface">{item.s}</span>
                        <span className="text-on-surface-variant">
                          {item.q}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-surface-container-low p-6 rounded-xl text-sm text-on-surface-variant space-y-2">
                    <p className="font-semibold text-primary mb-2">
                      Trade Notes:
                    </p>
                    <p>• Ex. Godown Delivery</p>
                    <p>• GST Extra</p>
                    <p>• Payment Advance: 2% Discount</p>
                    <p>• Extra Discount: 3% minimum purchase 20 box</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CATEGORY 3: DISTEMPER */}
          <section id="distemper" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Distemper
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Smooth, economical, and practical wall coating range for clean
                  and fresh-looking interiors.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("shop-by-category")}
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Neo Rich Wall Health Protect – Luxury Distemper",
                  desc: "Premium interior wall distemper designed for elegant aesthetics and healthy wall protection. Suitable for smooth walls and fresh interior finishes.",
                  features: [
                    "Rich smooth finish",
                    "Wall health protection",
                    "Low odour & long-lasting colour",
                    "Smooth flow and even coverage",
                  ],
                  sizes: "1kg, 2kg, 5kg, 10kg, 20kg",
                  price: "Starting from ₹70",
                  image: "/images/distemper/sky-neo-luxury-distemper.png",
                },
                {
                  name: "Sky Neo Smart Acrylic Distemper",
                  desc: "High-quality interior wall coating that provides a smooth, even finish with a fresh and long-lasting look.",
                  features: [
                    "Smooth interior finish",
                    "Good coverage & economical",
                    "Fresh colour appearance",
                    "Suitable for interior walls",
                  ],
                  sizes: "1kg x 20 pc, 1kg x 30 pc",
                  price: "Price on request",
                  image: "/images/distemper/sky-neo-smart-acrylic.png",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-ambient hover:shadow-elevated transition-all border border-outline-variant/10 flex flex-col h-full group"
                >
                  <div className="w-full aspect-square rounded-[1.5rem] mb-6 relative flex items-center justify-center overflow-hidden border border-outline-variant/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-headline text-xl text-primary leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                  <ul className="list-disc list-inside text-sm text-on-surface-variant mb-6 space-y-1 flex-grow">
                    {product.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-end">
                    <div>
                      <p className="text-xs text-on-surface-variant mb-1">
                        Sizes: {product.sizes}
                      </p>
                      <p className="text-sm text-primary font-bold">
                        {product.price}
                      </p>
                    </div>
                    <button
                      className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary p-2 rounded-full transition-colors flex items-center justify-center"
                      aria-label="Enquire"
                    >
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Distemper Price Reference */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-ambient border border-outline-variant/10">
              <h3 className="font-headline text-2xl text-primary mb-2">
                Distemper Price Reference
              </h3>
              <p className="text-sm text-on-surface-variant italic mb-8">
                Prices are subject to change. Contact Skypaints for latest
                dealer or bulk pricing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Neo Rich (White - 1st Quality)
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹630</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">10kg</span>
                      <span className="font-semibold text-primary">₹350</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">5kg</span>
                      <span className="font-semibold text-primary">₹165</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">2kg</span>
                      <span className="font-semibold text-primary">₹80</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Neo Rich (Shade - 1st Quality)
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹670</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">10kg</span>
                      <span className="font-semibold text-primary">₹370</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">5kg</span>
                      <span className="font-semibold text-primary">₹195</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">2kg</span>
                      <span className="font-semibold text-primary">₹84</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Neo Rich (White - 2nd Quality)
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹550</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">10kg</span>
                      <span className="font-semibold text-primary">₹310</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">5kg</span>
                      <span className="font-semibold text-primary">₹170</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">2kg</span>
                      <span className="font-semibold text-primary">₹70</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Neo Rich (Shade - 2nd Quality)
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹590</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">10kg</span>
                      <span className="font-semibold text-primary">₹330</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">5kg</span>
                      <span className="font-semibold text-primary">₹180</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">2kg</span>
                      <span className="font-semibold text-primary">₹74</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-outline-variant/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Distemper Pouch
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">1kg</span>
                      <span className="font-semibold text-primary">₹26</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹520</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">30kg Bucket</span>
                      <span className="font-semibold text-primary">₹900</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Sky Neo Smart Dark Shades
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">28kg</span>
                      <span className="font-semibold text-primary">₹560</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">30kg Bucket</span>
                      <span className="font-semibold text-primary">₹960</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Three Sky Utsav God Pouch
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹400</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">30kg Bucket</span>
                      <span className="font-semibold text-primary">₹750</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label font-bold text-on-surface-variant mb-4 text-sm border-b border-outline-variant/20 pb-2">
                    Distemper Bag
                  </h4>
                  <ul className="space-y-2 text-sm font-body">
                    <li className="flex justify-between">
                      <span className="text-on-surface">20kg</span>
                      <span className="font-semibold text-primary">₹450</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">10kg</span>
                      <span className="font-semibold text-primary">₹240</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-on-surface">5kg</span>
                      <span className="font-semibold text-primary">₹130</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CATEGORY 4: SYNTHETIC ENAMEL */}
          <section id="synthetic-enamel" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Synthetic Enamel
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Glossy and durable products for metal, wood, primers, varnish,
                  and finishing applications.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("shop-by-category")}
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: "Sky Neo Smart Synthetic Enamel",
                  desc: "Glossy top coat for wood and metal surfaces, specially formulated for strong protection and long-lasting durability.",
                  features: [
                    "Smooth glossy finish",
                    "Strong protection",
                    "Suitable for wood and metal",
                    "Long-lasting performance",
                  ],
                  sizes: "50ml, 100ml, 200ml, 500ml, 1L, 4L, 20L",
                  price: "Price on request",
                  image:
                    "/images/syntheic-enamel/neo-smart-synthetic-enamel.png",
                },
                {
                  name: "Sky Neo Polyurethane Wood Finish",
                  desc: "Protective wood finish specially formulated to protect and enhance wooden surfaces with smooth durable finish.",
                  features: [
                    "Protects wood surfaces",
                    "Premium shine",
                    "Smooth finish",
                    "Wear resistance",
                  ],
                  sizes: "200ml, 500ml, 1L, 10L, 20L",
                  price: "Price on request",
                  image: "/images/syntheic-enamel/neo-smart-polyurethane.png",
                },
                {
                  name: "Sky Neo Varnish",
                  desc: "Varnish range for protective and decorative finishing on wooden and utility surfaces.",
                  features: [
                    "Variants: Hammertone, Texture Finish, Wood Protect, Murl Varnish, Clear Varnish",
                    "Protective coating & Decorative shine",
                    "Smooth application",
                    "Surface protection",
                  ],
                  sizes: "Varies",
                  price: "Price on request",
                  image: "/images/syntheic-enamel/varnish.png",
                },
                {
                  name: "Sky Neo Wood & Metal Finish",
                  desc: "Primer and finishing range for wood, metal, and utility surfaces.",
                  features: [
                    "Variants: White, Pink, Metal Primer, Red Oxide, Black Japan, Green/Black Board, Grey",
                    "Better surface adhesion",
                    "Wood and metal compatibility",
                    "Smooth topcoat support",
                  ],
                  sizes: "Varies",
                  price: "Price on request",
                  image: "/images/syntheic-enamel/wood-metal-finish.png",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-ambient hover:shadow-elevated transition-all border border-outline-variant/10 flex flex-col h-full group"
                >
                  <div className="w-full aspect-square rounded-[1.5rem] mb-6 relative flex items-center justify-center overflow-hidden border border-outline-variant/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-headline text-xl text-primary leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                  <ul className="list-disc list-inside text-sm text-on-surface-variant mb-6 space-y-1 flex-grow">
                    {product.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-end">
                    <div>
                      <p className="text-xs text-on-surface-variant mb-1">
                        Sizes: {product.sizes}
                      </p>
                      <p className="text-sm text-primary font-bold">
                        {product.price}
                      </p>
                    </div>
                    <button
                      className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary p-2 rounded-full transition-colors flex items-center justify-center"
                      aria-label="Enquire"
                    >
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Synthetic Enamel Pricing Tables */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-ambient border border-outline-variant/10 overflow-x-auto mt-12 space-y-12">
              <div>
                <h3 className="font-headline text-2xl text-primary mb-6">
                  Sky Neo Synthetic Enamel
                </h3>
                <table className="w-full text-left font-body text-sm min-w-[800px]">
                  <thead>
                    <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                      <th className="py-3 font-semibold">Oil Paints</th>
                      <th className="py-3 font-semibold">20LTR</th>
                      <th className="py-3 font-semibold">10LTR</th>
                      <th className="py-3 font-semibold">4LTR</th>
                      <th className="py-3 font-semibold">1LTR</th>
                      <th className="py-3 font-semibold">500ML</th>
                      <th className="py-3 font-semibold">200ML</th>
                      <th className="py-3 font-semibold">100ML</th>
                      <th className="py-3 font-semibold">50ML</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {[
                      [
                        "Deep Orange, Br White",
                        "₹2850",
                        "₹1450",
                        "₹590",
                        "₹150",
                        "₹80",
                        "₹42",
                        "-",
                        "-",
                      ],
                      [
                        "All Shade",
                        "₹2750",
                        "₹1400",
                        "₹570",
                        "₹145",
                        "₹77",
                        "₹39",
                        "₹22",
                        "₹14",
                      ],
                      [
                        "Aluminium Paints",
                        "₹3950",
                        "₹200",
                        "₹810",
                        "₹205",
                        "₹103",
                        "₹53",
                        "-",
                        "-",
                      ],
                      [
                        "Furniture Enamel",
                        "₹3500",
                        "₹1775",
                        "₹720",
                        "₹185",
                        "₹96",
                        "-",
                        "-",
                        "-",
                      ],
                      [
                        "Mint Green, Gdn Yellow, special Red",
                        "₹3750",
                        "₹1900",
                        "₹770",
                        "₹195",
                        "₹101",
                        "₹52",
                        "₹35",
                        "₹20",
                      ],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-surface-container-low transition-colors"
                      >
                        <td className="py-4 text-on-surface font-medium">
                          {row[0]}
                        </td>
                        {row.slice(1).map((cell, j) => (
                          <td key={j} className="py-4 text-primary">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="font-headline text-2xl text-primary mb-6">
                  Sky Neo Varnish
                </h3>
                <table className="w-full text-left font-body text-sm min-w-[800px]">
                  <thead>
                    <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                      <th className="py-3 font-semibold">Varnish</th>
                      <th className="py-3 font-semibold">20LTR</th>
                      <th className="py-3 font-semibold">10LTR</th>
                      <th className="py-3 font-semibold">4LTR</th>
                      <th className="py-3 font-semibold">1LTR</th>
                      <th className="py-3 font-semibold">500ML</th>
                      <th className="py-3 font-semibold">200ML</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {[
                      [
                        "Hammertone",
                        "₹4100",
                        "₹2075",
                        "₹840",
                        "₹215",
                        "₹111",
                        "₹57",
                      ],
                      [
                        "Texture Finish",
                        "₹4100",
                        "₹2075",
                        "₹840",
                        "₹215",
                        "₹111",
                        "₹57",
                      ],
                      [
                        "Wood Protect",
                        "₹4100",
                        "₹2075",
                        "₹840",
                        "₹215",
                        "₹111",
                        "₹57",
                      ],
                      [
                        "Murti Varnish",
                        "₹3450",
                        "₹1750",
                        "₹710",
                        "₹180",
                        "₹94",
                        "₹48",
                      ],
                      [
                        "Clear Varnish",
                        "₹3200",
                        "₹1625",
                        "₹670",
                        "₹170",
                        "₹89",
                        "₹45",
                      ],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-surface-container-low transition-colors"
                      >
                        <td className="py-4 text-on-surface font-medium">
                          {row[0]}
                        </td>
                        {row.slice(1).map((cell, j) => (
                          <td key={j} className="py-4 text-primary">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="font-headline text-2xl text-primary mb-6">
                  Sky Neo Wood & Metal Finish
                </h3>
                <table className="w-full text-left font-body text-sm min-w-[800px]">
                  <thead>
                    <tr className="border-b border-outline-variant/20 text-on-surface-variant">
                      <th className="py-3 font-semibold">Primer</th>
                      <th className="py-3 font-semibold">20LTR</th>
                      <th className="py-3 font-semibold">10LTR</th>
                      <th className="py-3 font-semibold">4LTR</th>
                      <th className="py-3 font-semibold">1LTR</th>
                      <th className="py-3 font-semibold">500ML</th>
                      <th className="py-3 font-semibold">200ML</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {[
                      [
                        "White Primer",
                        "₹1500",
                        "₹775",
                        "₹330",
                        "₹87",
                        "₹48",
                        "₹25",
                      ],
                      [
                        "Pink Primer",
                        "₹1500",
                        "₹775",
                        "₹330",
                        "₹87",
                        "₹48",
                        "₹25",
                      ],
                      [
                        "Metal Primer",
                        "₹1380",
                        "₹640",
                        "₹300",
                        "₹85",
                        "₹46",
                        "₹24",
                      ],
                      [
                        "Red Oxide Glossy",
                        "₹1500",
                        "₹775",
                        "₹330",
                        "₹85",
                        "₹46",
                        "₹24",
                      ],
                      [
                        "Black Japan - Rubber Paint",
                        "₹1500",
                        "₹775",
                        "₹330",
                        "₹85",
                        "₹46",
                        "₹24",
                      ],
                      [
                        "Green Board",
                        "₹1650",
                        "₹850",
                        "₹350",
                        "₹90",
                        "₹49",
                        "₹26",
                      ],
                      [
                        "Black Board",
                        "₹1500",
                        "₹775",
                        "₹330",
                        "₹85",
                        "₹46",
                        "₹24",
                      ],
                      [
                        "Grey Surfacer Primer",
                        "₹1590",
                        "₹845",
                        "₹350",
                        "₹92",
                        "-",
                        "-",
                      ],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-surface-container-low transition-colors"
                      >
                        <td className="py-4 text-on-surface font-medium">
                          {row[0]}
                        </td>
                        {row.slice(1).map((cell, j) => (
                          <td key={j} className="py-4 text-primary">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* CATEGORY 5: WATERPROOFING */}
          <section id="waterproofing" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Waterproofing
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Advanced products for dampness protection, seepage control,
                  roof coating, terrace protection, bonding, and surface repair.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("shop-by-category")}
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Damp Proof Advance",
                  desc: "Advanced elastomeric waterproof cool coating for roofs, terraces, and exterior walls. Helps prevent dampness, seepage, and heat impact.",
                  features: [
                    "Elastomeric protection",
                    "Prevents seepage",
                    "Reduces heat (cool coating)",
                    "Durable & weather resistant",
                  ],
                  sizes: "20L, 10L, 4L, 1L, 500ml",
                  price: "Price on request",
                  image: "/images/waterproofing/damp-proof-advance.png",
                },
                {
                  name: "Super Ultra Fix-It",
                  desc: "Cement-based waterproofing additive used to improve bonding, seal cracks, and prevent water seepage.",
                  features: [
                    "Cement-based additive",
                    "Strong bonding",
                    "Crack sealing support",
                    "Prevents water seepage",
                  ],
                  sizes: "1L, 5L, 10L, 20L",
                  price: "Price on request",
                  image: "/images/waterproofing/ultra-fix-it.png",
                },
                {
                  name: "Range of Waterproofing",
                  desc: "Specialized waterproofing range for surface protection, bonding, and water resistance.",
                  features: [
                    "Includes: Sky Ultra LW 786, Sky Ultra URP 521",
                    "Sky Ultra Sealer",
                    "Sky Paint Shine WTO",
                    "Professional protection",
                  ],
                  sizes: "20L, 10L, 5L, 1L",
                  price: "Price on request",
                  image: "/images/waterproofing/range-of-waterproofing.png",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-ambient hover:shadow-elevated transition-all border border-outline-variant/10 flex flex-col h-full group"
                >
                  <div className="w-full aspect-square rounded-[1.5rem] mb-6 relative flex items-center justify-center overflow-hidden border border-outline-variant/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-headline text-xl text-primary leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                  <ul className="list-disc list-inside text-sm text-on-surface-variant mb-6 space-y-1 flex-grow">
                    {product.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-end">
                    <div>
                      <p className="text-xs text-on-surface-variant mb-1">
                        Sizes: {product.sizes}
                      </p>
                      <p className="text-sm text-primary font-bold">
                        {product.price}
                      </p>
                    </div>
                    <button
                      className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary p-2 rounded-full transition-colors flex items-center justify-center"
                      aria-label="Enquire"
                    >
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CATEGORY 6: PUTTY, LIME WASH & TILE GROUT */}
          <section id="putty-grout" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Putty, Lime Wash & Tile Grout
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Surface preparation and finishing products for smooth walls,
                  strong bases, traditional white coating, and tile joint
                  sealing.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("shop-by-category")}
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: "Wall Shield – White Cement Based Putty",
                  desc: "High-quality cement-based wall filler used to level and smooth wall surfaces before painting.",
                  features: [
                    "Strong wall base",
                    "Smooth surface preparation",
                    "Improves paint finish",
                    "Enhances paint durability",
                  ],
                  sizes: "1kg, 5kg, 40kg",
                  price: "Price on request",
                  image: "/images/putty-lime-grout/wall-shield.png",
                },
                {
                  name: "Wall Coat – World Standard Putty",
                  desc: "Premium wall putty designed to provide a smooth, strong base for paint application and long-lasting finish.",
                  features: [
                    "Smooth base",
                    "Strong adhesion",
                    "Improved paint performance",
                    "Premium wall preparation",
                  ],
                  sizes: "1kg, 5kg, 40kg",
                  price: "Price on request",
                  image: "/images/putty-lime-grout/wall-coat.png",
                },
                {
                  name: "White Wall – Brilliant White Lime Wash",
                  desc: "Traditional bright white lime wash that gives walls a fresh, white, breathable, and natural look.",
                  features: [
                    "Bright white finish",
                    "Traditional wall coating",
                    "Breathable finish",
                    "Economical and fresh look",
                  ],
                  sizes: "5kg, 10kg, 25kg",
                  price: "Price on request",
                  image: "/images/putty-lime-grout/white-wall.png",
                },
                {
                  name: "Tile Grout – Polymer Modified Grout",
                  desc: "Polymer modified tile grout designed for filling and sealing tile joints with strong adhesion and water resistance.",
                  features: [
                    "Tile joint filling",
                    "Strong adhesion",
                    "Water resistance",
                    "Clean durable finish",
                  ],
                  sizes: "20kg, 1kg",
                  price: "Price on request",
                  image: "/images/putty-lime-grout/tile-grout.png",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-ambient hover:shadow-elevated transition-all border border-outline-variant/10 flex flex-col h-full group"
                >
                  <div className="w-full aspect-square rounded-[1.5rem] mb-6 relative flex items-center justify-center overflow-hidden border border-outline-variant/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-headline text-xl text-primary leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                  <ul className="list-disc list-inside text-sm text-on-surface-variant mb-6 space-y-1 flex-grow">
                    {product.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-end">
                    <div>
                      <p className="text-xs text-on-surface-variant mb-1">
                        Sizes: {product.sizes}
                      </p>
                      <p className="text-sm text-primary font-bold">
                        {product.price}
                      </p>
                    </div>
                    <button
                      className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary p-2 rounded-full transition-colors flex items-center justify-center"
                      aria-label="Enquire"
                    >
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-surface-container-low p-6 rounded-[1.5rem] border border-outline-variant/10 text-center">
              <p className="font-body text-on-surface-variant text-sm">
                Putty, lime wash, and tile grout prices vary by pack size and
                availability. Contact Skypaints for the latest rate card.
              </p>
            </div>
          </section>

          {/* CATEGORY 7: STAINERS */}
          <section id="stainers" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Stainers
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Tinting and shade-control products for colour customization
                  and refined paint application.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("shop-by-category")}
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-ambient hover:shadow-elevated transition-all border border-outline-variant/10 flex flex-col h-full group">
                <div className="w-full aspect-square rounded-[1.5rem] mb-6 relative flex items-center justify-center overflow-hidden border border-outline-variant/5">
                  <Image
                    src="/images/stainers/sky-neo-stainer.png"
                    alt="Sky Neo Microfine Stainer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-headline text-xl text-primary leading-tight mb-3">
                  Sky Neo Microfine Stainer
                </h3>
                <p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                  Microfine stainer designed to finely stain paint and coating
                  systems. It provides smooth, lump-free application and
                  improved shade control.
                </p>
                <ul className="list-disc list-inside text-sm text-on-surface-variant mb-6 space-y-1 flex-grow">
                  <li>Smooth shade adjustment</li>
                  <li>Lump-free application</li>
                  <li>Fine dispersion & better control</li>
                  <li>Suitable for coating customization</li>
                </ul>
                <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-end">
                  <div>
                    <p className="text-xs text-on-surface-variant mb-1">
                      Sizes: 50ml, 100ml, 200ml
                    </p>
                    <p className="text-sm text-primary font-bold">
                      Price on request
                    </p>
                  </div>
                  <button
                    className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary p-2 rounded-full transition-colors flex items-center justify-center"
                    aria-label="Enquire"
                  >
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-ambient hover:shadow-elevated transition-all border border-outline-variant/10 flex flex-col h-full group">
                <div className="w-full aspect-square rounded-[1.5rem] mb-6 relative flex items-center justify-center overflow-hidden border border-outline-variant/5">
                  <Image
                    src="/images/stainers/universal-stainer.png"
                    alt="Universal Stainer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-headline text-xl text-primary leading-tight mb-3">
                  Universal Stainer
                </h3>
                <p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                  Universal stainer range for tinting and colour customization
                  across compatible paint categories.
                </p>
                <ul className="list-disc list-inside text-sm text-on-surface-variant mb-6 space-y-1 flex-grow">
                  <li>Shade customization</li>
                  <li>Easy mixing</li>
                  <li>Strong tinting strength</li>
                  <li>Multiple shade possibilities</li>
                </ul>
                <div className="mt-auto pt-4 border-t border-outline-variant/10">
                  <p className="text-xs text-on-surface-variant mb-2">
                    Sizes: 50ml, 100ml, 200ml
                  </p>
                  <div className="mb-4 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10">
                    <table className="w-full text-left text-sm font-body border-collapse">
                      <thead className="bg-[#FBE4E4]/50">
                        <tr>
                          <th className="py-2 px-3 text-[#93000A] font-semibold border-b border-outline-variant/10">
                            Stainer
                          </th>
                          <th className="py-2 px-3 text-[#93000A] text-center font-semibold border-b border-outline-variant/10">
                            200ML
                          </th>
                          <th className="py-2 px-3 text-[#93000A] text-center font-semibold border-b border-outline-variant/10">
                            100ML
                          </th>
                          <th className="py-2 px-3 text-[#93000A] text-center font-semibold border-b border-outline-variant/10">
                            50ML
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-3 text-[#93000A] font-medium border-b border-outline-variant/5">
                            All Colors
                          </td>
                          <td className="py-2 px-3 text-center text-[#93000A] font-bold border-b border-outline-variant/5">
                            ₹52
                          </td>
                          <td className="py-2 px-3 text-center text-[#93000A] font-bold border-b border-outline-variant/5">
                            ₹26
                          </td>
                          <td className="py-2 px-3 text-center text-[#93000A] font-bold border-b border-outline-variant/5">
                            ₹14
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary p-2 rounded-full transition-colors flex items-center justify-center"
                      aria-label="Enquire"
                    >
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CATEGORY 8: CLEANING PRODUCTS */}
          <section id="cleaning" className="scroll-mt-40">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-3">
                  Cleaning Products
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                  Mr. Shine cleaning products for hygiene, freshness, and daily
                  cleaning across homes, shops, offices, hotels, restaurants,
                  hospitals, and commercial spaces.
                </p>
              </div>
              <button
                onClick={() => scrollToCategory("shop-by-category")}
                className="text-primary font-label font-medium hover:underline whitespace-nowrap"
              >
                ↑ Back to categories
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Mr. Shine Hand Wash",
                  desc: "Gently cleans hands, kills germs, and keeps skin soft and fresh.",
                  features: [
                    "Gentle care",
                    "Germ protection",
                    "Skin-friendly formula",
                  ],
                  sizes: "1L, 5L",
                  price: "1L ₹95.00, 5L ₹475.00",
                  image: "/images/cleaning-products/mr-shine-hand-wash.png",
                },
                {
                  name: "Mr. Shine Liquid Detergent",
                  desc: "Removes tough stains while protecting fabric softness and colour.",
                  features: [
                    "Powerful stain removal",
                    "Keeps colours bright",
                    "Safe for daily wash",
                  ],
                  sizes: "1L, 5L",
                  price: "1L ₹60.00, 5L ₹300.00",
                  image: "/images/cleaning-products/mr-shine-detergent.png",
                },
                {
                  name: "Mr. Shine Floor Cleaner",
                  desc: "Cleaning solution for floors and hard surfaces in homes and commercial areas.",
                  features: [
                    "Removes grease and germs",
                    "Suitable for tiles and ceramic",
                    "Leaves surfaces fresh",
                  ],
                  sizes: "1L, 5L",
                  price: "1L ₹75.00, 5L ₹375.00",
                  image:
                    "/images/cleaning-products/mr-shine-surface-cleaner.png",
                },
                {
                  name: "Mr. Shine Dish Wash",
                  desc: "Dish wash liquid for tough grease, food stains, and utensil cleaning.",
                  features: [
                    "Tough on grease",
                    "Gentle on hands",
                    "Quick rinse action",
                  ],
                  sizes: "1L, 5L",
                  price: "1L ₹55.00, 5L ₹275.00",
                  image: "/images/cleaning-products/mr-shine-dish-wash.png",
                },
                {
                  name: "Mr. Shine Toilet Cleaner",
                  desc: "Deep cleaning toilet cleaner for stains, germs, bad odour, and freshness.",
                  features: [
                    "Kills germs",
                    "Removes tough stains",
                    "Long-lasting freshness",
                  ],
                  sizes: "1L, 5L",
                  price: "1L ₹12.00, 5L ₹60.00",
                  image:
                    "/images/cleaning-products/mr-shine-toilet-cleaner.png",
                },
                {
                  name: "Doctor Phenyl",
                  desc: "Cleaning phenyl for general hygiene, floor cleaning, and utility cleaning.",
                  features: ["General hygiene", "Floor cleaning"],
                  sizes: "1L, 5L",
                  price: "1L ₹18.00, 5L ₹90.00",
                  image: "/images/cleaning-products/doctor-phenyl.png",
                },
                {
                  name: "Mr. Shine Phenyl",
                  desc: "Daily cleaning phenyl for homes, offices, shops, and commercial use.",
                  features: ["Daily cleaning", "Commercial use"],
                  sizes: "1L, 5L",
                  price: "1L ₹25.00, 5L ₹125.00",
                  image: "/images/cleaning-products/mr-shine-phenyl.png",
                },
                {
                  name: "Toilet Cleaner Fast",
                  desc: "Fast-action toilet cleaner for tough stains and washroom hygiene.",
                  features: ["Fast action", "Tough stains"],
                  sizes: "1L, 5L",
                  price: "1L ₹25.00, 5L ₹125.00",
                  image: "/images/cleaning-products/toilet-cleaner-fast.png",
                },
                {
                  name: "Acid & Phenyl",
                  desc: "Powerful cleaning support for washrooms, utility areas, and tough cleaning.",
                  features: ["Powerful cleaning", "Washroom support"],
                  sizes: "Varies",
                  price: "Price on request",
                  image: "/images/cleaning-products/mr-shine-acidnphenyl.png",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-ambient hover:shadow-elevated transition-all border border-outline-variant/10 flex flex-col h-full group"
                >
                  <div className="w-full aspect-square rounded-[1.5rem] mb-6 relative flex items-center justify-center overflow-hidden border border-outline-variant/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-headline text-xl text-primary leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                  <ul className="list-disc list-inside text-sm text-on-surface-variant mb-6 space-y-1 flex-grow">
                    {product.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-end">
                    <div>
                      <p className="text-xs text-on-surface-variant mb-1">
                        Sizes: {product.sizes}
                      </p>
                      <p className="text-sm text-primary font-bold">
                        {product.price}
                      </p>
                    </div>
                    <button
                      className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary p-2 rounded-full transition-colors flex items-center justify-center"
                      aria-label="Enquire"
                    >
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cleaning Products Price List */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-ambient border border-outline-variant/10 max-w-4xl mx-auto overflow-x-auto">
              <h3 className="font-headline text-2xl text-primary mb-8 text-center">
                Mr. Shine Complete Price List
              </h3>
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="py-4 px-4 font-headline text-primary text-center">
                      S.No.
                    </th>
                    <th className="py-4 px-4 font-headline text-primary">
                      Products Name
                    </th>
                    <th className="py-4 px-4 font-headline text-secondary text-center whitespace-nowrap">
                      500 ML
                    </th>
                    <th className="py-4 px-4 font-headline text-secondary text-center whitespace-nowrap">
                      1 LTR
                    </th>
                    <th className="py-4 px-4 font-headline text-secondary text-center whitespace-nowrap">
                      5 LTR
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  {[
                    { n: "DOCTOR PHENYL", p500: "-", p1: "18.00", p5: "90.00" },
                    {
                      n: "MR. SHINE PHENYL",
                      p500: "-",
                      p1: "25.00",
                      p5: "125.00",
                    },
                    {
                      n: "TOILET CLEANER",
                      p500: "-",
                      p1: "12.00",
                      p5: "60.00",
                    },
                    {
                      n: "TOILET CLEANER FAST",
                      p500: "-",
                      p1: "25.00",
                      p5: "125.00",
                    },
                    {
                      n: "FLOOR CLEANER WITH PHENYL",
                      p500: "-",
                      p1: "75.00",
                      p5: "375.00",
                    },
                    {
                      n: "MR. SHINE DISH WASH",
                      p500: "-",
                      p1: "55.00",
                      p5: "275.00",
                    },
                    {
                      n: "LIQUID DETERGENT",
                      p500: "-",
                      p1: "60.00",
                      p5: "300.00",
                    },
                    {
                      n: "MR. SHINE HAND WASH",
                      p500: "-",
                      p1: "95.00",
                      p5: "475.00",
                    },
                  ].map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors"
                    >
                      <td className="py-4 px-4 text-on-surface-variant font-medium text-center">
                        {i + 1}
                      </td>
                      <td className="py-4 px-4 text-on-surface font-semibold whitespace-nowrap">
                        {item.n}
                      </td>
                      <td className="py-4 px-4 text-center text-on-surface-variant">
                        {item.p500}
                      </td>
                      <td className="py-4 px-4 text-center text-primary font-bold whitespace-nowrap">
                        ₹{item.p1}
                      </td>
                      <td className="py-4 px-4 text-center text-primary font-bold whitespace-nowrap">
                        ₹{item.p5}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
