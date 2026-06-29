"use client";

import React from 'react';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';

export interface Product {
  name: string;
  desc: string;
  features?: string[];
  sizes: string;
  price: string | Record<string, number | undefined>;
  image: string;
  badge?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  // Split title and subtitle if it has a hyphen
  const parts = product.name.split(' - ');
  const mainTitle = parts[0];
  const subTitle = parts.slice(1).join(' - ');

  return (
    <div className="bg-surface rounded-[2rem] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 border border-outline-variant/30 flex flex-col h-full group relative overflow-hidden">
      
      {/* Optional Badge */}
      {product.badge && (
        <div className="absolute top-6 left-6 z-10 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
          {product.badge}
        </div>
      )}

      {/* Image Container */}
      <div className="w-full aspect-square rounded-[1.5rem] mb-6 relative flex items-center justify-center overflow-hidden border border-outline-variant/10 group-hover:border-primary/30 transition-colors duration-500">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="flex flex-col flex-grow">
        {/* Title & Subtitle */}
        <h3 className="font-headline text-2xl font-black text-on-surface tracking-tight leading-none mb-1.5">
          {mainTitle}
        </h3>
        {subTitle && (
          <p className="font-label text-sm text-primary font-bold uppercase tracking-wider mb-4">
            {subTitle}
          </p>
        )}
        {!subTitle && <div className="mb-4"></div>}

        <p className="font-body text-on-surface-variant text-sm mb-6 leading-relaxed line-clamp-2">
          {product.desc}
        </p>

        {/* Feature Chips */}
        <div className="flex flex-wrap gap-2 mb-8 flex-grow content-start">
          {(product.features || []).slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-1.5 bg-surface-container-lowest border border-outline-variant/20 px-3 py-1.5 rounded-full shadow-sm">
              <span className="material-symbols-outlined text-[14px] text-green-600">
                check_circle
              </span>
              <span className="text-xs font-medium text-on-surface-variant whitespace-nowrap">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Button & Pricing */}
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
