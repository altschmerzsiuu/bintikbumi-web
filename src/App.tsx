import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

// Page Imports (will be created next)
import HomePage from './pages/home/HomePage.tsx';
import ProductsPage from './pages/products/ProductsPage.tsx';
import ServicesPage from './pages/services/ServicesPage.tsx';
import ImpactPage from './pages/impact/ImpactPage.tsx';
import GalleryPage from './pages/gallery/GalleryPage.tsx';
import ContactPage from './pages/contact/ContactPage.tsx';

// Layout Imports
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import ScrollToTop from './components/ui/ScrollToTop.tsx';

import { LanguageProvider } from './hooks/useLanguage';

// ── Routing Setup ─────────────────────────────────────────────
const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Main App ──────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    // Initialize Lenis for premium smooth scroll damping
    const lenis = new Lenis({
      duration: 2.5, // Slower, more elegant scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium exponential easing
      smoothWheel: true,
      wheelMultiplier: 0.45, // Significantly damp scroll speed so users cannot rush down the page
      touchMultiplier: 1.5,
      syncTouch: true, // Enable smooth scroll damping on touch devices (mobile)
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}
