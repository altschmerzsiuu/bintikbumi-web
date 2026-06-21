# BINTIKBUMI — Master Scaffold Prompt
# Use with: Claude Code, Cursor, or any AI coding assistant
# Stack: Vite + React + TypeScript + Tailwind CSS
# Reference site: robries.com
# ============================================================

You are building **BintikBumi** — a premium sustainable craft brand website
from Indonesia. The site transforms ulin wood waste into high-value design
products. Bilingual EN/ID, visually bold, editorial, and premium-earthy.

---

## STACK & SETUP

```bash
npm create vite@latest bintikbumi-web -- --template react-ts
cd bintikbumi-web
npm install react-router-dom @supabase/supabase-js lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## BRAND IDENTITY

### Colors
- Primary Dark:    #142133  (BB Navy — main brand color)
- Accent Orange:   #E05C3A  (BB Orange — CTA, highlights)
- Cream BG:        #EDE8E1  (Warm Cream — main background)
- Light Cream:     #F7F4F0  (Off White — section alternates)
- Pure White:      #FFFFFF
- Dark Text:       #1A1A1A
- Muted Text:      rgba(26,26,26,0.55)
- Border:          rgba(26,26,26,0.08)

### Typography
- Display font: **Lucidity Condensed** → fallback: 'Anton', sans-serif (Google Fonts)
  (Note: Lucidity Condensed is not on Google Fonts — use Anton as closest web-safe alternative,
   or self-host if Ismadianty provides the font file)
- Secondary display: **Etna Sans Serif** → fallback: 'Barlow Condensed', sans-serif
- Body font: **Raleway** (Google Fonts)

```css
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@400;500;600;700&family=Raleway:wght@300;400;500;600&display=swap');
```

### Brand Voice
- Taglines: "Creative Craft from Waste" / "Where Waste Meets Design" / "From Waste to Worth"
- Tone: premium, artisanal, eco-conscious, confident, modern
- NOT hippie/rustic — think premium sustainable design brand

---

## SITE STRUCTURE (Multi-page)

```
/              → Home
/products/     → Products (material showcase + finished goods)
/services/     → Services (custom order, wholesale, design collab)
/impact/       → Sustainability & Impact
/gallery/      → Gallery / Case Studies (applied products)
/contact/      → Contact (Supabase form)
```

---

## FOLDER STRUCTURE

```
src/
├── assets/
│   ├── products/          # Product photos (placeholder)
│   ├── process/           # Process step photos (placeholder)
│   ├── gallery/           # Applied product photos (placeholder)
│   └── bb-logo.svg        # BintikBumi logo
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Transparent → dark on scroll
│   │   └── Footer.tsx     # Dark navy footer
│   └── ui/
│       ├── RevealWrapper.tsx
│       └── ScrollToTop.tsx
├── pages/
│   ├── home/HomePage.tsx
│   ├── products/ProductsPage.tsx
│   ├── services/ServicesPage.tsx
│   ├── impact/ImpactPage.tsx
│   ├── gallery/GalleryPage.tsx
│   └── contact/ContactPage.tsx
├── hooks/index.ts
├── lib/supabase.ts
├── types/index.ts
├── data/content.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## NAVBAR SPEC

```
[BB LOGO / BINTIKBUMI]    [Products | Services | Impact | Gallery | Contact]    [🌐 EN]
```

