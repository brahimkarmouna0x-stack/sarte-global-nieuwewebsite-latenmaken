import { WHATSAPP_NUMBER } from "@/constants/contact";

export interface WhatsAppMessageInput {
  readonly name?: string;
  readonly email?: string;
  readonly projectType?: string;
  readonly planName?: string;
  /** Formatted price string, e.g. "€995" or "€1.995+" */
  readonly planPrice?: string;
  /** Human-readable period label, e.g. "eenmalig" or "per maand" */
  readonly planPeriod?: string;
  /** List of feature / deliverable descriptions for this plan */
  readonly planFeatures?: readonly string[];
  readonly message: string;
}

export function buildMessage(input: WhatsAppMessageInput): string {
  const {
    name,
    email,
    projectType,
    planName,
    planPrice,
    planPeriod,
    planFeatures,
    message,
  } = input;

  const lines: string[] = ["Hallo Sarte Global,"];

  // ── Rich invoice-style summary when full plan data is available ──
  if (planName && planPrice) {
    lines.push(
      "",
      "═══════════════════════════════",
      "  NIEUWE AANVRAAG ─ PAKKET",
      "═══════════════════════════════",
      "",
      `  Pakket: ${planName}`,
      `  Prijs:  ${planPrice}${planPeriod ? ` (${planPeriod})` : ""}`,
    );
    if (planFeatures?.length) {
      lines.push("", "  Inclusief:");
      planFeatures.forEach((f) => lines.push(`    ✓ ${f}`));
    }
    lines.push("");
    if (projectType?.trim()) {
      lines.push(`Projecttype: ${projectType.trim()}.`);
    }
    if (name?.trim()) {
      lines.push(`Naam: ${name.trim()}.`);
    }
    if (email?.trim()) {
      lines.push(`E-mail: ${email.trim()}.`);
    }
    lines.push("", "Bericht:", message.trim());
    return lines.join("\n");
  }

  // ── Legacy format (no pricing data — backward compatible) ──
  const trimmedName = name?.trim();
  lines.push(
    trimmedName
      ? `Mijn naam is ${trimmedName}.`
      : "Ik ben een potentiële klant.",
  );

  const trimmedType = projectType?.trim();
  lines.push(
    trimmedType
      ? `Ik ben geïnteresseerd in: ${trimmedType}.`
      : "Ik ben geïnteresseerd in een nieuw project.",
  );

  const trimmedPlan = planName?.trim();
  if (trimmedPlan) {
    lines.push(`Gekozen pakket: ${trimmedPlan}.`);
  }

  const trimmedEmail = email?.trim();
  if (trimmedEmail) {
    lines.push(`Je kunt mij bereiken op ${trimmedEmail}.`);
  }

  lines.push("", "Bericht:", message.trim());

  return lines.join("\n");
}

/**
 * Normalizes whatever is stored for the WhatsApp number into the bare,
 * international digit string that wa.me expects (country code + number, without
 * "+", spaces or punctuation). It is intentionally forgiving: admins often
 * paste a full share link (https://wa.me/… or
 * https://api.whatsapp.com/send?phone=…) or a "+31 6 12 34 56 78"-style number
 * into the settings field, all of which would otherwise break the deep link.
 */
export function normalizeWhatsAppNumber(raw: string | undefined | null): string {
  if (!raw) return "";
  let value = raw.trim();

  // Full WhatsApp share link → pull the number out of the ?phone= query param.
  const phoneParam = value.match(/[?&]phone=([^&]+)/i);
  const waPath = value.match(/wa\.me\/(\+?[\d\s-]+)/i);
  if (phoneParam?.[1]) {
    value = decodeURIComponent(phoneParam[1]);
  } else if (waPath?.[1]) {
    // wa.me/<number> style link.
    value = waPath[1];
  }

  // Keep digits only (drops "+", spaces, dashes, parentheses).
  let digits = value.replace(/\D/g, "");

  // Strip a leading international "00" trunk prefix (e.g. 0031… → 31…).
  if (digits.startsWith("00")) digits = digits.slice(2);

  return digits;
}

/**
 * Builds a WhatsApp deep link. The number is dynamic (from Supabase settings)
 * with the WHATSAPP_NUMBER constant as a safe fallback for non-dynamic callers.
 * The number is normalized so a raw, human-entered value still produces a valid
 * link.
 */
export function buildWhatsAppUrl(
  input: WhatsAppMessageInput,
  whatsappNumber: string = WHATSAPP_NUMBER,
): string {
  const text = encodeURIComponent(buildMessage(input));
  const number = normalizeWhatsAppNumber(whatsappNumber) || WHATSAPP_NUMBER;
  return `https://wa.me/${number}?text=${text}`;
}
