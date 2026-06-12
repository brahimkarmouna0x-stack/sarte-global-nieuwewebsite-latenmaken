import { SITE } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent, ReactElement } from "react";

/**
 * Bump this version when the logo image file is replaced.
 * This busts the Next.js image-optimization cache and the browser cache
 * so the new logo is served immediately instead of a stale cached version.
 */
const LOGO_VERSION = 2;

export interface LogoProps {
    /**
     * Optional click handler. Lets the navbar/mobile drawer close menus and
     * smooth-scroll to the hero when the user is already on the home page.
     */
    readonly onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export function Logo({ onClick }: LogoProps = {}): ReactElement {
    return (
        <Link
            href="/#hero"
            className="brand"
            aria-label={`${SITE.brandName} home`}
            onClick={onClick}
        >
            <Image
                src={`/images/logo-site.png?v=${LOGO_VERSION}`}
                alt={`${SITE.brandName} logo`}
                className="brand-logo"
                width={150}
                height={36}
                priority
                sizes="150px"
            />
        </Link>
    );
}