# PitchRise landing page

This repository is named my-portfolio, and the previous README described a personal portfolio template. The page that actually renders (`app/page.tsx`) is a marketing landing page for **PitchRise**, branded as a verification platform (“Pitch Rise Verified”).

The live site is [https://my-portfolio-liard-phi-13.vercel.app](https://my-portfolio-liard-phi-13.vercel.app).

The landing page includes a sticky nav (About, How It Works, Get Verified, Contact), a light/dark theme toggle, a hero, three feature cards (Secure, Fast, Trusted), a three-step “How It Works” section, a “Get Verified” call to action, a contact form, and footer social links. The “Start Verification” button is a front-end control with no submit handler. The contact form validates name, email, and message and shows a success message; it does not send data to a server.

## Tech stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Project structure

```
app/
  page.tsx              # PitchRise landing page
  layout.tsx
  globals.css
components/
  ContactForm.tsx       # used by the landing page
  ThemeToggle.tsx
  ScrollReveal.tsx
  Hero.tsx, About.tsx, Projects.tsx, Skills.tsx, Navbar.tsx, Footer.tsx
  # The last group looks like leftovers from a personal-portfolio layout
  # and is not imported by app/page.tsx.
lib/content.ts          # site name, bio, project placeholders, and social URLs
                        # (footer links use site.social; other fields are still placeholders)
```

`lib/content.ts` still has placeholder social URLs and sample projects. The “Get Verified” flow is not implemented behind the button.
