"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from '@/context/CartContext';
import Image from "next/image";
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalItems } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) return;

    let message = `Hello SkyPaints, I would like to get a quotation for the following items:\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Mobile: ${formData.mobile}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    message += `Address: ${formData.address}\n\n`;
    
    message += `*Products Selected:*\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Size: ${item.size} (Qty: ${item.quantity})\n`;
    });
    
    message += `\nPlease let me know the pricing and further steps.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917999295796?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-surface min-h-screen selection:bg-primary-fixed selection:text-primary">
        <section className="px-4 md:px-8 lg:px-24 max-w-[1600px] mx-auto animate-fade-in-up">
          <div className="mb-12">
            <h1 className="font-headline text-4xl md:text-5xl text-primary mb-4">Your Cart</h1>
            <p className="font-body text-on-surface-variant text-lg">
              Review your selected products and request a personalized quotation.
            </p>
          </div>

          {items.length === 0 ? (
            <div className="bg-surface-container-low rounded-[2rem] p-12 text-center border border-outline-variant/10 shadow-sm">
              <span className="material-symbols-outlined text-6xl text-primary/30 mb-4 block">shopping_cart</span>
              <h2 className="text-2xl font-headline text-on-surface mb-4">Your cart is empty</h2>
              <p className="text-on-surface-variant mb-8">Looks like you haven't added any products yet.</p>
              <Link href="/products" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label font-bold shadow-ambient hover:shadow-ambient-hover transition-all">
                Explore Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Cart Items List */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-surface-container-lowest rounded-[2rem] p-4 md:p-8 border border-outline-variant/10 shadow-sm">
                  <h2 className="font-headline text-2xl text-primary mb-6 border-b border-outline-variant/10 pb-4">
                    Selected Items ({totalItems})
                  </h2>
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row gap-4 items-center sm:items-start p-4 rounded-2xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors border border-outline-variant/5">
                        <div className="w-24 h-24 relative rounded-xl overflow-hidden flex-shrink-0 bg-white">
                          <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                        </div>
                        <div className="flex-grow text-center sm:text-left flex flex-col justify-between h-full w-full">
                          <div>
                            <h3 className="font-headline text-lg text-on-surface leading-tight mb-1">{item.name}</h3>
                            <p className="text-sm text-on-surface-variant">Size: {item.size}</p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2 bg-surface-container rounded-full p-1 border border-outline-variant/20">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors text-on-surface-variant"
                              >
                                <span className="material-symbols-outlined text-[18px]">remove</span>
                              </button>
                              <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors text-on-surface-variant"
                              >
                                <span className="material-symbols-outlined text-[18px]">add</span>
                              </button>
                            </div>
                            
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-error hover:bg-error-container hover:text-on-error-container p-2 rounded-full transition-colors flex items-center"
                              title="Remove item"
                            >
                              <span className="material-symbols-outlined">delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Checkout Form */}
              <div className="lg:col-span-5">
                <div className="bg-surface-container-lowest rounded-[2rem] p-6 md:p-8 border border-outline-variant/10 shadow-ambient sticky top-32">
                  <h2 className="font-headline text-2xl text-primary mb-6">Request Quotation</h2>
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-on-surface-variant mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container rounded-xl border border-outline-variant/20 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-on-surface-variant mb-1">Mobile Number *</label>
                      <input 
                        type="tel" 
                        id="mobile"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container rounded-xl border border-outline-variant/20 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-1">Email Address (Optional)</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container rounded-xl border border-outline-variant/20 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-on-surface-variant mb-1">Delivery Address *</label>
                      <textarea 
                        id="address"
                        name="address"
                        required
                        rows={3}
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container rounded-xl border border-outline-variant/20 px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface resize-none"
                        placeholder="Enter your full address"
                      />
                    </div>
                    
                    <div className="pt-4 mt-6 border-t border-outline-variant/10">
                      <button 
                        type="submit"
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-full font-label font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-6 h-6">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                        </svg>
                        Get Quotation on WhatsApp
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
