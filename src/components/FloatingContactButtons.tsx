"use client";

import React, { useState } from "react";
import Icon from "@/components/Icon";

export default function FloatingContactButtons() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (isCollapsed) {
    return (
      <button
        type="button"
        onClick={() => setIsCollapsed(false)}
        className="fixed bottom-5 right-0 z-[100] w-8 h-12 bg-surface-container-highest/95 backdrop-blur-md text-on-surface hover:bg-primary hover:text-on-primary border border-r-0 border-outline-variant/40 rounded-l-xl shadow-lg flex items-center justify-center transition-all duration-300 hover:w-10 group animate-fade-in"
        aria-label="Show contact buttons"
        title="Show contact buttons"
      >
        <Icon
          name="chevron_left"
          className="text-base group-hover:-translate-x-0.5 transition-transform"
        />
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-[100] flex flex-col items-center gap-2.5 sm:gap-3 animate-fade-in-up">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917999295796?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Sky%20Paints%20and%20its%20products.%20Can%20you%20help%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-13 sm:h-13 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="drop-shadow-sm group-hover:rotate-12 transition-transform"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Call Button */}
      <a
        href="tel:+917999295796"
        className="w-11 h-11 sm:w-13 sm:h-13 bg-gradient-to-tr from-[#0066FF] to-[#0088FF] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
        aria-label="Call Us"
        title="Call Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm group-hover:rotate-12 transition-transform"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* Small Collapse Arrow Button */}
      <button
        type="button"
        onClick={() => setIsCollapsed(true)}
        className="w-8 h-8 rounded-full bg-surface-container-highest/90 backdrop-blur-md text-on-surface hover:bg-primary hover:text-on-primary border border-outline-variant/40 shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-110 mt-0.5"
        aria-label="Hide contact buttons"
        title="Hide contact buttons"
      >
        <Icon name="chevron_right" className="text-sm" />
      </button>
    </div>
  );
}
