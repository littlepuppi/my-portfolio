import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-semibold text-ink-50 md:text-4xl">
          Skills
        </h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-accent">
          Tools & technologies
        </p>
        <ul className="mt-12 flex flex-wrap gap-3">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-ink-700 bg-ink-900/30 px-5 py-2 text-sm text-ink-200"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
