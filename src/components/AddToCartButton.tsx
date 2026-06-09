"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from './ProductCard';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  
  // Extract sizes
  const sizeOptions = product.sizes.split(',').map(s => s.trim()).filter(Boolean);
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0] || 'Default');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      name: product.name,
      size: selectedSize,
      quantity,
      image: product.image,
      price: currentPriceDisplay, // Ensure we pass the active price string to cart
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  // Determine pricing display based on size
  let currentPriceDisplay = "Price on request";
  if (typeof product.price === 'string') {
    currentPriceDisplay = product.price;
  } else if (typeof product.price === 'object' && product.price !== null) {
    const p = product.price[selectedSize];
    if (p !== undefined) {
      currentPriceDisplay = `₹${p.toLocaleString('en-IN')}`;
    }
  }

  // Check if we have sizes to render as pills
  const showSizes = sizeOptions.length > 0 && sizeOptions[0] !== 'Packaging available on request';

  return (
    <div className="mt-auto flex flex-col gap-5 pt-4 border-t border-outline-variant/10">
      
      {/* Size Pills Row */}
      {showSizes && (
        <div className="flex flex-col gap-2">
          <span className="text-xs font-label text-on-surface-variant uppercase tracking-wider font-bold">Select Size</span>
          <div className="flex flex-wrap gap-2">
            {sizeOptions.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 border ${
                  selectedSize === size
                    ? 'bg-primary text-on-primary border-primary shadow-md scale-[1.02]'
                    : 'bg-surface-container border-outline-variant/20 text-on-surface hover:border-primary/50 hover:bg-surface-container-high'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Price & Stock Row */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="font-headline text-2xl font-black text-on-surface tracking-tight leading-none">
            {currentPriceDisplay}
          </span>
          {currentPriceDisplay !== "Price on request" && (
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">In Stock</span>
            </div>
          )}
        </div>
      </div>

      {/* CTA Row */}
      <div className="flex items-center gap-3">
        <div className="flex items-center bg-surface-container rounded-xl border border-outline-variant/20 p-1">
          <button 
            onClick={decrement}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-highest active:bg-surface-container transition-colors text-on-surface"
          >
            <span className="material-symbols-outlined text-[18px]">remove</span>
          </button>
          <span className="text-sm font-bold w-6 text-center text-on-surface">{quantity}</span>
          <button 
            onClick={increment}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-highest active:bg-surface-container transition-colors text-on-surface"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
          </button>
        </div>

        <button
          onClick={handleAdd}
          className={`flex-grow flex items-center justify-center gap-2 h-12 rounded-xl text-sm font-black uppercase tracking-wide transition-all duration-300 active:scale-95 ${
            added 
            ? 'bg-green-600 text-white shadow-lg shadow-green-600/30' 
            : 'bg-primary text-on-primary hover:bg-primary/90 shadow-[0_8px_20px_rgba(46,16,101,0.15)] hover:shadow-[0_12px_24px_rgba(46,16,101,0.25)]'
          }`}
        >
          {added ? (
            <>
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              Added
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
