# BB PROMPT 02 — Home Page
# File: src/pages/home/HomePage.tsx
# ============================================================
# Design system: BB_index.css
# Content: BB_content.ts (BB_FEATURES, BB_APPLICATIONS, BB_PROCESS, BB_IMPACT)
# Language: useLanguage from App.tsx
# Reference: robries.com structure
# ============================================================

## PAGE STRUCTURE
1. Hero (full viewport, full-bleed photo)
2. Brand Intro + Advantages (cream)
3. Trusted By / Partners (white)
4. How It's Applied (dark navy, grid)
5. Our Process (full-width, 3 steps)
6. Impact Numbers (dark navy)
7. CTA Full Viewport
8. (Footer in App.tsx)

---

## SECTION 1 — HERO (full viewport)

### CRITICAL: min-height: 100vh, full-bleed photo background

```tsx
<section style={{
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
}}>
  {/* Background photo — full bleed, NO rounded corners */}
  <div style={{
    position: 'absolute', inset: 0,
    background: '#1C2E45',   // placeholder — replace with: backgroundImage: 'url(/assets/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'
  }}>
    {/* Placeholder label */}
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: '1px dashed rgba(255,255,255,0.08)',
      margin: '20px'
    }}>
      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.12)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        Replace with hero photo
      </span>
    </div>
  </div>

  {/* Dark overlay */}
  <div style={{ position: 'absolute', inset: 0, background: 'rgba(14, 26, 37, 0.6)' }} />

  {/* Content */}
  <div className="container" style={{ position: 'relative', zIndex: 5, paddingTop: '64px' }}>
    <RevealWrapper>
      {/* Eyebrow */}
      <span className="section-label section-label-light" style={{ marginBottom: '20px' }}>
        BintikBumi — {t('Creative Craft from Waste', 'Kerajinan Kreatif dari Limbah')}
      </span>

      {/* Main headline — huge, uppercase, Robries style */}
      <h1 className="text-display-hero" style={{ color: 'white', maxWidth: '800px', marginBottom: '24px' }}>
        {t(
          <>WHERE WASTE<br />MEETS DESIGN.</>,
          <>DI MANA LIMBAH<br />BERTEMU DESAIN.</>
        )}
      </h1>

      {/* Subtext */}
      <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '480px', marginBottom: '36px' }}>
        {t(
          'We transform ulin wood waste into premium design materials. Handcrafted in Indonesia, built for the world.',
          'Kami mengubah limbah kayu ulin menjadi material desain premium. Dibuat tangan di Indonesia, dibangun untuk dunia.'
        )}
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
        <NavLink to="/products" className="btn btn-primary">
          {t('Explore Products', 'Jelajahi Produk')}
        </NavLink>
        <NavLink to="/impact" className="btn btn-ghost-white">
          {t('Our Story', 'Cerita Kami')} →
        </NavLink>
      </div>
    </RevealWrapper>
  </div>

  {/* Scroll hint */}
  <div style={{
    position: 'absolute', bottom: '28px', left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
    zIndex: 5
  }}>
    <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
      {t('Scroll', 'Gulir')}
    </span>
    <div style={{
      width: '1px', height: '40px',
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)'
    }} />
  </div>
</section>
```

---

## SECTION 2 — BRAND INTRO + ADVANTAGES (cream)

Import `BB_FEATURES` from content.ts

```tsx
<section style={{ background: 'var(--bb-cream)', padding: 'var(--space-2xl) 0' }}>
  <div className="container">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>

      {/* Left — big paragraph (Robries style) */}
      <RevealWrapper>
        <span className="section-label">{t('What We Do', 'Apa yang Kami Lakukan')}</span>
        <h2 className="text-display-lg" style={{ color: 'var(--bb-navy)', marginBottom: '20px' }}>
          {t('PREMIUM CRAFT\nFROM WASTE.', 'KERAJINAN PREMIUM\nDARI LIMBAH.')}
        </h2>
        <p className="text-body-lg" style={{ color: 'var(--text-dim)', marginBottom: '16px' }}>
          {t(
            'BintikBumi transforms discarded ulin wood and white cement into high-value design products. Each piece carries the unique "Bintik" texture — a signature born from the material itself.',
            'BintikBumi mengubah kayu ulin yang dibuang dan semen putih menjadi produk desain bernilai tinggi. Setiap potongan membawa tekstur "Bintik" yang unik — sebuah ciri khas yang lahir dari material itu sendiri.'
          )}
        </p>
        <p className="text-body-md" style={{ color: 'var(--text-dim)' }}>
          {t(
            'We believe waste is not the end — it\'s the beginning of something extraordinary.',
            'Kami percaya limbah bukanlah akhir — ini adalah awal dari sesuatu yang luar biasa.'
          )}
        </p>
        <NavLink to="/impact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '13px', fontWeight: 600, color: 'var(--bb-orange)',
          textDecoration: 'none', marginTop: '20px',
          fontFamily: 'var(--font-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em'
        }}>
          {t('Read Our Story', 'Baca Cerita Kami')} →
        </NavLink>
      </RevealWrapper>

      {/* Right — feature chips grid */}
      <RevealWrapper delay={1}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {BB_FEATURES.map((feat, i) => (
            <div key={i} className="feature-chip">
              <div className="chip-dot" />
              {t(feat.en, feat.id)}
            </div>
          ))}
        </div>
      </RevealWrapper>

    </div>
  </div>
</section>
```

