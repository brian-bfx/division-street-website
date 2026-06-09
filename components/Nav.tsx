"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";
import { site } from "@/content/site";

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLinkActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const linkStyles = (href: string) =>
    `inline-flex min-h-11 w-full items-center text-base font-medium transition-colors duration-micro hover:text-brick focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2 md:inline-flex md:w-auto ${
      isLinkActive(href) ? "text-brick" : "text-navy/80"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur-sm [padding-top:env(safe-area-inset-top)]">
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-6 py-5 sm:px-8 sm:py-6 lg:px-10 [padding-left:max(1.5rem,env(safe-area-inset-left))] [padding-right:max(1.5rem,env(safe-area-inset-right))] sm:[padding-left:max(2rem,env(safe-area-inset-left))] sm:[padding-right:max(2rem,env(safe-area-inset-right))]"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-display text-sm font-medium tracking-eyebrow text-navy transition-colors duration-micro hover:text-brick focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
        >
          <span className="md:hidden">DSD</span>
          <span className="hidden md:inline">{site.wordmark}</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkStyles(link.href)}
                aria-current={isLinkActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-button text-navy transition-colors duration-micro hover:text-brick focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-navy/10 bg-white px-6 py-5 sm:px-8 md:hidden [padding-left:max(1.5rem,env(safe-area-inset-left))] [padding-right:max(1.5rem,env(safe-area-inset-right))] sm:[padding-left:max(2rem,env(safe-area-inset-left))] sm:[padding-right:max(2rem,env(safe-area-inset-right))]"
        >
          <ul className="flex flex-col gap-1">
            {site.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={linkStyles(link.href)}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isLinkActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-navy/10 pt-4">
            <Button
              href="/contact"
              variant="primary"
              className="w-full"
            >
              Schedule a Review
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
