import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center px-6 pt-24 overflow-hidden">
      {/* Gradient glow background (purple/blue) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-500/35 via-blue-500/25 to-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-[-18rem] right-[-6rem] h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-blue-600/25 via-indigo-500/15 to-purple-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.25),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-5xl">
        <p
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Software Engineer • AI + Next.js
        </p>
        <h1
          className="font-display text-4xl font-semibold leading-tight text-ink-50 opacity-0 animate-fade-up sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
            {site.name}
          </span>
        </h1>
        <p
          className="mt-6 max-w-xl text-lg text-ink-300 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          {site.title}. {site.bio}
        </p>
        <div
          className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-accent-glow"
          >
            View work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink-600 px-6 py-3 text-sm font-medium text-ink-200 transition hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
