import type { ServiceProcessItem } from "@/types";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface ServiceProcessProps {
  steps: readonly ServiceProcessItem[];
  title?: string;
  eyebrow?: string;
}

const PROCESS_STEP_ICONS = [
  "strategy",
  "design",
  "code",
  "test",
  "rocket",
  "chart",
] as const;

export function ServiceProcess({
  steps,
  title = "Ons proces.",
  eyebrow = "Werkwijze",
}: ServiceProcessProps) {
  return (
    <section className="svc-process" aria-label="Ons proces">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h2">{title}</h2>
        </Reveal>

        <div className="svc-process__timeline" role="list">
          {/* Center line */}
          <span className="svc-process__line" aria-hidden="true" />

          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              as="div"
              className={`svc-process__step ${index % 2 === 0 ? "svc-process__step--left" : "svc-process__step--right"}`}
              index={index}
              role="listitem"
            >
              <div className="svc-process__step-card">
                <div className="svc-process__step-icon" aria-hidden="true">
                  <ProcessIcon icon={PROCESS_STEP_ICONS[index] ?? "strategy"} />
                </div>
                <span className="svc-process__step-num">0{index + 1}</span>
                <h3 className="svc-process__step-title">{step.title}</h3>
                <p className="svc-process__step-desc">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "strategy":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "test":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}
