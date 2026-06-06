"use client";

import { useCounter } from "@/hooks/useCounter";
import type { PricingPrice } from "@/types";

interface PriceTagProps {
  readonly price: PricingPrice;
  readonly featured?: boolean;
}

function formatEuro(value: number): string {
  return `€${value.toLocaleString("nl-NL")}`;
}

/**
 * Animated price. Reuses the project's `useCounter` (reduced-motion aware).
 * Because the pricing panel remounts on every service switch (AnimatePresence
 * keyed on the service slug), the counter re-runs 0 → amount on each switch.
 * `amount: null` renders "Op aanvraag" without a counter.
 */
export function PriceTag({ price, featured = false }: PriceTagProps) {
  const hasAmount = price.amount !== null;
  const counted = useCounter({ target: hasAmount ? (price.amount as number) : 0, start: hasAmount });

  if (!hasAmount) {
    return (
      <div className="relative z-10">
        <span className="block font-[family-name:var(--font-display)] text-2xl font-bold leading-none text-(--color-text)">
          Op aanvraag
        </span>
        <span className="mt-1.5 block text-[11.5px] text-(--color-text-muted)">
          Offerte op maat
        </span>
      </div>
    );
  }

  const isMonthly = price.period === "maand";
  const caption = isMonthly ? "excl. btw" : "eenmalig · excl. btw";

  return (
    <div className="relative z-10">
      <div className="flex items-baseline gap-1">
        {price.prefix ? (
          <span className="text-[12.5px] font-medium text-(--color-text-secondary)">
            {price.prefix}
          </span>
        ) : null}
        <span
          className={
            "font-[family-name:var(--font-display)] text-[30px] font-bold leading-none tracking-[-0.01em] [font-variant-numeric:tabular-nums] sm:text-[34px] " +
            (featured ? "text-(--color-accent)" : "text-(--color-text)")
          }
        >
          {formatEuro(counted)}
          {price.plus ? "+" : ""}
        </span>
        {isMonthly ? (
          <span className="text-sm font-medium text-(--color-text-secondary)">/mnd</span>
        ) : null}
      </div>
      <span className="mt-1.5 block text-[11.5px] text-(--color-text-muted)">{caption}</span>
    </div>
  );
}