---

## SECTION 3 — TRUSTED BY (white)

```tsx
<section style={{ background: 'var(--bb-cream-light)', padding: 'var(--space-lg) 0', borderTop: '0.5px solid var(--border-light)', borderBottom: '0.5px solid var(--border-light)' }}>
  <div className="container">
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
      <span style={{
        fontFamily: 'var(--font-secondary)',
        fontSize: '0.6875rem', fontWeight: 700,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'rgba(26,26,26,0.35)', flexShrink: 0
      }}>
        {t('Trusted By', 'Dipercaya Oleh')}
      </span>
      <div style={{ width: '1px', height: '28px', background: 'var(--border-light)', flexShrink: 0 }} />

      {/* Partner name chips */}
      {[
        { name: 'DeKayu Indonesia', status: t('MOU in Progress', 'MOU Sedang Berjalan') },
        { name: 'Bumectra Project', status: t('Ecosystem Partner', 'Mitra Ekosistem') },
      ].map((p) => (
        <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: 'var(--font-secondary)', fontSize: '14px', fontWeight: 700, color: 'var(--bb-navy)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {p.name}
          </span>
          <span style={{ fontSize: '10px', color: 'var(--bb-orange)', background: 'var(--bb-orange-tint)', padding: '2px 8px', borderRadius: '100px', fontWeight: 600 }}>
            {p.status}
          </span>
        </div>
      ))}

      <span style={{ fontSize: '12px', color: 'rgba(26,26,26,0.3)', fontStyle: 'italic' }}>
        {t('+ More partnerships coming', '+ Lebih banyak kemitraan segera hadir')}
      </span>
    </div>
  </div>
</section>
```

---

## SECTION 4 — HOW IT'S APPLIED (dark navy, grid)

Import `BB_APPLICATIONS` from content.ts

```tsx
<section style={{ background: 'var(--bb-navy)', padding: 'var(--space-2xl) 0' }}>
  <div className="container">
    <RevealWrapper>
      <span className="section-label section-label-light">
        {t('Applications', 'Aplikasi')}
      </span>
      <h2 className="text-display-lg" style={{ color: 'white', marginBottom: '40px', maxWidth: '600px' }}>
        {t('HOW BINTIKBUMI\nIS APPLIED.', 'BAGAIMANA BINTIKBUMI\nDITERAPKAN.')}
      </h2>
    </RevealWrapper>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
      {BB_APPLICATIONS.map((app, i) => (
        <RevealWrapper key={i} delay={i % 3}>
          <div className="application-card">
            {/* Photo */}
            <div className="card-photo" style={{ minHeight: '220px', position: 'relative' }}>
              {/* Placeholder */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.05)'
              }}>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em' }}>
                  Photo
                </span>
              </div>
            </div>
            {/* Label below photo */}
            <div style={{ paddingTop: '10px' }}>
              <div className="card-label">{t(app.en, app.id)}</div>
              <div className="card-sub">{t(app.subEN, app.subID)}</div>
            </div>
          </div>
        </RevealWrapper>
      ))}
    </div>
  </div>
</section>
```

---

## SECTION 5 — OUR PROCESS (full-width steps)

Import `BB_PROCESS` from content.ts

### CRITICAL: Each step is FULL WIDTH (100vw), no container, no padding — like Robries

