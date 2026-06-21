"use client";

import Link from "next/link";
import { useCallback, useRef, type CSSProperties, type KeyboardEvent } from "react";

import { TEAM_MEMBERS, TEAM_SECTION } from "@/constants";
import { useSiteSettings } from "@/contexts/SettingsContext";
import { useTeamShowcase } from "@/hooks/useTeamShowcase";

import { CTAButton } from "../ui/CTAButton";
import { SocialIcon, hasSocialIcon } from "../ui/SocialIcon";
import { TeamStage } from "../ui/TeamStage";

function padIndex(value: number): string {
  return value < 10 ? `0${value}` : `${value}`;
}

export function TeamShowcase() {
  const { socialLinks: allSocialLinks } = useSiteSettings();
  // Skip any social link without a drawable icon, so no empty link is rendered.
  const socialLinks = allSocialLinks.filter((social) => hasSocialIcon(social.icon));
  const showcase = useTeamShowcase({
    length: TEAM_MEMBERS.length,
    durationMs: TEAM_SECTION.durationMs,
  });

  // Roving-tabindex refs so arrow-key navigation can move focus between tabs.
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = useCallback(
    (raw: number): void => {
      const len = TEAM_MEMBERS.length;
      const target = ((raw % len) + len) % len;
      // Selection-follows-focus: the panel is always in the DOM, so activating
      // on arrow keeps the visible content in sync with the focused tab.
      showcase.goTo(target);
      tabRefs.current[target]?.focus();
    },
    [showcase],
  );

  const handleTabsKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>): void => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          focusTab(showcase.index - 1);
          break;
        case "ArrowRight":
          event.preventDefault();
          focusTab(showcase.index + 1);
          break;
        case "Home":
          event.preventDefault();
          focusTab(0);
          break;
        case "End":
          event.preventDefault();
          focusTab(TEAM_MEMBERS.length - 1);
          break;
        default:
          break;
      }
    },
    [focusTab, showcase.index],
  );

  const current = TEAM_MEMBERS[showcase.displayIndex];
  if (!current) {
    throw new Error("Team showcase index out of range");
  }

  const infoClass: string =
    showcase.phase === "out"
      ? "ts-info ts-out"
      : showcase.phase === "in"
        ? "ts-info ts-in"
        : "ts-info";

  const progressStyle: CSSProperties = showcase.progressActive
    ? {
      transform: "scaleX(1)",
      transition: `transform ${TEAM_SECTION.durationMs}ms linear`,
    }
    : { transform: "scaleX(0)", transition: "none" };

  return (
    <section
      id="team"
      className="team-showcase"
      aria-labelledby="team-h"
      // Pointer events unify mouse + touch + pen. On touch, pointerenter fires as
      // the finger lands (pausing the auto-rotation) and pointerleave when it
      // lifts, so the card — and its social links / CTAs — stays put for the whole
      // tap instead of rotating away mid-press. Keyboard focus pauses it too.
      onPointerEnter={showcase.pause}
      onPointerLeave={showcase.resume}
      onFocusCapture={showcase.pause}
      onBlurCapture={showcase.resume}
    >
      <div className="ts-stages" aria-hidden="true">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamStage
            key={member.scene}
            scene={member.scene}
            isActive={index === showcase.index}
          />
        ))}
      </div>

      <div className="ts-fog" aria-hidden="true" />

      <div className="ts-wrap">
        <div className="ts-left">
          <p className="ts-eyebrow">{TEAM_SECTION.eyebrow}</p>

          <div className="ts-counter" aria-live="polite" aria-atomic="true">
            <span className="ts-curr">{padIndex(showcase.index + 1)}</span>
            <span className="ts-sep">/</span>
            <span className="ts-tot">{padIndex(TEAM_MEMBERS.length)}</span>
          </div>

          <div
            className={infoClass}
            role="tabpanel"
            id="team-panel"
            aria-labelledby={`team-tab-${showcase.index}`}
            // The panel always has a focusable child (the profile link below), so
            // it never needs its own tabindex to be reachable per APG.
          >
            <h2 className="ts-name" id="team-h">
              {current.name}
            </h2>
            <p className="ts-role">{current.role}</p>
            <p className="ts-bio">{current.bio}</p>
            <Link href={`/team/${current.slug}`} className="ts-profile">
              Bekijk profiel <span className="arr" aria-hidden="true">→</span>
            </Link>
            {socialLinks.length > 0 ? (
              <div className="ts-socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="ts-ctas">
            <a
              href={TEAM_SECTION.ctaPrimary.href}
              className="btn btn-primary"
            >
              {TEAM_SECTION.ctaPrimary.label} <span className="arr">→</span>
            </a>
            <CTAButton
              label={TEAM_SECTION.ctaSecondary.label}
              variant="ghost"
              projectType="Vacatures"
            />
          </div>

          <div className="ts-nav">
            <button
              className="ts-arrow"
              aria-label="Vorig teamlid"
              onClick={showcase.prev}
              type="button"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <div
              className="ts-dots"
              role="tablist"
              aria-label="Teamleden navigatie"
              onKeyDown={handleTabsKeyDown}
            >
              {TEAM_MEMBERS.map((member, index) => {
                const isActive = index === showcase.index;
                return (
                  <button
                    key={member.scene}
                    ref={(node): void => {
                      tabRefs.current[index] = node;
                    }}
                    type="button"
                    role="tab"
                    id={`team-tab-${index}`}
                    aria-controls="team-panel"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    className={isActive ? "is-active" : ""}
                    aria-label={member.name}
                    onClick={(): void => showcase.goTo(index)}
                  />
                );
              })}
            </div>
            <button
              className="ts-arrow"
              aria-label="Volgend teamlid"
              onClick={showcase.next}
              type="button"
            >
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="ts-prog-wrap" aria-hidden="true">
            <div
              key={showcase.progressKey}
              className="ts-prog"
              style={progressStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
