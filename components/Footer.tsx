import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink-800 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-ink-500 md:flex-row">
        <p>
          Copyright {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
