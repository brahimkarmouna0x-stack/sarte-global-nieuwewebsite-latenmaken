import { SITE } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

/**
 * Bump this version when the logo image file is replaced.
 * This busts the Next.js image-optimization cache and the browser cache
 * so the new logo is served immediately instead of a stale cached version.
 */
const LOGO_VERSION = 1;

export function Logo(): ReactElement {
    return (
        <Link
            href="/"
            className="brand"
            aria-label={`${SITE.brandName} home`}
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