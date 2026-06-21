# BB PROMPT 03 — Products Page
# File: src/pages/products/ProductsPage.tsx
# ============================================================

## PAGE STRUCTURE
1. Hero (dark navy)
2. Material Showcase (full-bleed featured)
3. Product Grid with filter tabs
4. CTA strip → /contact

---

## SECTION 1 — HERO

```tsx
<section style={{
  background: 'var(--bb-navy)',
  padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(3rem, 5vw, 5rem)',
  paddingTop: 'calc(64px + clamp(3rem, 5vw, 5rem))',
}}>
  <div className="container">
    <RevealWrapper>
      <span className="section-label section-label-light">
        {t('Our Materials & Products', 'Material & Produk Kami')}
      </span>
      <h1 className="text-display-xl" style={{ color: 'white', maxWidth: '600px', marginBottom: '16px' }}>
        {t('BUILT FROM\nWASTE.\nMEANT TO LAST.', 'DIBANGUN DARI\nLIMBAH.\nDIBUAT UNTUK BERTAHAN.')}
      </h1>
      <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '420px' }}>
        {t(
          'Every BintikBumi product starts as discarded ulin wood. We give it new purpose, new form, and new value.',
          'Setiap produk BintikBumi dimulai sebagai kayu ulin yang dibuang. Kami memberikannya tujuan baru, bentuk baru, dan nilai baru.'
        )}
      </p>
    </RevealWrapper>
  </div>
</section>
```

---

## SECTION 2 — MATERIAL SHOWCASE (featured)

```tsx
<section style={{ background: 'var(--bb-cream)', padding: 'var(--space-2xl) 0' }}>
  <div className="container">
    <RevealWrapper>
      <span className="section-label">{t('The Material', 'Material')}</span>
      <h2 className="text-display-lg" style={{ color: 'var(--bb-navy)', marginBottom: '32px' }}>
        {t('THE BINTIK MATERIAL.', 'MATERIAL BINTIK.')}
      </h2>
    </RevealWrapper>

    {/* Full-bleed material photo */}
    <RevealWrapper>
      <div style={{
        width: '100%', aspectRatio: '16/7',
        background: 'var(--bb-navy-soft)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '32px', position: 'relative', overflow: 'hidden'
        // Replace: backgroundImage: 'url(/assets/material-closeup.jpg)', backgroundSize: 'cover'
      }}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Material close-up photo
        </span>
      </div>
    </RevealWrapper>

    {/* Material specs grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderTop: '0.5px solid var(--border-light)' }}>
      {[
        { labelEN: 'Primary Material',  labelID: 'Material Utama',  valueEN: 'Ulin Wood Waste',      valueID: 'Limbah Kayu Ulin'       },
        { labelEN: 'Binder',            labelID: 'Pengikat',         valueEN: 'White Cement',         valueID: 'Semen Putih'            },
        { labelEN: 'Signature Texture', labelID: 'Tekstur Khas',    valueEN: '"Bintik" Pattern',     valueID: 'Pola "Bintik"'          },
        { labelEN: 'Available Finish',  labelID: 'Finishing',        valueEN: 'Natural / Polished',   valueID: 'Natural / Polished'     },
      ].map((spec, i) => (
        <div key={i} style={{
          padding: '20px',
          borderRight: i < 3 ? '0.5px solid var(--border-light)' : 'none',
          borderBottom: '0.5px solid var(--border-light)'
        }}>
          <div style={{ fontSize: '10px', color: 'rgba(26,26,26,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, fontFamily: 'var(--font-secondary)', marginBottom: '6px' }}>
            {t(spec.labelEN, spec.labelID)}
          </div>
          <div style={{ fontFamily: 'var(--font-secondary)', fontSize: '14px', fontWeight: 700, color: 'var(--bb-navy)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {t(spec.valueEN, spec.valueID)}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## SECTION 3 — PRODUCT GRID

Import `BB_PRODUCTS`, `BB_PRODUCT_CATEGORIES` from content.ts

```tsx
// State
const [activeCategory, setActiveCategory] = useState('All');
const filtered = activeCategory === 'All'
  ? BB_PRODUCTS
  : BB_PRODUCTS.filter(p => p.category === activeCategory);

