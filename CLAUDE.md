# S.K. Chem Solutions — Website Project

## Project Overview
Static website for **S.K. Chem Solutions** — a Sri Lankan B2B chemical raw material importer based in Battaramulla, established 2017. Client is referred to as SK Chem.

## Files
- `index.html` — Full homepage (HTML + CSS + JS, single file)
- `industry.html` — Industry detail page (URL param `?ind=rubber` etc.)
- `Images/All/` — General use images (hero, nature/greenery, rubber plantation)
- `Images/Industries/Rubber/` — Rubber tapping, sheets, gloves
- `Images/Industries/Personal Care/` — Skincare, shower, cosmetics
- `Images/Industries/Home Care/` — Cleaning products
- `Images/Industries/Food Industry/` — Bakery, beverages
- `Images/Industries/Pharmaceutical/` — Cleanroom, medicine
- `Images/Industries/Textile Washing/` — Garments, dye
- `Images/Gallery/gallery-1.jpg … gallery-6.jpg` — retouched, web-optimised homepage gallery photos (latex tray & rubber roller donation)
- `Images/Gallery/New-Retouch/` — full-size retouched PNG masters (not committed, local only)
- `Images/Gallery/Charity/` — 14 CSR/community event photos (charity-1.jpeg … charity-14.jpeg)
- `Images/Partners/Local/` — 8 local client logos
- `Images/Partners/Global/` — Global supplier logos (BASF, Vance Group, SK Pickglobal, LG Chem)
- `Images/Products/` — Product photos (TBD)

## Logo (`Logo/`)
- `sk-chem-logo.png` — full logo (SK mark + "Chem Solutions"), transparent PNG, used in the nav on all pages (`.nav-logo`, 56px desktop / 44px mobile)
- `sk-chem-mark.png` — SK mark only, used in the footer (`.ft-mark-img`)
- `favicon.png` / `apple-touch-icon.png` — browser tab / home-screen icons, linked in every page `<head>`
- Source: `CamScanner 25-09-2026 14.41.pdf` (local only; logo image extracted from it)

## No External Image Dependencies
All images are now local — zero loremflickr usage remaining.

## Real Images in Use
| File | Used In |
|------|---------|
| `Images/All/hero.jpg` | Homepage hero only |
| `Images/All/isuru-ranasinha-AVhFLfD_Lv8-unsplash.jpg` | Rubber industry card (homepage), rubber industry.html hero |
| `Images/All/isuru-ranasinha-3JdlP4prtjg-unsplash.jpg` | Flagship card 1, rubber chems[0] Latex Coagulation |
| `Images/All/closeup-shot-trees-greenery-...jpg` | About section image |
| `Images/All/green-plant-leaves-with-blue-sky-background.jpg` | Sustainability section background |
| `Images/Industries/Rubber/formic-acid-carboys-warehouse.png` | Rubber chems[0] Latex Coagulation — 2nd slide (image slider via `imgs` array) |
| `Images/Industries/Rubber/basf-sodium-metabisulphite-bag.png` | Rubber chems[1] Crepe Rubber Preservation — 2nd slide |
| `Images/Industries/Rubber/rubber-sheets-preservation.png` | Rubber chems[1] Crepe Rubber Preservation |
| `Images/Industries/Rubber/basf-formic-acid-85-carboy.jpg` | Rubber chems[0] Latex Coagulation, 3rd slide |
| `Images/Industries/Rubber/zuniar-ayu-DwyeIjDscCc-unsplash.jpg` | Rubber chems[2] Latex Transport |
| `Images/Industries/Rubber/basf-sodium-sulfite-bag.jpg` | Rubber chems[2] Latex Transport, 2nd slide |
| `Images/Industries/Personal Care/personal-care-vanity-flatlay.png` | Personal Care card (homepage), personal industry.html hero |
| `Images/Industries/Personal Care/foam-bath-rich-lather.jpg` | Personal chems[2] CDE Foam Boosting row |
| `Images/Industries/Personal Care/shampoo-body-wash-shower.png` | Personal chems[0] Shampoo & Body Wash row |
| `Images/Industries/Personal Care/skincare-cream-serum-formulation.png` | Personal chems[1] Premium Skincare & Anti-Aging row |
| `Images/Industries/Personal Care/natural-beauty-jasmine-spa.png` | Personal chems[4] Natural Beauty row |
| `Images/Industries/Personal Care/hand-sanitiser-production-line.png` | Personal chems[3] Hand Sanitiser row |
| `Images/Industries/Personal Care/dishwashing-surface-cleaning.png` | Personal chems[5] Home Care Products row |
| `Images/Industries/Home Care/puroclean-of-fort-worth--dc38HdQR1M-unsplash.jpg` | Personal chems[6] Detergent Stability row |
| `Images/Industries/Food Industry/fresh-fruit-juices-beverages.png` | Food industry card (homepage), food industry.html hero, food chems[0] Beverage & Fruit Juice Preservation |
| `Images/Industries/Food Industry/bakery-bread-pastries-assortment.png` | Food chems[1] Bakery row |
| `Images/Industries/Food Industry/confectionery-candies-glazed.jpg` | Food chems[2] Confectionery Glazing (Liquid Shellac) |
| `Images/Industries/Food Industry/honey-dates-natural-sweeteners.png` | Food chems[3] Natural Sweetening  |
| `Images/Industries/Pharmaceutical/toon-lambrechts-RkG7wp75b48-unsplash.jpg` | Pharma card (homepage), pharma industry.html hero, pharma chems[0] GMP |
| `Images/Industries/Pharmaceutical/oral-syrup-formulation-lab.jpg` | Pharma chems[1] Oral Liquid & Syrup row |
| `Images/Industries/Pharmaceutical/crystalweed-cannabis-XYGuytPoYHI-unsplash.jpg` | Pharma chems[2] Solid Dosage |
| `Images/Industries/Textile Washing/levis-denim-washing.jpg` | textile industry.html hero + textile chems[0] Garment & Denim Washing row, homepage hero decoration |
| `Images/Industries/Textile Washing/second-breakfast-I2WQQaXSy-k-unsplash.jpg` | textile chems[1] Denim Fading row |
| `Images/Gallery/1.jpeg, 2.jpeg, 4.jpeg, 5.jpeg, 6.jpeg` | Homepage gallery bento slots 1,2,4,5,6 (ORIGINAL photos, client request Oct 2026; retouched gallery-*.jpg no longer used) |
| `Images/Gallery/Charity/charity-3.jpeg` | Gallery bento slot 3 (original of the old retouched social-responsibility.jpg) |

