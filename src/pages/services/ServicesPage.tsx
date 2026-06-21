
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import RevealWrapper from '../../components/ui/RevealWrapper';
import { BB_SERVICES } from '../../data/content';
import CTASection from '../../components/ui/CTASection';

export default function ServicesPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="w-full">
      <section style={{
        background: 'var(--bb-cream)',
        paddingTop: 'calc(64px + clamp(4rem, 8vw, 6rem))',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        borderBottom: '1px solid var(--bb-border)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Full-width Terrazzo Wood/Stone Aggregate Motif Wallpaper (Inspired by gemin.png) */}
        <svg viewBox="0 0 1200 350" preserveAspectRatio="xMidYMid slice" style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.07,
          pointerEvents: 'none',
          zIndex: 1
        }}>
          {/* Left Area (0 - 400) */}
          <polygon points="40,30 55,20 60,35 45,45" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="120,80 140,75 135,95 115,90" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="260,40 280,35 275,55 250,50" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="80,180 95,170 100,190 85,200" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="220,160 238,150 235,170 215,180" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="380,60 395,50 400,70 385,80" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="300,220 318,210 315,230 295,240" fill="var(--bb-orange)" opacity="0.95" />

          <polygon points="25,65 35,60 30,75" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="90,25 102,20 95,35" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="180,30 190,22 185,40" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="230,70 240,65 235,80" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="310,90 320,85 315,100" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="390,140 405,135 395,155" fill="var(--bb-orange)" opacity="0.8" />

          <polygon points="50,130 65,125 55,145" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="150,120 162,115 155,135" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="200,100 215,95 205,115" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="270,140 285,135 275,155" fill="var(--bb-orange)" opacity="0.8" />

          <circle cx="70" cy="80" r="3" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="160" cy="50" r="2.5" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="210" cy="50" r="3.5" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="290" cy="70" r="3" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="360" cy="110" r="2.5" fill="var(--bb-orange)" opacity="0.9" />

          {/* Middle Area (400 - 800) */}
          <polygon points="450,80 470,70 475,90 455,100" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="580,40 595,30 600,50 585,60" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="690,120 710,110 705,130 685,140" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="510,180 528,170 525,190 505,200" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="620,240 638,230 635,250 615,260" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="760,200 780,195 775,215 750,210" fill="var(--bb-orange)" opacity="0.95" />

          <polygon points="430,120 442,115 435,135" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="480,30 490,22 485,40" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="550,110 562,105 555,125" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="630,70 642,65 635,85" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="670,180 682,175 675,195" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="720,50 732,45 725,65" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="790,120 802,115 795,135" fill="var(--bb-orange)" opacity="0.8" />

          <circle cx="470" cy="150" r="3" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="530" cy="60" r="2.5" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="610" cy="140" r="3.5" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="660" cy="220" r="2" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="740" cy="90" r="3" fill="var(--bb-orange)" opacity="0.9" />

          {/* Right Area (800 - 1200) */}
          <polygon points="850,50 870,40 875,60 855,70" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="940,90 955,80 960,100 945,110" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="1080,60 1100,55 1095,75 1070,70" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="910,190 928,180 925,200 905,210" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="1010,230 1028,220 1025,240 1005,250" fill="var(--bb-orange)" opacity="0.95" />
          <polygon points="1130,180 1148,170 1145,190 1125,200" fill="var(--bb-orange)" opacity="0.95" />

          <polygon points="830,120 842,115 835,135" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="890,30 900,22 895,40" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="980,130 992,125 985,145" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="1050,110 1062,105 1055,125" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="1090,220 1102,215 1095,230" fill="var(--bb-orange)" opacity="0.8" />
          <polygon points="1170,80 1182,75 1175,95" fill="var(--bb-orange)" opacity="0.8" />

          <circle cx="870" cy="150" r="3" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="960" cy="40" r="2.5" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="1020" cy="110" r="3.5" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="1060" cy="170" r="2" fill="var(--bb-orange)" opacity="0.9" />
          <circle cx="1150" cy="130" r="3" fill="var(--bb-orange)" opacity="0.9" />

          {/* Random fine speckles distributed globally */}
          <circle cx="50" cy="110" r="1" fill="var(--bb-orange)" opacity="0.6" />
          <circle cx="150" cy="220" r="1.5" fill="var(--bb-orange)" opacity="0.6" />
          <circle cx="280" cy="170" r="1" fill="var(--bb-orange)" opacity="0.6" />
          <circle cx="350" cy="250" r="1.5" fill="var(--bb-orange)" opacity="0.6" />
          <circle cx="480" cy="90" r="1" fill="var(--bb-orange)" opacity="0.6" />
          <circle cx="590" cy="190" r="1.5" fill="var(--bb-orange)" opacity="0.6" />
          <circle cx="680" cy="70" r="1" fill="var(--bb-orange)" opacity="0.6" />
          <circle cx="790" cy="240" r="1.5" fill="var(--bb-orange)" opacity="0.6" />
          <circle cx="890" cy="130" r="1.2" fill="var(--bb-orange)" opacity="0.6" />
          <circle cx="990" cy="210" r="1.5" fill="var(--bb-orange)" opacity="0.6" />
          <circle cx="1090" cy="80" r="1" fill="var(--bb-orange)" opacity="0.6" />
          <circle cx="1180" cy="190" r="1.5" fill="var(--bb-orange)" opacity="0.6" />
        </svg>

        {/* Decorative blueprint-like thin vertical grid lines */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '15%',
          width: '1px',
          background: 'var(--bb-border)',
          opacity: 0.25,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: '25%',
          width: '1px',
          background: 'var(--bb-border)',
          opacity: 0.25,
          pointerEvents: 'none'
        }} />

        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'end'
          }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <RevealWrapper>
                  <span className="section-label" style={{ display: 'inline-block', marginBottom: '24px', color: 'var(--bb-orange)' }}>
                    {t('What We Offer', 'Apa yang Kami Tawarkan')}
                  </span>
                  <h1 style={{
                    color: 'var(--bb-navy)',
                    margin: 0,
                    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                    lineHeight: 0.9,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase'
                  }}>
                    {lang === 'EN' ? (
                      <>OUR<br />SERVICES.</>
                    ) : (
                      <>LAYANAN<br />KAMI.</>
                    )}
                  </h1>
                </RevealWrapper>
              </div>
            </div>

            <div style={{
              borderLeft: '1px solid var(--bb-border)',
              paddingLeft: 'clamp(20px, 5vw, 40px)',
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: '180px'
            }}>
              <RevealWrapper delay={0.15}>
                <p style={{
                  color: 'var(--bb-navy)',
                  fontSize: '1.25rem',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                  maxWidth: '440px',
                  fontWeight: 400
                }}>
                  {t(
                    'From single custom pieces to large-scale supply. We work with individuals, designers, and businesses.',
                    'Dari satu potongan custom hingga pasokan skala besar. Kami bekerja dengan individu, desainer, dan bisnis.'
                  )}
                </p>

                {/* Minimalist interactive anchor tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {[
                    { labelEN: 'Custom Orders', labelID: 'Pesanan Kustom', targetId: 'custom-order' },
                    { labelEN: 'Commercial Supply', labelID: 'Pasokan Komersial', targetId: 'wholesale' },
                    { labelEN: 'Design Collabs', labelID: 'Kolaborasi Desain', targetId: 'design-collab' }
                  ].map((btn) => (
                    <button
                      key={btn.targetId}
                      onClick={() => {
                        const el = document.getElementById(btn.targetId);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      style={{
                        border: '1px solid var(--bb-border)',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        background: 'rgba(255,255,255,0.4)',
                        color: 'var(--bb-navy)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        outline: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--bb-navy)';
                        e.currentTarget.style.color = 'var(--bb-cream)';
                        e.currentTarget.style.borderColor = 'var(--bb-navy)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
                        e.currentTarget.style.color = 'var(--bb-navy)';
                        e.currentTarget.style.borderColor = 'var(--bb-border)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {lang === 'EN' ? btn.labelEN : btn.labelID}
                    </button>
                  ))}
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — SERVICE CARDS ──────────────────────────────────── */}
      {BB_SERVICES.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          style={{
            background: i % 2 === 0 ? 'var(--bb-light)' : 'white',
            padding: '120px 0',
            borderBottom: '1px solid var(--bb-border)',
            scrollMarginTop: '72px'
          }}
        >
          <div className="section-container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '60px',
              alignItems: 'center',
              direction: i % 2 === 1 ? 'rtl' : 'ltr'
            }}>

              {/* Photo */}
              {/* Photo */}
              <RevealWrapper>
                <div style={{
                  width: '100%', aspectRatio: '4/3',
                  background: 'rgba(20,33,51,0.04)',
                  position: 'relative', // Penting untuk layout gambar
                  overflow: 'hidden',   // Penting agar gambar tidak keluar batas
                  direction: 'ltr'
                }}>

                  {service.image ? (
                    <img
                      src={service.image}
                      alt={lang === 'EN' ? service.titleEN : service.titleID}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        inset: 0
                      }}
                    />
                  ) : (
                    /* Placeholder kalau gambar kosong/tidak ketemu */
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '11px', color: 'rgba(20,33,51,0.2)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-condensed)' }}>
                        Service photo — {service.id}
                      </span>
                    </div>
                  )}

                </div>
              </RevealWrapper>

              {/* Content */}
              <RevealWrapper delay={0.2}>
                <div style={{ direction: 'ltr' }}>
                  <span className="section-label" style={{ display: 'block', marginBottom: '16px', color: 'var(--bb-orange)' }}>
                    {`0${i + 1}`}
                  </span>
                  <h2 style={{ color: 'var(--bb-navy)', marginBottom: '24px', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    {lang === 'EN' ? service.titleEN.toUpperCase() : service.titleID.toUpperCase()}
                  </h2>
                  <p style={{ color: 'var(--bb-muted)', marginBottom: '32px', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '480px' }}>
                    {lang === 'EN' ? service.descEN : service.descID}
                  </p>
                  <NavLink to="/contact" className="btn btn-primary" style={{ padding: '16px 32px' }}>
                    {lang === 'EN' ? service.ctaEN : service.ctaID}
                  </NavLink>
                </div>
              </RevealWrapper>

            </div>
          </div>
        </section>
      ))}

      {/* ── SECTION 3 — BOTTOM CTA ──────────────────────────────────────── */}
      <CTASection />
    </div>
  );
}
