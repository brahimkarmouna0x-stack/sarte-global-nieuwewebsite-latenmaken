import type { PricingTier } from "@/types";

import { CTAButton } from "../ui/CTAButton";
import { PriceTag } from "./PriceTag";
import { CheckIcon, ClockIcon } from "./PricingIcons";

interface PricingCardProps {
  readonly tier: PricingTier;
  readonly projectType: string;
  /** Intercepts the CTA click to open the WhatsApp confirmation modal. */
  readonly onSelect?: () => void;
}

export function PricingCard({ tier, projectType, onSelect }: PricingCardProps) {
  const featured = Boolean(tier.highlighted);

  return (
    <article
      className={
        "group relative flex h-full w-full flex-col gap-4 overflow-hidden rounded-2xl border p-5 transition-[transform,border-color] duration-[350ms] ease-out sm:p-6 " +
        (featured
          ? "border-(--color-accent) bg-linear-180 from-(--color-surface) to-(--color-surface-3) shadow-[0_30px_80px_-44px_rgba(245,166,35,0.5),0_24px_60px_-40px_rgba(0,0,0,0.85)] sm:-translate-y-2"
          : "border-(--color-border) bg-linear-180 from-(--color-surface) to-(--color-surface-3) hover:-translate-y-1 hover:border-(--color-border-strong)")
      }
      aria-label={`Pakket ${tier.name}`}
    >
      {/* Glow overlay — always visible on featured, hover-reveal on the rest */}
      <div
        className={
          "pointer-events-none absolute inset-0 rounded-inherit transition-opacity duration-[350ms] " +
          (featured ? "opacity-100" : "opacity-0 group-hover:opacity-100")
        }
        style={{
          background:
            "radial-gradient(82% 60% at 50% 0%, rgba(245, 166, 35, 0.16), transparent 70%)",
        }}
      />

      {/* Badge */}
      {tier.badge ? (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-(--color-accent) px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-(--color-text-on-accent)">
          {tier.badge}
        </span>
      ) : null}

      {/* Header: Name + Tagline */}
      <header className="relative z-10 pr-12">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-tight text-(--color-text) sm:text-xl">
          {tier.name}
        </h3>
        <p className="mt-1 text-sm leading-snug text-(--color-text-secondary)">
          {tier.tagline}
        </p>
      </header>

      {/* Price */}
      <PriceTag price={tier.price} featured={featured} />

      {/* bestFor */}
      <p className="relative z-10 -mt-1 text-[12.5px] leading-snug text-(--color-text-muted)">
        {tier.bestFor}
      </p>

      <span className="relative z-10 h-px w-full bg-(--color-border)" aria-hidden="true" />

      {/* Deliverables — max 6 items */}
      <ul className="relative z-10 mb-auto space-y-2">
        {tier.deliverables.slice(0, 6).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-snug text-(--color-text)">
            <span className="mt-0.5 shrink-0 text-(--color-accent)">
              <CheckIcon />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Timeline + CTA pinned to the bottom */}
      <div className="relative z-10 mt-auto flex flex-col gap-3 pt-1">
        <CTAButton
          label={tier.ctaLabel}
          variant={featured ? "primary" : "outline"}
          projectType={projectType}
          planName={tier.name}
          onSelect={onSelect}
          className="w-full justify-center"
        />
      </div>
    </article>
  );
}
