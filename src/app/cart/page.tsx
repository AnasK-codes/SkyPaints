"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalItems } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Parse price strings like "₹124" or "₹2,840" into number
  const parsePrice = (priceStr: string): number | null => {
    if (!priceStr || priceStr.toLowerCase().includes("request")) return null;
    const cleaned = priceStr.replace(/[^0-9.]/g, "");
    const val = parseFloat(cleaned);
    return isNaN(val) ? null : val;
  };

  // Calculate order summary figures
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  let hasNumericPrices = false;
  let hasRequestPrices = false;
  let subtotal = 0;

  items.forEach((item) => {
    const unitPrice = parsePrice(item.price);
    if (unitPrice !== null) {
      subtotal += unitPrice * item.quantity;
      hasNumericPrices = true;
    } else {
      hasRequestPrices = true;
    }
  });

  const gstAmount = Math.round(subtotal * 0.18);
  const estimatedTotal = subtotal + gstAmount;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) return;

    let message = `Hello SkyPaints, I would like to get a quotation & order confirmation:\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Mobile: ${formData.mobile}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    message += `Address: ${formData.address}\n\n`;

    message += `*Products Selected (${items.length} Products, ${totalQuantity} Total Units):*\n`;
    items.forEach((item, index) => {
      const unitPrice = parsePrice(item.price);
      const linePriceStr =
        unitPrice !== null
          ? `₹${(unitPrice * item.quantity).toLocaleString("en-IN")} (₹${unitPrice.toLocaleString("en-IN")}/unit)`
          : item.price;
      message += `${index + 1}. ${item.name} | Size: ${item.size} | Qty: ${item.quantity} | ${linePriceStr}\n`;
    });

    message += `\n*Order Summary:*\n`;
    message += `Total Quantity: ${totalQuantity} units\n`;
    if (hasNumericPrices) {
      message += `Subtotal: ₹${subtotal.toLocaleString("en-IN")}\n`;
      message += `Estimated GST (18%): ₹${gstAmount.toLocaleString("en-IN")}\n`;
      message += `Estimated Total: ₹${estimatedTotal.toLocaleString("en-IN")}\n`;
    }
    if (hasRequestPrices) {
      message += `Note: Includes item(s) with price on request.\n`;
    }

    message += `\nPlease confirm availability and final dealer pricing.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917999295796?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-32 pb-20 md:pb-24 bg-surface min-h-screen selection:bg-primary-fixed selection:text-primary">
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto animate-fade-in-up">
          {/* Page Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-3">
              Your Shopping Cart
            </h1>
            <p className="font-body text-on-surface-variant text-base sm:text-lg">
              Review your selected paints & coatings, verify quantities, and request an official quotation.
            </p>
          </div>

          {items.length === 0 ? (
            <div className="bg-surface-container-low rounded-[2rem] p-8 sm:p-14 text-center border border-outline-variant/10 shadow-sm max-w-2xl mx-auto my-12">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon
                  name="shopping_cart"
                  className="text-4xl text-primary"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface mb-3">
                Your cart is currently empty
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base mb-8 max-w-md mx-auto">
                Explore our professional range of decorative paints, waterproofing coats, and cleaning supplies.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label font-bold shadow-ambient hover:shadow-ambient-hover hover:scale-105 transition-all duration-300"
              >
                <span>Explore Products</span>
                <Icon name="arrow_forward" className="text-lg" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Cart Items List */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-surface-container-lowest rounded-[2rem] p-5 sm:p-7 md:p-8 border border-outline-variant/20 shadow-sm">
                  <div className="flex items-center justify-between border-b border-outline-variant/15 pb-5 mb-6">
                    <div>
                      <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
                        Selected Products
                      </h2>
                      <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                        {items.length} {items.length === 1 ? "product" : "products"} • {totalQuantity} total {totalQuantity === 1 ? "unit" : "units"}
                      </p>
                    </div>
                    <Link
                      href="/products"
                      className="text-xs sm:text-sm font-label font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      <span>Add More</span>
                      <Icon name="add" className="text-sm" />
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {items.map((item) => {
                      const unitPrice = parsePrice(item.price);
                      const itemTotal =
                        unitPrice !== null ? unitPrice * item.quantity : null;

                      return (
                        <div
                          key={item.id}
                          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 sm:p-5 rounded-2xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors border border-outline-variant/15"
                        >
                          {/* Product Thumbnail */}
                          <div className="flex items-center gap-4 sm:w-auto">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-xl overflow-hidden flex-shrink-0 bg-white border border-outline-variant/20 shadow-sm">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="96px"
                                className="object-contain p-1.5"
                              />
                            </div>

                            {/* Mobile Title & Price Layout */}
                            <div className="sm:hidden flex-grow min-w-0">
                              <h3 className="font-headline font-bold text-base text-on-surface leading-tight line-clamp-2">
                                {item.name}
                              </h3>
                              <div className="flex items-center gap-2 mt-1.5">
                                <span className="bg-primary/10 text-primary font-bold text-xs px-2.5 py-0.5 rounded-md">
                                  {item.size}
                                </span>
                                <span className="text-xs font-mono font-bold text-on-surface-variant">
                                  {item.price}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Desktop Title & Details */}
                          <div className="hidden sm:block flex-grow min-w-0">
                            <h3 className="font-headline font-bold text-lg text-on-surface leading-tight mb-1.5 truncate">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2.5">
                              <span className="bg-primary/10 text-primary font-bold text-xs px-2.5 py-1 rounded-md">
                                Size: {item.size}
                              </span>
                              <span className="text-xs font-medium text-on-surface-variant">
                                Unit: {item.price}
                              </span>
                            </div>
                          </div>

                          {/* Quantity & Item Subtotal */}
                          <div className="flex items-center justify-between sm:justify-end gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-outline-variant/15">
                            <div className="flex flex-col items-start sm:items-end">
                              {itemTotal !== null ? (
                                <span className="font-headline font-black text-base sm:text-lg text-primary">
                                  ₹{itemTotal.toLocaleString("en-IN")}
                                </span>
                              ) : (
                                <span className="font-label text-xs font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                                  On Request
                                </span>
                              )}
                              <span className="text-[11px] text-on-surface-variant">
                                {item.quantity} {item.quantity === 1 ? "unit" : "units"}
                              </span>
                            </div>

                            {/* Qty Controls */}
                            <div className="flex items-center gap-1 bg-surface rounded-full p-1 border border-outline-variant/30 shadow-sm">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors text-on-surface"
                                aria-label="Decrease quantity"
                              >
                                <Icon name="remove" className="text-base" />
                              </button>
                              <span className="text-xs font-mono font-bold w-6 text-center text-on-surface">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors text-on-surface"
                                aria-label="Increase quantity"
                              >
                                <Icon name="add" className="text-base" />
                              </button>
                            </div>

                            {/* Remove Item */}
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="text-error hover:bg-error-container hover:text-on-error-container p-2 rounded-full transition-colors"
                              title="Remove item"
                              aria-label="Remove item from cart"
                            >
                              <Icon name="delete" className="text-lg" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary & Quotation Form */}
              <div className="lg:col-span-5 space-y-6">
                {/* Order Summary Card */}
                <div className="bg-surface-container-lowest rounded-[2rem] p-6 sm:p-8 border border-outline-variant/20 shadow-sm">
                  <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mb-5 flex items-center gap-2">
                    <Icon name="receipt_long" className="text-primary text-2xl" />
                    <span>Order Summary</span>
                  </h2>

                  <div className="space-y-3.5 text-sm">
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span>Unique Products</span>
                      <span className="font-bold text-on-surface">
                        {items.length} {items.length === 1 ? "Product" : "Products"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span>Total Quantity</span>
                      <span className="font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                        {totalQuantity} {totalQuantity === 1 ? "Unit" : "Units"}
                      </span>
                    </div>

                    {hasNumericPrices && (
                      <>
                        <div className="flex items-center justify-between text-on-surface-variant pt-2 border-t border-outline-variant/15">
                          <span>Subtotal</span>
                          <span className="font-mono font-bold text-on-surface">
                            ₹{subtotal.toLocaleString("en-IN")}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-on-surface-variant">
                          <span className="flex items-center gap-1">
                            <span>Estimated GST (18%)</span>
                          </span>
                          <span className="font-mono font-bold text-on-surface">
                            ₹{gstAmount.toLocaleString("en-IN")}
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-outline-variant/20">
                          <span className="font-headline font-bold text-base text-on-surface">
                            Estimated Total
                          </span>
                          <span className="font-headline font-black text-xl text-primary">
                            ₹{estimatedTotal.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </>
                    )}

                    {hasRequestPrices && (
                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-700 dark:text-amber-300 mt-2">
                        Includes custom product(s) with pricing confirmed directly on quotation.
                      </div>
                    )}

                    <p className="text-[11px] text-on-surface-variant/80 pt-2 leading-relaxed">
                      * Final dealer discounts, bulk shipping rates, and tax breakdown will be confirmed instantly via WhatsApp.
                    </p>
                  </div>
                </div>

                {/* Quotation Request Form */}
                <div className="bg-surface-container-lowest rounded-[2rem] p-6 sm:p-8 border border-outline-variant/20 shadow-sm">
                  <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary mb-2">
                    Request WhatsApp Quotation
                  </h2>
                  <p className="text-xs sm:text-sm text-on-surface-variant mb-6">
                    Fill out your delivery details to receive an official price quote on WhatsApp.
                  </p>

                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container rounded-xl border border-outline-variant/30 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface text-sm"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mobile"
                        className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5"
                      >
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container rounded-xl border border-outline-variant/30 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface text-sm"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5"
                      >
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container rounded-xl border border-outline-variant/30 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface text-sm"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="address"
                        className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5"
                      >
                        Delivery Address *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        required
                        rows={3}
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container rounded-xl border border-outline-variant/30 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface text-sm resize-none"
                        placeholder="City, State, Pincode & Street details"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-full font-label font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-98"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                        <span>Send WhatsApp Quotation</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
