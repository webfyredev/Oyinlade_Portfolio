# Oyinlade Oyinloye — Full-Stack Developer Portfolio

Built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

Almost everything on the page — copy, project case studies, skills, links —
lives in `lib/data.ts`. Edit that file rather than the components to update
content.

Before publishing:
- Replace the placeholder `liveUrl` / `githubUrl` ("#") in `lib/data.ts`
  with your real Live Demo and GitHub links for each project.
- Replace `siteConfig.email`, `siteConfig.github`, `siteConfig.linkedin`
  with your real contact links.
- Add a real `public/og-image.png` (1200×630) for social sharing previews,
  and a `public/favicon.ico`.
- Update `siteUrl` in `app/layout.tsx` to your real deployed domain.

## Project structure

```
app/
  layout.tsx       — root layout, fonts, SEO metadata
  page.tsx         — assembles all sections
  globals.css      — base styles, focus states, reduced-motion handling
components/        — one component per section
lib/data.ts        — all site content and project data
```

## Build

```bash
npm run build
npm run start
```

## Deployment

This is a standard Next.js app — deploys as-is to Vercel, Netlify, or any
Node hosting that supports Next.js 14.
