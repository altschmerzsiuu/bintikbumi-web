
import { useLanguage } from '../../hooks/useLanguage';
import RevealWrapper from '../../components/ui/RevealWrapper';
import imgImpactHero from '../../assets/main/impact-hero.jpeg';
import imgImpact from '../../assets/main/impact.png';
import CTASection from '../../components/ui/CTASection';

export default function ImpactPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="w-full">
      {/* ── SECTION 1: HERO ──────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${imgImpactHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(14,26,37,0.55)' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 5, paddingTop: '64px', width: '100%' }}>
          <RevealWrapper>
            <span className="section-label" style={{ color: 'white', opacity: 0.6, marginBottom: '24px', display: 'block' }}>
              {t('Sustainability & Impact', 'Keberlanjutan & Dampak')}
            </span>
            <h1 style={{ color: 'white', maxWidth: '700px', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.95 }}>
              {lang === 'EN' ? (
                <>FROM<br />WASTE<br />TO WORTH.</>
              ) : (
                <>DARI<br />LIMBAH<br />MENJADI KARYA.</>
              )}
            </h1>
          </RevealWrapper>
        </div>
      </section>

      {/* ── SECTION 2: STORY (2-col) ────────────────────────────────────── */}
      <section style={{ background: 'var(--bb-cream)', padding: '120px 0' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            <RevealWrapper>
              <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>{t('The Problem We Solve', 'Masalah yang Kami Selesaikan')}</span>
              <h2 style={{ color: 'var(--bb-navy)', marginBottom: '24px', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {lang === 'EN' ? (
                  <>ULIN WOOD<br />WASTE IS<br />EVERYWHERE.</>
                ) : (
                  <>LIMBAH KAYU ULIN<br />ADA DI<br />MANA-MANA.</>
                )}
              </h2>
              <p style={{ color: 'var(--bb-muted)', marginBottom: '20px', fontSize: '1.125rem', lineHeight: 1.6 }}>
                {t(
                  'Ulin (ironwood) is one of the strongest and most durable woods in Borneo. Yet thousands of kilograms of ulin shavings, offcuts, and scraps are discarded every year by local timber industries.',
                  'Ulin (kayu besi) adalah salah satu kayu terkuat dan paling tahan lama di Kalimantan. Namun ribuan kilogram serutan, sisa potongan, dan scraps ulin dibuang setiap tahun oleh industri kayu lokal.'
                )}
              </p>
              <p style={{ color: 'var(--bb-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                {t(
                  'BintikBumi was born to solve this by turning waste into premium design material. Every panel, tile, and custom piece is a direct act of sustainability.',
                  'BintikBumi lahir untuk menyelesaikan ini dengan mengubah limbah menjadi material desain premium. Setiap panel, ubin, dan potongan custom adalah tindakan langsung keberlanjutan.'
                )}
              </p>
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              {/* Photo */}
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                backgroundImage: `url(${imgImpact})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                borderRadius: '4px'
              }} />
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CORE COMMITMENTS (CREAM CONTAINER) ───────────────── */}
      <section style={{ background: 'var(--bb-cream)', padding: '100px 0' }}>
        <div className="section-container">
          <RevealWrapper>
            <div className="commitments-grid">
              {[
                {
                  value: '100%',
                  unit: 'ULIN',
                  label: {
                    EN: 'Reclaimed Borneo Ironwood',
                    ID: 'Kayu Ulin Daur Ulang Kalimantan'
                  }
                },
                {
                  value: 'LOCAL',
                  unit: 'CRAFT',
                  label: {
                    EN: 'Handmade in Balikpapan',
                    ID: 'Dibuat Tangan di Balikpapan'
                  }
                },
                {
                  value: 'ZERO',
                  unit: 'WASTE',
                  label: {
                    EN: 'Conscious Small-Batch Production',
                    ID: 'Produksi Batch Kecil Ramah Lingkungan'
                  }
                }
              ].map((item, i) => (
                <div key={i} className="commitment-item">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', color: 'var(--bb-navy)', lineHeight: 1, marginBottom: '16px' }}>
                    {item.value}
                    {item.unit && <span style={{ fontSize: '0.35em', marginLeft: '6px', color: 'var(--bb-orange)' }}>{item.unit}</span>}
                  </div>
                  <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '13px', fontWeight: 600, color: 'var(--bb-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {lang === 'EN' ? item.label.EN : item.label.ID}
                  </div>
                </div>
              ))}
            </div>
            {/* Tagline */}
            <p style={{
              textAlign: 'center', marginTop: '40px',
              fontFamily: 'var(--font-condensed)',
              fontSize: '14px', fontWeight: 600,
              color: 'var(--bb-muted)',
              letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>
              {t(
                'Every product carries a story — from waste to craft.',
                'Setiap produk membawa cerita — dari limbah menjadi karya.'
              )}
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* ── SECTION 4: TIMELINE ────────────────────────────────────────── */}
      <section style={{ background: 'var(--bb-cream)', padding: '120px 0' }}>
        <div className="section-container">
          <RevealWrapper>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>{t('Our Journey', 'Perjalanan Kami')}</span>
            <h2 style={{ color: 'var(--bb-navy)', marginBottom: '60px', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              {lang === 'EN' ? (
                <>WHERE WE STARTED,<br />WHERE WE'RE GOING.</>
              ) : (
                <>DARI MANA KAMI MULAI,<br />KE MANA KAMI PERGI.</>
              )}
            </h2>
          </RevealWrapper>

          <div style={{ maxWidth: '800px' }}>
            {[
              { date: '2025', titleEN: 'BintikBumi Founded', titleID: 'BintikBumi Didirikan', descEN: 'Ismadianty Alifa Aziz starts BintikBumi with a mission to transform ulin wood waste into premium design material.', descID: 'Ismadianty Alifa Aziz mendirikan BintikBumi dengan misi mengubah limbah kayu ulin menjadi material desain premium.', status: 'done' },
              { date: '2026', titleEN: 'MOU with DeKayu Indonesia', titleID: 'MOU dengan DeKayu Indonesia', descEN: 'BintikBumi signs an MOU with DeKayu Indonesia for premium ulin wood waste supply.', descID: 'BintikBumi menandatangani MOU dengan DeKayu Indonesia untuk pasokan limbah kayu ulin premium.', status: 'done' },
              { date: '2026+', titleEN: 'Expansion into Furniture & Interior', titleID: 'Ekspansi ke Furnitur & Interior', descEN: 'Growing product lines into furniture, interior material, and design collaboration with Indonesian creatives.', descID: 'Memperluas lini produk ke furnitur, material interior, dan kolaborasi desain dengan kreatif Indonesia.', status: 'progress' },
            ].map((item, i) => (
              <RevealWrapper key={i} delay={0.1 * i}>
                <div style={{ display: 'flex', gap: '32px', paddingBottom: '32px', borderBottom: i < 2 ? '1px solid var(--bb-border)' : 'none', marginBottom: i < 2 ? '32px' : 0 }}>
                  <div style={{ flexShrink: 0, width: '80px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: item.status === 'done' ? 'var(--bb-orange)' : 'var(--bb-muted)', opacity: item.status === 'done' ? 1 : 0.4 }}>
                      {item.date}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--bb-navy)', letterSpacing: '0.02em', marginBottom: '8px' }}>
                      {lang === 'EN' ? item.titleEN : item.titleID}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--bb-muted)', lineHeight: 1.6 }}>
                      {lang === 'EN' ? item.descEN : item.descID}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, padding: '4px 12px',
                      background: item.status === 'done' ? 'rgba(224,92,58,0.1)' : item.status === 'progress' ? 'rgba(224,92,58,0.05)' : 'rgba(0,0,0,0.03)',
                      color: item.status === 'done' ? 'var(--bb-orange)' : item.status === 'progress' ? 'var(--bb-orange)' : 'var(--bb-muted)',
                      fontFamily: 'var(--font-condensed)', textTransform: 'uppercase', letterSpacing: '0.06em'
                    }}>
                      {item.status === 'done' ? t('Done', 'Selesai') : item.status === 'progress' ? t('In Progress', 'Berjalan') : t('Upcoming', 'Segera')}
                    </span>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
