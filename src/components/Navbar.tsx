'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Color Tools', href: '/tools' },
    { name: 'Blogs', href: '/inspiration' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'py-4' : 'py-6 md:py-8'}`}>
      <div className={`relative mx-auto transition-all duration-500 ease-out ${scrolled ? 'max-w-[95%] xl:max-w-6xl px-2 md:px-4' : 'max-w-7xl px-8 md:px-12'}`}>
        <div className={`flex items-center justify-between w-full transition-all duration-500 ease-out
          ${scrolled 
            ? 'bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-2xl border border-outline-variant/30 shadow-[0_8px_32px_rgba(46,16,101,0.08)] rounded-full px-4 md:px-6 py-3' 
            : 'bg-transparent px-2 py-2'
          }`}>
          
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group flex-shrink-0">
            <img src="/images/logo.png" alt="Skypaints Logo" className="w-8 h-8 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-headline font-bold tracking-tight text-on-surface hidden sm:block">Skypaints</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-surface-container-low/80 p-1.5 rounded-full backdrop-blur-md border border-outline-variant/20 shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname?.startsWith(link.href + '/') && link.href !== '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 xl:px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${isActive
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <Link href="/products" className="bg-secondary-fixed text-on-secondary-fixed rounded-full px-4 md:px-5 xl:px-6 py-2 md:py-2.5 text-sm font-bold hover:bg-secondary-fixed-dim transition-colors shadow-lg shadow-secondary-fixed/20">
              Explore Colors
            </Link>
            <button 
              className="lg:hidden w-10 h-10 text-on-surface bg-surface-container-low/80 rounded-full backdrop-blur-md border border-outline-variant/20 flex items-center justify-center transition-colors hover:bg-surface-container-high"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-[calc(100%+16px)] z-40 origin-top animate-fade-in-up px-2 md:px-4">
            <div className="w-full bg-surface dark:bg-surface-dark border border-outline-variant/30 shadow-[0_24px_48px_rgba(46,16,101,0.15)] rounded-[2rem] p-3 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname?.startsWith(link.href + '/') && link.href !== '/');
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-base font-medium transition-all duration-300 ${isActive
                      ? 'bg-primary-container/30 text-primary font-bold'
                      : 'text-on-surface hover:bg-surface-container-low hover:text-primary'
                      }`}
                  >
                    <span>{link.name}</span>
                    <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-primary' : 'opacity-40'}`}>
                      {isActive ? 'arrow_forward' : 'chevron_right'}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
