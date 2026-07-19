import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CategoryNav from "@/components/CategoryNav";
import { categories } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Skypaints",
  description:
    "Explore Skypaints' complete range of emulsions, oil paint, distemper, synthetic enamel, waterproofing, putty, stainers, and cleaning products.",
};
import ProductCard from "@/components/ProductCard";
import PricingTableRenderer from "@/components/PricingTableRenderer";
import Icon from "@/components/Icon";

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
    <Icon name={icon} className={`${size} opacity-30 mix-blend-multiply`} />
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
                <a
                  href="#shop-by-category"
                  className="bg-primary text-on-primary px-8 py-4 rounded-full font-label font-medium shadow-ambient shadow-ambient-hover transition-all duration-300 text-center hover:bg-primary/90"
                >
                  Explore Categories
                </a>
                <a
                  href="#shop-by-category"
                  className="border border-outline-variant/30 text-primary hover:bg-surface-container-low px-8 py-4 rounded-full font-label font-medium transition-all duration-300 text-center"
                >
                  View Price List
                </a>
              </div>
            </div>

            {/* Right side: Premium Collage */}
            <div className="relative rounded-[2rem] bg-surface-container-low shadow-elevated p-6 grid grid-cols-2 grid-rows-2 gap-4 border border-outline-variant/10">
              <div className="relative rounded-2xl overflow-hidden group aspect-square">
                <Image
                  src="/images/products-hero/range-of-emulsion.webp"
                  alt="Range of Emulsions"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  src="/images/products-hero/range-of-putty-hero.webp"
                  alt="Putty Range"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  src="/images/products-hero/range-of-waterproofing.webp"
                  alt="Waterproofing"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  src="/images/products-hero/sky-neo-range-hero.webp"
                  alt="Sky Neo Range"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <Icon name="format_paint" className="text-4xl opacity-80" />
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
              <a
                href="#emulsions"
                className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-lg relative z-10"
              >
                View All Emulsions
              </a>
            </div>

            {/* 2. Oil Paint */}
            <div className="bg-primary-fixed text-on-primary-fixed rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="opacity" className="text-3xl opacity-70" />
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
              <a
                href="#oil-paint"
                className="bg-surface-container-lowest text-primary px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View Oil Paint Range
              </a>
            </div>

            {/* 3. Distemper */}
            <div className="bg-[#FDF5E6] text-[#855300] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="texture" className="text-3xl opacity-70" />
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
              <a
                href="#distemper"
                className="bg-surface-container-lowest text-[#855300] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Distemper
              </a>
            </div>

            {/* 4. Synthetic Enamel */}
            <div className="bg-[#FFDAB9] text-[#684000] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="brush" className="text-3xl opacity-70" />
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
              <a
                href="#synthetic-enamel"
                className="bg-surface-container-lowest text-[#684000] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Enamel
              </a>
            </div>

            {/* 5. Waterproofing */}
            <div className="bg-[#E6F0FA] text-[#003366] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="water_drop" className="text-3xl opacity-70" />
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
              <a
                href="#waterproofing"
                className="bg-surface-container-lowest text-[#003366] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Waterproofing
              </a>
            </div>

            {/* 6. Putty, Lime Wash & Tile Grout */}
            <div className="bg-surface-container-highest text-on-surface rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="layers" className="text-3xl opacity-70" />
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
              <a
                href="#putty-grout"
                className="bg-surface-container-lowest text-primary px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm border border-outline-variant/20"
              >
                View All Putty & Grout
              </a>
            </div>

            {/* 7. Stainers */}
            <div className="bg-[#FBE4E4] text-[#93000A] rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon name="colorize" className="text-3xl opacity-70" />
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
              <a
                href="#stainers"
                className="bg-surface-container-lowest text-[#93000A] px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View All Stainers
              </a>
            </div>

            {/* 8. Cleaning Products */}
            <div className="bg-secondary-fixed text-on-secondary-fixed rounded-[32px] p-8 shadow-ambient shadow-ambient-hover transition-transform duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Icon
                    name="cleaning_services"
                    className="text-3xl opacity-70"
                  />
                  <span className="font-label text-xs uppercase tracking-wider opacity-70">
                    7 Products + Table
                  </span>
                </div>
                <h3 className="font-headline text-3xl mb-3">
                  Cleaning Products
                </h3>
                <p className="font-body text-on-secondary-fixed-variant mb-8 text-sm">
                  Mr. Shine cleaning range for hygiene, floors, utensils,
                  washrooms, and commercial use.
                </p>
              </div>
              <a
                href="#cleaning"
                className="bg-surface-container-lowest text-on-secondary-fixed px-6 py-3 rounded-full font-label font-bold w-fit hover:bg-surface transition-colors shadow-sm"
              >
                View Cleaning Range
              </a>
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
            <a
              href="#emulsions"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Emulsions
            </a>
            <a
              href="#oil-paint"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Oil Paint
            </a>
            <a
              href="#distemper"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Distemper
            </a>
            <a
              href="#synthetic-enamel"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Synthetic Enamel
            </a>
            <a
              href="#waterproofing"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Waterproofing
            </a>
            <a
              href="#putty-grout"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Putty & Grout
            </a>
            <a
              href="#stainers"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Stainers
            </a>
            <a
              href="#cleaning"
              className="whitespace-nowrap px-6 py-3 rounded-full font-label font-medium bg-transparent text-on-surface-variant hover:bg-surface-container-highest transition-all"
            >
              Cleaning Products
            </a>
          </div>
        </section>

        {/* SECTION 4: PRODUCT SECTIONS */}
        <div className="px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto space-y-32">
          {categories.map((category) => (
            <section id={category.id} key={category.id} className="scroll-mt-40">
              <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
                <div>
                  <h2 className="font-headline text-4xl text-primary mb-3">
                    {category.title}
                  </h2>
                  <p className="font-body text-on-surface-variant text-lg max-w-3xl">
                    {category.description}
                  </p>
                </div>
                <a
                  href="#shop-by-category"
                  className="text-primary font-label font-medium hover:underline whitespace-nowrap"
                >
                  ↑ Back to categories
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>

              <PricingTableRenderer
                sections={category.pricingSections}
                categoryTitle={
                  category.id === "emulsions"
                    ? "Emulsions Pricing"
                    : category.id === "distemper"
                    ? "Distemper Pricing"
                    : undefined
                }
                centerTitle={
                  category.id === "stainers" || category.id === "cleaning"
                }
              />
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
