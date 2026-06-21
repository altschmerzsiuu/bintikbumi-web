
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { BB_CONFIG } from '../../data/content';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-bb-navy text-white pt-24 pb-8 border-t border-white/5">
      <div className="section-container">

        {/* Top Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-20">

          {/* Column 1 — Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'white', letterSpacing: '0.04em', marginBottom: '8px' }}>
              BINTIKBUMI
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, maxWidth: '200px', marginBottom: '12px' }}>
              {t('Creative Craft from Waste.', 'Kerajinan Kreatif dari Limbah.')}
            </p>
          </div>

          {/* Column 2 — EKSPLOR */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h5 className="font-condensed text-white/40 tracking-widest text-xs mb-2 uppercase">
              {t('EXPLORE', 'EKSPLOR')}
            </h5>
            <Link to="/products" className="footer-link">{t('Products', 'Produk')}</Link>
            <Link to="/impact" className="footer-link">{t('Impact', 'Dampak')}</Link>
            <Link to="/services" className="footer-link">{t('Services', 'Layanan')}</Link>
            <Link to="/gallery" className="footer-link">{t('Gallery', 'Galeri')}</Link>
          </div>

          {/* Column 3 — PERUSAHAAN */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h5 className="font-condensed text-white/40 tracking-widest text-xs mb-2 uppercase">
              {t('COMPANY', 'PERUSAHAAN')}
            </h5>
            <Link to="/services" className="footer-link">{t('Partnership', 'Kemitraan')}</Link>
            <Link to="/contact" className="footer-link">{t('Contact', 'Kontak')}</Link>
            <a href={BB_CONFIG.instagram} target="_blank" rel="noreferrer" className="footer-link">
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>

          {/* Address & Email */}
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', lineHeight: 1.6 }}>
            <div>{BB_CONFIG.location}</div>
            <div>
              <a href={`mailto:${BB_CONFIG.email}`} className="hover:text-bb-orange transition-colors" style={{ textDecoration: 'none', color: 'inherit' }}>
                {BB_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} BintikBumi. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
