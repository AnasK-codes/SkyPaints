"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type MediaItem = {
  id: number;
  type: string;
  url: string;
  title: string;
  colSpan: string;
};

type ProductItem = MediaItem & { category: string };
type JourneyItem = MediaItem & { tag: string };

const PRODUCT_CATEGORIES = [
  "All Products",
  "Interior Paints",
  "Exterior Paints",
  "Waterproofing",
  "Primers",
  "Putty & Grout",
  "Cleaning Solutions",
];

export default function GalleryClient({
  productItems,
  journeyItems,
}: {
  productItems: ProductItem[];
  journeyItems: JourneyItem[];
}) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts =
    activeCategory === "All Products"
      ? productItems
      : productItems.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full">
      {/* SECTION 1: Product Showcase */}
      <section className="max-w-7xl mx-auto px-8 w-full mb-32">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-headline font-bold text-on-surface mb-6 tracking-tight"
          >
            Our Product Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant"
          >
            Explore the products trusted by contractors, homeowners, architects,
            and painters across the region.
          </motion.p>
        </div>

        {/* Masonry Grid with Framer Motion Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                key={item.id}
                className={`relative group overflow-hidden rounded-[2rem] shadow-[0_8px_30px_rgba(46,16,101,0.06)] bg-surface-container cursor-pointer break-inside-avoid`}
                onClick={() => setSelectedItem(item)}
              >
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </>
                ) : (
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* SECTION 2: Our Journey & Achievements */}
      <section className="bg-surface-container-lowest border-y border-outline-variant/10 py-32">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6 tracking-tight"
            >
              Built With Trust Since 2020
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-on-surface-variant max-w-2xl"
            >
              A glimpse into our manufacturing facilities, achievements, team,
              distribution network, and decades of craftsmanship.
            </motion.p>
          </div>

          {/* Timeline Strip */}
          <div className="hidden md:flex items-center justify-between mb-16 pb-8 border-b border-outline-variant/20 relative">
            {[
              "2020 - Founded",
              "Factory Expansion",
              "Product Range Launch",
              "Distribution Growth",
              "Present Day",
            ].map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="flex flex-col items-center gap-3 relative z-10"
              >
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-sm"></div>
                <span className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                  {milestone}
                </span>
              </motion.div>
            ))}
            <div className="absolute top-2 left-8 right-8 h-[2px] bg-outline-variant/20 -z-0"></div>
          </div>

          {/* Editorial Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-8 space-y-8">
            {journeyItems.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (idx % 3), duration: 0.5 }}
                key={item.id}
                className={`relative group overflow-hidden rounded-[2rem] bg-black cursor-pointer break-inside-avoid`}
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto block opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full z-[60]"
              onClick={() => setSelectedItem(null)}
            >
              <span className="material-symbols-outlined text-2xl block h-[24px] w-[24px] leading-[24px] text-center">
                close
              </span>
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center bg-transparent rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
