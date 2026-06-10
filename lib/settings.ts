import "server-only";

import { FOOTER_MISSION, SITE, SOCIAL_LINKS } from "@/constants";
import { WHATSAPP_NUMBER } from "@/constants/contact";
import type { SettingsRecord, SiteSettings, SocialLink } from "@/types";

import { pb } from "./pocketbase";
import { normalizeWhatsAppNumber } from "./whatsapp";

/** The single settings record is selected by this key (see migration + unique index). */
const SETTINGS_KEY = "global";

/** Cache window for the settings record; refreshed on-demand via revalidateTag("settings"). */
const REVALIDATE_SECONDS = 3600;

/**
 * Constants-based defaults. Used when PocketBase is unreachable, the record is
 * missing, or an individual field is left blank — so the footer always renders.
 */
const FALLBACK: SiteSettings = {
  phone: SITE.phone,
  email: SITE.email,
  whatsapp: WHATSAPP_NUMBER,
  address: {
    line: "30 N Gould St Ste R",
    city: "Sheridan, WY 82801",
    country: "United States",
  },
  footerMission: FOOTER_MISSION,
  socialLinks: SOCIAL_LINKS,
};

/** Returns the trimmed value when it has content, otherwise the fallback. */
function withFallback(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

/**
 * Builds the social-links list from the record's URL fields, keeping only the
 * ones that are actually set. Falls back to the SOCIAL_LINKS constant when none
 * are configured yet.
 */
function buildSocialLinks(record: SettingsRecord): readonly SocialLink[] {
  const candidates: readonly { url?: string; icon: SocialLink["icon"]; label: string }[] = [
    { url: record.instagram_url, icon: "instagram", label: "Instagram" },
    { url: record.facebook_url, icon: "facebook", label: "Facebook" },
    { url: record.linkedin_url, icon: "linkedin", label: "LinkedIn" },
    { url: record.x_url, icon: "x", label: "X" },
    { url: record.dribbble_url, icon: "dribbble", label: "Dribbble" },
  ];

  const links = candidates
    .filter((c): c is typeof c & { url: string } => Boolean(c.url?.trim()))
    .map(({ label, url, icon }) => ({ label, href: url.trim(), icon }));

  return links.length > 0 ? links : FALLBACK.socialLinks;
}

/** Maps a raw PocketBase record to the clean app-facing shape, applying per-field fallbacks. */
function mapRecord(record: SettingsRecord): SiteSettings {
  return {
    phone: withFallback(record.phone, FALLBACK.phone),
    email: withFallback(record.email, FALLBACK.email),
    // Prefer the dedicated WhatsApp field, fall back to the phone number, then
    // the constant. Normalized so a pasted share-link or "+…"/spaced number
    // still yields a valid wa.me deep link.
    whatsapp:
      normalizeWhatsAppNumber(record.whatsapp) ||
      normalizeWhatsAppNumber(record.phone) ||
      FALLBACK.whatsapp,
    address: {
      line: withFallback(record.address_line, FALLBACK.address.line),
      city: withFallback(record.address_city, FALLBACK.address.city),
      country: withFallback(record.address_country, FALLBACK.address.country),
    },
    footerMission: withFallback(record.footer_mission, FALLBACK.footerMission),
    socialLinks: buildSocialLinks(record),
  };
}

/**
 * Fetches the singleton site settings from PocketBase (server-side, cached via
 * ISR + the "settings" tag). Always resolves: on any error or missing record it
 * returns the constants-based fallback so the UI never breaks.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const record = await pb
      .collection("settings")
      .getFirstListItem<SettingsRecord>(`key="${SETTINGS_KEY}"`, {
        next: { revalidate: REVALIDATE_SECONDS, tags: ["settings"] },
      });

    return mapRecord(record);
  } catch {
    // PocketBase down, record absent, or network error → graceful fallback.
    return FALLBACK;
  }
}
