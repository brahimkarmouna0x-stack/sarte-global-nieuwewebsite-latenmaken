"use client";

import type { ReactNode } from "react";

import { getMessageStarter } from "@/constants/contact";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import { useSiteSettings } from "@/contexts/SettingsContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Variant = "primary" | "ghost" | "outline";

interface CTAButtonProps {
  readonly label: string;
  readonly variant?: Variant;
  readonly size?: "default" | "large";
  readonly projectType?: string;
  readonly planName?: string;
  readonly className?: string;
  readonly showArrow?: boolean;
  readonly onClick?: () => void;
  /**
   * When provided, the click is intercepted and this handler runs instead of
   * the default WhatsApp/contact-dialog flow — e.g. to surface a confirmation
   * modal first. The caller owns whatever happens next.
   */
  readonly onSelect?: () => void;
  readonly children?: ReactNode;
}

export function CTAButton({
  label,
  variant = "primary",
  size = "default",
  projectType,
  planName,
  className,
  showArrow = true,
  onClick,
  onSelect,
  children,
}: CTAButtonProps) {
  const { openDialog } = useContactDialog();
  const { whatsapp } = useSiteSettings();

  const classes = [
    "btn",
    `btn-${variant}`,
    size === "large" ? "btn-large" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  function handleClick() {
    onClick?.();

    // Intercept hook (e.g. confirmation modal) takes priority over the default
    // flow. The caller is responsible for the follow-up action.
    if (onSelect) {
      onSelect();
      return;
    }

    // Service already chosen (projectType is known) → skip the contact dialog
    // and jump straight into WhatsApp with a pre-filled, service-specific
    // message. Opening synchronously inside the click keeps popup blockers
    // happy. When no service is known yet, fall back to the dialog so the
    // visitor can pick one first.
    const chosenService = projectType?.trim();
    if (chosenService) {
      const url = buildWhatsAppUrl(
        {
          projectType: chosenService,
          planName,
          message: getMessageStarter(chosenService),
        },
        whatsapp,
      );
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    openDialog();
  }

  return (
    <button type="button" className={classes} onClick={handleClick}>
      {children ?? label}
      {showArrow ? <span className="arr">→</span> : null}
    </button>
  );
}
