"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import { PRICING_ORDER, PRICING_SECTION, getServicePricing } from "@/constants";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollHint } from "@/hooks/useScrollHint";
import type { PricingSectionProps } from "@/types";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ScrollHintNav } from "../ui/ScrollHintNav";
import { ServiceIcon } from "../ui/ServiceIcon";
import { PricingCard } from "./PricingCard";
import { PricingComparison } from "./PricingComparison";
import { PricingFaq } from "./PricingFaq";
import { PricingPlanModal, type PlanSelection } from "./PricingPlanModal";

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function PricingSection({ defaultServiceSlug, id = "pakketten" }: PricingSectionProps) {
  const reduced = useReducedMotion();
  const services = useMemo(
    () => PRICING_ORDER.map((slug) => getServicePricing(slug)),
    [],
  );

  const initialIndex = useMemo(() => {
    const found = PRICING_ORDER.findIndex((slug) => slug === defaultServiceSlug);
    return found >= 0 ? found : 0;
  }, [defaultServiceSlug]);

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [selectedPlan, setSelectedPlan] = useState<PlanSelection | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const filterScrollRef = useRef<HTMLDivElement>(null);
  const hasMountedRef = useRef(false);
  const active = services[activeIndex] ?? services[0];
  const { canLeft, canRight, scrollByDir } = useScrollHint(filterScrollRef);

  // Center the active filter chip inside its own horizontal strip. We skip the
  // first render and only scroll the strip itself (never the page) — otherwise
  // mounting this below-the-fold section would auto-jump the page to it on load.
  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }
    const strip = filterScrollRef.current;
    const tab = tabRefs.current[activeIndex];
    if (!strip || !tab) return;
    const stripRect = strip.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const delta =
      tabRect.left + tabRect.width / 2 - (stripRect.left + stripRect.width / 2);
    strip.scrollTo({
      left: strip.scrollLeft + delta,
      behavior: reduced ? "auto" : "smooth",
    });
  }, [activeIndex, reduced]);

  function focusTab(index: number) {
    const next = (index + services.length) % services.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusTab(activeIndex + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusTab(activeIndex - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(services.length - 1);
        break;
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 14 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : 0.35,
        ease: EASE,
        delay: reduced ? 0 : i * 0.06,
      },
    }),
  };

  if (!active) return null;

  return (
    <section className="py-14 sm:py-20" id={id} aria-labelledby="pr-h">
      <Container>
        {/* ── Header ── */}
        <Reveal
          as="header"
          className="mx-auto mb-7 flex max-w-2xl flex-col items-center text-center sm:mb-9"
        >
          <span className="eyebrow">{PRICING_SECTION.eyebrow}</span>
          <h2
            id="pr-h"
            className="mt-3 font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.06] tracking-[-0.02em] text-(--color-text)"
          >
            {PRICING_SECTION.titleLead}{" "}
            <em className="font-normal italic text-(--color-text-secondary)">
              {PRICING_SECTION.titleEm}
            </em>
          </h2>
          <p className="sub mt-3 max-w-xl text-(--color-text-secondary)">
            {PRICING_SECTION.sub}
          </p>
        </Reveal>

        {/* ── Service Filter: Premium segmented control ── */}
        <Reveal as="div">
          <div
            className="filter-scroller mx-auto mb-7 max-w-full sm:mb-9"
            data-can-left={canLeft}
            data-can-right={canRight}
          >
            <ScrollHintNav
              className="sm:hidden"
              canLeft={canLeft}
              canRight={canRight}
              onLeft={() => scrollByDir(-1)}
              onRight={() => scrollByDir(1)}
            />
            <div
              ref={filterScrollRef}
              className="snap-x snap-proximity overflow-x-auto px-4 pb-1 mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] scrollbar-none [-webkit-overflow-scrolling:touch] sm:overflow-visible sm:px-0 sm:mask-none [&::-webkit-scrollbar]:hidden"
            >
            <div
              className="relative mx-auto flex w-max gap-1 rounded-full border border-(--color-border) bg-(--color-surface-2)/70 p-1 shadow-[inset_0_1px_0_rgba(245,240,232,0.04),0_8px_30px_-12px_rgba(0,0,0,0.7)] backdrop-blur-md sm:w-fit"
              role="tablist"
              aria-label={PRICING_SECTION.filterLabel}
              onKeyDown={handleKeyDown}
            >
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    key={service.slug}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    type="button"
                    role="tab"
                    id={`pr-tab-${service.slug}`}
                    aria-selected={isActive}
                    aria-controls="pr-panel"
                    tabIndex={isActive ? 0 : -1}
                    whileTap={reduced ? undefined : { scale: 0.97 }}
                    className={
                      "snap-start relative z-10 inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-[13px] font-medium leading-none transition-colors duration-200 [&_svg]:h-[15px] [&_svg]:w-[15px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent) " +
                      (isActive
                        ? "text-(--color-text-on-accent) font-semibold"
                        : "text-(--color-text-secondary) hover:text-(--color-text)")
                    }
                    onClick={() => setActiveIndex(index)}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="pr-pill"
                        aria-hidden
                        className="absolute inset-0 -z-10 rounded-full bg-(--color-accent) shadow-[0_6px_22px_-4px_var(--color-accent-glow),inset_0_1px_0_rgba(255,255,255,0.22)] ring-1 ring-(--color-accent-glow)"
                        transition={
                          reduced
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 32 }
                        }
                      />
                    ) : null}
                    <ServiceIcon name={service.icon} />
                    {service.chipLabel}
                  </motion.button>
                );
              })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Panel ── */}
        <div
          id="pr-panel"
          role="tabpanel"
          aria-labelledby={`pr-tab-${active.slug}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: reduced ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduced ? 0 : -8 }}
              transition={{ duration: reduced ? 0 : 0.28, ease: EASE }}
            >
              {/* Headline */}
              <p className="mx-auto mb-6 max-w-3xl text-center text-sm leading-relaxed text-(--color-text-secondary) sm:text-[15px]">
                {active.headline}
              </p>

              {/* Cards — mobile: 1 per row (vertical stack), desktop: 3-col grid */}
              <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3 sm:gap-5">
                {active.tiers.map((tier, index) => (
                  <motion.div
                    key={tier.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    className={
                      "w-full sm:h-full " +
                      (tier.highlighted ? "sm:z-10" : "")
                    }
                  >
                    <PricingCard
                      tier={tier}
                      projectType={active.projectType}
                      onSelect={() =>
                        setSelectedPlan({
                          serviceName: active.name,
                          projectType: active.projectType,
                          tier,
                        })
                      }
                    />
                  </motion.div>
                ))}
              </div>

              {/* Comparison accordion */}
              <PricingComparison tiers={active.tiers} rows={active.comparison} />

              {/* FAQ — costs & prices (drives "kosten/prijs" intent + FAQ schema) */}
              <PricingFaq
                items={active.faq}
                eyebrow={PRICING_SECTION.faqEyebrow}
                title={PRICING_SECTION.faqTitle}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

      <PricingPlanModal
        selection={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </section>
  );
}
