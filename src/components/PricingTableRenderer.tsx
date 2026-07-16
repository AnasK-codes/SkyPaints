import React from "react";
import { PricingSection } from "@/data/products";

interface PricingTableRendererProps {
  sections?: PricingSection[];
  categoryTitle?: string;
  centerTitle?: boolean;
}

export default function PricingTableRenderer({
  sections,
  categoryTitle,
  centerTitle = false,
}: PricingTableRendererProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-ambient border border-outline-variant/10 overflow-x-auto mt-12 space-y-12">
      {categoryTitle && (
        <h3
          className={`font-headline text-2xl text-primary ${
            centerTitle ? "text-center" : ""
          }`}
        >
          {categoryTitle}
        </h3>
      )}

      {sections.map((section, idx) => (
        <div key={idx} className={idx > 0 && !categoryTitle ? "pt-4" : ""}>
          {section.title && !categoryTitle && (
            <h3
              className={`font-headline text-2xl text-primary mb-6 ${
                centerTitle ? "text-center" : ""
              }`}
            >
              {section.title}
            </h3>
          )}
          {section.title && categoryTitle && (
            <h4 className="font-label font-bold text-on-surface-variant mb-4 uppercase tracking-wide text-sm mt-4">
              {section.title}
            </h4>
          )}
          <div className="overflow-x-auto">
            <table
              className={`w-full text-left font-body text-sm min-w-[600px] ${
                section.isNumbered ? "border-collapse min-w-[500px]" : ""
              }`}
            >
              <thead>
                <tr
                  className={
                    section.isNumbered
                      ? "border-b-2 border-primary/20"
                      : "border-b border-outline-variant/20 text-on-surface-variant"
                  }
                >
                  {section.headers.map((header, hIdx) => (
                    <th
                      key={hIdx}
                      className={`py-3 px-2 font-semibold ${
                        section.isNumbered && hIdx === 0
                          ? "font-headline text-primary text-center"
                          : section.isNumbered && hIdx === 1
                          ? "font-headline text-primary"
                          : section.isNumbered && hIdx > 1
                          ? "font-headline text-secondary text-center"
                          : ""
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody
                className={`divide-y ${
                  section.isNumbered ? "" : "divide-outline-variant/10"
                }`}
              >
                {section.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-surface-container-low transition-colors border-b border-outline-variant/10"
                  >
                    {section.isNumbered && (
                      <td className="py-4 px-2 text-on-surface-variant font-medium text-center">
                        {rIdx + 1}
                      </td>
                    )}
                    <td className="py-4 px-2 text-on-surface font-medium">
                      {row.productName}
                    </td>
                    {row.prices.map((price, pIdx) => (
                      <td
                        key={pIdx}
                        className={`py-4 px-2 text-primary ${
                          section.isNumbered ? "text-center font-bold" : ""
                        }`}
                      >
                        {price}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
