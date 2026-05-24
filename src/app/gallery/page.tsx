import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Gallery | Skypaints',
  description: 'Explore our gallery of beautiful home transformations, curated colour combinations, and stunning textures.',
};

const images = [
  {
    id: 1,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS4oNHilHUZbxIVEo8szEBxdU-LwtK7s5Le6fFL3KXuotMQ-7udnp7smueumDEcpAekOm6DbSqjYG4Mj8kxTFlysy95ksyt-ivB73UazB7uERHcItqxocXdC9021BvsVPE80GTQqWXa9kPF84LF_bIDBUwO0Pkoyra4xEAHayLmUotnNKJAngDH2ubfpODnhceq0SmFJZ2JZOON-s-Qg_FqtdTU5WU-D3COWqKMq7CpcgmvMZivkpvJFUAJUccyrkfADUWlYMGQJ8',
    title: 'Sunny Exteriors',
    colSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyWkVnya0FbXD62uMzuyBa1KJv8ZGhXq_S49sDzZRgzFVa593hX35mqemZfKjztZyCQP46iLZWIn-Hv1KIpwsADdHrzsY6E5fvwzidCF2nYJdgtgZwRBxs_zOgaopR0Lvw4256WygriDnmlPJGyFg5XSeON4xDdxoX_bDvxoQMfi-gGmaDkg1IeqTW3duaYLfnd7cTVHfztWiac8q4hzN0ngvoI4y_6-J6GRFb-x3I-NyyeYxGIRaapgjclZ76M874o7_1Y0SfdBY',
    title: 'Vastu Compliant Spaces',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7P521h11q4qYGpM0_t1AM-e5psuxAIFyZNS50mqwLUkKcE5yQnDkRqWAcPl3QHeTYxrpMrhnX5WaOdfHvn-fFE6Q-xaTh3mENG6x5d4k1vrP6BfCZUKX9I_lBaZ6IL4j4P4b8UyU15iig6ADefcNge4SF4LTSFzK72IgZJX4JU8yoNp_8oKlK1uYIeHrfozY3mPs5UOTZ16SgVNHT8IQYjrHQ-aXtdymif_jgw5DA9Ev5823oKZd33Oy4QDfT7kjXgHJ_tJPtKGk',
    title: 'Modern Living Rooms',
    colSpan: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 4,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMIB0NwVG01CqLvA42sA4vcv3o0FT71OPGIcF6pdyXh6JKbI8mhkgy4-iiSPgIGhkoxKOBNcduX9r9JswrCc0WJp0MntspoIi5NxSZOUfTNMGTFb3YVa5eyvfsnTsXPEQSA62foScEjUjmyQldCoq9jkq3sqI15DvwV7weW9uN5SxGJWLe6lR6qkfPh4CZn9WmtfLB-QbqKr-hvDKioLwo1xovOhb8D6QhPwJ9dLmC8L-MV7rfoBwpZzpC_gxz0vUUU9JpaMrhRrM',
    title: 'Metallic Textures',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0KWpOm5aMIvQJX19XZy83JFgRwKHGlZX_SxoEYNq6rTdHKxAy6ySShuPQjMMqzb3bFyrl9_8UsqxVtKYHDA_-3pCjn5sRPhFALUw7Uf7HSRaNZgw8AxqIjKFhGDG0MLDICteK-c5LrGNyDrCHc4qd9J3gYB8u6GGMVWcx63piDAsFHccYI9Fvo0qRSlJL2wbePtZoWhL8AwXksv21ETxxw2PJ-motDzxSe3pJqvkJvZsIVjAaxcFTnYUsPzUBIP-ecZKiIyXZfcE',
    title: 'Cozy Interiors',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 6,
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiM-uwZshKx8RRQKLE3YSF3AODqPL22Ba4HN4Tg1X7jwyd00LJKg6z9fcBf8_lWirOiANL1z361Po4oAgVLl_kksQKGqcYZn3hdLFamPqlSPQMZ4F8G_IPhGUsqm51jYSt4XyUKIUpsvaAYAs5387Uwb4xx3Raiu2sN3UPvHcYzbVmMxtc34BsQ0mws6kJCStyEQ2YyJ7b7opm0J8ofgc0WludFWiHysdXm85oKehXnfNKVDNSPlfXgMEe6SOWoKcLs0EGJc_2BUY',
    title: 'Elegant Facades',
    colSpan: 'md:col-span-2 md:row-span-1',
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

          {/* Dummy Masonry/Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            {images.map((img) => (
              <div 
                key={img.id} 
                className={`relative group overflow-hidden rounded-[2rem] shadow-[0_8px_30px_rgba(46,16,101,0.06)] bg-surface-container ${img.colSpan}`}
              >
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-white font-headline text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    View Project
                  </p>
                </div>
              </div>
            ))}
          </div>
          
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
