# Milcode Studio — website

Agency site for Milcode Studio: an independent studio in Casablanca that designs and builds **websites for restaurants and hospitality**. Write all copy for restaurant owners.

## Working rules (save tokens)
- Write the code and stop. **Don't run builds, tests, or screenshots unless I ask.** I run `npm run dev` myself.
- Do one page or feature per task. Touch only the files that task needs.
- Use the designs in `/design/*.dc.html` as the visual reference. They're HTML mockups, not code to copy: rebuild them as components.
- Keep `[bracketed]` placeholders exactly as they are, and use grey placeholder boxes for missing images and videos. Never invent numbers, prices, quotes, or client names.
- Reuse existing patterns: CSS Modules per component, `framer-motion` line reveals (`ease: [0.87, 0.13, 0, 1]`), `TransitionLink` for all links (internal ones use `next-view-transitions`), smooth scroll via the global `LenisProvider` — use `useLenisInstance()` from `@/context/LenisContext`, never create a new Lenis.
- Footer is global (full on `/`, compact elsewhere). Never rebuild per-page footers from the design files.

## Stack
Next.js 16 (App Router, Turbopack), React 19, TypeScript, CSS Modules (Tailwind v4 is installed but only used lightly), framer-motion, lenis, next-view-transitions.

## Design tokens
CSS variables in `styles/globals.css`: `--ink`, `--paper`, `--white`, `--accent`, `--text-body`, `--text-label`, `--text-body-dark`, `--text-label-dark`, `--line`, `--line-dark`, `--font-sans`, `--font-serif`, `--gutter`, `--section-pad`, `--touch`, `--ease`.
- Ink `#171717`, paper `#F1F1F1`, white `#FFFFFF`, accent lime `#C0FF0D`
- Greys for text on light: `#3D3D3D` (body), `#5C5C5C` (labels). Greys for text on dark: `#D4D4D4` (body), `#A3A3A3` (labels)
- Fonts: `"mon"` (Neue Montreal) for everything; `"times"` (Times Now) in *italic* for emphasis words (`section.serif`)
- Section labels look like `( 01 ) Studio`: 13px, uppercase, letter-spacing 0.04em
- Big headings: weight 400, tight letter-spacing (-0.05em to -0.07em), line-height ~0.85
- Side gutter: `clamp(16px, 2.8vw, 40px)`. Section padding: `clamp(96px, 11vw, 160px)`
- Square buttons (no radius); pill buttons (radius 999px) only for filters and tags. Touch targets ≥ 44px
- Project numbering: **M001, M002…** for client work, **A01, A02…** for the archive

## Routes
| Route | Page | Design file |
|---|---|---|
| `/` | `app/page.tsx` | `Main.dc.html` |
| `/work` | `app/work/page.tsx` (ends with the Archive banner) | `Work.dc.html` |
| `/work/[slug]` | `app/work/[slug]/page.tsx`, static from `data/projects.ts` | `CaseStudy.dc.html` |
| `/archive` | `app/archive/page.tsx` | `Archive.dc.html` |
| `/services` | `app/services/page.tsx` | `Services.dc.html` |
| `/studio` | `app/studio/page.tsx` | `Studio.dc.html` |
| `/contact` | `app/contact/page.tsx` (`?topic=collab` preselects Collaboration) | `Contact.dc.html` |
| 404 | `app/not-found.tsx` | `NotFound.dc.html` |
| `/terms`, `/privacy` | `app/terms/page.tsx`, `app/privacy/page.tsx` | `Terms.dc.html`, `Privacy.dc.html` |

Generated: `app/sitemap.ts` (static routes + every project with a `slug`), `app/robots.ts`, `app/opengraph-image.tsx`.
New static routes must be added to `app/sitemap.ts`. Routes with a light (paper/lime) top go in `lightHeaderRoutes` in `components/layouts/Header/data.ts`.

## Metadata
`app/layout.tsx` sets `metadataBase` from `SITE_URL`, the title template `%s — Milcode Studio`, and Open Graph / Twitter defaults. Pages set a short `title` ("Studio") and a `description`; the home page uses `title.absolute`.

## Data (`data/`) — content lives here, not in components
- `site.ts` — `SITE_URL` (placeholder until the domain is live), `SITE_NAME`, `SITE_DESCRIPTION`, email, phone, Instagram, socials, address, `FORMSUBMIT_ENDPOINT`
- `projects.ts` — client projects (M001…) with optional case studies, archive items (A01…), `getProject`, `getNextProject`, `projectHref`
- `studio.ts` — /studio copy; `openHours` is the single source for hours (drives `OpenStatus` and the generated "Hours" text)
- `legal.ts` — Terms and Privacy content for `LegalPage`
- Header nav and footer link lists: `components/layouts/{Header,Footer}/data.ts`

## Components
- `layouts/Header`, `layouts/Footer` — global, mounted in `app/layout.tsx`. Footer is full on `/`, compact elsewhere. Never rebuild per-page headers or footers from the design files.
- Shared: `Button` (solid / outline / accent, `surface` light|dark, `arrow`), `SectionLabel`, `Reveal` (`RevealLines`, `FadeIn`), `Accordion/AccordionPanel`, `ServiceGrid`, `LegalPage` (hero, Terms/Privacy switch, sticky contents, numbered sections)
- Page sections: `HomeSections`, `ServicesSections`, `WorkSections`, `ArchiveSections`, `CaseStudySections`, `StudioSections`, `ContactSections` (incl. `OpenStatus`, also used in the Header on /contact), `NotFound` (styles only)
- Shared section styles: `components/HomeSections/section.module.css` (`labelCol`, `mainCol`, `serif`, `muted`, `placeholder`…)
- `utils/` — `TransitionLink` (letter-roll link; internal hrefs use `next-view-transitions`, supports `onClick` and `ariaCurrent`), `FollowedEye` (logo eyes)
- `context/LenisContext.tsx` — the one Lenis instance; in-page anchors call `lenis.scrollTo("#id")` from a `TransitionLink` `onClick`
