"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/lib/content";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#get-verified", label: "Get Verified" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <main className="min-h-screen text-slate-900 dark:text-white">
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 px-4 py-3 backdrop-blur-md dark:border-white/10 dark:bg-white/10 sm:px-6 sm:py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-lg font-bold text-transparent dark:from-purple-300 dark:to-blue-300 sm:text-xl">
            PitchRise
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 dark:text-purple-100 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-slate-950 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href="#get-verified"
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:scale-105 hover:bg-slate-800 dark:bg-white dark:text-purple-900 dark:shadow-purple-900/30 dark:hover:bg-purple-50"
            >
              Get Started
            </a>
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300/80 bg-white/70 text-slate-700 transition hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`mx-auto max-w-5xl overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-96 pt-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 dark:border-white/15 dark:bg-black/20">
            <div className="mb-2 px-1">
              <ThemeToggle />
            </div>
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-purple-100 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#get-verified"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 block rounded-lg bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-purple-900 dark:hover:bg-purple-50"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
        <ScrollReveal delay={0.02}>
          <div className="mb-5 inline-block rounded-full border border-indigo-300/50 bg-indigo-100/80 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-700 dark:border-white/20 dark:bg-white/10 dark:text-purple-200 sm:mb-6 sm:text-sm">
            Verification Platform
          </div>
          <h1 className="mb-5 text-4xl font-bold leading-tight sm:mb-6 sm:text-6xl lg:text-7xl">
            Pitch Rise{" "}
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Verified
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-600 dark:text-purple-100/80 sm:mb-10 sm:text-xl">
            A secure and seamless verification experience. Confirm your identity
            and get started in minutes.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a href="#get-verified" className="rounded-full bg-slate-900 px-8 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:scale-105 hover:bg-slate-800 dark:bg-white dark:text-purple-900 dark:shadow-purple-900/30 dark:hover:bg-purple-50">Get Verified</a>
            <a href="#about" className="rounded-full border border-slate-300/80 bg-white/70 px-8 py-3.5 font-semibold text-slate-800 backdrop-blur-sm transition-all hover:bg-white dark:border-white/30 dark:bg-transparent dark:text-white dark:hover:bg-white/10">Learn More</a>
          </div>
        </ScrollReveal>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      </section>
      <section id="about" className="px-4 py-16 sm:px-6 sm:py-24">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What is PitchRise?
            </h2>
            <p className="text-slate-600 dark:text-purple-100/80 text-lg leading-relaxed max-w-2xl mx-auto">
              PitchRise is a trusted verification platform built for creators,
              founders, and professionals. We make it easy to confirm your
              identity and credentials so you can focus on what matters most.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Secure",
                  desc: "End-to-end encrypted verification process.",
                },
                {
                  title: "Fast",
                  desc: "Get verified in minutes, not days.",
                },
                {
                  title: "Trusted",
                  desc: "Used by thousands of professionals worldwide.",
                },
              ].map((card, idx) => (
                <ScrollReveal key={card.title} delay={idx * 0.08}>
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all hover:bg-white dark:border-white/10 dark:bg-white/10 dark:backdrop-blur-sm dark:hover:bg-white/15">
                    <h3 className="text-xl font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 dark:text-purple-100/70 text-sm">{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
      <section id="how-it-works" className="px-4 py-16 sm:px-6 sm:py-24">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Create Account",
                  desc: "Sign up with your email and basic details.",
                },
                {
                  step: "02",
                  title: "Submit Documents",
                  desc: "Upload the required verification documents.",
                },
                {
                  step: "03",
                  title: "Get Verified",
                  desc: "Receive your verified badge within minutes.",
                },
              ].map((item, idx) => (
                <ScrollReveal key={item.step} delay={idx * 0.08}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-lg font-bold text-white shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-slate-600 dark:text-purple-100/70 text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
      <section id="get-verified" className="px-4 py-16 sm:px-6 sm:py-24">
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto text-center rounded-3xl border border-slate-200 bg-white/80 p-12 shadow-sm dark:border-white/20 dark:bg-white/10 dark:backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Verified?
            </h2>
            <p className="text-slate-600 dark:text-purple-100/80 mb-8 text-lg">
              Join thousands of verified professionals on PitchRise today.
            </p>
            <button className="px-10 py-4 rounded-full bg-slate-900 text-white font-semibold text-lg transition-all hover:scale-105 hover:bg-slate-800 shadow-xl shadow-indigo-200 dark:bg-white dark:text-purple-900 dark:hover:bg-purple-50 dark:shadow-purple-900/30">
              Start Verification
            </button>
          </div>
        </ScrollReveal>
      </section>
      <ScrollReveal delay={0.05}>
        <ContactForm />
      </ScrollReveal>
      <footer className="border-t border-slate-200/80 py-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-purple-100/50">
        <ScrollReveal>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6">
            <div className="flex items-center gap-3">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/80 text-slate-700 transition hover:-translate-y-0.5 hover:scale-105 hover:border-slate-400 hover:bg-white hover:text-slate-900 dark:border-white/20 dark:bg-white/5 dark:text-purple-100/80 dark:hover:border-white/40 dark:hover:bg-white/15 dark:hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/80 text-slate-700 transition hover:-translate-y-0.5 hover:scale-105 hover:border-slate-400 hover:bg-white hover:text-slate-900 dark:border-white/20 dark:bg-white/5 dark:text-purple-100/80 dark:hover:border-white/40 dark:hover:bg-white/15 dark:hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <path d="M7 10v7M7 7h.01M11 17v-4a3 3 0 0 1 6 0v4" />
                </svg>
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/80 text-slate-700 transition hover:-translate-y-0.5 hover:scale-105 hover:border-slate-400 hover:bg-white hover:text-slate-900 dark:border-white/20 dark:bg-white/5 dark:text-purple-100/80 dark:hover:border-white/40 dark:hover:bg-white/15 dark:hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M22 4.5a8.4 8.4 0 0 1-2.36.65A4.12 4.12 0 0 0 21.44 3a8.24 8.24 0 0 1-2.61 1A4.1 4.1 0 0 0 12 7.5a11.65 11.65 0 0 1-8.46-4.3 4.1 4.1 0 0 0 1.27 5.47A4.06 4.06 0 0 1 3 8.1v.05a4.1 4.1 0 0 0 3.29 4 4.13 4.13 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 17.16 11.62 11.62 0 0 0 8.29 19c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.3 8.3 0 0 0 22 4.5z" />
                </svg>
              </a>
            </div>
            <p>© 2026 PitchRise. All rights reserved.</p>
          </div>
        </ScrollReveal>
      </footer>
    </main>
  );
}
