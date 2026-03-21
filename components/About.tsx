import { site } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-semibold text-ink-50 md:text-4xl">
          About
        </h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-accent">
          A bit about me
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300">
          {site.bio} I&apos;m based in {site.location} and always open to
          interesting collaborations.
        </p>
      </div>
    </section>
  );
}
