import { WHATSAPP_NUMBER } from "@/constants/contact";

export interface WhatsAppMessageInput {
  readonly name?: string;
  readonly email?: string;
  readonly projectType?: string;
  readonly message: string;
}

function buildMessage({
  name,
  email,
  projectType,
  message,
}: WhatsAppMessageInput): string {
  const lines: string[] = ["Hallo Sarte Global,"];

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
 * https://api.whatsapp.com/send?phone=…) or a "+212 766 269 594"-style number
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
 * Builds a WhatsApp deep link. The number is dynamic (from PocketBase settings)
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
