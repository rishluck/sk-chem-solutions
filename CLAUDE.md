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
- `Images/Partners/Local/` — 10 local client logos
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
| `Images/Industries/Rubber/formic-acid-carboys-warehouse.png` | No longer used (AI-style image without BASF logo, removed from the Latex Coagulation slider Oct 2026) |
| `Images/Industries/Rubber/basf-sodium-metabisulfite-bag-wide.jpg` | Rubber chems[1] Crepe Rubber Preservation, 2nd slide. Made from `basf-sodium-metabisulphite-bag.png` on a 3:2 white canvas so the whole BASF bag shows |
| `Images/Industries/Rubber/rubber-sheets-preservation.jpg` | Rubber chems[1] Crepe Rubber Preservation |
| `Images/Industries/Rubber/basf-formic-acid-85-carboy-wide.jpg` | Rubber chems[0] Latex Coagulation, 2nd slide (slider has exactly 2 images). Made from `basf-formic-acid-85-carboy.jpg` (real BASF carboy, portrait) centred on a 3:2 canvas with blurred sides, so the WHOLE bottle shows in the normal cover-cropped box on desktop and mobile (client wants the full bottle visible, no viewer) |
| `Images/Industries/Rubber/zuniar-ayu-DwyeIjDscCc-unsplash.jpg` | Rubber chems[2] Latex Transport |
| `Images/Industries/Rubber/basf-sodium-sulfite-bag-wide.jpg` | Rubber chems[2] Latex Transport, 2nd slide. Made from `basf-sodium-sulfite-bag.jpg` on a 3:2 canvas with blurred sides so the whole BASF bag shows |
| `Images/Industries/Personal Care/personal-care-vanity-flatlay.jpg` | Personal Care card (homepage), personal industry.html hero |
| `Images/Industries/Personal Care/foam-bath-rich-lather.jpg` | Personal chems[2] CDE Foam Boosting row |
| `Images/Industries/Personal Care/shampoo-body-wash-shower.jpg` | Personal chems[0] Shampoo & Body Wash row |
| `Images/Industries/Personal Care/skincare-cream-serum-formulation.jpg` | Personal chems[1] Premium Skincare & Anti-Aging row |
| `Images/Industries/Personal Care/natural-beauty-jasmine-spa.jpg` | Personal chems[4] Natural Beauty row |
| `Images/Industries/Personal Care/hand-sanitiser-production-line.jpg` | Personal chems[3] Hand Sanitiser row |
| `Images/Industries/Personal Care/dishwashing-surface-cleaning.jpg` | Personal chems[5] Home Care Products row |
| `Images/Industries/Home Care/puroclean-of-fort-worth--dc38HdQR1M-unsplash.jpg` | Personal chems[6] Detergent Stability row |
| `Images/Industries/Food Industry/fresh-fruit-juices-beverages.jpg` | Food industry card (homepage), food industry.html hero, food chems[0] Beverage & Fruit Juice Preservation |
| `Images/Industries/Food Industry/bakery-bread-pastries-assortment.jpg` | Food chems[1] Bakery row |
| `Images/Industries/Food Industry/confectionery-candies-glazed.jpg` | Food chems[2] Confectionery Glazing (Liquid Shellac) |
| `Images/Industries/Food Industry/honey-dates-natural-sweeteners.jpg` | Food chems[3] Natural Sweetening  |
| `Images/Industries/Pharmaceutical/toon-lambrechts-RkG7wp75b48-unsplash.jpg` | Pharma card (homepage), pharma industry.html hero, pharma chems[0] GMP |
| `Images/Industries/Pharmaceutical/oral-syrup-formulation-lab.jpg` | Pharma chems[1] Oral Liquid & Syrup row |
| `Images/Industries/Pharmaceutical/crystalweed-cannabis-XYGuytPoYHI-unsplash.jpg` | Pharma chems[2] Solid Dosage |
| `Images/Industries/Textile Washing/levis-denim-washing.jpg` | textile industry.html hero + textile chems[0] Garment & Denim Washing row, homepage hero decoration |
| `Images/Industries/Textile Washing/second-breakfast-I2WQQaXSy-k-unsplash.jpg` | textile chems[1] Denim Fading row |
| `Images/Gallery/Charity/charity-*.jpeg` (12 of 14) | CSR "Community moments" strip |
| `Images/Gallery/Warehouse/*.jpg` | Gallery Warehouse bento |

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
| `chemanex.png` (background removed, shown taller: `.lm-tall`, 68px) | Chemanex | Chemicals |
| `cw-mackie.png` (recoloured red-on-transparent from the white-on-red square, re-laid out horizontally: mark + name; `.lm-lg`) | C. W. Mackie PLC | Rubber & Trading |

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
- **Homepage industry cards (redesign, Oct 2026):** `<a class="ind-card">` in `#ind-carousel`, white card with inset 16:10 image (`.ic-media`), frosted badge top-left (`.ic-badge`, wording from each industry's `IND.badge`), title, 2-line summary (3 lines under 960px; keep summaries short enough to never show "..."), exactly 3 services as a check list (`.ic-svc`), footer "Explore industry" + round arrow (`.ic-go`, turns green on hover). Every card must keep the same structure so heights match
5 industries are shown site-wide (homepage cards, footer, contact form): Rubber & Latex, Home & Personal Care, Food & Beverage Industry, Pharmaceutical, Textile Washing & Treatment. Coatings & Printing Inks and Specialty & Miscellaneous Products were removed as industries.

| Industry | `?ind=` key | Key Services |
|----------|-------------|-------------|
| Rubber & Latex | `rubber` | Latex Coagulation · Crepe Rubber Preservation · Export Protection |
| Home & Personal Care | `personal` | Shampoo Formulation · Skincare Enrichment · Detergent Stability · Hand Sanitiser Production |
| Food & Beverage Industry | `food` | Beverage Preservation · Bakery Freshness · Confectionery Glazing (Shellac E904) · Natural Sweetening |
| Pharmaceutical | `pharma` | GMP Facility Hygiene · Oral Formulation · Solid Dosage |
| Textile Washing & Treatment | `textile` | Garment & Denim Washing · Denim Fading (homepage card also lists Bleach Neutralisation) |

Home Care content lives inside the `personal` industry entry (merged). Textile Washing & Treatment is its own full `textile` industry entry — homepage card (5th, "Export-Focused" badge), footer links (index + industry.html), and contact-form option, plus the `industry.html?ind=textile` page. `IND.home` and `IND.estate` remain legacy URL aliases pointing at `personal`/`rubber` for old links.

## Key Suppliers (Partners section)
- BASF Germany 🇩🇪 — Sodium Metabisulfite, Sodium Sulphite, Vitamin E Acetate
- BASF China 🇨🇳 — Formic Acid
- Vance Group 🇲🇾 — CAPB, Glycerine
- SK Pickglobal 🇰🇷 — Monopropylene Glycol
- LG Chem 🇰🇷 — Isopropyl Alcohol

Global supplier logos are local files in `Images/Partners/Global/`: `basf.png`, `vance-group.png`, `sk-pickglobal.png` (SK butterfly mark cropped from an SK telecom SVG — replace with an official SK Pickglobal logo if supplied), `lg-chem.svg`. Clearbit is no longer used (service shut down). LUXI Chemical has no logo yet.

## about.html
- Sections: hero, story, Vision & Mission (`#vm`), Products & Services, Why S.K. Chem, Sustainability (`#sustain`), suppliers, CTA, mini footer
- Products & Services (redesign, Oct 2026): `.pc-grid` of 5 `.pc` industry cards in the same style as the homepage industry cards (photo + badge, title, 2-line summary, 3-service check list, "Key materials" box, Explore footer) + a dark `.pc-cta` "Need a specific material?" card. 3 cols → 2 (≤900px); on mobile (≤600px) it becomes a horizontal swipe row (`#pcGrid`, scroll-snap, cards 84% wide so the next one peeks) with progress dots `#pcDots`
- Sustainability (`#sustain`) contrast refresh (Oct 2026): background photo blurred + deep green overlay, frosted dark cards (`.spt`) with 80% white text and circled icons, heading balanced (no `<br>`)
- Suppliers (Oct 2026): `#spGrid` of 5 `.sp` cards, real logos from `Images/Partners/Global/` (one BASF card for 🇩🇪 Germany + 🇨🇳 China), country chips, product list. 5 in a row → 3+2 centred (≤1100px) → swipe row with dots `#spDots` (≤600px). LUXI Chemical shown with a text wordmark (no logo yet), country China and products "Chemical raw materials" — confirm with client
- Why S.K. Chem: 6 white `.why-card`s, 3 cols → 2 (≤900px) → 1 (≤600px)
- Whole about.html now has the modern look ("ABOUT: MODERN REFRESH" CSS block): Inter body, dark #0E1712 hero / Vision & Mission / CTA with green glow, pill buttons, rounded story image (still DM Sans, uppercase buttons, old gradients)

## industry.html Structure
- Single file serves all 5 industries via URL param `?ind=rubber`
- JS data object `IND` contains all industry content
- Each `chems` entry uses: `service`, `serviceEm`, `chemical`, `img`, optional `imgs` (array → prev/next + dots slider), `desc`, `outcomes`, `specs`, `supplier`, `flag`
- Template renders: `✦ ${c.chemical}` as badge → `${c.serviceEm}` as headline
- `specs` are rendered as chips under the outcome tags (`.chem-specs`). Client-confirmed figures (Oct 2026):
  - Sodium Metabisulfite Food Grade (E223): purity >99%, SO₂ 66.5% (food page, updated Oct 2026)
  - Sodium Metabisulfite Non-Food Grade: purity >99%, SO₂ 67% (rubber crepe + textile rows)
  - Sodium Sulfite Non-Food Grade: purity ≥97.5%
  - Formic Acid: 85%, Technical Grade
  - Vitamin E Acetate: purity 98%
  - CDE: purity 85–90%
  - EDTA: powder only, 25 kg bags
  - MPG (Monopropylene Glycol): purity 99.9% (food + pharma rows)
  - Glycerine USP (pharma Solid Dosage row): purity 99.7%
  - IPA (Isopropyl Alcohol): purity 99.9% (personal care hand sanitiser + pharma GMP rows)
  - Spelling: always "Sulfite", not "Sulphite"
- Motion graphics: orbFloat, shimLine, spinSlow, fadeUp keyframe animations
- Scroll-triggered reveals via IntersectionObserver

## Gallery Section
- Heading "Our Warehouse & Operations" (eyebrow "Gallery"). Community photos moved to the CSR section (client request, Oct 2026): **no All or Community tabs**
- Filters: Warehouse (default, `applyGalFilter('warehouse')`), Products, Operations. Tab buttons (`.gal-filter`) sit on the right of the heading row (desktop); on mobile the `#gal-select` dropdown under the heading is used instead. A tab with no photos shows the `#gal-empty` "Photos coming soon" box. Add photos with `data-cat="products"`/`"operations"`
- Warehouse: 6 photos in `Images/Gallery/Warehouse/`, 4-col bento: row 1 `bi-r3` = drums-1 · exterior (wide, object-position center 60%) · drums-2; row 2 `bi-r5` = racking-aisle · carboys (wide) · steel-drums (brightened)
- Lightbox (`olb`) cycles through the visible items of the group the clicked item belongs to (`#bento-grid` or `#csrStrip`)

## Social Responsibility (CSR) Section
- Card: text left, single static square photo right (`Images/Gallery/3.jpeg`, object-position center 62%). The 5s crossfade was removed (client request, Oct 2026). Square on all screen sizes
- Below the card: "Community moments" horizontal strip (`#csrStrip`, `.csr-shot`, 3:4 tiles, scroll-snap, ← → buttons `#csrPrev/#csrNext`), each opens the lightbox. Shows all 12 unique photos from `Images/Gallery/Charity/`: trays 1,3,4,7 · rollers 5,6,8,9 · goods distribution 10,12,13,14 (charity-2 and charity-11 are duplicates of 1 and 10, left out)
- `Images/Gallery/1.jpeg … 6.jpeg` are copies of charity photos and are no longer used on the page

## Intro Splash (index.html)
- `#intro` overlay: logo fades in, holds, zooms ×7 while the white overlay fades (~2.4s, pure CSS keyframes `introLogo` / `introOut`)
- Plays once per browser session (`sessionStorage` key `skIntro`); a timeout removes it at 2.6s as a safety net
- Hidden for `prefers-reduced-motion: reduce`
- Skipped when the page is inside an iframe (`window.self!==window.top`): in VS Code Live Preview / Mobile Preview the splash got stuck and covered the page with white

## Enquiry Form (index.html #contact)
- Required (client, Oct 2026): Name, Email, Mobile / WhatsApp (red `*`, inline `.ferr` messages, `.bad` red outline). Company, Industry, Requirements are optional
- Validation (`chk(id)`, runs on blur and on Send): email via `emailOk()` (proper local@domain.tld, no double dots, TLD ≥2 letters); mobile via `telInfo()` against the `CC` table (country → [dial code, min len, max len, first-digit pattern, name]) — strips trunk 0, accepts +code typed in the box, rejects a +code that doesn't match the chosen country
- Country code picker `#fcc` (45 countries, default 🇱🇰 +94) sits inside the mobile field (`.ftel`); the visible `#fcc-lbl` shows flag + code, the real `<select>` is transparent on top. Typing/pasting `+44…` auto-selects the matching country. `telInfo().e164` gives the full number (e.g. +94771234567) for when a form backend is connected
- ⚠️ `sf()` only shows the thank-you message; the enquiry is NOT sent anywhere yet (no backend / form service connected)

## Company Facts (keep consistent site-wide)
- Founded 2017. Use "since 2017" in text; the homepage "Years of Trust" stat is computed live (`data-since="2017"` → current year − 2017, shown as e.g. 9+). Never hard-code "10+ years" / "over a decade"
- 5 industries (Rubber & Latex, Home & Personal Care, Food & Beverage, Pharmaceutical, Textile Washing & Treatment)
- Suppliers: BASF (Germany, China), Vance Group (Malaysia), SK Pickglobal (Korea), LG Chem (Korea), LUXI (China, details/logo to confirm)

## SEO & Sharing (Oct 2026)
- index.html has LocalBusiness JSON-LD (address, both phones, email) before `</head>`. industry.html sets its canonical + og:url to `industry.html?ind=<key>` in JS (aliases home/estate map to personal/rubber)
- Every page has description, canonical, Open Graph + Twitter tags pointing at `Images/All/og-share.jpg` (1200×630 share card: logo, tagline, industries). industry.html also updates its meta description from `d.tagline` per industry
- `robots.txt` and `sitemap.xml` (home, about, 5 industry URLs) use `https://skchemsolutions.lk/` (switched from GitHub Pages, Oct 2026; site hosted on cPanel, account skchemlk)

## WhatsApp Button (Oct 2026)
- Floating green button bottom-right on all pages (`.wa-fab`). Home + about: click opens a small chooser (Rubber & Textile → 94777598284, Other industries → 94777414367). industry.html: goes straight to the industry's number with a prefilled message naming the industry

## Footer (unified, Oct 2026)
- Same `<footer class="site-ft">` on all 3 pages: SK mark logo + name (links home), tagline, Company / Industries / Contact columns (both phone lines labelled), © year, 3 pills. Styles in the "FOOTER (unified…)" CSS block at the end of each page's `<style>`; keep the three copies in sync. Links on about/industry use `index.html#…`

## Footer year
- Copyright year is `<span class="cy">` filled with the current year by a one-line script before `</body>` on all 3 pages

## Phone Lines (client, Oct 2026)
- +94 777 598 284: Rubber & Latex, Textile Washing
- +94 777 414 367: all other industries (Personal Care, Food & Beverage, Pharmaceutical)
- Homepage contact block: one light mint card per phone line (`.ci-line`): icon + industries in bold dark green with green dots (`.ci-line-inds`), then the number (tap to call) and a small outline WhatsApp button (a dark green version was "too much") (client wants people to find their industry first, Oct 2026); footer labels (`.ft-tel-l`) are bold light green on all 3 pages.
- Homepage contact block and footer label each number; industry pages reach the right number through the WhatsApp button (the CTA call button was removed, client request)

## Navigation
- **Header is identical on all 3 pages (Oct 2026):** `#nav` crisp white (97% opacity, fine bottom line, shadow when scrolled), logo 50px (42px ≤960px). Desktop: Home · About Us · Industries — logo — Partners · Gallery · Contact Us (`.n-cta` pill). Current page link gets `class="active"` (green + underline): About Us on about.html, Industries on industry.html. Mobile (≤960px) hamburger menu `#mob`: Home, About Us, Industries, Partners, Gallery, Social Responsibility, Contact Us →. Styles live in the "HEADER (unified…)" CSS block at the end of each page's `<style>`; keep the three copies in sync
- Logo click → `index.html` (from industry.html) or `#hero` (from homepage)
- Industry cards on homepage → `industry.html?ind={key}`
- Nav links on industry.html prefix with `index.html#`

## Git
- No `gh` CLI installed — use plain `git` commands
- Remote: `origin` → `https://github.com/rishluck/sk-chem-solutions.git`
- Commit and push after every significant change

## Security (Oct 2026)
- The Content-Security-Policy is sent only by `.htaccess` on the live cPanel site (the page-level meta CSP was removed Oct 2026 while debugging a blank VS Code Live Preview). Pages keep a referrer policy meta. No anti-framing script. **If you add any new external service (form backend, analytics, maps, CDN), add its domain to the CSP in `.htaccess` or it will be blocked**
- External `target="_blank"` links use `rel="noopener noreferrer"`
- industry.html looks up `?ind=` with `hasOwnProperty` so unknown keys fall back to rubber
- GitHub Pages can't send custom HTTP headers; for full header-level security (HSTS, X-Frame-Options) put the site behind Cloudflare when moving to the custom domain
- `.htaccess` (for cPanel / Apache hosting, ignored by GitHub Pages): forces HTTPS, blocks folder listing and private files (.md, .zip, .pdf, CLAUDE.md, Document/), sends real security headers (CSP, nosniff, HSTS, Referrer, Permissions), caching + gzip. Upload only the referenced files (the 3 pages, robots, sitemap, .htaccess and the images the pages use), not the whole folder
