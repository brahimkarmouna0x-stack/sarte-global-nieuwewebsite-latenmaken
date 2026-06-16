"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import { getMessageStarter } from "@/constants/contact";
import { useSiteSettings } from "@/contexts/SettingsContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { PricingPrice, PricingTier } from "@/types";
import { CheckIcon } from "./PricingIcons";

const EASE = [0.2, 0.7, 0.2, 1] as const;

export interface PlanSelection {
  /** Human-readable service name, e.g. "Website laten maken". */
  readonly serviceName: string;
  /** WhatsApp project-type token (drives the pre-filled message). */
  readonly projectType: string;
  readonly tier: PricingTier;
}

interface PricingPlanModalProps {
  /** The selected plan, or `null` when the modal is closed. */
  readonly selection: PlanSelection | null;
  readonly onClose: () => void;
}

function formatPrice(price: PricingPrice): string {
  if (price.amount === null) return "Op aanvraag";
  const amount = `€${price.amount.toLocaleString("nl-NL")}${price.plus ? "+" : ""}`;
  const prefix = price.prefix ? `${price.prefix} ` : "";
  return `${prefix}${amount}`;
}

function priceCaption(price: PricingPrice): string {
  if (price.amount === null) return "Offerte op maat";
  return "excl. btw";
}

/**
 * Confirmation modal shown before a visitor is handed off to WhatsApp from the
 * pricing section. It restates the chosen service + tier, lists all included
 * features with checkmarks, and only then opens WhatsApp in a new tab with the
 * pre-filled message.
 *
 * The billing period is intentionally hidden from the UI (to reduce friction)
 * but is still injected into the WhatsApp payload so the team sees it.
 *
 * Fully accessible: closes on Escape or overlay click, traps focus, locks body
 * scroll and restores focus to the trigger on close.
 */