<section style={{ background: 'var(--bb-cream-light)', padding: 'var(--space-xl) 0' }}>
  <div className="container">
    <RevealWrapper>
      <span className="section-label">{t('Products', 'Produk')}</span>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
        <h2 className="text-display-md" style={{ color: 'var(--bb-navy)' }}>
          {t('ALL PRODUCTS', 'SEMUA PRODUK')}
        </h2>
        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {BB_PRODUCT_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '11px', fontWeight: 700,
                padding: '5px 14px',
                textTransform: 'uppercase', letterSpacing: '0.06em',
                border: '0.5px solid',
                cursor: 'pointer', transition: 'all 200ms',
                borderColor: activeCategory === cat ? 'var(--bb-navy)' : 'var(--border-light)',
                background: activeCategory === cat ? 'var(--bb-navy)' : 'transparent',
                color: activeCategory === cat ? 'white' : 'rgba(26,26,26,0.5)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </RevealWrapper>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      {filtered.map((product, i) => (
        <RevealWrapper key={product.id} delay={i % 3}>
          <div style={{ background: 'white', border: '0.5px solid var(--border-light)', cursor: 'pointer', transition: 'all 200ms' }}
               onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--bb-orange)'}
               onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-light)'}>
            {/* Product photo */}
            <div style={{
              width: '100%', aspectRatio: '4/3',
              background: 'var(--bb-navy-soft)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.15)' }}>Photo</span>
            </div>
            {/* Info */}
            <div style={{ padding: '16px 18px' }}>
              <div style={{ fontSize: '10px', color: 'var(--bb-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '5px', fontFamily: 'var(--font-secondary)' }}>
                {product.category}
              </div>
              <h3 style={{ fontFamily: 'var(--font-secondary)', fontSize: '14px', fontWeight: 700, color: 'var(--bb-navy)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                {t(product.nameEN, product.nameID)}
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: '12px' }}>
                {t(product.descEN, product.descID)}
              </p>
              <NavLink to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                fontSize: '11px', fontWeight: 700, color: 'var(--bb-orange)',
                fontFamily: 'var(--font-secondary)', textTransform: 'uppercase',
                letterSpacing: '0.06em', textDecoration: 'none'
              }}>
                {t('Inquire', 'Tanya')} →
              </NavLink>
            </div>
          </div>
        </RevealWrapper>
      ))}
    </div>
  </div>
</section>
```

---

## SECTION 4 — BOTTOM CTA STRIP

```tsx
<section style={{ background: 'var(--bb-navy)', padding: 'var(--space-xl) 0' }}>
  <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
    <div>
      <h2 className="text-display-md" style={{ color: 'white', marginBottom: '6px' }}>
        {t("CAN'T FIND WHAT YOU NEED?", 'TIDAK MENEMUKAN YANG KAMU CARI?')}
      </h2>
      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
        {t('We do custom orders. Tell us what you have in mind.', 'Kami menerima pesanan custom. Ceritakan apa yang kamu pikirkan.')}
      </p>
    </div>
    <NavLink to="/contact" className="btn btn-primary">
      {t('Request Custom Order', 'Pesan Custom')}
    </NavLink>
  </div>
</section>
```

---

## IMPORTS

```tsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../App';
import RevealWrapper from '../../components/ui/RevealWrapper';
import { BB_PRODUCTS, BB_PRODUCT_CATEGORIES } from '../../data/content';
```


# ============================================================
# BB PROMPT 04 — Services Page
# File: src/pages/services/ServicesPage.tsx
# ============================================================

## PAGE STRUCTURE
1. Hero (cream background)
2. 3 Service cards (full detail)
3. Process CTA

---

## SECTION 1 — HERO (cream)

```tsx
<section style={{
  background: 'var(--bb-cream)',
  padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(3rem, 5vw, 5rem)',
  paddingTop: 'calc(64px + clamp(3rem, 5vw, 5rem))',
  borderBottom: '0.5px solid var(--border-light)'
}}>
  <div className="container">
    <RevealWrapper>
      <span className="section-label">{t('What We Offer', 'Apa yang Kami Tawarkan')}</span>
      <h1 className="text-display-xl" style={{ color: 'var(--bb-navy)', maxWidth: '560px', marginBottom: '16px' }}>
        {t('OUR\nSERVICES.', 'LAYANAN\nKAMI.')}
      </h1>
      <p className="text-body-lg" style={{ color: 'var(--text-dim)', maxWidth: '440px' }}>
        {t(
          'From single custom pieces to large-scale supply — we work with individuals, designers, and businesses.',
          'Dari satu potongan custom hingga pasokan skala besar — kami bekerja dengan individu, desainer, dan bisnis.'
        )}
      </p>
    </RevealWrapper>
  </div>
