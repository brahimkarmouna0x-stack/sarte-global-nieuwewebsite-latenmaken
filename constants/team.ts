import { TeamMember } from "@/types";


export const TEAM_SECTION = {
    eyebrow: "De mensen achter het werk",
    ctaPrimary: { label: "Bekijk ons werk", href: "#work" },
    ctaSecondary: { label: "Word collega", href: "#cta" },
    durationMs: 3000,
} as const;

export const TEAM_MEMBERS = [
    {
        name: "Alex Chen",
        role: "Creative Director",
        slug: "alex-chen",
        bio: "Bouwt visuele identiteiten die meerwaarde verdienen nog voordat de pitchdeck opengaat. Verantwoordelijk voor meerdere bekroonde rebrandings in tech, fintech en consumentenmarkten.",
        scene: "scene-studio",
    },
    {
        name: "Sara Müller",
        role: "Strategy Lead",
        slug: "sara-muller",
        bio: "Vertaalt marktonderzoek naar verhalen die zittende spelers verdringen. Schreef positioneringsraamwerken die door drie internationale merkteams werden overgenomen.",
        scene: "scene-strategy",
    },
    {
        name: "Jordan Park",
        role: "Lead Developer",
        slug: "jordan-park",
        bio: "Bouwt productiesystemen die net zo goed presteren als ze eruitzien. Leverde 40+ websites met laadtijden onder de 2 seconden en geen kritieke incidenten na livegang.",
        scene: "scene-code",
    },
    {
        name: "Priya Nair",
        role: "Growth Director",
        slug: "priya-nair",
        bio: "Bouwt acquisitiemotoren die kwartaal op kwartaal renderen. Verantwoordelijk voor €18M paid media in B2B en consumentenmarkten.",
        scene: "scene-presentation",
    },
    {
        name: "Kai Torres",
        role: "Design Lead",
        slug: "kai-torres",
        bio: "Ontwerpt interfaces die vanzelfsprekend aanvoelen zodra je ze gebruikt. Eerder product designer bij twee series-B SaaS-bedrijven voordat hij bij Sarte Global startte.",
        scene: "scene-photo",
    },
    {
        name: "Yuna Walsh",
        role: "Brand Director",
        slug: "yuna-walsh",
        bio: "Orkestreert identiteitssystemen van logo tot motion language. Brengt tien jaar redactioneel design mee uit topbureaus in Londen en Amsterdam.",
        scene: "scene-office",
    },
] as const satisfies readonly TeamMember[];

/** Quick lookups for author/team profile pages and BlogPosting author linkage. */
export const TEAM_MEMBER_BY_SLUG: ReadonlyMap<string, TeamMember> = new Map(
    TEAM_MEMBERS.map((member) => [member.slug, member]),
);

export const TEAM_MEMBER_BY_NAME: ReadonlyMap<string, TeamMember> = new Map(
    TEAM_MEMBERS.map((member) => [member.name, member]),
);
