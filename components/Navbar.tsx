"use client";

import { site } from "@/lib/content";
import { useState } from "react";
import { useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#") || href === "#") return;

    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    // Keep the URL hash in sync without causing a jump.
    window.history.replaceState(null, "", href);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-ink-800/60 bg-ink-950/70 backdrop-blur-md transition-shadow ${
        isScrolled ? "shadow-[0_10px_30px_-18px_rgba(0,0,0,0.7)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-ink-50"
        >
          {site.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-300 transition hover:text-accent"
                onClick={(e) => onNavClick(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-6 bg-ink-200" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink-200" />
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-4 border-t border-ink-800 bg-ink-950 px-6 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-ink-200"
                onClick={(e) => onNavClick(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