```tsx
<section style={{ background: 'var(--bb-cream)' }}>
  <div className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-lg)' }}>
    <RevealWrapper>
      <span className="section-label">{t('How We Work', 'Cara Kami Bekerja')}</span>
      <h2 className="text-display-lg" style={{ color: 'var(--bb-navy)', marginBottom: '0' }}>
        {t('FROM WASTE\nTO WORTH.', 'DARI LIMBAH\nMENJADI KARYA.')}
      </h2>
    </RevealWrapper>
  </div>

  {/* Steps — each full width */}
  {BB_PROCESS.map((step, i) => (
    <RevealWrapper key={i}>
      <div className="process-step" style={{ minHeight: '480px' }}>
        {/* Photo background */}
        <div className="step-photo" style={{
          // Replace with: backgroundImage: `url(/assets/process/step-${i+1}.jpg)`, backgroundSize: 'cover'
          background: i === 0 ? '#1C2E45' : i === 1 ? '#142133' : '#0D1825',
        }}>
          {/* Placeholder */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.1)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {t('Process photo', 'Foto proses')} {step.num}
            </span>
          </div>
        </div>

        {/* Overlay */}
        <div className="step-overlay" />

        {/* Big number watermark */}
        <div className="step-number">{step.num}</div>

        {/* Content */}
        <div className="step-content">
          <div className="container">
            <span className="section-label section-label-light" style={{ marginBottom: '10px' }}>
              {t(`Step ${step.num}`, `Langkah ${step.num}`)}
            </span>
            <h3 className="text-display-md" style={{ color: 'white', marginBottom: '12px', maxWidth: '600px' }}>
              {t(step.titleEN, step.titleID)}
            </h3>
            <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '480px' }}>
              {t(step.descEN, step.descID)}
            </p>
          </div>
        </div>
      </div>
    </RevealWrapper>
  ))}
</section>
```

---

## SECTION 6 — IMPACT NUMBERS (dark navy)

Import `BB_IMPACT` from content.ts

```tsx
<section style={{ background: 'var(--bb-navy)', padding: 'var(--space-2xl) 0' }}>
  <div className="container">
    <RevealWrapper>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0',
        borderTop: '0.5px solid rgba(255,255,255,0.1)',
        borderBottom: '0.5px solid rgba(255,255,255,0.1)',
      }}>
        {BB_IMPACT.map((item, i) => (
          <div key={i} style={{
            padding: 'clamp(2rem, 5vw, 4rem)',
            borderRight: i < BB_IMPACT.length - 1 ? '0.5px solid rgba(255,255,255,0.1)' : 'none',
            textAlign: 'center'
          }}>
            <div className="impact-number">
              {item.num}{item.unitEN && <span style={{ fontSize: '0.5em', marginLeft: '4px' }}>{item.unitEN}</span>}
            </div>
            <div className="impact-label">{t(item.labelEN, item.labelID)}</div>
          </div>
        ))}
      </div>

      {/* Tagline below numbers */}
      <p style={{
        textAlign: 'center', marginTop: '32px',
        fontFamily: 'var(--font-secondary)',
        fontSize: '0.9375rem', fontWeight: 600,
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.06em', textTransform: 'uppercase'
      }}>
        {t(
          'Every product carries a story — from waste to craft.',
          'Setiap produk membawa cerita — dari limbah menjadi karya.'
        )}
      </p>
    </RevealWrapper>
  </div>
</section>
```

---

## SECTION 7 — CTA FULL VIEWPORT

### CRITICAL: min-height: 100vh

```tsx
<section className="cta-full">
  {/* Background */}
  <div className="cta-bg" style={{
    background: 'var(--bb-navy-deep)',
    // Replace: backgroundImage: 'url(/assets/cta-bg.jpg)', backgroundSize: 'cover'
  }}>
    <div style={{
      position: 'absolute', inset: '20px',
      border: '1px dashed rgba(255,255,255,0.06)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.08)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Replace with full-bleed photo
      </span>
    </div>
  </div>

  {/* Overlay */}
  <div className="cta-overlay" />

  {/* Content */}
  <div className="cta-content">
    <RevealWrapper>
      <span className="section-label section-label-light" style={{ marginBottom: '20px' }}>
        BintikBumi
      </span>
      <h2 className="text-display-xl" style={{ color: 'white', marginBottom: '16px' }}>
        {t(
          <>LET'S BUILD A<br />SUSTAINABLE FUTURE<br />TOGETHER.</>,
          <>MARI BANGUN MASA<br />DEPAN BERKELANJUTAN<br />BERSAMA.</>
        )}
      </h2>
      <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px' }}>
        {t(
          "Whether you're a designer, contractor, or just someone who cares about the planet — let's create something meaningful.",
          'Baik kamu desainer, kontraktor, atau seseorang yang peduli dengan planet ini — mari ciptakan sesuatu yang bermakna.'
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

## IMPORTS NEEDED

```tsx
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../App';
import RevealWrapper from '../../components/ui/RevealWrapper';
import { BB_FEATURES, BB_APPLICATIONS, BB_PROCESS, BB_IMPACT } from '../../data/content';
```
