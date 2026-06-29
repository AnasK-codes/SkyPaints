"use client";
import React, { useState, useRef, useEffect } from "react";
import Icon from "@/components/Icon";

const PROJECT_TYPES = [
  "Interior Walls",
  "Exterior Walls",
  "Wood Finishes",
  "Metal Surfaces",
];

const PRODUCTS = [
  { id: "premium", name: "Premium Luxury Emulsion", price: 450, coverage: 120 },
  {
    id: "washable",
    name: "Advanced Washable Plastic",
    price: 300,
    coverage: 100,
  },
  { id: "distemper", name: "Classic Distemper", price: 150, coverage: 80 },
  {
    id: "exterior",
    name: "All-Weather Exterior Shield",
    price: 500,
    coverage: 60,
  },
];

const CONDITIONS = [
  { id: "fresh", name: "Fresh Painting (Needs Primer)", labourRate: 12 },
  { id: "re-good", name: "Repainting (Good Condition)", labourRate: 8 },
  { id: "re-repair", name: "Repainting (Needs Repair)", labourRate: 15 },
];

const COATS = [
  { id: 1, name: "1 Coat (Touch up)" },
  { id: 2, name: "2 Coats (Recommended)" },
  { id: 3, name: "3 Coats (Drastic color change)" },
];

type OptionType = any;

interface CustomSelectProps {
  label: string;
  options: OptionType[];
  value: OptionType;
  onChange: (value: OptionType) => void;
  className?: string;
}

function CustomSelect({
  label,
  options,
  value,
  onChange,
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div className={`space-y-2 relative ${className}`} ref={ref}>
      <label className="font-label text-sm text-on-surface-variant ml-4 block">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-surface-container-highest rounded-full px-6 py-4 font-body text-on-surface border border-transparent hover:border-primary/20 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
        >
          <span className="truncate">{value?.name || value}</span>
          <Icon
            name="expand_more"
            className={`text-on-surface-variant transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div
            className="absolute z-50 mt-2 w-full bg-[#484452] text-[#f2f0f4] rounded-2xl py-2 shadow-xl border border-white/5 overflow-hidden backdrop-blur-xl animate-fade-in-up"
            style={{ animationDuration: "0.2s" }}
          >
            {options.map((option: OptionType, i: number) => {
              const isSelected =
                (option.name || option) === (value?.name || value);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 font-body text-sm hover:bg-white/10 transition-colors flex items-center gap-2 ${
                    isSelected ? "bg-white/5 font-medium" : ""
                  }`}
                >
                  <span className="w-4 flex-shrink-0 flex items-center justify-center">
                    {isSelected && (
                      <Icon name="check" className="text-[16px]" />
                    )}
                  </span>
                  <span className="truncate">{option.name || option}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CostCalculator() {
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [area, setArea] = useState("");
  const [product, setProduct] = useState(PRODUCTS[0]);
  const [condition, setCondition] = useState(CONDITIONS[0]);
  const [coats, setCoats] = useState(COATS[1]);

  const [estimate, setEstimate] = useState<{
    quantity: number;
    paintCost: number;
    labourCost: number;
    total: number;
    labourType: string;
  } | null>(null);

  const calculateEstimate = () => {
    const sqft = parseFloat(area);
    if (isNaN(sqft) || sqft <= 0) return;

    const requiredLitres = Math.ceil((sqft / product.coverage) * coats.id);
    const paintCost = requiredLitres * product.price;
    const labourCost = sqft * condition.labourRate;

    setEstimate({
      quantity: requiredLitres,
      paintCost,
      labourCost,
      total: paintCost + labourCost,
      labourType: condition.labourRate > 10 ? "Premium Team" : "Standard Team",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section
      className="px-8 md:px-16 lg:px-24 mb-32 max-w-[1600px] mx-auto scroll-mt-32 animate-fade-in-up"
      id="calculator"
      style={{ animationDelay: "200ms", animationFillMode: "both" }}
    >
      <div className="bg-surface-container-low rounded-xl p-1 lg:p-4 transition-all">
        <div className="bg-surface rounded-xl p-8 lg:p-16 border border-outline-variant/10 shadow-ambient">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline text-4xl text-primary mb-4">
              Estimate Your Canvas
            </h2>
            <p className="font-body text-on-surface-variant text-lg">
              Input your project dimensions below for a refined estimation of
              required materials and approximate investment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form Inputs */}
            <div className="lg:col-span-7 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CustomSelect
                  label="Project Type"
                  options={PROJECT_TYPES}
                  value={projectType}
                  onChange={setProjectType}
                />

                <div className="space-y-2 relative">
                  <label className="font-label text-sm text-on-surface-variant ml-4 block">
                    Area (sq.ft)
                  </label>
                  <input
                    className="w-full bg-surface-container-highest rounded-full px-6 py-4 font-body text-on-surface border border-transparent outline-none focus:border-primary/20 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant"
                    placeholder="e.g. 500"
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>

                <CustomSelect
                  label="Product Selection"
                  options={PRODUCTS}
                  value={product}
                  onChange={setProduct}
                  className="md:col-span-2"
                />

                <CustomSelect
                  label="Surface Condition"
                  options={CONDITIONS}
                  value={condition}
                  onChange={setCondition}
                />

                <CustomSelect
                  label="Number of Coats"
                  options={COATS}
                  value={coats}
                  onChange={setCoats}
                />
              </div>
              <div className="pt-4">
                <button
                  onClick={calculateEstimate}
                  disabled={!area || parseFloat(area) <= 0}
                  className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-label font-bold hover:bg-primary hover:text-on-primary transition-colors duration-300 w-full md:w-auto shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Generate Estimate
                </button>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-5 relative">
              {/* Background decorative glow */}
              <div className="absolute inset-0 bg-[#2b1055]/30 rounded-3xl blur-2xl -z-10 translate-y-4"></div>
              <div className="bg-[#240d47] text-white rounded-[32px] p-10 shadow-elevated h-full flex flex-col justify-between overflow-hidden relative">
                {/* Internal subtle glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 text-white/80">
                    <span className="font-label text-sm uppercase tracking-wider">
                      Estimated Investment
                    </span>
                    <Icon name="receipt_long" className="" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <div>
                        <p className="font-label text-white/60 text-sm mb-1">
                          Required Quantity
                        </p>
                        <p className="font-headline text-2xl">
                          ~ {estimate ? estimate.quantity : "0"} Litres
                        </p>
                      </div>
                      <p className="font-body text-white/80">
                        {estimate ? formatCurrency(estimate.paintCost) : "₹ 0"}
                      </p>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <div>
                        <p className="font-label text-white/60 text-sm mb-1">
                          Estimated Labour
                        </p>
                        <p className="font-headline text-2xl">
                          {estimate ? estimate.labourType : "Standard Team"}
                        </p>
                      </div>
                      <p className="font-body text-white/80">
                        {estimate ? formatCurrency(estimate.labourCost) : "₹ 0"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                  <p className="font-label text-white/60 text-sm mb-2">
                    Total Approximate Cost
                  </p>
                  <p className="font-headline text-5xl tracking-tight text-[#f5e0c0]">
                    {estimate ? formatCurrency(estimate.total) : "₹ 0"}
                  </p>
                  <p className="font-body text-xs text-white/50 mt-4 leading-relaxed">
                    *This is an approximate estimation. Actual costs may vary
                    based on precise surface condition, localized labour rates,
                    and final product selection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
