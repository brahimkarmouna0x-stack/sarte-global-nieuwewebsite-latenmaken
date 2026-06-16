"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { NAV_CTA, NAV_ITEMS, SITE } from "@/constants";
import type { NavItem } from "@/types";

import { Logo } from "../shared/Logo";
import { CTAButton } from "./CTAButton";

export interface MobileDrawerProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

type NavLinkItem = Extract<NavItem, { kind: "link" }>;

export function MobileDrawer({
  isOpen,
  onClose,
}: MobileDrawerProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleHashClick = (
    event: MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    onClose();
    if (!isHome) return;
    event.preventDefault();
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", hash);
  };

  const renderLink = (link: NavLinkItem) => {
    const isRoute = link.href.startsWith("/");
    if (isRoute) {
      const active = pathname === link.href;
      return (
        <li key={link.href}>
          <Link
            href={link.href}
            className={active ? "active" : ""}
            aria-current={active ? "page" : undefined}
            onClick={onClose}
          >
            {link.label}
          </Link>
        </li>
      );
    }
    const href = isHome ? link.href : `/${link.href}`;
    return (
      <li key={link.href}>
        <Link
          href={href}
          onClick={(event) => handleHashClick(event, link.href)}
        >
          {link.label}
        </Link>
      </li>
    );
  };

  return (
    <>
      <div
        className={isOpen ? "scrim is-open" : "scrim"}
        id="scrim"
        aria-hidden={!isOpen}
        onClick={onClose}
      />
      <aside
        className={isOpen ? "drawer is-open" : "drawer"}
        id="drawer"
        aria-label="Mobiel menu"
        aria-hidden={!isOpen}
      >
        <div className="drawer-head">
          <Logo onClick={(event) => handleHashClick(event, "#hero")} />
          <button
            className="hamburger drawer-close"
            aria-label="Menu sluiten"
            onClick={onClose}
            type="button"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <ul>
          {NAV_ITEMS.map((item) =>
            item.kind === "dropdown" ? (
              <li key={item.menuId} className="drawer-services">
                <details>
                  <summary>{item.label}</summary>
                  <ul className="drawer-services__list">
                    {item.items.map((link) => {
                      const active = pathname === link.href;
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className={active ? "active" : ""}
                            aria-current={active ? "page" : undefined}
                            onClick={onClose}
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              </li>
            ) : (
              renderLink(item)
            ),
          )}
        </ul>
        <CTAButton
          label={NAV_CTA.label}
          variant="primary"
          onClick={onClose}
        />
        <div className="drawer-foot">
          <span className="drawer-foot__eyebrow">Direct contact</span>
          <a className="drawer-foot__link" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </div>
      </aside>
    </>
  );
}
