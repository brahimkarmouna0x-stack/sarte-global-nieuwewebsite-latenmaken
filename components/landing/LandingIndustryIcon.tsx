import type { LandingIndustryIconName } from "@/constants";

/**
 * Line icons for the "Industries we serve" section, drawn in the same 48×48 /
 * stroke style as the shared ServiceIcon set so they sit consistently together.
 */
export function LandingIndustryIcon({
  name,
}: {
  name: LandingIndustryIconName;
}) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "construction":
      return (
        <svg {...common}>
          <path d="M8 36h32" />
          <path d="M13 36c0-7 4-13 11-13s11 6 11 13" />
          <rect x="20" y="11" width="8" height="5" rx="1" />
          <path d="M24 16v5" />
        </svg>
      );
    case "health":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="16" />
          <path d="M24 16v16M16 24h16" />
        </svg>
      );
    case "finance":
      return (
        <svg {...common}>
          <rect x="6" y="9" width="36" height="30" rx="3" />
          <path d="M13 30l7-6 5 3 12-11" />
          <circle cx="13" cy="30" r="1.4" />
          <circle cx="37" cy="16" r="1.4" />
        </svg>
      );
    case "ecommerce":
      return (
        <svg {...common}>
          <path d="M12 16h24l-2 24H14L12 16z" />
          <path d="M18 16v-2a6 6 0 0 1 12 0v2" />
        </svg>
      );
    case "horeca":
      return (
        <svg {...common}>
          <path d="M15 8v9M18 8v9M21 8v9" />
          <path d="M15 17h6" />
          <path d="M18 17v23" />
          <path d="M31 8c-2 2-3 6-3 10s1 6 3 6" />
          <path d="M31 8v32" />
        </svg>
      );
    case "corporate":
      return (
        <svg {...common}>
          <path d="M9 40h30" />
          <rect x="14" y="9" width="20" height="31" rx="1.5" />
          <path d="M19 16h3M26 16h3M19 23h3M26 23h3M19 30h3M26 30h3" />
        </svg>
      );
    default:
      return null;
  }
}
