"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { SERVICE_LINKS } from "@/constants";
import type { NavLink } from "@/types";

interface NavServicesDropdownProps {
  /** Trigger label (e.g. "Diensten" or "Services"). */
  readonly label?: string;
  /** Unique panel id — required when more than one dropdown is in the bar. */
  readonly menuId?: string;
  /** Links shown inside the dropdown (page names only). */
  readonly items?: readonly NavLink[];
}

/**
 * Desktop services dropdown — a simple list of links (page names only, no icons
 * or descriptions). Reused for both the "Diensten" (keyword pages) and "Services"
 * (service offerings) menus by passing different `items`. Opens on hover (pointer)
 * and on click/keyboard (touch + a11y fallback); closes on outside-click + Escape.
 * Lives inside `.nav-links`, so the responsive rule that hides the desktop bar
 * collapses it automatically (the mobile drawer renders the same lists).
 */
export function NavServicesDropdown({
  label = "Services",
  menuId = "nav-diensten-menu",
  items = SERVICE_LINKS,
}: NavServicesDropdownProps = {}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close on outside-click + Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const serviceActive = items.some((link) => link.href === pathname);

  return (
    <li
      ref={ref}
      className={open ? "nav-dropdown is-open" : "nav-dropdown"}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={triggerRef}
        type="button"
        className={
          serviceActive ? "nav-dropdown__trigger active" : "nav-dropdown__trigger"
        }
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <svg
          className="nav-dropdown__chevron"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="nav-dropdown__panel" id={menuId} role="menu">
        <ul className="nav-dropdown__list">
          {items.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  className={active ? "active" : ""}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}
