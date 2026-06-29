"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Icon from "@/components/Icon";

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
    const onUp = () => {
      isDragging.current = false;
    };

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
      <h2 className="font-headline text-4xl md:text-5xl text-primary mb-16">
        The Skypaints Effect
      </h2>
      <div
        ref={containerRef}
        className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden group select-none cursor-ew-resize touch-none"
        onMouseDown={() => {
          isDragging.current = true;
        }}
        onTouchStart={() => {
          isDragging.current = true;
        }}
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            alt="Dull, unpainted gray room"
            fill
            className="object-cover"
            src="/images/before-image.png"
          />
          <span className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md text-white rounded-full text-xs font-bold uppercase tracking-widest hidden md:block">
            Before
          </span>
        </div>
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
          }}
        >
          <Image
            alt="Modern room"
            fill
            className="object-cover scale-[1.5] origin-center"
            src="/images/after-slider.svg"
          />
          <span className="absolute top-6 right-6 px-4 py-2 bg-secondary-container backdrop-blur-md text-white rounded-full text-xs font-bold uppercase tracking-widest hidden md:block">
            After Skypaints
          </span>
        </div>
        <div
          className="absolute inset-y-0 w-1 bg-white/30 backdrop-blur-sm flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-primary pointer-events-auto">
            <Icon name="swap_horiz" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
