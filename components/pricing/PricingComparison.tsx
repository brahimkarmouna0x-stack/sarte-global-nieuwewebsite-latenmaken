"use client";

import { useState } from "react";
import type { PricingCell, PricingComparisonRow, PricingPrice, PricingTier } from "@/types";

import { CheckIcon } from "./PricingIcons";

interface PricingComparisonProps {
  readonly tiers: readonly PricingTier[];
  readonly rows: readonly PricingComparisonRow[];
}

function priceLabel(price: PricingPrice): string {
  if (price.amount === null) return "Op aanvraag";
  const base = `€${price.amount.toLocaleString("nl-NL")}${price.plus ? "+" : ""}`;
  return price.period === "maand" ? `${base}/mnd` : base;
}

function Cell({ value }: { value: PricingCell }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center text-(--color-accent)">
        <CheckIcon />
        <span className="sr-only">Inbegrepen</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center text-(--color-text-muted)" aria-hidden="true">
        –
        <span className="sr-only">Niet inbegrepen</span>
      </span>
    );
  }
  return <span className="inline-flex items-center justify-center font-medium text-(--color-text)">{value}</span>;
}

export function PricingComparison({ tiers, rows }: PricingComparisonProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8 sm:mt-10">
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="pr-comparison-panel"
          className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-(--color-border-strong) bg-(--color-surface-2) py-2.5 pl-5 pr-3 text-sm font-medium text-(--color-text) shadow-[0_8px_24px_-16px_rgba(0,0,0,0.8)] transition-[transform,border-color,color] duration-200 ease-out hover:-translate-y-0.5 hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent) motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <span>{open ? "Verberg vergelijking" : "Vergelijk alle functies"}</span>
          <span className="grid h-6 w-6 place-items-center rounded-full bg-(--color-surface-3) text-(--color-text-secondary) transition-colors duration-200 group-hover:bg-(--color-accent) group-hover:text-(--color-text-on-accent)">
            <svg
              className={`h-3.5 w-3.5 transition-transform duration-300 ease-out motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </button>
      </div>

      <div
        id="pr-comparison-panel"
        className={
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out " +
          (open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
        }
      >
        <div className="cv-section min-h-0 overflow-hidden">
          <div className="mt-3 overflow-x-auto rounded-xl border border-(--color-border)">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr>
                <th scope="col" className="border-b border-(--color-border) bg-(--color-surface-2) p-3 text-left font-[family-name:var(--font-display)] text-sm font-semibold text-(--color-text)">
                  Onderdeel
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    scope="col"
                    className={
                      "border-b border-(--color-border) p-3 text-center font-[family-name:var(--font-display)] text-sm font-semibold " +
                      (tier.highlighted ? "text-(--color-accent)" : "text-(--color-text)")
                    }
                  >
                    <span className="block">{tier.name}</span>
                    <span className="mt-0.5 block text-[11px] font-medium text-(--color-text-secondary) [font-variant-numeric:tabular-nums]">
                      {priceLabel(tier.price)}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="last:border-b-0">
                  <th
                    scope="row"
                    className="border-b border-(--color-border) p-3 text-left text-sm font-medium text-(--color-text-secondary)"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      key={tiers[index]?.id ?? index}
                      className={
                        "border-b border-(--color-border) p-3 text-center text-sm last:border-b-0 " +
                        (tiers[index]?.highlighted ? "bg-[rgba(245,166,35,0.06)]" : "")
                      }
                    >
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}
