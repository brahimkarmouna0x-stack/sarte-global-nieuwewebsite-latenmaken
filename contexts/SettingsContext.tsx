"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { SiteSettings } from "@/types";

/**
 * Exposes the Supabase-backed site settings (phone, email, WhatsApp, socials)
 * to Client Components. The value is fetched server-side in the root layout and
 * passed down once, so client code never talks to Supabase directly.
 */
const SettingsContext = createContext<SiteSettings | null>(null);

interface SettingsProviderProps {
  readonly settings: SiteSettings;
  readonly children: ReactNode;
}

export function SettingsProvider({ settings, children }: SettingsProviderProps) {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSiteSettings(): SiteSettings {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSiteSettings must be used within a <SettingsProvider />");
  }
  return ctx;
}
