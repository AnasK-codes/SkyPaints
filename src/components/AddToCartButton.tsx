"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "./ProductCard";
import Icon from "@/components/Icon";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { items, addToCart, removeFromCart, updateQuantity } = useCart();

  const isEmulsion =
    !product.name.toLowerCase().includes("neo advance") &&
    (product.category === "emulsions" ||
      Boolean(product.exteriorPrice || product.interiorPrice));

  const [surfaceType, setSurfaceType] = useState<"interior" | "exterior">(
    "interior"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Extract sizes
  const sizeOptions = product.sizes
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const getActivePriceObj = () => {
    if (isEmulsion) {
      if (surfaceType === "exterior" && product.exteriorPrice) {
        return product.exteriorPrice;
      } else if (surfaceType === "interior" && product.interiorPrice) {
        return product.interiorPrice;
      }
    }
    return product.price;
  };

  const getInitialSize = () => {
    if (sizeOptions.length === 0) return "Default";
    const activePrice = getActivePriceObj();
    if (typeof activePrice === "object" && activePrice !== null) {
      const validSize = sizeOptions.find(
        (size) =>
          typeof activePrice === "object" &&
          activePrice !== null &&
          activePrice[size] !== undefined
      );
      if (validSize) return validSize;
    }
    return sizeOptions[0];
  };

  const [selectedSize, setSelectedSize] = useState<string>(getInitialSize);

  // Check cart status for this specific product + size (+ surface type if emulsion)
  const itemSizeDisplay = isEmulsion
    ? `${selectedSize} (${surfaceType === "exterior" ? "Exterior Wall" : "Interior Wall"})`
    : selectedSize;

  const id = `${product.name}-${itemSizeDisplay}`;
  const cartItem = items.find((item) => item.id === id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  // Determine pricing display based on size and surface choice
  const activePriceObj = getActivePriceObj();
  let currentPriceDisplay = "Price on request";
  if (typeof activePriceObj === "string") {
    currentPriceDisplay = activePriceObj;
  } else if (typeof activePriceObj === "object" && activePriceObj !== null) {
    const p = activePriceObj[selectedSize];
    if (p !== undefined) {
      currentPriceDisplay = `₹${p.toLocaleString("en-IN")}`;
    }
  }

  // Check if we have sizes to render as pills
  const showSizes =
    sizeOptions.length > 0 &&
    sizeOptions[0] !== "Packaging available on request";

  const handleAdd = () => {
    addToCart({
      name: product.name,
      size: itemSizeDisplay,
      quantity: 1,
      image: product.image,
      price: currentPriceDisplay,
    });
  };

  const increment = () => {
    updateQuantity(id, quantityInCart + 1);
  };

  const decrement = () => {
    if (quantityInCart === 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, quantityInCart - 1);
    }
  };

  return (
    <div className="mt-auto flex flex-col gap-4 pt-4 border-t border-outline-variant/10">
      {/* Exterior / Interior Dropdown for Emulsions Only */}
      {isEmulsion && (
        <div className="flex flex-col gap-1.5" ref={dropdownRef}>
          <span className="text-xs font-label text-on-surface-variant uppercase tracking-wider font-bold flex items-center gap-1.5">
            <Icon name="landscape" className="text-sm text-primary" />
            <span>Select Surface / Application</span>
          </span>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full bg-surface-container hover:bg-surface-container-high rounded-[14px] border px-3.5 py-2.5 text-xs sm:text-sm font-bold text-on-surface flex items-center justify-between transition-all cursor-pointer shadow-sm ${
                isDropdownOpen
                  ? "border-primary ring-1 ring-primary"
                  : "border-outline-variant/30"
              }`}
            >
              <span>
                {surfaceType === "interior"
                  ? "Interior Walls (Standard Finish)"
                  : "Exterior Walls (Weather Shield)"}
              </span>
              <Icon
                name="expand_more"
                className={`text-base text-on-surface-variant transition-transform duration-200 flex-shrink-0 ml-2 ${
                  isDropdownOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="w-full mt-1.5 bg-surface-container-lowest border border-outline-variant/30 rounded-[14px] shadow-sm p-1.5 flex flex-col gap-1 animate-in fade-in zoom-in-95 duration-150">
                <button
                  type="button"
                  onClick={() => {
                    setSurfaceType("interior");
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-3 py-2.5 rounded-[10px] text-xs sm:text-sm font-bold flex items-center justify-between transition-all text-left ${
                    surfaceType === "interior"
                      ? "bg-primary/15 text-primary"
                      : "text-on-surface hover:bg-surface-container"
                  }`}
                >
                  <span>Interior Walls (Standard Finish)</span>
                  {surfaceType === "interior" && (
                    <Icon name="check" className="text-sm text-primary flex-shrink-0 ml-2" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSurfaceType("exterior");
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-3 py-2.5 rounded-[10px] text-xs sm:text-sm font-bold flex items-center justify-between transition-all text-left ${
                    surfaceType === "exterior"
                      ? "bg-primary/15 text-primary"
                      : "text-on-surface hover:bg-surface-container"
                  }`}
                >
                  <span>Exterior Walls (Weather Shield)</span>
                  {surfaceType === "exterior" && (
                    <Icon name="check" className="text-sm text-primary flex-shrink-0 ml-2" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Size Pills Row */}
      {showSizes && (
        <div className="flex flex-col gap-2">
          <span className="text-xs font-label text-on-surface-variant uppercase tracking-wider font-bold">
            Select Size
          </span>
          <div className="flex flex-wrap gap-2">
            {sizeOptions.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 border ${
                  selectedSize === size
                    ? "bg-primary text-on-primary border-primary shadow-md scale-[1.02]"
                    : "bg-surface-container border-outline-variant/20 text-on-surface hover:border-primary/50 hover:bg-surface-container-high"
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
              <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">
                In Stock
              </span>
            </div>
          )}
        </div>
      </div>

      {/* CTA Row */}
      <div className="flex items-center w-full">
        {quantityInCart > 0 ? (
          <div className="w-full flex items-center justify-between bg-surface-container rounded-xl border border-outline-variant/20 p-1 h-12 shadow-inner">
            <button
              onClick={decrement}
              className="flex-1 h-full flex items-center justify-center rounded-lg hover:bg-surface-container-highest active:bg-surface-container transition-colors text-on-surface"
              aria-label="Decrease quantity"
            >
              <Icon
                name={quantityInCart === 1 ? "delete" : "remove"}
                className="text-[20px]"
              />
            </button>
            <span className="text-base font-black w-16 text-center text-on-surface">
              {quantityInCart}
            </span>
            <button
              onClick={increment}
              className="flex-1 h-full flex items-center justify-center rounded-lg hover:bg-surface-container-highest active:bg-surface-container transition-colors text-on-surface"
              aria-label="Increase quantity"
            >
              <Icon name="add" className="text-[20px]" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="w-full flex items-center justify-center gap-2 h-12 rounded-xl text-sm font-black uppercase tracking-wide transition-all duration-300 active:scale-95 bg-primary text-on-primary hover:bg-primary/90 shadow-[0_8px_20px_rgba(46,16,101,0.15)] hover:shadow-[0_12px_24px_rgba(46,16,101,0.25)]"
          >
            <Icon name="shopping_cart" className="text-[20px]" />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
