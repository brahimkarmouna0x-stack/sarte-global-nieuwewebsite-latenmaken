import {
  FOOTER_COLUMNS,
  FOOTER_LEGAL,
  NEWSLETTER,
  PAYMENT_METHODS,
  PAYMENT_METHODS_LABEL,
  TRUST_LINE,
} from "@/constants";
import { getSiteSettings } from "@/lib/settings";

import { Container } from "../ui/Container";
import { PaymentIcon } from "../ui/PaymentIcon";
import { SocialIcon, hasSocialIcon } from "../ui/SocialIcon";
import { Logo } from "../shared/Logo";

export async function Footer() {
  const settings = await getSiteSettings();
  // Strip everything except digits and a leading "+", so the href is always a
  // valid `tel:` URL. Spaces, dashes or stray characters in the stored phone
  // number would otherwise make React sanitize the link to
  // `about:invalid#zCSafez`, which is what broke the live footer link.
  const telHref = `tel:${settings.phone.replace(/[^\d+]/g, "")}`;
  // Only show socials that come from a real settings value AND have a drawable
  // icon — never render an empty, icon-less link.
  const socialLinks = settings.socialLinks.filter((social) => hasSocialIcon(social.icon));

  return (
    <footer aria-label="Sitevoettekst">
      <Container>
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo />
            <p className="foot-mission">{settings.footerMission}</p>
            <div className="mt-8 flex flex-col gap-4 text-sm text-(--color-text-secondary)">
              <div className="flex items-start gap-3 group">
                <svg
                  className="w-5 h-5 mt-0.5 text-(--color-accent) shrink-0 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium text-(--color-text) transition-colors duration-300">
                    {settings.address.line}
                  </span>
                  <span className="text-xs text-(--color-text-muted)">
                    {settings.address.city}, {settings.address.country}
                  </span>
                </div>
              </div>

              {settings.phone ? (
                <a
                  href={telHref}
                  className="flex  min-h-[44px] items-center gap-3 group w-fit transition-colors duration-300 hover:text-(--color-accent)"
                  aria-label="Bel ons"
                >
                  <svg
                    className="w-5 h-5 text-(--color-accent) shrink-0 transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="font-medium text-(--color-text) group-hover:text-(--color-accent) transition-colors duration-300">
                    {settings.phone}
                  </span>
                </a>
              ) : null}

              <a
                href={`mailto:${settings.email}`}
                className="flex min-h-[44px] items-center gap-3 group w-fit transition-colors duration-300 hover:text-(--color-accent)"
                aria-label="Stuur ons een e-mail"
              >
                <svg
                  className="w-5 h-5 text-(--color-accent) shrink-0 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                <span className="font-medium text-(--color-text) group-hover:text-(--color-accent) transition-colors duration-300">
                  {settings.email}
                </span>
              </a>
            </div>
          </div>
          {FOOTER_COLUMNS.map((column) => (
            <nav
              key={column.title}
              className="foot-col"
              aria-label={column.title}
            >
              <h3>{column.title}</h3>
              {/* Columns with more than 5 links flow into a second column of 5
                  (capped row count) instead of one very long list. */}
              <ul className={column.links.length > 5 ? "foot-links foot-links--split" : "foot-links"}>
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="foot-col">
            <h3>{NEWSLETTER.title}</h3>
            <p className="foot-news-desc">{NEWSLETTER.description}</p>
          </div>
        </div>

        <div className="foot-payments" aria-label="Geaccepteerde betaalmethoden">
          <span className="foot-payments__label">{PAYMENT_METHODS_LABEL}</span>
          <ul className="foot-payments__list" role="list">
            {PAYMENT_METHODS.map((method) => (
              <li
                key={method.id}
                className="foot-payment"
                style={{ ["--brand-color" as string]: method.color } as React.CSSProperties}
                aria-label={method.label}
                title={method.label}
              >
                <PaymentIcon id={method.id} />
              </li>
            ))}
          </ul>
        </div>

        <p className="foot-trust">{TRUST_LINE}</p>

        <div className="foot-bar">
          <div className="foot-legal">
            <span>{FOOTER_LEGAL.copyright}</span>
            {FOOTER_LEGAL.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          {socialLinks.length > 0 ? (
            <div className="socials" aria-label="Social media">
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
      </Container>
    </footer>
  );
}
