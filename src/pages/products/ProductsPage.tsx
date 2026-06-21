
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import RevealWrapper from '../../components/ui/RevealWrapper';
import { BB_PRODUCTS } from '../../data/content';
import backgroundImage from '../../assets/main/bintikmaterial.jpg'
import CTASection from '../../components/ui/CTASection';

export default function ProductsPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="w-full">
      {/* ── SECTION 1 — HERO ────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bb-navy)',
        paddingTop: 'calc(64px + clamp(4rem, 8vw, 6rem))',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Full-width Terrazzo Composite Motif Wallpaper (White/Cream Aggregate on Navy) */}
        <svg viewBox="0 0 1200 350" preserveAspectRatio="xMidYMid slice" style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.05,
          pointerEvents: 'none',
          zIndex: 1
        }}>
          {/* Scattered white/cream aggregate chips across the entire hero */}
          <polygon points="50,40 65,30 70,45 55,55" fill="var(--bb-cream)" />
          <polygon points="130,90 150,85 145,105 125,100" fill="var(--bb-cream)" />
          <polygon points="270,50 290,45 285,65 260,60" fill="var(--bb-cream)" />
          <polygon points="90,190 105,180 110,200 95,210" fill="var(--bb-cream)" />
          <polygon points="230,170 248,160 245,180 225,190" fill="var(--bb-cream)" />
          <polygon points="390,70 405,60 410,80 395,90" fill="var(--bb-cream)" />
          <polygon points="310,230 328,220 325,240 305,250" fill="var(--bb-cream)" />

          <polygon points="35,75 45,70 40,85" fill="var(--bb-cream)" />
          <polygon points="100,35 112,30 105,45" fill="var(--bb-cream)" />
          <polygon points="190,40 200,32 195,50" fill="var(--bb-cream)" />
          <polygon points="240,80 250,75 245,90" fill="var(--bb-cream)" />
          <polygon points="320,100 330,95 325,110" fill="var(--bb-cream)" />
          <polygon points="400,150 415,145 405,165" fill="var(--bb-cream)" />

          {/* Middle Area (400 - 800) */}
          <polygon points="460,90 480,80 485,100 465,110" fill="var(--bb-cream)" />
          <polygon points="590,50 605,40 610,60 595,70" fill="var(--bb-cream)" />
          <polygon points="700,130 720,120 715,140 695,150" fill="var(--bb-cream)" />
          <polygon points="520,190 538,180 535,200 515,210" fill="var(--bb-cream)" />
          <polygon points="630,250 648,240 645,260 625,270" fill="var(--bb-cream)" />
          <polygon points="770,210 790,205 785,225 760,220" fill="var(--bb-cream)" />

          {/* Circles */}
          <circle cx="80" cy="90" r="3" fill="var(--bb-cream)" />
          <circle cx="170" cy="60" r="2.5" fill="var(--bb-cream)" />
          <circle cx="220" cy="60" r="3.5" fill="var(--bb-cream)" />
          <circle cx="300" cy="80" r="3" fill="var(--bb-cream)" />
          <circle cx="480" cy="160" r="3" fill="var(--bb-cream)" />
          <circle cx="540" cy="70" r="2.5" fill="var(--bb-cream)" />
          <circle cx="620" cy="150" r="3.5" fill="var(--bb-cream)" />
          <circle cx="750" cy="100" r="3" fill="var(--bb-cream)" />

          {/* Right Area (800 - 1200) */}
          <polygon points="860,60 880,50 885,70 865,80" fill="var(--bb-cream)" />
          <polygon points="950,100 965,90 970,110 955,120" fill="var(--bb-cream)" />
          <polygon points="1090,70 1110,65 1105,85 1080,80" fill="var(--bb-cream)" />
          <polygon points="920,200 938,190 935,210 915,220" fill="var(--bb-cream)" />
          <polygon points="1020,240 1038,230 1035,250 1015,260" fill="var(--bb-cream)" />

          <circle cx="880" cy="160" r="3" fill="var(--bb-cream)" />
          <circle cx="970" cy="50" r="2.5" fill="var(--bb-cream)" />
          <circle cx="1030" cy="120" r="3.5" fill="var(--bb-cream)" />
          <circle cx="1160" cy="140" r="3" fill="var(--bb-cream)" />

          {/* Fine speckles */}
          <circle cx="60" cy="120" r="1.2" fill="var(--bb-cream)" opacity="0.7" />
          <circle cx="160" cy="230" r="1.5" fill="var(--bb-cream)" opacity="0.7" />
          <circle cx="290" cy="180" r="1.2" fill="var(--bb-cream)" opacity="0.7" />
          <circle cx="490" cy="100" r="1.2" fill="var(--bb-cream)" opacity="0.7" />
          <circle cx="600" cy="200" r="1.5" fill="var(--bb-cream)" opacity="0.7" />
          <circle cx="900" cy="140" r="1.2" fill="var(--bb-cream)" opacity="0.7" />
          <circle cx="1000" cy="220" r="1.5" fill="var(--bb-cream)" opacity="0.7" />
          <circle cx="1100" cy="90" r="1.2" fill="var(--bb-cream)" opacity="0.7" />
        </svg>

        {/* Decorative blueprint-like thin vertical grid lines */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '15%',
          width: '1px',
          background: 'rgba(255,255,255,0.08)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: '25%',
          width: '1px',
          background: 'rgba(255,255,255,0.08)',
          pointerEvents: 'none'
        }} />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'end'
          }}>
            <div>
              <RevealWrapper>
                <span className="section-label" style={{ display: 'inline-block', marginBottom: '24px', color: 'var(--bb-orange)' }}>
                  {t('Our Materials & Products', 'Material & Produk Kami')}
                </span>
                <h1 style={{
                  color: 'white',
                  margin: 0,
                  fontSize: 'clamp(2.8rem, 7vw, 4.8rem)',
                  lineHeight: 0.95,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase'
                }}>
                  {lang === 'EN' ? (
                    <>BUILT FROM<br />WASTE.<br />MEANT TO LAST.</>
                  ) : (
                    <>DIBANGUN DARI<br />LIMBAH.<br />DIBUAT UNTUK BERTAHAN.</>
                  )}
                </h1>
              </RevealWrapper>
            </div>

            <div style={{
              borderLeft: '1px solid rgba(255,255,255,0.1)',
              paddingLeft: 'clamp(20px, 5vw, 40px)',
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: '180px'
            }}>
              <RevealWrapper delay={0.15}>
                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '1.25rem',
                  lineHeight: 1.6,
                  marginBottom: '0px',
                  maxWidth: '440px',
                  fontWeight: 400
                }}>
                  {lang === 'EN' ? (
                    <>Every <strong>BintikBumi</strong> product starts as discarded ulin wood. We give it new purpose, new form, and new value.</>
                  ) : (
                    <>Setiap produk <strong>BintikBumi</strong> dimulai sebagai kayu ulin yang dibuang. Kami memberikannya tujuan baru, bentuk baru, dan nilai baru.</>
                  )}
                </p>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — MATERIAL SHOWCASE ──────────────────────────────── */}
      <section style={{ background: 'var(--bb-cream)', padding: '120px 0' }}>
        <div className="section-container">
          <RevealWrapper>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>{t('The Material', 'Material')}</span>
            <h2 style={{ color: 'var(--bb-navy)', marginBottom: '32px', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {t('THE BINTIK MATERIAL.', 'MATERIAL BINTIK.')}
            </h2>
          </RevealWrapper>

          {/* Full-bleed material photo */}
          <RevealWrapper>
            <div style={{
              width: '100%', aspectRatio: '16/7',
              background: 'rgba(20,33,51,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '32px', position: 'relative', overflow: 'hidden',
              backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',
            }}>
            </div>
          </RevealWrapper>

          {/* Material specs grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0', borderTop: '1px solid var(--bb-border)' }}>
            {[
              { labelEN: 'Primary Material', labelID: 'Material Utama', valueEN: 'Ulin Wood Waste', valueID: 'Limbah Kayu Ulin' },
              { labelEN: 'Binder', labelID: 'Pengikat', valueEN: 'White Cement', valueID: 'Semen Putih' },
              { labelEN: 'Signature Texture', labelID: 'Tekstur Khas', valueEN: '"Bintik" Pattern', valueID: 'Pola "Bintik"' },
              { labelEN: 'Available Finish', labelID: 'Finishing', valueEN: 'Natural / Polished', valueID: 'Natural / Polished' },
            ].map((spec, i) => (
              <div key={i} style={{
                padding: '24px 20px',
                borderRight: '1px solid var(--bb-border)',
                borderBottom: '1px solid var(--bb-border)'
              }}>
                <div style={{ fontSize: '11px', color: 'var(--bb-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, fontFamily: 'var(--font-condensed)', marginBottom: '8px' }}>
                  {t(spec.labelEN, spec.labelID)}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--bb-navy)', letterSpacing: '0.02em' }}>
                  {t(spec.valueEN, spec.valueID)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — PRODUCT GRID ────────────────────────────────────── */}
      <section style={{ background: 'var(--bb-light)', padding: '100px 0' }}>
        <div className="section-container">
          <RevealWrapper>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>{t('Products', 'Produk')}</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
              <h2 style={{ color: 'var(--bb-navy)', margin: 0, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {t('PRODUCT CATALOGUE', 'KATALOG PRODUK')}
              </h2>
            </div>
          </RevealWrapper>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {BB_PRODUCTS.map((product, i) => (
              <RevealWrapper key={product.id} delay={(i % 3) * 0.1}>
                <div style={{ background: 'white', border: '1px solid var(--bb-border)', cursor: 'pointer', transition: 'all 300ms' }}
                  className="product-card"
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--bb-orange)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bb-border)'}>
                  {/* Product photo */}
                  <div className="product-card-container">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={lang === 'EN' ? product.nameEN : product.nameID}
                        className="product-card-img"
                      />
                    ) : (
                      <div style={{
                        position: 'absolute', inset: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <span style={{ fontSize: '11px', color: 'rgba(20,33,51,0.2)', fontFamily: 'var(--font-condensed)' }}>Photo Placeholder</span>
                      </div>
                    )}
                  </div>
                  {/* Info */}
                  <div style={{ padding: '24px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--bb-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', fontFamily: 'var(--font-condensed)' }}>
                      {product.category}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--bb-navy)', letterSpacing: '0.02em', marginBottom: '12px' }}>
                      {lang === 'EN' ? product.nameEN : product.nameID}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--bb-muted)', lineHeight: 1.6, marginBottom: '20px', minHeight: '66px' }}>
                      {lang === 'EN' ? product.descEN : product.descID}
                    </p>
                    <NavLink to="/contact" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      fontSize: '13px', fontWeight: 700, color: 'var(--bb-orange)',
                      fontFamily: 'var(--font-condensed)', textTransform: 'uppercase',
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

      {/* ── SECTION 4 — BOTTOM CTA STRIP ────────────────────────────────── */}
      <CTASection />
    </div>
  );
}
