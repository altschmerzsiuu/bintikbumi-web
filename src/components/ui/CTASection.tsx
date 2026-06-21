import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import RevealWrapper from './RevealWrapper';
import bgStep3 from '../../assets/process/step3.jpeg';

interface CTASectionProps {
  titleEN?: string;
  titleID?: string;
  descEN?: string;
  descID?: string;
  btnTextEN?: string;
  btnTextID?: string;
}

export default function CTASection({
  titleEN = "READY TO START?",
  titleID = "SIAP UNTUK MULAI?",
  descEN = "Let's build a sustainable future together.",
  descID = "Mari bangun masa depan berkelanjutan bersama.",
  btnTextEN = "Get in Touch",
  btnTextID = "Hubungi Kami"
}: CTASectionProps) {
  const { lang } = useLanguage();

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${bgStep3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll',
      overflow: 'hidden'
    }}>
      {/* Navy overlay, very thin (e.g. 0.35 opacity) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(20, 33, 51, 0.35)',
        zIndex: 1
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: '800px'
      }}>
        <RevealWrapper>
          <h2 style={{
            color: 'white',
            marginBottom: '20px',
            fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
            lineHeight: 1.05,
            fontFamily: 'var(--font-display)',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em'
          }}>
            {lang === 'EN' ? titleEN : titleID}
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '540px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            {lang === 'EN' ? descEN : descID}
          </p>
          <NavLink to="/contact" className="btn btn-primary" style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 28px', 
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontFamily: 'var(--font-condensed)',
            borderRadius: 0,
            background: 'var(--bb-orange)',
            color: 'white',
            border: 'none',
            transition: 'all 0.3s ease'
          }}>
            {lang === 'EN' ? btnTextEN : btnTextID} <span>→</span>
          </NavLink>
        </RevealWrapper>
      </div>
    </section>
  );
}
