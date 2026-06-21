# BB PROMPT 01 — Navbar & Footer
# Files: src/components/layout/Navbar.tsx + Footer.tsx + ScrollToTop.tsx
# ============================================================
# Design system: BB_index.css
# Content: BB_content.ts (BB_CONFIG)
# Language: useLanguage from App.tsx (same pattern as Bumectra)
# ============================================================

## NAVBAR

### Visual spec
```
[BINTIKBUMI logo]     [Products | Services | Impact | Gallery | Contact]     [🌐 EN]
```

### Behavior
- `position: fixed`, z-index 100, height 64px
- **Transparent** by default (hero photo shows through)
- On scroll > 30px → background: #142133 (BB Navy)
- Use `useScrolled(30)` hook from hooks/index.ts

### Logo
```tsx
<NavLink to="/" className="navbar-logo">
  BINTIKBUMI
</NavLink>
```
CSS class: `navbar-logo` (Anton font, uppercase, white)
Optional: replace with SVG logo if Ismadianty provides one

### Nav links (Robries style — underline animation)
```tsx
const NAV_ITEMS = [
  { labelEN: 'Products',   labelID: 'Produk',        path: '/products'  },
  { labelEN: 'Services',   labelID: 'Layanan',        path: '/services'  },
  { labelEN: 'Impact',     labelID: 'Dampak',         path: '/impact'    },
  { labelEN: 'Gallery',    labelID: 'Galeri',         path: '/gallery'   },
  { labelEN: 'Contact',    labelID: 'Kontak',         path: '/contact'   },
];
```
CSS class: `navbar-link` + `active` — underline animation defined in index.css

### Language toggle (right side)
```tsx
const { lang, setLang } = useLanguage();
// Globe icon + "EN" / "ID"
// CSS class: lang-toggle
```

### Mobile hamburger
- Below 1024px: hide nav links, show hamburger
- Slide-down menu with all links + lang toggle
- Background: #142133 when open

---

## FOOTER

### Visual spec
Dark navy (#142133), 3 columns + bottom bar

### Layout
```
[Logo + tagline + Part of Bumectra]    [EKSPLOR links]    [PERUSAHAAN links]
─────────────────────────────────────────────────────────────────────────────
[Address + email]                                          [© + socials]
```

### Column 1 — Brand
```tsx
// Logo text
<div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'white', letterSpacing: '0.04em', marginBottom: '8px' }}>
  BINTIKBUMI
</div>
// Tagline
<p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, maxWidth: '200px', marginBottom: '12px' }}>
  {t('Creative Craft from Waste.', 'Kerajinan Kreatif dari Limbah.')}
</p>
// Part of Bumectra
<a href={BB_CONFIG.bumectraURL} target="_blank" rel="noopener noreferrer"
   style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '5px' }}>
  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FF6B00', display: 'inline-block' }} />
  {t('Part of Bumectra Project', 'Bagian dari Bumectra Project')}
</a>
```

### Column 2 — EKSPLOR
```
Products / Produk
Impact / Dampak
Services / Layanan
Gallery / Galeri
```

### Column 3 — PERUSAHAAN
```
Partnership / Kemitraan
Contact / Kontak
Instagram → BB_CONFIG.instagram
```

### Bottom bar
```tsx
<div style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  {/* Address */}
  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>
    <div>{BB_CONFIG.location}</div>
    <div>{BB_CONFIG.email}</div>
  </div>
  {/* Copyright */}
  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
    © {new Date().getFullYear()} BintikBumi by {BB_CONFIG.founder}
  </div>
</div>
```

---

## SCROLLTOTOP

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
```