</section>
```

---

## SECTION 2 — SERVICE CARDS

Import `BB_SERVICES` from content.ts

Each service gets its OWN full-width section with alternating cream/white background.

```tsx
{BB_SERVICES.map((service, i) => (
  <section key={service.id} style={{
    background: i % 2 === 0 ? 'var(--bb-cream-light)' : 'white',
    padding: 'var(--space-2xl) 0',
    borderBottom: '0.5px solid var(--border-light)'
  }}>
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        // Flip order on alternating rows
        direction: i % 2 === 1 ? 'rtl' : 'ltr'
      }}>

        {/* Photo */}
        <RevealWrapper>
          <div style={{
            width: '100%', aspectRatio: '4/3',
            background: 'var(--bb-navy-soft)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            direction: 'ltr'
          }}>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Service photo — {service.id}
            </span>
          </div>
        </RevealWrapper>

        {/* Content */}
        <RevealWrapper delay={1} style={{ direction: 'ltr' }}>
          <span className="section-label">{`0${i + 1}`}</span>
          <h2 className="text-display-lg" style={{ color: 'var(--bb-navy)', marginBottom: '16px' }}>
            {t(service.titleEN, service.titleID).toUpperCase()}
          </h2>
          <p className="text-body-lg" style={{ color: 'var(--text-dim)', marginBottom: '24px' }}>
            {t(service.descEN, service.descID)}
          </p>
          <NavLink to="/contact" className="btn btn-primary">
            {t(service.ctaEN, service.ctaID)}
          </NavLink>
        </RevealWrapper>

      </div>
    </div>
  </section>
))}
```

---

## SECTION 3 — BOTTOM CTA

```tsx
<section style={{ background: 'var(--bb-navy)', padding: 'var(--space-xl) 0', textAlign: 'center' }}>
  <div className="container-narrow">
    <RevealWrapper>
      <h2 className="text-display-md" style={{ color: 'white', marginBottom: '10px' }}>
        {t('READY TO START?', 'SIAP UNTUK MULAI?')}
      </h2>
      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '24px' }}>
        {t(
          "Tell us about your project and we'll get back to you within 24 hours.",
          'Ceritakan tentang proyekmu dan kami akan menghubungimu dalam 24 jam.'
        )}
      </p>
      <NavLink to="/contact" className="btn btn-halter">
        {t('Get in Touch', 'Hubungi Kami')}
        <div className="btn-arrow">→</div>
      </NavLink>
    </RevealWrapper>
  </div>
