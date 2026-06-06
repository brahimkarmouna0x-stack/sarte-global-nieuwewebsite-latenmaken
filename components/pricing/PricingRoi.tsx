"use client";

import { useCounter } from "@/hooks/useCounter";
import { useReveal } from "@/hooks/useReveal";
import type { PricingRoiStat, ServicePricing } from "@/types";

function RoiStat({ stat }: { stat: PricingRoiStat }) {
  const { ref, isIn } = useReveal<HTMLDivElement>();
  const value = useCounter({ target: stat.target, start: isIn });

  return (
    <div className="pr-roi__stat" ref={ref}>
      <span className="pr-roi__value">
        {stat.prefix ?? ""}
        {value}
        {stat.suffix ?? ""}
      </span>
      <span className="pr-roi__label">{stat.label}</span>
    </div>
  );
}

interface PricingRoiProps {
  readonly roi: ServicePricing["roi"];
  readonly eyebrow: string;
}

export function PricingRoi({ roi, eyebrow }: PricingRoiProps) {
  return (
    <div className="pr-roi">
      <div className="pr-roi__copy">
        <span className="eyebrow">{eyebrow}</span>
        <p className="pr-roi__lead">{roi.lead}</p>
      </div>
      <div className="pr-roi__stats">
        {roi.stats.map((stat) => (
          <RoiStat key={stat.label} stat={stat} />
        ))}
      </div>
    </div>
  );
}
