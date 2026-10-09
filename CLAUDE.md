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
Next.js 15 (App Router, Turbopack), React 18, TypeScript, CSS Modules (Tailwind v4 is installed but only used lightly), framer-motion, gsap, split-type, lenis, next-view-transitions, Radix Select (shadcn ui in `components/ui`).

## Design tokens
- Ink `#171717`, paper `#F1F1F1`, white `#FFFFFF`, accent lime `#C0FF0D`
- Greys for text on light: `#3D3D3D` (body), `#5C5C5C` (labels). Greys for text on dark: `#D4D4D4` (body), `#A3A3A3` (labels)
- Fonts (declared in `styles/globals.css`): `"mon"` (Neue Montreal) for everything; `"times"` (Times Now) in *italic* for emphasis words
- Section labels look like `( 01 ) Studio`: 13px, uppercase, letter-spacing 0.04em
- Big headings: weight 400, tight letter-spacing (-0.05em to -0.07em), line-height ~0.85
- Side gutter: `clamp(16px, 2.8vw, 40px)`. Section padding: `clamp(96px, 11vw, 160px)`
- Square buttons (no radius); pill buttons (radius 999px) only for filters and tags. Touch targets ≥ 44px
- Project numbering: **M001, M002…** for client work, **A01, A02…** for the archive

## Routes (build these; remove `/showcase`)
| Route | Design file |
|---|---|
| `/` | `Main.dc.html` |
| `/work` | `Work.dc.html` (ends with the Archive banner) |
| `/work/monch` | `CaseStudy.dc.html` |
| `/archive` | `Archive.dc.html` |
| `/services` | `Services.dc.html` |
| `/studio` | `Studio.dc.html` |
| `/contact` | `Contact.dc.html` |
| `app/not-found.tsx` | `NotFound.dc.html` |
| `/terms`, `/privacy` | `Terms.dc.html`, `Privacy.dc.html` |

Nav: Work · Services · Studio · Contact, plus a "Start a project" button. The footer links to Terms and Privacy on every page.
Contact: `info@milcode.com`, `+212 713 086 047`, Instagram `https://instagram.com/milcodestudio`.

## Known bugs to fix along the way
- `app/contact/page.tsx`: the clock and open/closed status are computed during render, which causes a hydration mismatch (the Next "1 Issue" badge). Compute them in `useEffect` after mount.
- `components/HomeSections/Services/Services.tsx`: a `motion.div` sits inside an `<h1>`, which is invalid HTML. Use `motion.span` with `display: inline-block`.
- `Hero.tsx` links have bad hrefs (`"Case Study"`, `"Affiliate"`, `/instagram`). Replace them with real routes or URLs.
- The contact email link is `#mailto:infos@mico.studio`. It should be `mailto:info@milcode.com`.
- `metadata` in `app/layout.tsx`: set a real title and description for each page.

## Suggested build order
1. Shared: tokens in `globals.css`, `Header`, `Footer`, `Button`, `SectionLabel`
2. Home → 3. Services → 4. Work + Archive → 5. Case study → 6. Studio → 7. Contact → 8. 404, Terms, Privacy
