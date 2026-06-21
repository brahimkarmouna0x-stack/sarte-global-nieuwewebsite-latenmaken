/**
 * Programmatic city × service pages (e.g. /website-laten-maken-amsterdam).
 *
 * Single source of truth: a `City` has all the tokens the generator needs to
 * compose genuinely varied copy (province, region, a local economic angle and
 * its neighbouring cities for internal linking). A `LocationService` is the
 * keyword dimension we prefix. The full slug list is the Cartesian product of
 * SERVICES × CITIES — add a city or a service and the route, sitemap and
 * internal links scale automatically.
 *
 * Variation strategy lives in `lib/programmatic.ts`: each page deterministically
 * selects from the variant pools below (seeded by its slug), so copy differs per
 * page without random build-to-build churn — avoiding thin/duplicate content.
 */

export interface City {
  /** URL fragment, e.g. "amsterdam" (also "den-haag", "s-hertogenbosch"). */
  readonly slug: string;
  /** Display name, e.g. "Amsterdam", "Den Haag". */
  readonly name: string;
  readonly province: string;
  /** Broader region phrase used in copy, e.g. "de Randstad", "Noord-Nederland". */
  readonly region: string;
  /** Slugs of nearby cities — drives the "ook in de regio" internal links. */
  readonly nearby: readonly string[];
  /** One local economic angle, woven into the intro for genuine differentiation. */
  readonly angle: string;
}

export interface LocationService {
  /** URL prefix, combined as `${prefix}-${city.slug}`. */
  readonly prefix: string;
  /** Human label, e.g. "Website laten maken". */
  readonly label: string;
  /** Lowercase noun for inline sentences, e.g. "website". */
  readonly noun: string;
  /** The national parent landing page this clusters under. */
  readonly parentPath: string;
  readonly parentLabel: string;
  /** WhatsApp/CTA project type. */
  readonly projectType: string;
}

/**
 * Start with the single highest-intent dimension. Add `{ prefix: "webdesign",
 * ... }` or `{ prefix: "webshop-laten-maken", ... }` to scale to 100+ pages.
 */
export const LOCATION_SERVICES: readonly LocationService[] = [
  {
    prefix: "website-laten-maken",
    label: "Website laten maken",
    noun: "website",
    parentPath: "/website-laten-maken",
    parentLabel: "Website laten maken",
    projectType: "Nieuwe website",
  },
  {
    // Second keyword dimension: targets "webdesign [stad]" / "webdesigner [stad]".
    // Same deliverable (a website) but a distinct head term, so titles/H1/keywords
    // diverge from the website-laten-maken dimension. The two dimensions
    // cross-link per city (see `crossLinks` in lib/programmatic.ts) so neither set
    // is orphaned. Watch GSC for cannibalisation between the paired city pages.
    prefix: "webdesign",
    label: "Webdesign",
    noun: "website",
    parentPath: "/website-laten-maken",
    parentLabel: "Website laten maken",
    projectType: "Webdesign",
  },
];

