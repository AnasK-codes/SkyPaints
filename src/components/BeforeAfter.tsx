"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onUp = () => { isDragging.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto text-center">
      <h2 className="font-headline text-4xl md:text-5xl text-primary mb-16">The Skypaints Effect</h2>
      <div 
        ref={containerRef}
        className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden group select-none cursor-ew-resize touch-none"
        onMouseDown={() => { isDragging.current = true; }}
        onTouchStart={() => { isDragging.current = true; }}
      >
        <div className="absolute inset-0 w-full h-full">
          <Image alt="Dull, unpainted gray room" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXBZIk9VSrzTqdOOnqEgyaKyPj6iQzSnPQbt4a6rQkWdkQnp_MHkbmuhB9sX79jhvdnueuMbMvvI5KFpR_govCmkSz4UjiLX248jeasah_yJMWmJh5isevb6j47p9D5zNnFH41s5zxE5iPZPszSemR_ZKhSLMhx-V77T_B07UhC8ie4iw4wlSLJiJBJ8qvtJ9ouUZMlwgXzcdf6jZZfcHUIeInkuYHEG2NtEFzXy3rJjLdlFAna80f68kt1FHorBTBecoTm1FICec" />
          <span className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md text-white rounded-full text-xs font-bold uppercase tracking-widest hidden md:block">Before</span>
        </div>
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          <Image alt="Modern room" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrJy2lOPj1sfDxTKxfNGUW2WAMGNLMN4AIcp6UuBLGWBjv9HoqpZpX04xFvi2OmWPg1r7ciJxL1LBC4WCKD1-mND4hC6N1I4nEPYQH4rTLFbcBPQisl4lFEZOrKdHVse-7FMShxvIzGsbKDIPWm5PS_D7Vj88nBozWYBPccqhLchzRcPVubp05_f0o_vjd079FRUk56GRlFDG-RYgUq0H6kcqE8ghoHLFRyiCVp7UrvZerhDMNg-46NVFaftbeAsFURcVi6o-xRs8" />
          <span className="absolute top-6 right-6 px-4 py-2 bg-secondary-container backdrop-blur-md text-white rounded-full text-xs font-bold uppercase tracking-widest hidden md:block">After Skypaints</span>
        </div>
        <div 
          className="absolute inset-y-0 w-1 bg-white/30 backdrop-blur-sm flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-primary pointer-events-auto">
            <span className="material-symbols-outlined">swap_horiz</span>
          </div>
        </div>
      </div>
    </section>
  );
}
