import React from "react";
import Link from "next/link";
import ShadesGrid from "@/components/ShadesGrid";
import Icon from "@/components/Icon";

export const metadata = {
  title: "All Shades | Skypaints",
  description: "Explore our full catalog of 1,200 beautiful shades.",
};

export default function ShadesPage() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="bg-surface-container-lowest border-b border-outline-variant/10 sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
          <Link
            href="/#palette"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Icon name="arrow_back" className="" />
            <span className="font-label font-semibold">Back to Home</span>
          </Link>
          <h1 className="font-headline text-2xl text-primary hidden md:block">
            Skypaints Color Catalog
          </h1>
          <div className="w-10"></div> {/* Spacer for flex balance */}
        </div>
      </div>

      <ShadesGrid />
    </main>
  );
}
