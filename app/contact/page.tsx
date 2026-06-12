import type { Metadata } from "next";

import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactPageBody } from "@/components/contact/ContactPageBody";
import { PageHero } from "@/components/page/PageHero";
import { CONTACT_CHANNELS, CONTACT_HERO } from "@/constants/contact-page";
import { SITE } from "@/constants";
import { getSiteSettings } from "@/lib/settings";
import type { ContactChannel, SiteSettings } from "@/types";

const PAGE_TITLE = "Contact — Neem contact op met Sarte Global";
const PAGE_DESC =
  "Neem contact op met Sarte Global, het team achter nieuwewebsite-latenmaken. E-mail, telefoon of WhatsApp — we reageren binnen één werkdag.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/contact",
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 800, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

const SITE_URL = SITE.url;

/** Merges the static channel copy (labels, notes, icons) with live settings values from Supabase. */
function buildContactChannels(settings: SiteSettings): readonly ContactChannel[] {
  return CONTACT_CHANNELS.map((channel) => {
    switch (channel.icon) {
      case "mail":
        return { ...channel, value: settings.email, href: `mailto:${settings.email}` };
      case "phone":
        return {
          ...channel,
          value: settings.phone,
          // Keep only digits and a leading "+" so the result is always a valid
          // `tel:` URL (mirrors the footer; avoids React's `about:invalid` href
          // sanitization on numbers containing spaces or punctuation).
          href: `tel:${settings.phone.replace(/[^\d+]/g, "")}`,
        };
      case "chat":
        return { ...channel, href: `https://wa.me/${settings.whatsapp}` };
      default:
        return channel;
    }
  });
}

function buildContactJsonLd(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contact`,
    name: "Contact · Sarte Global",
    description: PAGE_DESC,
    mainEntity: {
      "@type": "Organization",
      name: "Sarte Global",
      email: settings.email,
      telephone: settings.phone,
      address: {
        "@type": "PostalAddress",
        addressCountry: "NL",
        // TODO: vul echte vestigingsgegevens in (straat, postcode, plaats)
      },
    },
  };
}

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const channels = buildContactChannels(settings);
  const contactJsonLd = buildContactJsonLd(settings);

  return (
    <main className="contact-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <PageHero content={CONTACT_HERO} id="contact-h" />
      <ContactChannels channels={channels} />
      <ContactPageBody />
    </main>
  );
}
