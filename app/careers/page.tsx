import type { Metadata } from "next";

import { CareersHiring } from "@/components/careers/CareersHiring";
import { CareersRoles } from "@/components/careers/CareersRoles";
import { CareersValues } from "@/components/careers/CareersValues";
import { PageHero } from "@/components/page/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { CAREERS_HERO } from "@/constants/careers";

const PAGE_TITLE = "Vacatures bij Sarte Global | Remote-first & Groeien";
const PAGE_DESC =
  "Remote-first werken met volledige eigenaarschap in een klein, gedreven team. Bekijk onze vacatures en ontdek wat Sarte Global jou biedt.";

export const metadata: Metadata = {
  // `absolute`: PAGE_TITLE already carries the brand; skip the root title template.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  alternates: { canonical: "/careers" },
  keywords: [
    "vacatures",
    "werken bij Sarte Global",
    "webdesign vacatures",
    "developer vacature remote",
    "baan webdevelopment nederland",
    "Sarte Global vacatures",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/careers",
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 800, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

export default function CareersPage() {
  return (
    <main className="careers-page" id="top">
      <PageHero content={CAREERS_HERO} id="careers-h" />
      <CareersValues />
      <TeamShowcase />
      <CareersRoles />
      <CareersHiring />
      <CallToAction />
    </main>
  );
}
