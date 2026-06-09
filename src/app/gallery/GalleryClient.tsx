"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type MediaItem = {
  id: number;
  type: string;
  url: string;
  title: string;
  colSpan: string;
};

export default function GalleryClient({ mediaItems }: { mediaItems: MediaItem[] }) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
        {mediaItems.map((item) => (
          <div 
            key={item.id} 
            className={`relative group overflow-hidden rounded-[2rem] shadow-[0_8px_30px_rgba(46,16,101,0.06)] bg-surface-container ${item.colSpan} cursor-pointer`}
            onClick={() => setSelectedItem(item)}
          >
            {item.type === 'video' ? (
              <video
                src={item.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            ) : (
              <Image
                src={item.url}
                alt={item.title}
                fill

                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            )}
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10 pointer-events-none">
              <h3 className="text-white font-headline text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {item.type === 'video' ? 'Watch Video' : 'View Image'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full z-[60]"
            onClick={() => setSelectedItem(null)}
          >
            <span className="material-symbols-outlined text-3xl block h-[30px] w-[30px] leading-[30px] text-center">close</span>
          </button>
          
          <div 
            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'video' ? (
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

                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white pointer-events-none">
              <h3 className="text-2xl font-headline font-bold">{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