## Local Client Logos (`Images/Partners/Local/`)
| File | Company | Sector |
|------|---------|--------|
| `ansell_logo.ashx.png` | Ansell Lanka | Rubber & Latex |
| `logo-2.png` | NBC | Rubber & Latex |
| `bellose-logo-blk.png` | Bellosé | Personal Care |
| `link-natural-logo.svg` | Link Natural | Personal Care & Pharma |
| `dreamron.png` (trimmed from `harumi-holdings-pvt-ltd-314151.jpg`) | Dreamron (shown larger: `.lm-lg`) | Personal Care |
| `Janet_Logos_1_-02.png.avif` | Janet Lanka | Personal Care |
| `logo.webp` | 4rever Skin Naturals | Personal Care |
| `sm-logo.png` | ACE | Pharmaceutical |

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
- **Modern refresh (Oct 2026):** each page's `<style>` ends with a `MODERN REFRESH` override block (visual only, no layout changes): Inter for body text (Poppins stays for headings), neutral off-white `#F5F8F4` backgrounds, pill sentence-case buttons with a two-stop green gradient (`--grad`), darker green text gradient on light backgrounds (`--grad-txt`), layered soft shadows, rounder cards, sentence-case nav links with an animated underline. Edit or remove that block to tune or revert the look.

## Core Principle — Service-Centric Presentation
**The most important design rule:** Always show SERVICES/OUTCOMES as the headline, not chemical names.

- Chemical name/formula → secondary badge (`✦ Formic Acid · HCOOH`)
- Service outcome → headline (`Latex Coagulation`, `Shampoo & Body Wash Formulation`)
- Descriptions → benefit language: "We enable your [business] to [achieve outcome]"
- Images → lifestyle/application photos, NOT lab/chemical photos
- Tags → client outcome benefits, NOT chemical properties

This applies to: industry cards on homepage, flagship cards, product tabs, industry.html sections.

**Copy style:** never use em dashes (—) in visible site text. Use commas, full stops, colons or "·" instead (client request, Sep 2026). Page titles use " | " as the separator.

**Exception (client request, Sep 2026):** on industry.html chem rows the chemical badge (`✦ Formic Acid · HCOOH`) is now visually emphasised — large Poppins bold badge — with the service title smaller beneath it. Order/layout unchanged.

## Industries & Services
5 industries are shown site-wide (homepage cards, footer, contact form): Rubber & Latex, Home & Personal Care, Food & Beverage Industry, Pharmaceutical, Textile Washing & Treatment. Coatings & Printing Inks and Specialty & Miscellaneous Products were removed as industries.

| Industry | `?ind=` key | Key Services |
|----------|-------------|-------------|
| Rubber & Latex | `rubber` | Latex Coagulation · Crepe Rubber Preservation · Export Protection |
| Home & Personal Care | `personal` | Shampoo Formulation · Skincare Enrichment · Detergent Stability · Hand Sanitiser Production |
| Food & Beverage Industry | `food` | Beverage Preservation · Bakery Freshness · Confectionery Glazing (Shellac E904) · Natural Sweetening |
| Pharmaceutical | `pharma` | GMP Facility Hygiene · Oral Formulation · Solid Dosage |
| Textile Washing & Treatment | `textile` | Garment & Denim Washing · Denim Fading |

Home Care content lives inside the `personal` industry entry (merged). Textile Washing & Treatment is its own full `textile` industry entry — homepage card (5th, "Export-Focused" badge), footer links (index + industry.html), and contact-form option, plus the `industry.html?ind=textile` page. `IND.home` and `IND.estate` remain legacy URL aliases pointing at `personal`/`rubber` for old links.

