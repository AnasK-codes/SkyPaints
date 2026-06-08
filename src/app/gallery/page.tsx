import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryClient from './GalleryClient';

export const metadata = {
  title: 'Gallery | Skypaints',
  description: 'Explore our gallery of beautiful home transformations, curated colour combinations, and stunning textures.',
};

const mediaItems = [
  {
    id: 1,
    type: 'video',
    url: '/images/gallery/gallery-video-1.mp4',
    title: 'Dynamic Transformation',
    colSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    type: 'image',
    url: '/images/gallery/gallery-image-1.png',
    title: 'Premium Finish',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    type: 'image',
    url: '/images/gallery/gallery-image-2.jpeg',
    title: 'Vibrant Exteriors',
    colSpan: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 4,
    type: 'video',
    url: '/images/gallery/gallery-video-2.mp4',
    title: 'Color Mixing',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    type: 'image',
    url: '/images/gallery/gallery-image-3.jpeg',
    title: 'Interior Details',
    colSpan: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 6,
    type: 'video',
    url: '/images/gallery/gallery-video-3.mp4',
    title: 'Smooth Application',
    colSpan: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 7,
    type: 'image',
    url: '/images/gallery/gallery-image-4.jpeg',
    title: 'Perfect Tone',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 8,
    type: 'video',
    url: '/images/gallery/gallery-video-4.mp4',
    title: 'Texture Work',
    colSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 9,
    type: 'image',
    url: '/images/gallery/gallery-image-5.jpeg',
    title: 'Sunlit Room',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 10,
    type: 'video',
    url: '/images/gallery/gallery-video-5.mp4',
    title: 'Professional Service',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 11,
    type: 'image',
    url: '/images/gallery/gallery-image-6.jpeg',
    title: 'Elegant Corridor',
    colSpan: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 12,
    type: 'video',
    url: '/images/gallery/gallery-video-6.mp4',
    title: 'Waterproofing',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 13,
    type: 'image',
    url: '/images/gallery/gallery-image-7.jpeg',
    title: 'Bright Facade',
    colSpan: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 14,
    type: 'video',
    url: '/images/gallery/gallery-video-7.mp4',
    title: 'Lasting Results',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 15,
    type: 'image',
    url: '/images/gallery/gallery-image-8.jpg',
    title: 'Sky Products Collection',
    colSpan: 'md:col-span-3 md:row-span-2',
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-surface min-h-screen font-sans">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8 w-full">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-headline font-bold text-on-surface mb-6 tracking-tight">
              Inspiration <span className="text-primary italic font-serif font-medium">Gallery</span>
            </h1>
            <p className="text-lg text-on-surface-variant">
              Explore our curated collection of beautiful homes, stunning textures, and vibrant spaces brought to life with Skypaints. Let these transformations inspire your next project.
            </p>
          </div>

          <GalleryClient mediaItems={mediaItems} />
          
          <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <button className="bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors rounded-full px-8 py-3 font-medium shadow-sm">
              Load More Inspiration
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
