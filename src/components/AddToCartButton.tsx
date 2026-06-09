"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

interface AddToCartButtonProps {
  product: {
    name: string;
    sizes: string;
    image: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  
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
      price: "Price on request",
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="mt-auto pt-4 border-t border-outline-variant/10 flex flex-col gap-3">
      {sizeOptions.length > 0 && (
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-on-surface-variant">Size:</label>
          <select 
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="text-xs bg-surface dark:bg-surface-dark rounded-md border border-outline-variant/20 px-2 py-1 outline-none focus:border-primary text-on-surface"
          >
            {sizeOptions.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      )}
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 bg-surface-container-low rounded-full p-1 border border-outline-variant/20 shadow-sm">
          <button 
            onClick={decrement}
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-[16px]">remove</span>
          </button>
          <span className="text-sm font-medium w-5 text-center text-on-surface">{quantity}</span>
          <button 
            onClick={increment}
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
          </button>
        </div>

        <button
          onClick={handleAdd}
          className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
            added 
            ? 'bg-green-600 text-white shadow-md' 
            : 'bg-primary text-on-primary hover:bg-primary/90 shadow-ambient shadow-ambient-hover'
          }`}
        >
          {added ? (
            <>
              <span className="material-symbols-outlined text-[18px]">check</span>
              Added
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">shopping_cart_checkout</span>
              Add
            </>
          )}
        </button>
      </div>
    </div>
  );
}
