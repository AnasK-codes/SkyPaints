"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-error-container flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-error"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <h1 className="font-headline text-3xl md:text-4xl text-primary tracking-tight">
          Something went wrong
        </h1>

        <p className="text-on-surface-variant text-lg leading-relaxed">
          We encountered an unexpected error. Please try again, or contact us if
          the problem persists.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={reset}
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium shadow-lg hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="border border-outline-variant/30 text-primary px-8 py-4 rounded-full font-medium hover:bg-surface-container-low transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
