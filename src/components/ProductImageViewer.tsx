"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";

interface ProductImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  imageSrc: string;
  productDesc?: string;
  badge?: string;
}

export default function ProductImageViewer({
  isOpen,
  onClose,
  productName,
  imageSrc,
  productDesc,
  badge,
}: ProductImageViewerProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Reset zoom & position when modal opens/closes or image changes
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen, imageSrc]);

  // Keyboard navigation & zoom shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "=" || e.key === "+") {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === "-") {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === "0") {
        e.preventDefault();
        handleReset();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, scale]);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      handleReset();
    } else {
      setScale(2.5);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  // Touch Swipe for mobile: vertical swipe down when 1x scale closes modal
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      if (scale > 1) {
        setIsDragging(true);
        dragStartRef.current = {
          x: e.touches[0].clientX - position.x,
          y: e.touches[0].clientY - position.y,
        };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && touchStartRef.current) {
      if (scale > 1 && isDragging) {
        setPosition({
          x: e.touches[0].clientX - dragStartRef.current.x,
          y: e.touches[0].clientY - dragStartRef.current.y,
        });
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    if (scale === 1 && touchStartRef.current && e.changedTouches.length === 1) {
      const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
      if (deltaY > 90) {
        onClose();
      }
    }
    touchStartRef.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black/90 backdrop-blur-2xl animate-fade-in select-none"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="w-full flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 z-10 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 max-w-[65%] sm:max-w-none">
          {badge && (
            <span className="bg-primary text-on-primary text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md shrink-0">
              {badge}
            </span>
          )}
          <h3 className="font-headline text-base sm:text-lg md:text-xl font-bold text-white tracking-tight truncate">
            {productName}
          </h3>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-lg shrink-0">
          <button
            onClick={handleZoomOut}
            disabled={scale <= 1}
            className="p-1.5 sm:p-2 rounded-full text-white hover:bg-white/20 disabled:opacity-40 transition-colors"
            title="Zoom Out (-)"
            aria-label="Zoom out"
          >
            <Icon name="zoom_out" className="text-lg" />
          </button>
          <span className="text-xs font-mono font-bold text-white/90 min-w-[42px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            disabled={scale >= 4}
            className="p-2 rounded-full text-white hover:bg-white/20 disabled:opacity-40 transition-colors"
            title="Zoom In (+)"
            aria-label="Zoom in"
          >
            <Icon name="zoom_in" className="text-lg" />
          </button>
          <div className="w-[1px] h-5 bg-white/20 mx-1"></div>
          <button
            onClick={handleReset}
            className="p-2 rounded-full text-white hover:bg-white/20 transition-colors"
            title="Reset Zoom (0)"
            aria-label="Reset zoom"
          >
            <Icon name="refresh" className="text-lg" />
          </button>
          <div className="w-[1px] h-5 bg-white/20 mx-1"></div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white hover:bg-red-500/80 transition-colors"
            title="Close (Esc)"
            aria-label="Close full-screen image"
          >
            <Icon name="close" className="text-lg" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div
        className="flex-grow w-full flex items-center justify-center overflow-hidden relative p-4 md:p-12"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative max-w-4xl max-h-[78vh] w-full h-full flex items-center justify-center transition-transform duration-200 ${
            isDragging ? "cursor-grabbing" : scale > 1 ? "cursor-grab" : "cursor-zoom-in"
          }`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }}
          onDoubleClick={handleDoubleClick}
        >
          <div className="relative w-full h-full max-w-[650px] max-h-[650px] aspect-square">
            <Image
              src={imageSrc}
              alt={productName}
              fill
              priority
              sizes="100vw"
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Info Banner */}
      <div
        className="w-full px-4 sm:px-6 py-3 sm:py-4 z-10 bg-gradient-to-t from-black/80 to-transparent flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {productDesc ? (
          <p className="font-body text-xs sm:text-sm text-white/80 max-w-2xl line-clamp-2">
            {productDesc}
          </p>
        ) : (
          <div></div>
        )}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-label text-white/60">
          <span className="hidden sm:inline">
            Double-click to zoom
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Pinch/Buttons to zoom</span>
          <span>•</span>
          <span>Swipe down to close</span>
        </div>
      </div>
    </div>
  );
}
