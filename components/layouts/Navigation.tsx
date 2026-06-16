"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

import { NAV_CTA, NAV_ITEMS } from "@/constants";
import type { NavItem } from "@/types";
import { useMobileDrawer } from "@/hooks/useMobileDrawer";
import { useScrolled } from "@/hooks/useScrolled";

import { Logo } from "../shared/Logo";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { MobileDrawer } from "../ui/MobileDrawer";
import { NavServicesDropdown } from "./NavServicesDropdown";

type NavLinkItem = Extract<NavItem, { kind: "link" }>;

const SCROLL_THRESHOLD = 40;
const DEFAULT_ACTIVE = "/";

export function Navigation() {
  const [isActive, setIsActive] = useState<string>(DEFAULT_ACTIVE);
  const scrolled = useScrolled(SCROLL_THRESHOLD);
  const drawer = useMobileDrawer();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const syncHash = () => {
      setIsActive(window.location.hash || DEFAULT_ACTIVE);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  // Scroll-spy for the "Prijzen" (#pakketten) link: it should only read as
  // active while the pricing section is actually on screen. Without this the
  // hash-based state sticks after the visitor scrolls past it. Re-runs per
  // route so it reattaches after navigation — and clears the stale active
  // state on pages that have no pricing section.
  useEffect(() => {
    const pricing = document.getElementById("pakketten");
    if (!pricing) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setIsActive((prev) =>
          entry.isIntersecting
            ? "#pakketten"
            : prev === "#pakketten"
              ? DEFAULT_ACTIVE
              : prev,
        );
      },
      // Activate only while the section crosses the middle band of the viewport,
      // so it lights up when you're on pricing and clears as the next section
      // takes over.
      { rootMargin: "-40% 0px -40% 0px" },
    );
    observer.observe(pricing);
    // On unmount / route change, drop a stale "#pakketten" active state so the
    // link never stays lit on a page that has no pricing section.
    return () => {
      observer.disconnect();
      setIsActive((prev) => (prev === "#pakketten" ? DEFAULT_ACTIVE : prev));
    };
  }, [pathname]);

  const handleHashClick = (
    event: MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    setIsActive(hash);
    if (!isHome) return;
    event.preventDefault();
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", hash);
  };

  const renderNavLink = (link: NavLinkItem) => {
    const isRoute = link.href.startsWith("/");
    if (isRoute) {
      const active = pathname === link.href;
      return (
        <li key={link.href}>
          <Link
            href={link.href}
            className={active ? "active" : ""}
            aria-current={active ? "page" : undefined}
          >
            {link.shortLabel ?? link.label}
          </Link>
        </li>
      );
    }
    const active = isActive === link.href;
    const href = isHome ? link.href : `/${link.href}`;
    return (
      <li key={link.href}>
        <Link
          href={href}
          className={active ? "active" : ""}
          aria-current={active ? "page" : undefined}
          onClick={(event) => handleHashClick(event, link.href)}
        >
          {link.shortLabel ?? link.label}
        </Link>
      </li>
    );
  };

  return (
    <>
      <nav
        className={scrolled ? "nav is-scrolled" : "nav"}
        aria-label="Hoofdnavigatie"
      >
        <Container className="nav-inner">
          <Logo onClick={(event) => handleHashClick(event, "#hero")} />
          <ul className="nav-links">
            {NAV_ITEMS.map((item) =>
              item.kind === "dropdown" ? (
                <NavServicesDropdown
                  key={item.menuId}
                  label={item.label}
                  menuId={item.menuId}
                  sections={item.sections}
                />
              ) : (
                renderNavLink(item)
              ),
            )}
          </ul>
          <CTAButton
            label={NAV_CTA.label}
            variant="outline"
            className="nav-cta"
          />
          <button
            className="hamburger"
            aria-label="Menu openen"
            aria-controls="drawer"
            aria-expanded={drawer.isOpen}
            onClick={drawer.open}
            type="button"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </button>
        </Container>
      </nav>
      <MobileDrawer isOpen={drawer.isOpen} onClose={drawer.close} />
    </>
  );
}