## Key Suppliers (Partners section)
- BASF Germany 🇩🇪 — Sodium Metabisulfite, Sodium Sulphite, Vitamin E Acetate
- BASF China 🇨🇳 — Formic Acid
- Vance Group 🇲🇾 — CAPB, Glycerine
- SK Pickglobal 🇰🇷 — Monopropylene Glycol
- LG Chem 🇰🇷 — Isopropyl Alcohol

Global supplier logos are local files in `Images/Partners/Global/`: `basf.png`, `vance-group.png`, `sk-pickglobal.png` (SK butterfly mark cropped from an SK telecom SVG — replace with an official SK Pickglobal logo if supplied), `lg-chem.svg`. Clearbit is no longer used (service shut down). LUXI Chemical has no logo yet.

## industry.html Structure
- Single file serves all 5 industries via URL param `?ind=rubber`
- JS data object `IND` contains all industry content
- Each `chems` entry uses: `service`, `serviceEm`, `chemical`, `img`, optional `imgs` (array → prev/next + dots slider), `desc`, `outcomes`, `specs`, `supplier`, `flag`
- Template renders: `✦ ${c.chemical}` as badge → `${c.serviceEm}` as headline
- `specs` are rendered as chips under the outcome tags (`.chem-specs`). Client-confirmed figures (Oct 2026):
  - Sodium Metabisulfite Food Grade (E223): purity 99%, SO₂ 66.5% (food page, updated Oct 2026)
  - Sodium Metabisulfite Non-Food Grade: purity 99%, SO₂ 67% (rubber crepe + textile rows)
  - Sodium Sulfite Non-Food Grade: purity ≥97.5%
  - Formic Acid: 85%, Technical Grade
  - Vitamin E Acetate: purity 98%
  - CDE: purity 85–90%
  - EDTA: powder only, 25 kg bags
  - MPG (Monopropylene Glycol): purity 99.7% (food + pharma rows)
  - IPA (Isopropyl Alcohol): purity 99.9% (personal care hand sanitiser + pharma GMP rows)
  - Spelling: always "Sulfite", not "Sulphite"
- Motion graphics: orbFloat, shimLine, spinSlow, fadeUp keyframe animations
- Scroll-triggered reveals via IntersectionObserver

## Gallery Section
- Filter buttons: All, Community (charity), Products, Warehouse, Operations
- 6 photos (`gallery-1…6.jpg`, `data-cat="charity"`) in a 4-col bento: row 1 = 1 · 2 (wide) · 3, row 2 = 4 · 5 (wide) · 6 — every tile `bi-r3`, wide ones also `bi-c2`, so the grid fills with no gaps
- Bottom row items use `bi-r5` (taller row on desktop, reset to row-1 height in tablet/mobile media queries) so wide tile 5 shows both faces and the roller received
- Wide tiles 2 and 5 use inline `object-position` (36% / 45%) to keep faces in frame — retune if photos change
- **"All" shows max 6 photos (client request, Oct 2026):** only tiles with class `feat` show under All (CSS `.bento-item:not(.feat){display:none}` + `applyGalFilter`); category filters show every tile in that category. Current featured 6: 1.jpeg · warehouse-exterior (wide) · warehouse-drums-2 / warehouse-racking-aisle · 5.jpeg (wide) · 6.jpeg. DOM order is interleaved (1,2,3,d1,ext,d2,4,rack,carb,steel,5,6) so All, Community and Warehouse each lay out as narrow · wide · narrow rows with no gaps; keep that in mind when adding photos
- Warehouse filter (Oct 2026): 6 photos in `Images/Gallery/Warehouse/` (`data-cat="warehouse"`), added as rows 3 and 4 of the bento in the same narrow · wide · narrow pattern: row 3 `bi-r3` = drums-1 · exterior (wide, object-position center 60%) · drums-2; row 4 `bi-r5` = racking-aisle · carboys (wide) · steel-drums (brightened, original was dark)
- Products/Operations filters ready for when real photos are added
- CSR / Social Responsibility section (separate from gallery) crossfades every 5s between `Images/Gallery/3.jpeg` (original, object-position center 62%) and `Images/Gallery/social-responsibility-2-square.jpg` (first two collage panels, square). The CSR box is square on all screen sizes (same as desktop)

## Intro Splash (index.html)
- `#intro` overlay: logo fades in, holds, zooms ×7 while the white overlay fades (~2.4s, pure CSS keyframes `introLogo` / `introOut`)
- Plays once per browser session (`sessionStorage` key `skIntro`); a timeout removes it at 2.6s as a safety net
- Hidden for `prefers-reduced-motion: reduce`

## Navigation
- Logo click → `index.html` (from industry.html) or `#hero` (from homepage)
- Industry cards on homepage → `industry.html?ind={key}`
- Nav links on industry.html prefix with `index.html#`

## Git
- No `gh` CLI installed — use plain `git` commands
- Remote: `origin` → `https://github.com/rishluck/sk-chem-solutions.git`
- Commit and push after every significant change
