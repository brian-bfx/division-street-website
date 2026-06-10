"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { site } from "@/content/site";
import { layout } from "@/lib/design-system/layout";

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isLinkActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenu();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md [padding-top:env(safe-area-inset-top)]">
        <nav
          className={`flex h-14 items-center justify-between sm:h-16 ${layout.containerSafe}`}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-display text-xs font-medium tracking-eyebrow text-navy transition-colors duration-micro hover:text-brick focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2 sm:text-sm"
          >
            <span className="sm:hidden">DSD</span>
            <span className="hidden sm:inline">{site.wordmark}</span>
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-button text-navy transition-colors duration-micro hover:text-brick focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>

      <div
        id="site-menu"
        className={`fixed inset-0 z-50 bg-white transition-opacity duration-micro [padding-top:env(safe-area-inset-top)] ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`flex h-full flex-col ${layout.containerSafe}`}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex h-14 shrink-0 items-center justify-between sm:h-16">
            <Link
              href="/"
              onClick={closeMenu}
              className="font-display text-xs font-medium tracking-eyebrow text-navy transition-colors duration-micro hover:text-brick focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2 sm:text-sm"
            >
              <span className="sm:hidden">DSD</span>
              <span className="hidden sm:inline">{site.wordmark}</span>
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-button text-navy transition-colors duration-micro hover:text-brick focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.75}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col justify-center py-8"
            aria-label="Menu links"
          >
            <ul className="flex flex-col gap-2">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`inline-flex min-h-12 items-center font-display text-3xl font-semibold tracking-tight transition-colors duration-micro hover:text-brick focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2 sm:text-4xl ${
                      isLinkActive(link.href) ? "text-brick" : "text-navy"
                    }`}
                    aria-current={isLinkActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-navy/10 py-6 [padding-bottom:max(1.5rem,env(safe-area-inset-bottom))]">
            <Button
              href="/contact"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Schedule a Review
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
