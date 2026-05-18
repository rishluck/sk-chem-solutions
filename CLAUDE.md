# S.K. Chem Solutions — Website Project

## Project Overview
Static website for **S.K. Chem Solutions** — a Sri Lankan B2B chemical raw material importer based in Battaramulla, established 2017. Client is referred to as SK Chem.

## Files
- `index.html` — Full homepage (HTML + CSS + JS, single file)
- `industry.html` — Industry detail page (URL param `?ind=rubber` etc.)
- `Images/` — Any local assets

## Live Site
- GitHub repo: `https://github.com/rishluck/sk-chem-solutions.git`
- GitHub Pages: `https://rishluck.github.io/sk-chem-solutions`
- Branch: `main`

## Design System
```css
:root {
  --ink:#1C3829; --leaf:#2A5E40; --mid:#3A7D58; --sage:#5C9470; --fresh:#4CAF76;
  --pale:#E6F0E9; --mint:#EEF5F0; --cream:#FAF8F4; --white:#fff; --bdr:#D4E4D9;
  --tm:#4A6654; --tl:#7A9688;
}
```
- Fonts: Cormorant Garamond (headings/serif) + DM Sans (body)
- Style: editorial, premium, dark green palette

## Core Principle — Service-Centric Presentation
**The most important design rule:** Always show SERVICES/OUTCOMES as the headline, not chemical names.

- Chemical name/formula → secondary badge (`✦ Formic Acid · HCOOH`)
- Service outcome → headline (`Latex Coagulation`, `Shampoo & Body Wash Formulation`)
- Descriptions → benefit language: "We enable your [business] to [achieve outcome]"
- Images → lifestyle/application photos, NOT lab/chemical photos
- Tags → client outcome benefits, NOT chemical properties

This applies to: industry cards on homepage, flagship cards, product tabs, industry.html sections.

## Industries & Services
| Industry | Key Services |
|----------|-------------|
| Rubber & Latex | Latex Coagulation · Sheet Preservation · Export Protection |
| Personal Care | Shampoo Formulation · Skincare Enrichment · Natural Hydration |
| Home Care | Dishwashing Power · Detergent Stability · Surface Care |
| Food Industry | Beverage Preservation · Bakery Freshness · Natural Sweetening |
| Pharmaceutical | GMP Facility Hygiene · Oral Formulation · Solid Dosage |
| Textile Washing | Garment Washing · Fabric Scouring · Premium Finishing |

## Key Suppliers (Partners section)
- BASF Germany 🇩🇪 — Sodium Metabisulfite, Sodium Sulphite, Vitamin E Acetate
- BASF China 🇨🇳 — Formic Acid
- Vance Group 🇲🇾 — CAPB, Glycerine
- SK Pickglobal 🇰🇷 — Monopropylene Glycol
- LG Chem 🇰🇷 — Isopropyl Alcohol

Logos use Clearbit API: `https://logo.clearbit.com/{domain}` with `onerror` fallback to a styled text mark.

## Images
- Hero (homepage + rubber industry page): Unsplash photo `1441974231531-c6227db76b6e` (sunlit forest path)
- All other images: `https://loremflickr.com/{w}/{h}/{keywords}?lock={N}` — use lifestyle/application keywords, NOT chemical/lab keywords
- Lock numbers: homepage uses 3–17, industry.html uses 101–610

## industry.html Structure
- Single file serves all 6 industries via URL param `?ind=rubber`
- JS data object `IND` contains all industry content
- Each `chems` entry uses: `service`, `serviceEm`, `chemical`, `img`, `desc`, `outcomes`, `specs`, `supplier`, `flag`
- Template renders: `✦ ${c.chemical}` as badge → `${c.serviceEm}` as headline
- Motion graphics: orbFloat, shimLine, spinSlow, fadeUp keyframe animations
- Scroll-triggered reveals via IntersectionObserver

## Navigation
- Logo click → `index.html` (from industry.html) or `#hero` (from homepage)
- Industry cards on homepage → `industry.html?ind={key}`
- Nav links on industry.html prefix with `index.html#`

## Git
- No `gh` CLI installed — use plain `git` commands
- Remote: `origin` → `https://github.com/rishluck/sk-chem-solutions.git`
- Commit and push after every significant change
