"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string; // generated from name + size
  name: string;
  size: string;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('skypaints_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('skypaints_cart', JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addToCart = (newItem: Omit<CartItem, 'id'>) => {
    setItems(prev => {
      const id = `${newItem.name}-${newItem.size}`;
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => 
          item.id === id ? { ...item, quantity: item.quantity + newItem.quantity } : item
        );
      }
      return [...prev, { ...newItem, id }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
