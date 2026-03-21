import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-ink-900/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-semibold text-ink-50 md:text-4xl">
          Projects
        </h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-accent">
          Selected work
        </p>
        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li
              key={p.title}
              className="group rounded-2xl border border-ink-800 bg-ink-950/50 p-8 transition hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl border border-ink-800 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-cyan-400/10">
                {/* Placeholder image (inline SVG) */}
                <img
                  className="aspect-[16/9] w-full object-cover"
                  alt={`${p.title} preview`}
                  src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
                      <defs>
                        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0" stop-color="#8b5cf6" stop-opacity="0.55"/>
                          <stop offset="0.55" stop-color="#3b82f6" stop-opacity="0.35"/>
                          <stop offset="1" stop-color="#22d3ee" stop-opacity="0.25"/>
                        </linearGradient>
                      </defs>
                      <rect width="800" height="450" fill="url(#g)"/>
                      <circle cx="660" cy="110" r="110" fill="#8b5cf6" fill-opacity="0.25"/>
                      <circle cx="150" cy="360" r="150" fill="#22d3ee" fill-opacity="0.18"/>
                      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
                        font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
                        font-size="44" font-weight="700" fill="#e8ecf0" fill-opacity="0.9">
                        ${p.title
                          .split(" ")
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((w) => w[0]?.toUpperCase())
                          .join("")}
                      </text>
                    </svg>`
                  )}`}
                />
              </div>

              <h3 className="font-display text-xl font-semibold text-ink-50">
                {p.title}
              </h3>
              <p className="mt-3 text-ink-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-ink-800 px-2 py-1 text-xs text-ink-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={p.href !== "#" ? p.href : p.github}
                  target={p.href !== "#" ? "_blank" : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-glow"
                  aria-label={`View project: ${p.title}`}
                >
                  View Project
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink-400 transition hover:text-ink-200"
                >
                  GitHub →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
