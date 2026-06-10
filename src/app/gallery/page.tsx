import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Gallery | Skypaints",
  description:
    "Explore our gallery of beautiful home transformations, curated colour combinations, and stunning textures.",
};

const productItems = [
  {
    id: 1,
    type: "video",
    url: "/images/gallery/gallery-video-1.mp4",
    title: "Dynamic Transformation",
    category: "Interior Paints",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    type: "image",
    url: "/images/gallery/gallery-image-1.png",
    title: "Premium Finish",
    category: "Exterior Paints",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    type: "video",
    url: "/images/gallery/gallery-video-2.mp4",
    title: "Color Mixing",
    category: "Primers",
    colSpan: "md:col-span-1 md:row-span-1",
  },

  {
    id: 8,
    type: "video",
    url: "/images/gallery/gallery-video-4.mp4",
    title: "Texture Work",
    category: "Interior Paints",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    id: 10,
    type: "video",
    url: "/images/gallery/gallery-video-5.mp4",
    title: "Professional Service",
    category: "Cleaning Solutions",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 12,
    type: "video",
    url: "/images/gallery/gallery-video-6.mp4",
    title: "Waterproofing",
    category: "Waterproofing",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 14,
    type: "video",
    url: "/images/gallery/gallery-video-7.mp4",
    title: "Lasting Results",
    category: "Exterior Paints",
    colSpan: "md:col-span-1 md:row-span-1",
  },
];

const journeyItems = [

  {
    id: 7,
    type: "image",
    url: "/images/gallery/gallery-image-4.jpeg",
    title: "Quality Assurance",
    tag: "Achievement",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 9,
    type: "image",
    url: "/images/gallery/gallery-image-5.jpeg",
    title: "Our Heritage",
    tag: "Legacy",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 11,
    type: "image",
    url: "/images/gallery/gallery-image-6.jpeg",
    title: "Team Milestone",
    tag: "Event",
    colSpan: "md:col-span-1 md:row-span-2",
  },
  {
    id: 13,
    type: "image",
    url: "/images/gallery/gallery-image-7.jpeg",
    title: "Distributor Meet",
    tag: "Team",
    colSpan: "md:col-span-2 md:row-span-1",
  },
  {
    id: 14,
    type: "image",
    url: "/images/gallery/gallery-image-8.jpeg",
    title: "Distributor Meet",
    tag: "Achievement",
    colSpan: "md:col-span-2 md:row-span-1",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        {/* We will let GalleryClient handle the full page structure to maintain smooth framer motion animations */}
        <GalleryClient
          productItems={productItems}
          journeyItems={journeyItems}
        />
      </main>
      <Footer />
    </>
  );
}
