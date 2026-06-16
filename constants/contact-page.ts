import type { ContactChannel, PageHeroContent } from "@/types";

export const CONTACT_HERO: PageHeroContent = {
  icon: "cursor",
  eyebrow: "Contact · Neem contact op",
  titleLead: "Vertel ons over",
  titleEm: "jouw project.",
  intro:
    "Deel een paar details en we gaan verder via WhatsApp of e-mail. We reageren meestal binnen enkele minuten tijdens kantooruren, en uiterlijk binnen één werkdag.",
};

export const CONTACT_CHANNELS_SECTION = {
  eyebrow: "Andere manieren om contact op te nemen",
  title: "Kies wat voor jou het makkelijkst is.",
} as const;

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    icon: "mail",
    label: "E-mail",
    value: "info@sarteglobal.com",
    href: "mailto:info@sarteglobal.com",
    note: "Het beste voor offertes en uitgebreide briefings.",
  },
  {
    // Telefoon wordt alleen getoond zodra er een geldig nummer in de
    // instellingen staat (online-only/national); value/href hier zijn
    // placeholders die runtime worden overschreven.
    icon: "phone",
    label: "Telefoon",
    value: "",
    href: "#",
    note: "Maandag–vrijdag · 9:00–18:00.",
  },
  {
    icon: "map",
    label: "Werkgebied",
    value: "Heel Nederland · op afspraak",
    href: "#",
    note: "Werkzaam door heel Nederland, van Amsterdam tot Eindhoven. Op afspraak.",
  },
  {
    // href wordt runtime gevuld met het WhatsApp-nummer uit de instellingen.
    icon: "chat",
    label: "WhatsApp",
    value: "Chat met ons team",
    href: "#",
    note: "De snelste manier om iemand te spreken.",
  },
];

export const CONTACT_FORM_SECTION = {
  eyebrow: "Start een project",
  titleLead: "Stuur ons een",
  titleEm: "bericht.",
  sub: "Een paar zinnen is genoeg om het gesprek te starten. Hoe meer je deelt, hoe beter onze eerste reactie.",
} as const;