</section>
```

---

## IMPORTS

```tsx
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../App';
import RevealWrapper from '../../components/ui/RevealWrapper';
import { BB_SERVICES } from '../../data/content';
```


# ============================================================
# BB PROMPT 05 — Impact + Gallery Pages (combined)
# Files:
#   src/pages/impact/ImpactPage.tsx
#   src/pages/gallery/GalleryPage.tsx
# ============================================================

## IMPACT PAGE STRUCTURE
1. Hero (full viewport, nature/forest photo)
2. Story Section (2-col)
3. Impact Numbers (big, bold)
4. SDGs alignment (optional, cream)
5. Journey timeline
6. CTA full viewport

---

### IMPACT — SECTION 1: HERO

```tsx
<section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
  <div style={{
    position: 'absolute', inset: 0,
    background: '#0D1825',
    // Replace: backgroundImage: 'url(/assets/impact-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'
  }}>
    <div style={{
      position: 'absolute', inset: '20px',
      border: '1px dashed rgba(255,255,255,0.06)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.1)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Forest / nature photo placeholder
      </span>
    </div>
  </div>
  <div style={{ position: 'absolute', inset: 0, background: 'rgba(14,26,37,0.55)' }} />
  <div className="container" style={{ position: 'relative', zIndex: 5, paddingTop: '64px' }}>
    <RevealWrapper>
      <span className="section-label section-label-light">{t('Sustainability & Impact', 'Keberlanjutan & Dampak')}</span>
      <h1 className="text-display-hero" style={{ color: 'white', maxWidth: '700px' }}>
        {t(<>FROM<br />WASTE<br />TO WORTH.</>, <>DARI<br />LIMBAH<br />MENJADI KARYA.</>)}
      </h1>
    </RevealWrapper>
  </div>
</section>
```

---

### IMPACT — SECTION 2: STORY (2-col)

```tsx
<section style={{ background: 'var(--bb-cream)', padding: 'var(--space-2xl) 0' }}>
  <div className="container">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
      <RevealWrapper>
        <span className="section-label">{t('The Problem We Solve', 'Masalah yang Kami Selesaikan')}</span>
        <h2 className="text-display-lg" style={{ color: 'var(--bb-navy)', marginBottom: '20px' }}>
          {t('ULIN WOOD\nWASTE IS\nEVERYWHERE.', 'LIMBAH KAYU ULIN\nADA DI\nMANA-MANA.')}
        </h2>
        <p className="text-body-lg" style={{ color: 'var(--text-dim)', marginBottom: '16px' }}>
          {t(
            'Ulin (ironwood) is one of the strongest and most durable woods in Borneo. Yet thousands of kilograms of ulin shavings, offcuts, and scraps are discarded every year by local timber industries.',
            'Ulin (kayu besi) adalah salah satu kayu terkuat dan paling tahan lama di Kalimantan. Namun ribuan kilogram serutan, sisa potongan, dan scraps ulin dibuang setiap tahun oleh industri kayu lokal.'
          )}
        </p>
        <p className="text-body-md" style={{ color: 'var(--text-dim)' }}>
          {t(
            'BintikBumi was born to solve this — by turning waste into premium design material. Every panel, tile, and custom piece is a direct act of sustainability.',
            'BintikBumi lahir untuk menyelesaikan ini — dengan mengubah limbah menjadi material desain premium. Setiap panel, ubin, dan potongan custom adalah tindakan langsung keberlanjutan.'
          )}
        </p>
      </RevealWrapper>
      <RevealWrapper delay={1}>
        {/* Photo */}
        <div style={{ width: '100%', aspectRatio: '3/4', background: 'var(--bb-navy-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.15)' }}>Impact story photo</span>
        </div>
      </RevealWrapper>
    </div>
  </div>
</section>
```

---

### IMPACT — SECTION 3: NUMBERS

Same as Home impact numbers section — copy exactly.

---

### IMPACT — SECTION 4: TIMELINE (cream)

```tsx
<section style={{ background: 'var(--bb-cream)', padding: 'var(--space-2xl) 0' }}>
  <div className="container">
    <RevealWrapper>
      <span className="section-label">{t('Our Journey', 'Perjalanan Kami')}</span>
      <h2 className="text-display-lg" style={{ color: 'var(--bb-navy)', marginBottom: '40px' }}>
        {t('WHERE WE STARTED,\nWHERE WE\'RE GOING.', 'DARI MANA KAMI MULAI,\nKE MANA KAMI PERGI.')}
      </h2>
    </RevealWrapper>

    {[
      { date: '2025', titleEN: 'BintikBumi Founded', titleID: 'BintikBumi Didirikan', descEN: 'Ismadianty Alifa Aziz starts BintikBumi with a mission to transform ulin wood waste into premium design material.', descID: 'Ismadianty Alifa Aziz mendirikan BintikBumi dengan misi mengubah limbah kayu ulin menjadi material desain premium.', status: 'done' },
      { date: '2026', titleEN: 'MOU with DeKayu Indonesia', titleID: 'MOU dengan DeKayu Indonesia', descEN: 'BintikBumi signs an MOU with DeKayu Indonesia for premium ulin wood waste supply — a major step toward scale.', descID: 'BintikBumi menandatangani MOU dengan DeKayu Indonesia untuk pasokan limbah kayu ulin premium — langkah besar menuju skala produksi.', status: 'progress' },
      { date: '2026+', titleEN: 'Expansion into Furniture & Interior', titleID: 'Ekspansi ke Furnitur & Interior', descEN: 'Growing product lines into furniture, interior material, and design collaboration with Indonesian creatives.', descID: 'Memperluas lini produk ke furnitur, material interior, dan kolaborasi desain dengan kreatif Indonesia.', status: 'upcoming' },
    ].map((item, i) => (
      <RevealWrapper key={i}>
        <div style={{ display: 'flex', gap: '24px', paddingBottom: '28px', borderBottom: i < 2 ? '0.5px solid var(--border-light)' : 'none', marginBottom: i < 2 ? '28px' : 0 }}>
          <div style={{ flexShrink: 0, width: '80px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: item.status === 'done' ? 'var(--bb-orange)' : 'rgba(26,26,26,0.2)' }}>
              {item.date}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: 'var(--font-secondary)', fontSize: '15px', fontWeight: 700, color: 'var(--bb-navy)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
              {t(item.titleEN, item.titleID)}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 1.7 }}>
              {t(item.descEN, item.descID)}
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <span style={{
              fontSize: '10px', fontWeight: 700, padding: '4px 12px',
              background: item.status === 'done' ? 'rgba(224,92,58,0.1)' : item.status === 'progress' ? 'rgba(224,92,58,0.08)' : 'rgba(0,0,0,0.04)',
              color: item.status === 'done' ? 'var(--bb-orange)' : item.status === 'progress' ? 'var(--bb-orange)' : '#bbb',
              fontFamily: 'var(--font-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em'
            }}>
              {item.status === 'done' ? t('Done', 'Selesai') : item.status === 'progress' ? t('In Progress', 'Berjalan') : t('Upcoming', 'Segera')}
            </span>
          </div>
        </div>
      </RevealWrapper>
    ))}
  </div>
</section>
```

---

## GALLERY PAGE STRUCTURE
1. Hero (dark navy)
2. Filter tabs
3. Masonry/grid gallery
4. CTA strip

### GALLERY — SECTION 1: HERO

```tsx
<section style={{
  background: 'var(--bb-navy)',
  padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(3rem, 5vw, 5rem)',
  paddingTop: 'calc(64px + clamp(3rem, 5vw, 5rem))',
}}>
  <div className="container">
    <RevealWrapper>
      <span className="section-label section-label-light">{t('Gallery', 'Galeri')}</span>
      <h1 className="text-display-xl" style={{ color: 'white', maxWidth: '560px', marginBottom: '16px' }}>
        {t('OUR WORK\nIN THE WORLD.', 'KARYA KAMI\nDI DUNIA.')}
      </h1>
      <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '400px' }}>
        {t(
          'From cafés to homes — here is BintikBumi applied in real spaces.',
          'Dari kafe hingga rumah — inilah BintikBumi yang diterapkan di ruang nyata.'
        )}
      </p>
    </RevealWrapper>
  </div>