export const CITIES: readonly City[] = [
  {
    slug: "amsterdam",
    name: "Amsterdam",
    province: "Noord-Holland",
    region: "de Randstad",
    nearby: ["haarlem", "utrecht", "almere"],
    angle:
      "Amsterdam zit vol startups, creatieve bureaus en internationale bedrijven — de online concurrentie is er hoog, dus een snelle, onderscheidende website maakt direct verschil.",
  },
  {
    slug: "rotterdam",
    name: "Rotterdam",
    province: "Zuid-Holland",
    region: "de Randstad",
    nearby: ["den-haag", "dordrecht", "breda"],
    angle:
      "Rotterdam is een no-nonsense ondernemersstad met sterke maak-, logistiek- en bouwsectoren — hier telt een website die snel laadt en meteen ter zake komt.",
  },
  {
    slug: "den-haag",
    name: "Den Haag",
    province: "Zuid-Holland",
    region: "de Randstad",
    nearby: ["rotterdam", "delft", "leiden"],
    angle:
      "Met overheid, juridische dienstverlening en internationale organisaties verwacht het publiek in Den Haag een professionele, betrouwbare uitstraling online.",
  },
  {
    slug: "leiden",
    name: "Leiden",
    province: "Zuid-Holland",
    region: "de Randstad",
    nearby: ["den-haag", "delft", "haarlem"],
    angle:
      "Leiden combineert de oudste universiteit van het land met het Bio Science Park — kennisintensieve bedrijven en zorg verwachten hier een website die deskundigheid en betrouwbaarheid uitstraalt.",
  },
  {
    slug: "delft",
    name: "Delft",
    province: "Zuid-Holland",
    region: "de Randstad",
    nearby: ["den-haag", "rotterdam", "leiden"],
    angle:
      "Met de TU Delft als motor zit Delft vol tech-, engineering- en designbedrijven en innovatieve startups — een snelle, modern vormgegeven website past hier bij de hoge lat van het publiek.",
  },
  {
    slug: "utrecht",
    name: "Utrecht",
    province: "Utrecht",
    region: "het midden van het land",
    nearby: ["amersfoort", "amsterdam", "nieuwegein"],
    angle:
      "Utrecht ligt centraal en groeit hard in zakelijke dienstverlening en tech — een vindbare, conversiegerichte website helpt je opvallen in een drukke markt.",
  },
  {
    slug: "eindhoven",
    name: "Eindhoven",
    province: "Noord-Brabant",
    region: "de Brainport-regio",
    nearby: ["tilburg", "s-hertogenbosch", "helmond"],
    angle:
      "Eindhoven is het technologische hart van Nederland — high-tech, design en maakindustrie vragen om een website die innovatie ook echt uitstraalt.",
  },
  {
    slug: "tilburg",
    name: "Tilburg",
    province: "Noord-Brabant",
    region: "Midden-Brabant",
    nearby: ["breda", "s-hertogenbosch", "eindhoven"],
    angle:
      "Tilburg combineert een sterk MKB met logistiek en onderwijs — een heldere, lokaal vindbare website trekt hier klanten uit de hele regio.",
  },
  {
    slug: "groningen",
    name: "Groningen",
    province: "Groningen",
    region: "Noord-Nederland",
    nearby: ["assen", "leeuwarden", "zwolle"],
    angle:
      "Als grootste stad van het noorden bedient Groningen een wijde regio — een goed vindbare website vergroot je bereik ver buiten de stadsgrenzen.",
  },
  {
    slug: "almere",
    name: "Almere",
    province: "Flevoland",
    region: "de Randstad",
    nearby: ["amsterdam", "amersfoort", "utrecht"],
    angle:
      "Almere is een van de snelst groeiende steden van Nederland met veel jonge ondernemers — online zichtbaarheid is hier dé manier om mee te groeien.",
  },
  {
    slug: "breda",
    name: "Breda",
    province: "Noord-Brabant",
    region: "West-Brabant",
    nearby: ["tilburg", "rotterdam", "dordrecht"],
    angle:
      "Breda heeft een bloeiend MKB en horeca en ligt strategisch tussen de Randstad en België — een professionele website pakt klanten uit beide richtingen.",
  },
  {
    slug: "nijmegen",
    name: "Nijmegen",
    province: "Gelderland",
    region: "het oosten van het land",
    nearby: ["arnhem", "s-hertogenbosch", "ede"],
    angle:
      "Nijmegen koppelt een grote studentenpopulatie aan zorg en duurzaamheid — een moderne website die jongere doelgroepen aanspreekt werkt hier sterk.",
  },
  {
    slug: "haarlem",
    name: "Haarlem",
    province: "Noord-Holland",
    region: "de Randstad",
    nearby: ["amsterdam", "leiden", "almere"],
    angle:
      "Haarlem heeft veel zelfstandige ondernemers, retail en creatieve bedrijven dicht bij Amsterdam — een onderscheidende website helpt je opvallen tegen de grote stad.",
  },
  {
    slug: "arnhem",
    name: "Arnhem",
    province: "Gelderland",
    region: "het oosten van het land",
    nearby: ["nijmegen", "ede", "zwolle"],
    angle:
      "Arnhem staat bekend om mode, energie en zakelijke dienstverlening — een sterk vormgegeven website past goed bij het ondernemersklimaat van de stad.",
  },
  {
    slug: "amersfoort",
    name: "Amersfoort",
    province: "Utrecht",
    region: "het midden van het land",
    nearby: ["utrecht", "almere", "zwolle"],
    angle:
      "Centraal gelegen Amersfoort huisvest veel zakelijke dienstverleners en ZZP'ers — een vindbare, professionele website levert hier direct nieuwe aanvragen op.",
  },
  {
    slug: "zwolle",
    name: "Zwolle",
    province: "Overijssel",
    region: "Noordoost-Nederland",
    nearby: ["amersfoort", "arnhem", "groningen"],
    angle:
      "Zwolle is een groeiende knooppuntstad met sterke zorg-, bouw- en handelssectoren — lokaal goed vindbaar zijn vergroot je voorsprong in de regio.",
  },
  {
    slug: "s-hertogenbosch",
    name: "'s-Hertogenbosch",
    province: "Noord-Brabant",
    region: "Noordoost-Brabant",
    nearby: ["eindhoven", "tilburg", "nijmegen"],
    angle:
      "Den Bosch combineert overheid, zakelijke dienstverlening en een levendige binnenstad — een verzorgde website sluit aan bij de hoge verwachting van het publiek.",
  },
];

/** Quick lookup by slug. */
export const CITY_BY_SLUG: ReadonlyMap<string, City> = new Map(
  CITIES.map((city) => [city.slug, city]),
);
