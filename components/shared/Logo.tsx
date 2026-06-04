import { SITE } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

export function Logo(): ReactElement {
    return (
        <Link
            href="/"
            className="brand"
            aria-label={`${SITE.brandName} home`}
        >
            <Image
                src="/images/logo-site.png"
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