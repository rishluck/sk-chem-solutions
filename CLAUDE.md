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
- `Images/Gallery/Charity/` — 14 CSR/community event photos (charity-1.jpeg … charity-14.jpeg)
- `Images/Partners/Local/` — 8 local client logos
- `Images/Partners/Global/` — Global supplier logos (TBD)
- `Images/Products/` — Product photos (TBD)

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
| `Images/All/young-woman-smelling-leaf-forest.jpg` | Personal Care chems[2] Moisturiser row |
| `Images/Industries/Rubber/rubber-sheets-preservation.png` | Rubber chems[1] Sheet Preservation, Dry Rubber category group |
| `Images/Industries/Rubber/zuniar-ayu-DwyeIjDscCc-unsplash.jpg` | Rubber chems[2] Latex Transport |
| `Images/Industries/Rubber/latex-wax-sheet.png` | Rubber catGroups Latex category tile |
| `Images/Industries/Rubber/estate-plantation-chemicals.png` | Rubber catGroups Estate & Plantation Care category tile |
| `Images/Industries/Personal Care/look-studio-TQSPgNqeCo8-unsplash.jpg` | Personal Care card (homepage), personal industry.html hero |
| `Images/Industries/Personal Care/robbie-4xlQ0LrcilQ-unsplash.jpg` | Personal chems[0] Shampoo row |
| `Images/Industries/Personal Care/laura-jaeger-7LAbLSKbkaQ-unsplash.jpg` | Personal chems[1] Skincare row |
| `Images/Industries/Personal Care/natural-self-care-product.jpg` | Personal chems[4] Natural Beauty row |
| `Images/Industries/Home Care/cleaning-products-arrangement-high-angle.jpg` | Home Care card, home industry.html hero, home chems[0] Dishwashing |
| `Images/Industries/Home Care/puroclean-of-fort-worth--dc38HdQR1M-unsplash.jpg` | Home chems[1] Detergent Stability |
| `Images/Industries/Food Industry/orange-coffee-cocktail-white-surface.jpg` | Food card (flagship card 2), food industry.html hero, food chems[0] Beverage |
| `Images/Industries/Food Industry/andy-li-RndRFJ1v1kk-unsplash.jpg` | Food chems[1] Bakery row |
| `Images/Industries/Food Industry/cupcake-with-cherries-...jpg` | Food chems[2] Natural Sweetening |
| `Images/Industries/Food Industry/assortment-tasty-sugary-...jpg` | Food industry card (homepage) |
| `Images/Industries/Pharmaceutical/toon-lambrechts-RkG7wp75b48-unsplash.jpg` | Pharma card (homepage), pharma industry.html hero, pharma chems[0] GMP |
| `Images/Industries/Pharmaceutical/thaismara-figueredo-MTMn2VDnLGM-unsplash.jpg` | Pharma chems[1] Syrup row |
| `Images/Industries/Pharmaceutical/crystalweed-cannabis-XYGuytPoYHI-unsplash.jpg` | Personal chems[3] Sanitiser row, Pharma chems[2] Solid Dosage |
| `Images/Industries/Textile Washing/second-breakfast-I2WQQaXSy-k-unsplash.jpg` | Textile card (homepage), textile industry.html hero, textile chems[1] Denim Fading row, Fabric & Garment Care category group |
| `Images/Industries/Textile Washing/levis-denim-washing.jpg` | Textile chems[0] Garment Washing & Denim Finishing row |
| `Images/Industries/Textile Washing/engin-akyurt-8g__j-nqWXc-unsplash.jpg` | Textile chems[1] Scouring row |
| `Images/Gallery/Charity/charity-1.jpeg … charity-14.jpeg` | Gallery section (Community filter), CSR section photos |

## Local Client Logos (`Images/Partners/Local/`)
| File | Company | Sector |
|------|---------|--------|
| `ansell_logo.ashx.png` | Ansell Lanka | Rubber & Latex |
| `logo-2.png` | NBC | Rubber & Latex |
| `bellose-logo-blk.png` | Bellosé | Personal Care |
| `link-natural-logo.svg` | Link Natural | Personal Care & Pharma |
| `harumi-holdings-pvt-ltd-314151.jpg` | Dreamron | Personal Care |
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

## Core Principle — Service-Centric Presentation
**The most important design rule:** Always show SERVICES/OUTCOMES as the headline, not chemical names.

- Chemical name/formula → secondary badge (`✦ Formic Acid · HCOOH`)
- Service outcome → headline (`Latex Coagulation`, `Shampoo & Body Wash Formulation`)
- Descriptions → benefit language: "We enable your [business] to [achieve outcome]"
- Images → lifestyle/application photos, NOT lab/chemical photos
- Tags → client outcome benefits, NOT chemical properties

This applies to: industry cards on homepage, flagship cards, product tabs, industry.html sections.

## Industries & Services
Only 4 industries are shown site-wide (homepage cards, footer, contact form, industry.html nav): Rubber & Latex, Home & Personal Care, Food & Beverage Industry, Pharmaceutical. Coatings & Printing Inks and Specialty & Miscellaneous Products were removed as industries.

| Industry | `?ind=` key | Key Services |
|----------|-------------|-------------|
| Rubber & Latex | `rubber` | Latex Coagulation · Sheet Preservation · Export Protection |
| Home & Personal Care | `personal` | Shampoo Formulation · Skincare Enrichment · Detergent Stability · Garment/Fabric Washing |
| Food & Beverage Industry | `food` | Beverage Preservation · Bakery Freshness · Natural Sweetening |
| Pharmaceutical | `pharma` | GMP Facility Hygiene · Oral Formulation · Solid Dosage |

Home Care and Textile Washing content live inside the `personal` industry entry (merged, not separate cards). `IND.home`, `IND.textile`, and `IND.estate` are legacy URL aliases pointing at `personal`/`rubber` for old links — keep them even though no card links to `?ind=home`/`?ind=textile` directly.

## Key Suppliers (Partners section)
- BASF Germany 🇩🇪 — Sodium Metabisulfite, Sodium Sulphite, Vitamin E Acetate
- BASF China 🇨🇳 — Formic Acid
- Vance Group 🇲🇾 — CAPB, Glycerine
- SK Pickglobal 🇰🇷 — Monopropylene Glycol
- LG Chem 🇰🇷 — Isopropyl Alcohol

Global supplier logos use Clearbit API: `https://logo.clearbit.com/{domain}` with `onerror` fallback.

## industry.html Structure
- Single file serves all 4 industries via URL param `?ind=rubber`
- JS data object `IND` contains all industry content
- Each `chems` entry uses: `service`, `serviceEm`, `chemical`, `img`, `desc`, `outcomes`, `specs`, `supplier`, `flag`
- Template renders: `✦ ${c.chemical}` as badge → `${c.serviceEm}` as headline
- Motion graphics: orbFloat, shimLine, spinSlow, fadeUp keyframe animations
- Scroll-triggered reveals via IntersectionObserver

## Gallery Section
- Filter buttons: All, Community (charity), Products, Warehouse, Operations
- 14 real charity photos in `data-cat="charity"` items
- Products/Warehouse/Operations filters ready for when real photos are added
- CSR section (separate from gallery) shows charity-3, charity-7, charity-12

## Navigation
- Logo click → `index.html` (from industry.html) or `#hero` (from homepage)
- Industry cards on homepage → `industry.html?ind={key}`
- Nav links on industry.html prefix with `index.html#`

## Git
- No `gh` CLI installed — use plain `git` commands
- Remote: `origin` → `https://github.com/rishluck/sk-chem-solutions.git`
- Commit and push after every significant change