export function PricingPlanModal({ selection, onClose }: PricingPlanModalProps) {
  const reduced = useReducedMotion();
  const { whatsapp } = useSiteSettings();
  const open = selection !== null;

  const panelRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current =
      (document.activeElement as HTMLElement | null) ?? null;

    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    // Move focus into the dialog so screen readers announce it and the focus
    // trap has somewhere to start.
    panelRef.current?.focus();

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      root.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  function handleConfirm() {
    if (!selection) return;
    const { price } = selection.tier;
    const hasPrice = price.amount !== null;
    const url = buildWhatsAppUrl(
      {
        projectType: selection.projectType,
        planName: selection.tier.name,
        // Full pricing data — the period is intentionally included here
        // (in the background payload) while being hidden from the modal UI.
        planPrice: hasPrice ? formatPrice(price) : undefined,
        planPeriod: hasPrice
          ? price.period === "maand"
            ? "per maand"
            : "eenmalig"
          : undefined,
        planFeatures: selection.tier.deliverables,
        // Exact, unedited starter message — guaranteed identical to the locked
        // preview shown in the dialog.
        message: getMessageStarter(selection.projectType),
      },
      whatsapp,
    );
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <AnimatePresence>
      {selection ? (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pp-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.25, ease: EASE }}
        >
          <motion.button
            type="button"
            aria-label="Sluiten"
            className="absolute inset-0 cursor-pointer bg-black/65 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.3, ease: EASE }}
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            className="relative z-10 flex max-h-[calc(100dvh_-_clamp(32px,8vw,64px))] w-full max-w-[480px] flex-col overflow-y-auto outline-none rounded-2xl border border-(--color-border-strong) bg-(--color-surface)/90 p-5 shadow-[0_30px_80px_-22px_rgba(0,0,0,0.95),0_0_0_1px_rgba(245,166,35,0.06),inset_0_1px_0_rgba(245,240,232,0.06)] backdrop-blur-xl scrollbar-none sm:p-7 [&::-webkit-scrollbar]:hidden"
            initial={{ opacity: 0, scale: reduced ? 1 : 0.96, y: reduced ? 0 : 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reduced ? 1 : 0.97, y: reduced ? 0 : 8 }}
            transition={{ duration: reduced ? 0 : 0.4, ease: EASE }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Sluiten"
              className="absolute right-3.5 top-3.5 grid h-9 w-9 place-items-center rounded-full border border-(--color-border) bg-(--color-surface-2)/60 text-(--color-text-secondary) transition-[color,border-color,background-color,transform] duration-200 hover:rotate-90 hover:border-(--color-accent) hover:bg-(--color-accent-soft) hover:text-(--color-accent)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            {/* Header */}
            <div className="flex flex-col gap-2 pr-10">
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-(--color-accent)">
                Bevestig je keuze
              </span>
              <h2
                id="pp-modal-title"
                className="font-[family-name:var(--font-display)] text-[clamp(22px,4vw,28px)] font-bold leading-[1.12] text-(--color-text)"
              >
                Je gaat verder via <em className="font-normal italic text-(--color-accent)">WhatsApp</em>
              </h2>
              <p className="text-sm leading-relaxed text-(--color-text-secondary)">
                Controleer hieronder je gekozen pakket. Daarna openen we WhatsApp met je bericht al volledig ingevuld.
              </p>
            </div>

            {/* Plan summary */}
            <dl className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-(--color-border) bg-(--color-border)">
              <div className="flex items-center justify-between gap-4 bg-(--color-surface-2) px-4 py-3">
                <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-(--color-text-muted)">
                  Geselecteerde dienst
                </dt>
                <dd className="text-right text-sm font-semibold text-(--color-text)">
                  {selection.serviceName}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 bg-(--color-surface-2) px-4 py-3">
                <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-(--color-text-muted)">
                  Gekozen pakket
                </dt>
                <dd className="flex items-center gap-2 text-right text-sm font-semibold text-(--color-text)">
                  {selection.tier.name}
                  {selection.tier.badge ? (
                    <span className="rounded-full bg-(--color-accent) px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.12em] text-(--color-text-on-accent)">
                      {selection.tier.badge}
                    </span>
                  ) : null}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 bg-(--color-surface-2) px-4 py-3">
                <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-(--color-text-muted)">
                  Investering
                </dt>
                <dd className="text-right">
                  <span className="block text-sm font-semibold text-(--color-accent)">
                    {formatPrice(selection.tier.price)}
                  </span>
                  <span className="block text-[11px] text-(--color-text-muted)">
                    {priceCaption(selection.tier.price)}
                  </span>
                </dd>
              </div>
            </dl>

            {/* Deliverables / features included in this plan — rendered with
                checkmarks so the client sees exactly what they are getting
                before confirming. The billing period is intentionally excluded
                from the UI (but still included in the WhatsApp payload). */}
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-(--color-text-muted)">
                Inclusief diensten
              </span>
              <ul className="space-y-2 rounded-xl border border-(--color-border) bg-(--color-surface-2) px-4 py-3">
                {selection.tier.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-snug text-(--color-text)">
                    <span className="mt-0.5 shrink-0 text-(--color-accent)">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-5 flex flex-col-reverse gap-2.5 sm:flex-row sm:gap-3">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-ghost w-full justify-center sm:flex-1"
              >
                Annuleren
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className="btn btn-primary w-full justify-center sm:flex-[1.4]"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" className="shrink-0">
                  <path d="M19.07 4.93A10 10 0 0 0 3.6 17.27L2 22l4.85-1.57A10 10 0 1 0 19.07 4.93Zm-7.06 15.38a8.32 8.32 0 0 1-4.24-1.16l-.3-.18-2.87.93.94-2.8-.2-.32a8.34 8.34 0 1 1 6.67 3.53Zm4.78-6.23c-.26-.13-1.55-.77-1.79-.85s-.41-.13-.59.13-.68.85-.84 1-.31.2-.57.07a6.83 6.83 0 0 1-2-1.25 7.55 7.55 0 0 1-1.4-1.75c-.15-.26 0-.4.11-.53s.26-.31.39-.46a1.78 1.78 0 0 0 .26-.43.48.48 0 0 0 0-.46c-.07-.13-.59-1.41-.8-1.94s-.43-.45-.59-.45h-.5a1 1 0 0 0-.72.34 2.93 2.93 0 0 0-.92 2.18 5.08 5.08 0 0 0 1.07 2.7 11.66 11.66 0 0 0 4.45 3.93 14.93 14.93 0 0 0 1.49.55 3.59 3.59 0 0 0 1.64.1 2.69 2.69 0 0 0 1.76-1.24 2.18 2.18 0 0 0 .15-1.24c-.06-.11-.23-.18-.49-.31Z" />
                </svg>
                Doorgaan naar WhatsApp
                <span className="arr">→</span>
              </button>
            </div>

            <p className="mt-3.5 text-center text-[11.5px] leading-snug text-(--color-text-muted)">
              Veilige doorverwijzing naar WhatsApp. We delen je gegevens nooit met derden.
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
