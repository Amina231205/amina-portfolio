"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { LensSwitcher } from "@/components/shared/lens-switcher";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "work" },
  { href: "#education", label: "education" },
  { href: "#research", label: "research" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-250",
        scrolled ? "border-b border-hairline bg-canvas/85 backdrop-blur-md" : "border-b border-transparent"
      )}
    >
      {/* This is a single-page site — in-page hash anchors use plain <a>
          rather than next/link, since there's no route to prefetch. */}
      <nav className="container-wide flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-semibold text-ink hover:text-lens lens-transition"
          aria-label="Amina Emad — home"
        >
          AE<span className="text-lens">.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-wide text-ink-muted transition-colors duration-250 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LensSwitcher />
          <ThemeToggle />
          <Button asChild size="sm">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-hairline bg-canvas px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-wide text-ink-muted hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <LensSwitcher />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
