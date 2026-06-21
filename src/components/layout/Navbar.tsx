import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useScroll } from '../../hooks';
import { useLanguage } from '../../hooks/useLanguage';
import logoImage from '../../assets/main/bintikbumi-logo.png';

const NAV_ITEMS = [
  { labelEN: 'Products',   labelID: 'Produk',        path: '/products'  },
  { labelEN: 'Services',   labelID: 'Layanan',       path: '/services'  },
  { labelEN: 'Impact',     labelID: 'Dampak',        path: '/impact'    },
  { labelEN: 'Gallery',    labelID: 'Galeri',        path: '/gallery'   },
  { labelEN: 'Contact',    labelID: 'Kontak',        path: '/contact'   },
];

export default function Navbar() {
  // Use scroll hook with threshold 30 as specified
  const scrolled = useScroll(30);
  const { lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Transparent by default (on top of hero), solid navy when scrolled
  const isServices = location.pathname === '/services';
  const isTransparent = !scrolled && !mobileOpen;
  
  const navClass = !isTransparent ? 'scrolled' : 'transparent';
  const navTheme = (isServices && isTransparent) ? 'dark-theme' : 'light-theme';

  return (
    <>
      <nav className={`navbar ${navClass} ${navTheme}`}>
        {/* LOGO */}
        <NavLink 
          to="/" 
          className="nav-logo"
          onClick={() => setMobileOpen(false)}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img 
            src={logoImage} 
            alt="BintikBumi" 
            style={{ 
              height: '40px', 
              width: 'auto', 
              display: 'block',
              filter: navTheme === 'dark-theme' && isTransparent ? 'invert(1)' : 'none' // Invert color if background is light/cream on transparent services hero
            }} 
          />
        </NavLink>

        {/* DESKTOP LINKS */}
        <div className="nav-links" style={{ gap: '1.75rem' }}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {lang === 'EN' ? item.labelEN : item.labelID}
            </NavLink>
          ))}

          {/* Vertical Separator Line */}
          <span style={{
            width: '1px',
            height: '14px',
            background: 'currentColor',
            opacity: 0.25,
            marginLeft: '0.5rem',
            marginRight: '0.5rem'
          }} />

          {/* Lang Toggle */}
          <button
            onClick={() => setLang(lang === 'EN' ? 'ID' : 'EN')}
            className="lang-toggle flex items-center justify-center text-white/80 hover:text-white transition-colors"
            style={{ 
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <Globe size={18} />
          </button>
        </div>

        {/* MOBILE BURGER */}
        <button className="burger-btn" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-nav ${mobileOpen ? 'active' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {lang === 'EN' ? item.labelEN : item.labelID}
          </NavLink>
        ))}

        <button
          onClick={() => {
            setLang(lang === 'EN' ? 'ID' : 'EN');
            setMobileOpen(false);
          }}
          className="flex items-center justify-center text-white/60 hover:text-bb-orange mt-8"
          style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
        >
          <Globe size={32} />
        </button>
      </div>
    </>
  );
}
