"use client";

import { openWhatsApp } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <button
      aria-label="Chat on WhatsApp"
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl shadow-lg shadow-green-500/30 transition-all duration-300 hover:bg-green-400 hover:scale-110 hover:shadow-green-400/40 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
    >
      💬
    </button>
  );
}