</section>
```

### GALLERY — SECTION 2: FILTER + GRID

Import `BB_GALLERY`, `BB_GALLERY_CATEGORIES` from content.ts

```tsx
const [activeFilter, setActiveFilter] = useState('All');
const filtered = activeFilter === 'All' ? BB_GALLERY : BB_GALLERY.filter(g => g.category === activeFilter);

<section style={{ background: 'var(--bb-cream)', padding: 'var(--space-xl) 0' }}>
  <div className="container">
    {/* Filter chips */}
    <div style={{ display: 'flex', gap: '6px', marginBottom: '28px', flexWrap: 'wrap' }}>
      {BB_GALLERY_CATEGORIES.map(cat => (
        <button key={cat} onClick={() => setActiveFilter(cat)}
          style={{
            fontFamily: 'var(--font-secondary)', fontSize: '11px', fontWeight: 700,
            padding: '5px 14px', textTransform: 'uppercase', letterSpacing: '0.06em',
            border: '0.5px solid',
            borderColor: activeFilter === cat ? 'var(--bb-navy)' : 'var(--border-light)',
            background: activeFilter === cat ? 'var(--bb-navy)' : 'transparent',
            color: activeFilter === cat ? 'white' : 'rgba(26,26,26,0.5)',
            cursor: 'pointer', transition: 'all 200ms'
          }}>
          {cat}
        </button>
      ))}
    </div>

    {/* Grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
      {filtered.map((item, i) => (
        <RevealWrapper key={item.id} delay={i % 3}>
          <div className="gallery-card" style={{ aspectRatio: i % 5 === 0 ? '3/4' : '4/3' }}>
            <div className="photo-placeholder" style={{
              width: '100%', height: '100%', minHeight: '200px',
              background: `hsl(${210 + i * 8}, 30%, ${15 + i * 2}%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.15)' }}>Photo</span>
            </div>
            <div className="gallery-info">
              <div style={{ fontSize: '10px', color: 'var(--bb-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-secondary)', marginBottom: '3px' }}>
                {item.tag}
              </div>
              <div style={{ fontFamily: 'var(--font-secondary)', fontSize: '13px', fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {t(item.titleEN, item.titleID)}
              </div>
            </div>
          </div>
        </RevealWrapper>
      ))}
    </div>
  </div>
</section>
```


# ============================================================
# BB PROMPT 06 — Contact Page
# File: src/pages/contact/ContactPage.tsx
# ============================================================

## PAGE STRUCTURE
1. Hero (dark navy, centered)
2. Two-column: Form (left) + Info/FAQ (right)
3. Footer (App.tsx)

---

## SECTION 1 — HERO

```tsx
<section style={{
  background: 'var(--bb-navy)',
  padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(3rem, 5vw, 5rem)',
  paddingTop: 'calc(64px + clamp(3rem, 5vw, 5rem))',
  textAlign: 'center'
}}>
  <div className="container-narrow">
    <RevealWrapper>
      <span className="section-label section-label-light">{t('Contact', 'Kontak')}</span>
      <h1 className="text-display-xl" style={{ color: 'white', marginBottom: '14px' }}>
        {t(<>LET'S CREATE<br />SOMETHING<br />TOGETHER.</>, <>MARI CIPTAKAN<br />SESUATU<br />BERSAMA.</>)}
      </h1>
      <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '380px', margin: '0 auto' }}>
        {t(
          'Custom orders, wholesale, collaborations, or just a question — we\'d love to hear from you.',
          'Pesanan custom, grosir, kolaborasi, atau sekadar pertanyaan — kami ingin mendengar dari kamu.'
        )}
      </p>
    </RevealWrapper>
  </div>
</section>
```

---

## SECTION 2 — BODY (two column)

```tsx
<section style={{ background: 'var(--bb-cream-light)', padding: 'var(--space-xl) 0' }}>
  <div className="container">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px', alignItems: 'start' }}>
      {/* LEFT — Form */}
      <RevealWrapper>
        <form onSubmit={handleSubmit} className="form-card">
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.25rem',
            color: 'var(--bb-navy)', marginBottom: '22px', textTransform: 'uppercase', letterSpacing: '0.04em'
          }}>
            {t('Inquiry Form', 'Formulir Inquiry')}
          </h2>

          {/* Name row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
            {[
              { key: 'firstName', labelEN: 'First Name', labelID: 'Nama Depan', placeholder: 'John'  },
              { key: 'lastName',  labelEN: 'Last Name',  labelID: 'Nama Belakang', placeholder: 'Doe' },
            ].map(f => (
              <div key={f.key}>
                <label className="field-label">{t(f.labelEN, f.labelID)}</label>
                <input required className="field-input" placeholder={f.placeholder}
                  value={(form as any)[f.key]}
                  onChange={e => set(f.key as keyof BBContactForm, e.target.value)} />
              </div>
            ))}
          </div>

          {/* Email */}
          <div style={{ marginBottom: '12px' }}>
            <label className="field-label">{t('Email', 'Email')}</label>
            <input required type="email" className="field-input" placeholder="hello@studio.id"
              value={form.email} onChange={e => set('email', e.target.value)} />
          </div>

          {/* WhatsApp */}
          <div style={{ marginBottom: '12px' }}>
            <label className="field-label">{t('WhatsApp Number', 'Nomor WhatsApp')}</label>
            <div style={{ display: 'flex', border: '0.5px solid rgba(0,0,0,0.1)', background: 'var(--bb-cream-light)' }}>
              <div style={{ position: 'relative', flexShrink: 0, borderRight: '0.5px solid rgba(0,0,0,0.08)', background: 'rgba(0,0,0,0.02)' }}>
                <select value={form.countryCode} onChange={e => set('countryCode', e.target.value)}
                  style={{ padding: '9px 24px 9px 10px', background: 'transparent', border: 'none', fontSize: '12px', color: 'var(--text-primary)', appearance: 'none', cursor: 'pointer', fontWeight: 500 }}>
                  {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                </select>
                <ChevronDown size={10} style={{ position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)', opacity: 0.3, pointerEvents: 'none' }} />
              </div>
              <input type="tel" placeholder="812 5300..."
                value={form.phone} onChange={e => set('phone', e.target.value.replace(/[^0-9]/g, ''))}
                style={{ flex: 1, padding: '9px 12px', background: 'transparent', border: 'none', fontSize: '12px', outline: 'none' }} />
            </div>
          </div>

          {/* Country + Province */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
            <div>
              <label className="field-label">{t('Country', 'Negara')}</label>
              <div style={{ position: 'relative' }}>
                <select className="field-select" value={form.country}
                  onChange={e => { set('country', e.target.value); set('province', ''); set('city', ''); setCurrentProv(null); }}>
                  {COUNTRIES.map(c => <option key={c.name} value={c.name}>{c.flag} {c.name}</option>)}
                </select>
                <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4, pointerEvents: 'none' }} />
              </div>
            </div>
            {form.country === 'Indonesia' && (
              <div>
                <label className="field-label">{t('Province', 'Provinsi')}</label>
                <div style={{ position: 'relative' }}>
                  <select required className="field-select" value={form.province} onChange={e => handleProvinceChange(e.target.value)}>
                    <option value="">{t('-- Select --', '-- Pilih --')}</option>
                    {(regionData as Province[]).map(p => <option key={p.id} value={p.nama}>{p.nama}</option>)}
                  </select>
                  <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4, pointerEvents: 'none' }} />
                </div>
              </div>
            )}
          </div>

          {/* City */}
          {form.country === 'Indonesia' && form.province && (
            <div style={{ marginBottom: '12px' }}>
              <label className="field-label">{t('City', 'Kota')}</label>
              <div style={{ position: 'relative' }}>
                <select required className="field-select" value={form.city} onChange={e => set('city', e.target.value)}>
                  <option value="">{t('-- Select City --', '-- Pilih Kota --')}</option>
                  {currentProv?.cities.map(c => <option key={c.id} value={c.nama}>{c.nama}</option>)}
                </select>
                <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4, pointerEvents: 'none' }} />
              </div>
            </div>
          )}

          <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)', margin: '16px 0' }} />

          {/* Role chips */}
          <div style={{ marginBottom: '14px' }}>
            <label className="field-label">{t("I am a...", 'Saya adalah...')}</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
              {BB_INQUIRY_ROLES[lang].map(role => (
                <button key={role} type="button" onClick={() => set('role', role)}
                  className={`inquiry-chip ${form.role === role ? 'active' : ''}`}>
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Category dropdown */}
          <div style={{ marginBottom: '14px' }}>
            <label className="field-label">{t('Inquiry Category', 'Kategori Inquiry')}</label>
            <div style={{ position: 'relative' }}>
              <select required className="field-select" value={form.kategori}
                style={{ color: form.kategori ? 'var(--text-primary)' : '#bbb' }}
                onChange={e => set('kategori', e.target.value)}>
                <option value="" disabled>{t('-- Select --', '-- Pilih --')}</option>
                {BB_INQUIRY_CATEGORIES[lang].map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4, pointerEvents: 'none' }} />
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: '20px' }}>
            <label className="field-label">{t('Message (Optional)', 'Pesan (Opsional)')}</label>
            <textarea className="field-textarea" rows={3}
              placeholder={t('Tell us about your project...', 'Ceritakan tentang proyekmu...')}
              value={form.pesan} onChange={e => set('pesan', e.target.value)} />
          </div>

          {/* Submit */}
          <button type="submit" disabled={loading || sent}
            style={{
              width: '100%', padding: '13px',
              background: sent ? '#3DB97A' : 'var(--bb-orange)',
              color: 'white', border: 'none', cursor: loading || sent ? 'default' : 'pointer',
              fontFamily: 'var(--font-secondary)', fontSize: '13px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              opacity: loading ? 0.7 : 1, transition: 'all 300ms'
            }}>
            {loading ? <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> {t('Sending...', 'Mengirim...')}</>
              : sent ? <><CheckCircle size={16} /> {t('Sent!', 'Terkirim!')}</>
              : <><Send size={16} /> {t('Submit Inquiry', 'Kirim Inquiry')}</>}
          </button>
        </form>
      </RevealWrapper>

      {/* RIGHT — Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

        {/* Info card (navy) */}
        <RevealWrapper delay={1}>
          <div style={{ background: 'var(--bb-navy)', padding: '22px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'white', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '18px' }}>
              {t('Contact Points', 'Titik Kontak')}
            </h3>
            {[
              { labelEN: 'Location',      labelID: 'Lokasi',         val: BB_CONFIG.location    },
              { labelEN: 'Email',         labelID: 'Email',          val: BB_CONFIG.email       },
              { labelEN: 'WhatsApp',      labelID: 'WhatsApp',       val: BB_CONFIG.whatsapp    },
              { labelEN: 'Instagram',     labelID: 'Instagram',      val: BB_CONFIG.instagram   },
              { labelEN: 'Response Time', labelID: 'Waktu Respons',  val: t('Within 24 hours', 'Dalam 24 jam') },
            ].map(item => (
              <div key={item.labelEN} style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px', fontFamily: 'var(--font-secondary)' }}>
                  {t(item.labelEN, item.labelID)}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)' }}>{item.val}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* Part of Bumectra card */}
        <RevealWrapper delay={2}>
          <a href={BB_CONFIG.bumectraURL} target="_blank" rel="noopener noreferrer"
             style={{ display: 'block', background: 'white', padding: '18px', border: '0.5px solid var(--border-light)', textDecoration: 'none' }}>
            <div style={{ fontSize: '9px', fontWeight: 700, color: 'rgba(26,26,26,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', fontFamily: 'var(--font-secondary)' }}>
              {t('Part of', 'Bagian dari')}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6B00' }} />
              <span style={{ fontFamily: 'var(--font-secondary)', fontSize: '14px', fontWeight: 700, color: 'var(--bb-navy)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Bumectra Project
              </span>
              <span style={{ fontSize: '12px', color: '#ccc', marginLeft: 'auto' }}>↗</span>
            </div>
          </a>
        </RevealWrapper>

        {/* FAQ accordion */}
        <RevealWrapper delay={3}>
          <div style={{ background: 'white', padding: '18px', border: '0.5px solid var(--border-light)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--bb-navy)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '14px' }}>
              {t('Common Questions', 'Pertanyaan Umum')}
            </h3>
            {BB_FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < BB_FAQS.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', marginBottom: '8px' }}>
                <button type="button" onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  style={{ width: '100%', padding: '8px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', textAlign: 'left' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: faqOpen === i ? 'var(--bb-orange)' : 'var(--text-primary)', fontFamily: 'var(--font-body)', lineHeight: 1.4 }}>
                    {t(faq.qEN, faq.qID)}
                  </span>
                  <span style={{ color: '#ccc', fontSize: '14px', flexShrink: 0, transform: faqOpen === i ? 'rotate(45deg)' : 'none', transition: 'transform 300ms', display: 'inline-block' }}>+</span>
                </button>
                {faqOpen === i && (
                  <p style={{ fontSize: '11px', color: 'var(--text-dim)', lineHeight: 1.65, padding: '0 0 10px' }}>
                    {t(faq.aEN, faq.aID)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </div>
  </div>
</section>
```

---

## HANDLE SUBMIT

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  const fullPhone = `${form.countryCode}${form.phone.replace(/^0+/, '')}`;
  try {
    const { error } = await supabase
      .from('bintikbumi_contact_submissions')
      .insert([{
        first_name:       form.firstName,
        last_name:        form.lastName,
        email:            form.email,
        country_code:     form.countryCode,
        phone_number:     form.phone,
        full_phone:       fullPhone,
        country:          form.country,
        province:         form.province,
        city:             form.city,
        role:             form.role,
        product_interest: form.productInterest,
        kategori:         form.kategori,
        pesan:            form.pesan,
      }]);
    if (error) throw error;
    setSent(true);
    setForm(INITIAL_FORM);
    setCurrentProv(null);
    setTimeout(() => setSent(false), 5000);
  } catch (err) {
    console.error('[BintikBumi Contact]', err);
    alert(lang === 'EN'
      ? `Error. Please contact us via WhatsApp: ${BB_CONFIG.whatsapp}`
      : `Error. Hubungi kami via WhatsApp: ${BB_CONFIG.whatsapp}`);
  } finally {
    setLoading(false);
  }
};
```

---

## FORM TYPE + STATE

```tsx
interface BBContactForm {
  firstName: string; lastName: string; email: string;
  countryCode: string; phone: string;
  country: string; province: string; city: string;
  role: string; productInterest: string; kategori: string; pesan: string;
}

const INITIAL_FORM: BBContactForm = {
  firstName: '', lastName: '', email: '',
  countryCode: '+62', phone: '',
  country: 'Indonesia', province: '', city: '',
  role: '', productInterest: '', kategori: '', pesan: ''
};

const [form, setForm]             = useState<BBContactForm>(INITIAL_FORM);
const [currentProv, setCurrentProv] = useState<Province | null>(null);
const [loading, setLoading]       = useState(false);
const [sent, setSent]             = useState(false);
const [faqOpen, setFaqOpen]       = useState<number | null>(null);
const { lang, t }                 = useLanguage();

const set = (key: keyof BBContactForm, value: string) =>
  setForm(f => ({ ...f, [key]: value }));

const handleProvinceChange = (provName: string) => {
  const prov = (regionData as Province[]).find(p => p.nama === provName) ?? null;
  setCurrentProv(prov);
  setForm(f => ({ ...f, province: provName, city: '' }));
};
```

---

## IMPORTS

```tsx
import { useState } from 'react';
import { ChevronDown, Loader2, CheckCircle, Send } from 'lucide-react';
import { useLanguage } from '../../App';
import RevealWrapper from '../../components/ui/RevealWrapper';
import { supabase } from '../../lib/supabase';
import { BB_FAQS, BB_INQUIRY_CATEGORIES, BB_INQUIRY_ROLES, BB_CONFIG } from '../../data/content';
import type { Province } from '../../types';
import regionData from '../../data/indonesia-region.json';
import { COUNTRIES } from '../../constants/countries';
```

NOTE: Create `src/constants/countries.ts` with the COUNTRIES array (same as Bumectra/Hectra).
