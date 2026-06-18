// WhatsApp-nummer (zonder + en zonder spaties). Vervang door uw eigen nummer.
export const WHATSAPP_NUMBER = "+3197010278527" as const;

export const PROJECT_TYPES = [
  "Website laten maken",
  "Webshop laten maken",
  "Landingspagina",
  "UX / UI design",
  "Video editing",
  "SEO & groei",
  "Mobiele app",
  "AI & automatisering",
  "Merkstrategie",
  "Online advertising",
  "Website onderhoud",
  "Anders",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

/**
 * Fiverr-style opening sentences per service (Dutch — the active site language).
 * Centralized here so they are easy to translate if i18n is added later.
 * Each is a first-person lead-in ending mid-thought (+trailing space) so the
 * user can keep writing right where the cursor lands.
 */
export const MESSAGE_STARTERS: Record<string, string> = {
  "Website laten maken":
    "Ik wil een nieuwe website laten maken voor mijn bedrijf. Het belangrijkste dat ik nodig heb is ",
  "Webshop laten maken":
    "Ik wil een webshop laten maken om mijn producten online te verkopen. Ik verkoop vooral ",
  "Landingspagina":
    "Ik wil een landingspagina laten maken voor mijn campagne. Het doel van de pagina is ",
  "UX / UI design":
    "Ik zoek hulp bij het UX/UI-design van mijn product. Wat ik wil verbeteren is ",
  "Video editing":
    "Ik wil professionele video's laten maken of laten monteren. Het soort video en het doel zijn ",
  "SEO & groei":
    "Ik wil beter gevonden worden in Google. Mijn belangrijkste doelen en zoekwoorden zijn ",
  "Mobiele app":
    "Ik wil een mobiele app laten maken. Het idee en de belangrijkste functies zijn ",
  "AI & automatisering":
    "Ik wil AI inzetten of een proces automatiseren in mijn bedrijf. Wat ik wil oplossen is ",
  "Merkstrategie":
    "Ik wil werken aan mijn merk en huisstijl. Waar ik nu sta en wat ik wil bereiken is ",
  "Online advertising":
    "Ik wil adverteren via Google of social media. Mijn doel en budget zijn ongeveer ",
  "Website onderhoud":
    "Ik wil mijn bestaande website laten onderhouden. Mijn website draait op ",
  "Anders":
    "Ik heb een project in gedachten en wil graag even sparren. Waar het om gaat is ",
};

/** Used when a project type has no specific match (defensive fallback). */
export const GENERIC_MESSAGE_STARTER =
  "Ik wil graag een project bespreken. Wat ik nodig heb is ";

/**
 * Returns the starter sentence for a project type. Empty string when nothing is
 * selected (the field then shows the generic guiding placeholder instead).
 */
export function getMessageStarter(projectType?: string): string {
  if (!projectType) return "";
  return MESSAGE_STARTERS[projectType] ?? GENERIC_MESSAGE_STARTER;
}

export const DIALOG_COPY = {
  eyebrow: "Laten we praten",
  title: "Vraag jouw",
  titleEm: "gratis offerte aan.",
  subtitle:
    "Vul een paar gegevens in en we gaan verder via WhatsApp. We reageren meestal binnen enkele minuten.",
  nameLabel: "Je naam",
  namePlaceholder: "Jan Jansen",
  emailLabel: "E-mailadres",
  emailPlaceholder: "jij@bedrijf.nl",
  projectTypeLabel: "Soort project",
  projectTypePlaceholderOption: "Kies een soort project",
  messageLabel: "Vertel kort over jouw project",
  messagePlaceholder:
    "Een nieuwe website voor mijn bedrijf, een webshop voor mijn producten, een landingspagina voor een campagne…",
  submitLabel: "Verder via WhatsApp",
  submittingLabel: "WhatsApp wordt geopend…",
  closeLabel: "Sluiten",
  fabLabel: "Chat met ons via WhatsApp",
} as const;
