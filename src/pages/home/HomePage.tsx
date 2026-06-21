import ProcessSection from './ProcessSection';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import RevealWrapper from '../../components/ui/RevealWrapper';
import { BB_FEATURES, BB_APPLICATIONS } from '../../data/content';
import imgHeroBg from '../../assets/main/hero-bg.png';
import CTASection from '../../components/ui/CTASection';

export default function HomePage() {
  const { lang, t } = useLanguage();

  return (
    <div className="w-full">
      {/* ── SECTION 1 — HERO ────────────────────────────────────────────── */}
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
          backgroundImage: `url(${imgHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        </div>

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(14, 26, 37, 0.6)' }} />

        {/* Content */}
        <div className="section-container" style={{ position: 'relative', zIndex: 5, paddingTop: '64px', width: '100%' }}>
          <RevealWrapper>
            {/* Eyebrow */}
            <span className="section-label" style={{ marginBottom: '20px', display: 'block', color: 'var(--bb-orange)' }}>
              BintikBumi — {t('Creative Craft from Waste', 'Kerajinan Kreatif dari Limbah')}
            </span>

            {/* Main headline — huge, uppercase, Robries style */}
            <h1 style={{ color: 'white', maxWidth: '800px', marginBottom: '24px', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.95 }}>
              {lang === 'EN' ? (
                <>WHERE WASTE<br />MEETS DESIGN.</>
              ) : (
                <>DI MANA LIMBAH<br />BERTEMU DESAIN.</>
              )}
            </h1>

            {/* Subtext */}
            <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '480px', marginBottom: '36px', fontSize: '1.125rem' }}>
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
              <NavLink to="/impact" className="btn btn-outline" style={{ border: 'none', borderBottom: '1px solid white', borderRadius: 0, padding: '4px 0' }}>
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

      {/* ── SECTION 2 — BRAND INTRO + ADVANTAGES ────────────────────────── */}
      <section style={{ background: 'var(--bb-cream)', padding: '120px 0' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>

            {/* Left — big paragraph (Robries style) */}
            <RevealWrapper>
              <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>{t('What We Do', 'Apa yang Kami Lakukan')}</span>
              <h2 style={{ color: 'var(--bb-navy)', marginBottom: '20px', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                {lang === 'EN' ? (
                  <>PREMIUM CRAFT<br />FROM WASTE.</>
                ) : (
                  <>KERAJINAN PREMIUM<br />DARI LIMBAH.</>
                )}
              </h2>
              <p style={{ color: 'var(--bb-muted)', marginBottom: '16px', fontSize: '1.125rem' }}>
                {t(
                  'BintikBumi transforms discarded ulin wood and white cement into high-value design products. Each piece carries the unique "Bintik" texture — a signature born from the material itself.',
                  'BintikBumi mengubah kayu ulin yang dibuang dan semen putih menjadi produk desain bernilai tinggi. Setiap potongan membawa tekstur "Bintik" yang unik — sebuah ciri khas yang lahir dari material itu sendiri.'
                )}
              </p>
              <p style={{ color: 'var(--bb-muted)' }}>
                {t(
                  'We believe waste is not the end — it\'s the beginning of something extraordinary.',
                  'Kami percaya limbah bukanlah akhir — ini adalah awal dari sesuatu yang luar biasa.'
                )}
              </p>

              <NavLink to="/impact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '13px', fontWeight: 700, color: 'var(--bb-orange)',
                textDecoration: 'none', marginTop: '24px',
                fontFamily: 'var(--font-condensed)', textTransform: 'uppercase', letterSpacing: '0.1em',
                borderBottom: '1.5px solid var(--bb-orange)', paddingBottom: '4px',
                transition: 'opacity 0.3s ease'
              }}>
                {t('Read Our Story', 'Baca Cerita Kami')} →
              </NavLink>
            </RevealWrapper>

            {/* Right — feature chips grid */}
            <RevealWrapper delay={0.2}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                {BB_FEATURES.map((feat, i) => (
                  <div key={i} className="bb-feature-chip">
                    <div className="bb-chip-dot" />
                    <span className="bb-chip-label">{lang === 'EN' ? feat.en : feat.id}</span>
                  </div>
                ))}
              </div>
            </RevealWrapper>

          </div>

          {/* ── SECTION 3 — TRUSTED BY ── */}
          <RevealWrapper delay={0.3}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              marginTop: '50px', paddingTop: '28px',
              borderTop: '1px solid var(--bb-border)'
            }}>
              <span style={{
                fontFamily: 'var(--font-condensed)', fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bb-muted)',
                flexShrink: 0
              }}>
                {t('Trusted By', 'Dipercaya Oleh')}
              </span>
              <div style={{ width: '1px', height: '20px', background: 'var(--bb-border)', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '1.1rem',
                color: 'var(--bb-navy)', letterSpacing: '0.02em'
              }}>
                DeKayu Indonesia
              </span>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── SECTION 4 — HOW IT'S APPLIED ────────────────────────────────── */}
      <section style={{ background: 'var(--bb-navy)', padding: '120px 0' }}>
        <div className="section-container">
          <RevealWrapper>
            <span className="section-label" style={{ color: 'var(--bb-orange)', display: 'block', marginBottom: '16px' }}>
              {t('Applications', 'Aplikasi')}
            </span>
            <h2 style={{ color: 'white', marginBottom: '60px', maxWidth: '600px', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              {lang === 'EN' ? (
                <>HOW BINTIKBUMI<br />IS APPLIED.</>
              ) : (
                <>BAGAIMANA BINTIKBUMI<br />DITERAPKAN.</>
              )}
            </h2>
          </RevealWrapper>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {BB_APPLICATIONS.map((app, i) => (
              <RevealWrapper key={i} delay={(i % 3) * 0.1}>
                <div className="group cursor-pointer">
                  {/* Photo */}
                  <div style={{ minHeight: '260px', position: 'relative', backgroundColor: 'rgba(255,255,255,0.03)', overflow: 'hidden' }}>

                    {app.image ? (
                      <img
                        src={app.image}
                        alt={lang === 'EN' ? app.title.EN : app.title.ID}
                        className="transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          position: 'absolute',
                          inset: 0
                        }}
                      />
                    ) : (
                      /* Placeholder */
                      <div style={{
                        position: 'absolute', inset: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em', fontFamily: 'var(--font-condensed)', textTransform: 'uppercase' }}>
                          {lang === 'EN' ? app.title.EN : app.title.ID} Photo
                        </span>
                      </div>
                    )}

                  </div>
                  {/* Label below photo */}
                  <div style={{ paddingTop: '16px' }}>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '18px', fontWeight: 600, color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {lang === 'EN' ? app.title.EN : app.title.ID}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
                      {lang === 'EN' ? app.subtitle.EN : app.subtitle.ID}
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — OUR PROCESS ──────────────────────────────── */}
      <ProcessSection />

      {/* ── SECTION 6 — CTA FULL VIEWPORT ────────────────────────────────── */}
      <CTASection />
    </div>
  );
}
