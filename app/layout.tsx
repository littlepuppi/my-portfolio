import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: `${site.name} - Portfolio`,
  description: site.bio.slice(0, 160),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${fraunces.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem("theme");
                  var systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  var shouldUseDark = stored ? stored === "dark" : systemPrefersDark;
                  if (shouldUseDark) document.documentElement.classList.add("dark");
                  else document.documentElement.classList.remove("dark");
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
