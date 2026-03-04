"use client";

import { useState } from "react";
import { calculateArea, formatCurrency } from "@/lib/utils";

const RATE_PER_SQFT = 2.5; // USD per sq ft

export default function Calculator() {
  const [length, setLength] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [coats, setCoats] = useState(2);

  const area =
    typeof length === "number" && typeof width === "number"
      ? calculateArea(length, width)
      : 0;
  const estimate = area * RATE_PER_SQFT * (coats * 0.6);

  return (
    <section className="py-24 bg-slate-900/50" id="calculator">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="badge w-fit">Free Estimator</div>
            <h2 className="section-heading">
              Get an Instant{" "}
              <span className="gradient-text">Price Estimate</span>
            </h2>
            <p className="section-subheading text-left">
              Enter your room dimensions and get a ballpark figure in seconds.
              Final quotes are provided after a free on-site consultation.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                "Free on-site consultation",
                "No hidden fees",
                "Transparent pricing",
                "Flexible payment plans",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-sky-400">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Calculator */}
          <div className="card glow-sky p-8">
            <h3 className="text-lg font-bold text-slate-100 mb-6">
              Room Dimensions
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">
                    Length (ft)
                  </label>
                  <input
                    type="number"
                    min={1}
                    placeholder="e.g. 20"
                    className="input-field"
                    value={length}
                    onChange={(e) =>
                      setLength(e.target.value ? Number(e.target.value) : "")
                    }
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">
                    Width (ft)
                  </label>
                  <input
                    type="number"
                    min={1}
                    placeholder="e.g. 15"
                    className="input-field"
                    value={width}
                    onChange={(e) =>
                      setWidth(e.target.value ? Number(e.target.value) : "")
                    }
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-400">
                  Number of Coats: <span className="text-sky-400">{coats}</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={3}
                  value={coats}
                  onChange={(e) => setCoats(Number(e.target.value))}
                  className="w-full accent-sky-500"
                />
                <div className="mt-1 flex justify-between text-xs text-slate-500">
                  <span>1 coat</span>
                  <span>2 coats</span>
                  <span>3 coats</span>
                </div>
              </div>

              {/* Result */}
              <div className="mt-4 rounded-xl border border-sky-500/30 bg-sky-500/5 p-5 text-center">
                <div className="text-xs text-slate-400 mb-1">
                  Estimated Cost
                </div>
                <div className="text-4xl font-black gradient-text">
                  {area > 0 ? formatCurrency(estimate) : "—"}
                </div>
                {area > 0 && (
                  <div className="mt-1 text-xs text-slate-500">
                    {area} sq ft · {coats} coats
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-500">
                *Estimates are approximate. Contact us for an accurate quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
