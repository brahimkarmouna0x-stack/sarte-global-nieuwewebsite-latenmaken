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
  readonly className?: string;
  readonly showArrow?: boolean;
  readonly onClick?: () => void;
  readonly children?: ReactNode;
}

export function CTAButton({
  label,
  variant = "primary",
  size = "default",
  projectType,
  className,
  showArrow = true,
  onClick,
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