- Transparent over hero, transitions to dark (#142133) on scroll
- Logo: text "BINTIKBUMI" in Lucidity Condensed / Anton, or SVG logo
- Nav links: simple text with animated underline on hover (like Robries)
- Language toggle: globe icon + EN/ID pill
- Mobile: hamburger menu
- No CTA button in nav — Contact is a nav item

---

## HOME PAGE SECTIONS

### 1. Hero (full viewport, full-bleed photo)
- Background: full-bleed placeholder image (dark overlay)
- Centered or left-aligned text
- Eyebrow: "BintikBumi — Creative Craft from Waste"
- Headline: "WHERE WASTE\nMEETS DESIGN." (huge, bold, uppercase — Lucidity/Anton)
- Subtext: brand intro paragraph
- CTA: "Explore Products" → /products/
- Secondary: "Our Story" → /impact/

### 2. Brand Intro / Advantages (cream background)
- Left: big bold paragraph explaining what BintikBumi is
- Right: 6 feature chips (like Robries):
  1. Eco-Friendly Material
  2. Handcrafted Quality
  3. Unique "Bintik" Texture
  4. Weather Resistant
  5. Premium Finish
  6. Custom Order Available

### 3. Trusted By / Partners
- Section label: "TRUSTED BY"
- Partner logos/names: DeKayu Indonesia, Bumectra Project
- "+ More partnerships coming"

### 4. How It's Applied (dark navy, carousel/grid)
- Section: "BAGAIMANA BINTIKBUMI DITERAPKAN" / "HOW BINTIKBUMI IS APPLIED"
- Grid of 6 application cards (like Robries carousel):
  1. INTERIOR WALL PANEL — Elegant for indoor spaces
  2. TABLE SURFACE — Functional and stylish
  3. COUNTER PANEL — Modern and durable
  4. FURNITURE ACCENT — Premium finishing touch
  5. FLOORING TILE — Easy to install
  6. OUTDOOR SURFACE — Strong and eco-friendly
- Each card: placeholder photo + uppercase title + subtitle

### 5. Our Process (cream, full-width)
- Section: "FROM WASTE TO WORTH" / "DARI LIMBAH MENJADI KARYA"
- 3 steps (like Robries):
  1. "KAMI KUMPULKAN LIMBAH KAYU ULIN" / "WE COLLECT ULIN WOOD WASTE"
  2. "KAMI OLAH MENJADI MATERIAL BINTIK" / "WE CRAFT THE BINTIK MATERIAL"
  3. "KAMI PRODUKSI DESAIN BERNILAI TINGGI" / "WE CREATE HIGH-VALUE DESIGN"
- Each step: full-bleed photo (placeholder) + step number + title

### 6. Impact Numbers (dark navy)
- Big bold impact stats (placeholder numbers, update later):
  - "XX+ KG" — Limbah kayu ulin diolah / Ulin wood waste processed
  - "XX+" — Produk desain dibuat / Design products crafted
  - "XX+" — Klien & mitra / Clients & partners
- Tagline below: "Setiap produk membawa cerita dari limbah menjadi karya"

### 7. CTA Full Viewport (full-bleed photo, dark overlay)
- Same Halter/Bumectra style — min-height: 100vh
- Headline: "MARI BANGUN MASA DEPAN\nBERKELANJUTAN BERSAMA"
- CTA button → /contact/

### 8. Footer (dark navy #142133)
- Left: BB Logo + tagline + "Part of @bumectraproject"
- Center: Eksplor links (Products, Impact, Services, Gallery)
- Right: Perusahaan (Partnership, Contact)
- Bottom: Address + email + socials + copyright
- Address: (placeholder — Ismadianty to fill)

---

## PRODUCTS PAGE

### Hero
- Dark navy hero with headline: "OUR MATERIALS & PRODUCTS"
- Subtext: material overview

### Material Showcase (featured section)
- Full-bleed material close-up photo
- Left panel: material specs
  - Material: Ulin Wood Waste + White Cement
  - Signature texture: "Bintik" pattern
  - Finish: Natural / Polished / Custom
  - Available: Panel, Tile, Block, Custom shapes

### Product Grid
- Filter tabs: All | Panels | Tiles | Furniture | Custom
- Grid of product cards (placeholder photos):
  Each card: photo + product name + short desc + "Inquire" button

---

## SERVICES PAGE

### Hero
- Cream background, big headline: "WHAT WE OFFER"

### 3 Service Cards
1. **Custom Order** — Bespoke pieces designed to your specs
2. **Wholesale / B2B** — Large volume material supply for contractors & developers
3. **Design Collaboration** — Work with our team to create something new

### Process CTA
- "Tertarik? Hubungi kami" → /contact/

---

## IMPACT PAGE (Sustainability)

### Hero
- Full-bleed forest/nature photo
- Headline: "DARI LIMBAH\nMENJADI KARYA"

### Story Section
- The full BintikBumi sustainability story
- Why ulin wood? Why white cement? What problem are we solving?

### Impact Numbers (big, bold)
- Same as home but more detailed

### SDGs alignment
- Which UN SDGs BintikBumi contributes to
- (12 - Responsible Consumption, 13 - Climate Action, 15 - Life on Land)

### Timeline / Journey
- BintikBumi founding story
- MOU with DeKayu Indonesia
- Future plans

---

## GALLERY PAGE (Case Studies)

### Hero
- "OUR WORK IN THE WORLD"

### Filter tabs
- All | Interior | Furniture | Commercial | Outdoor

### Masonry/Grid gallery
- Placeholder photo cards
- Each: photo + project name + category tag + location

---

## CONTACT PAGE

### Hero (dark navy, centered)
- "LET'S CREATE\nSOMETHING\nTOGETHER."

### Two column layout (same pattern as Bumectra contact)
- Left: Inquiry Form (Supabase)
- Right: Info card + FAQ

### Form fields
See PROMPT_06_CONTACT.md for full spec

---

## LANGUAGE SYSTEM

Same pattern as Bumectra:
```tsx
const { lang, t } = useLanguage();
<h1>{t('English text', 'Teks Indonesia')}</h1>
```

---

## DESIGN RULES

1. **Typography** — Headlines ALWAYS uppercase, Anton/Lucidity Condensed, very large
2. **Robries-inspired layout** — Bold section labels, lots of whitespace, photo-heavy
3. **Color rhythm** — Alternate: Cream → Dark Navy → Cream → Dark Navy
4. **No rounded corners on hero photos** — full bleed, edge to edge
5. **Process photos** — full width, 100vw, no padding
6. **Impact numbers** — huge font, white on navy, centered
7. **Navbar** — fully transparent on hero, dark navy on scroll
8. **CTA section** — always 100vh min-height, full bleed photo

---

## BUILD ORDER

1. src/index.css (design system)
2. src/data/content.ts (all copy)
3. src/types/index.ts
4. src/lib/supabase.ts
5. src/hooks/index.ts
6. src/App.tsx
7. Navbar + Footer
8. HomePage
9. ProductsPage
10. ServicesPage
11. ImpactPage
12. GalleryPage
13. ContactPage
14. Run supabase/schema.sql
