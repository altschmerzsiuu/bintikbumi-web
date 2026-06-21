import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import RevealWrapper from '../../components/ui/RevealWrapper';
import { BB_GALLERY, BB_GALLERY_CATEGORIES } from '../../data/content';
import CTASection from '../../components/ui/CTASection';

export default function GalleryPage() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? BB_GALLERY : BB_GALLERY.filter(g => g.category === activeFilter);

  return (
    <div className="w-full">
      {/* ── SECTION 1: HERO ──────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bb-navy)',
        padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(3rem, 5vw, 5rem)',
        paddingTop: 'calc(64px + clamp(3rem, 5vw, 5rem))',
      }}>
        <div className="section-container">
          <RevealWrapper>
            <span className="section-label" style={{ color: 'var(--bb-orange)', marginBottom: '16px', display: 'block' }}>
              {t('Gallery', 'Galeri')}
            </span>
            <h1 style={{ color: 'white', maxWidth: '560px', marginBottom: '20px', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1 }}>
              {lang === 'EN' ? (
                <>OUR WORK<br />IN THE WORLD.</>
              ) : (
                <>KARYA KAMI<br />DI DUNIA.</>
              )}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '400px', fontSize: '1.125rem' }}>
              {t(
                'From cafés to homes. Here is BintikBumi applied in real spaces.',
                'Dari kafe hingga rumah. Inilah BintikBumi yang diterapkan di ruang nyata.'
              )}
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* ── SECTION 2: FILTER + GRID ────────────────────────────────────── */}
      <section style={{ background: 'var(--bb-cream)', padding: '100px 0', minHeight: '80vh' }}>
        <div className="section-container">

          {/* Filter chips */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {BB_GALLERY_CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                style={{
                  fontFamily: 'var(--font-condensed)', fontSize: '13px', fontWeight: 700,
                  padding: '8px 20px', textTransform: 'uppercase', letterSpacing: '0.06em',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? 'var(--bb-navy)' : 'var(--bb-border)',
                  background: activeFilter === cat ? 'var(--bb-navy)' : 'transparent',
                  color: activeFilter === cat ? 'white' : 'var(--bb-muted)',
                  cursor: 'pointer', transition: 'all 200ms'
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={activeFilter === 'All' ? 'gallery-grid' : 'gallery-grid-regular'}>
            {filtered.map((item, i) => (
              <RevealWrapper 
                key={item.id} 
                delay={(i % 3) * 0.1}
                className={activeFilter === 'All' ? `bento-item-${i}` : ''}
              >
                <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bb-navy)', width: '100%', height: '100%' }} className="group cursor-pointer">
                  {/* Image wrapper */}
                  <div 
                    className="gallery-card-img-wrapper group-hover:scale-105" 
                    style={{
                      width: '100%',
                      transition: 'transform 700ms ease',
                      aspectRatio: activeFilter === 'All' ? undefined : (i % 2 === 0 ? '4/3' : '3/4')
                    }}
                  >
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={lang === 'EN' ? item.titleEN : item.titleID}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: `hsl(${210 + (i % 5) * 8}, 30%, ${15 + (i % 3) * 5}%)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.15)', fontFamily: 'var(--font-condensed)', textTransform: 'uppercase' }}>Photo</span>
                      </div>
                    )}
                  </div>

                  {/* Gradient Overlay for Text */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,24,37,0.9), transparent)', opacity: 0.8, transition: 'opacity 300ms' }} className="group-hover:opacity-100" />

                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                    <div style={{ fontSize: '10px', color: 'var(--bb-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-condensed)', marginBottom: '6px' }}>
                      {item.tag}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'white', letterSpacing: '0.02em', transform: 'translateY(5px)', transition: 'transform 300ms' }} className="group-hover:translate-y-0">
                      {lang === 'EN' ? item.titleEN : item.titleID}
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ padding: '60px', textAlign: 'center', color: 'var(--bb-muted)', fontFamily: 'var(--font-condensed)' }}>
              {t('No items found in this category.', 'Tidak ada item di kategori ini.')}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
