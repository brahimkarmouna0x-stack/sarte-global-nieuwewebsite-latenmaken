import "server-only";

import { FOOTER_MISSION, SITE } from "@/constants";
import { WHATSAPP_NUMBER } from "@/constants/contact";
import type { SettingsRecord, SiteSettings, SocialLink } from "@/types";

import { supabase } from "./supabase";
import { normalizeWhatsAppNumber } from "./whatsapp";

/** Supabase table holding the single site-settings row. */
const SETTINGS_TABLE = "global_settings";

/** Cache window for the settings record; refreshed on-demand via revalidateTag("settings"). */
const REVALIDATE_SECONDS = 3600;

/**
 * Default social profiles, shown whenever the database has no social links
 * configured yet — so the footer and team section always render social icons.
 * Kept in sync with the Organization JSON-LD `sameAs` in the root layout.
 */
const DEFAULT_SOCIAL_LINKS: readonly SocialLink[] = [
  // { label: "LinkedIn", href: "https://linkedin.com/company/sarteglobal", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/sarte_global_llc?igsh=OGVkc2phOGFzeTNv&utm_source=qr", icon: "instagram" },
  { label: "X", href: "https://x.com/sarteglobal", icon: "x" },
];

/**
 * Constants-based defaults. Used when Supabase is unreachable, the record is
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
  // Fall back to the default profiles so social icons always show, even before
  // the client fills in their own URLs in the database.
  socialLinks: DEFAULT_SOCIAL_LINKS,
};

/** Returns the trimmed value when it has content, otherwise the fallback. */
function withFallback(value: string | undefined | null, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

/**
 * Builds the social-links list from the record's URL fields, keeping only the
 * ones the client has actually set. Returns an empty list when none are
 * configured, so no placeholder icons are rendered.
 */
function buildSocialLinks(record: SettingsRecord): readonly SocialLink[] {
  const candidates: readonly { url?: string | null; icon: SocialLink["icon"]; label: string }[] = [
    { url: record.instagram_url, icon: "instagram", label: "Instagram" },
    { url: record.facebook_url, icon: "facebook", label: "Facebook" },
    { url: record.linkedin_url, icon: "linkedin", label: "LinkedIn" },
    { url: record.x_url, icon: "x", label: "X" },
  ];

  const links = candidates
    .filter((c): c is typeof c & { url: string } => Boolean(c.url?.trim()))
    .map(({ label, url, icon }) => ({ label, href: url.trim(), icon }));

  return links;
}

/** Maps a raw database record to the clean app-facing shape, applying per-field fallbacks. */
function mapRecord(record: SettingsRecord): SiteSettings {
  const links = buildSocialLinks(record);
  return {
    phone: withFallback(record.phone, FALLBACK.phone),
    email: withFallback(record.email, FALLBACK.email),
    // Prefer the dedicated WhatsApp field, fall back to the phone number, then
    // the constant. Normalized so a pasted share-link or "+…"/spaced number
    // still yields a valid wa.me deep link.
    whatsapp:
      normalizeWhatsAppNumber(record.whatsapp_url) ||
      normalizeWhatsAppNumber(record.phone) ||
      FALLBACK.whatsapp,
    // Address and footer mission are not stored in the database; always served
    // from constants.
    address: FALLBACK.address,
    footerMission: FALLBACK.footerMission,
    // Fall back to the default profiles when the record has no social URLs set,
    // so the icons never disappear.
    socialLinks: links.length > 0 ? links : DEFAULT_SOCIAL_LINKS,
  };
}

/**
 * Fetches the singleton site settings from Supabase (server-side, cached via
 * ISR + the "settings" tag). Always resolves: on any error or missing record it
 * returns the constants-based fallback so the UI never breaks.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const { data, error } = await supabase
      .from(SETTINGS_TABLE)
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle<SettingsRecord>();

    if (error || !data) {
      // Supabase down, record absent, or network error → graceful fallback.
      return FALLBACK;
    }

    return mapRecord(data);
  } catch {
    // Supabase down, record absent, or network error → graceful fallback.
    return FALLBACK;
  }
}
