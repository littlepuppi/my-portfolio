import { site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-900/80 to-ink-950 p-10 md:p-14">
        <h2 className="font-display text-3xl font-semibold text-ink-50 md:text-4xl">
          Let&apos;s talk
        </h2>
        <p className="mt-4 max-w-lg text-ink-400">
          Have a project in mind or want to say hello? Reach out-I&apos;d love
          to hear from you.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink-950 transition hover:bg-accent-glow"
        >
          {site.email}
        </a>
        <div className="mt-8 flex gap-6 text-sm text-ink-400">
          <a href={site.social.github} className="hover:text-accent">
            GitHub
          </a>
          <a href={site.social.linkedin} className="hover:text-accent">
            LinkedIn
          </a>
          <a href={site.social.twitter} className="hover:text-accent">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
