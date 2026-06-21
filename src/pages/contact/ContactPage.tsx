import { useState, FormEvent } from 'react';
import { ChevronDown, Loader2, CheckCircle, Send } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import RevealWrapper from '../../components/ui/RevealWrapper';
import { supabase } from '../../lib/supabase';
import { BB_FAQS, BB_INQUIRY_CATEGORIES, BB_INQUIRY_ROLES, BB_CONFIG } from '../../data/content';

interface BBContactForm {
  fullName: string; email: string;
  role: string; productInterest: string; kategori: string; pesan: string;
}

const INITIAL_FORM: BBContactForm = {
  fullName: '', email: '',
  role: '', productInterest: '', kategori: '', pesan: ''
};

const sanitizeInput = (val: string, maxLength: number): string => {
  return val
    .replace(/<[^>]*>/g, '') // Strip any HTML tags to prevent XSS
    .trim()
    .slice(0, maxLength);
};

export default function ContactPage() {
  const [form, setForm] = useState<BBContactForm>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const { lang, t } = useLanguage();

  const set = (key: keyof BBContactForm, value: string) =>
    setForm(f => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // 1. Sanitize input fields
    const cleanName = sanitizeInput(form.fullName, 100);
    const cleanEmail = sanitizeInput(form.email, 100);
    const cleanPesan = sanitizeInput(form.pesan, 1000);
    const cleanRole = sanitizeInput(form.role, 50);
    const cleanKategori = sanitizeInput(form.kategori, 50);

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      alert(t('Please enter a valid email address.', 'Silakan masukkan alamat email yang valid.'));
      return;
    }

    if (!cleanName) {
      alert(t('Please enter your full name.', 'Silakan masukkan nama lengkap Anda.'));
      return;
    }

    setLoading(true);

    // Split full name into first and last name for database compatibility
    const nameParts = cleanName.split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    try {
      // 3. Insert into Supabase database as a backup (using parameterized insert under the hood via PostgREST to prevent SQL Injection)
      await supabase
        .from('bintikbumi_contact_submissions')
        .insert([{
          first_name: firstName,
          last_name: lastName,
          email: cleanEmail,
          country_code: '',
          phone_number: '',
          full_phone: '',
          country: '',
          province: '',
          city: '',
          role: cleanRole,
          product_interest: '',
          kategori: cleanKategori,
          pesan: cleanPesan,
        }]);
    } catch (err) {
      console.error('[BintikBumi Contact DB Log]', err);
      // Suppress DB error so WhatsApp redirect always fires even if DB connection is blocked
    }

    // 4. Reconstruct form fields into a neat WhatsApp template message
    const waMessage = `*BintikBumi Inquiry*
-------------------------
*Nama:* ${cleanName}
*Email:* ${cleanEmail}
*Peran:* ${cleanRole || '-'}
*Kategori:* ${cleanKategori || '-'}
*Pesan:* ${cleanPesan || '-'}`;

    // Clean owner's whatsapp number from config
    const cleanOwnerPhone = BB_CONFIG.whatsapp.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanOwnerPhone}?text=${encodeURIComponent(waMessage)}`;

    // 5. Open WhatsApp link (secure against tab-nabbing using noopener,noreferrer)
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSent(true);
    setForm(INITIAL_FORM);
    setLoading(false);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="w-full">
      {/* ── SECTION 1 — HERO ────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bb-navy)',
        paddingTop: 'calc(64px + clamp(4rem, 8vw, 6rem))',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
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

        <div className="section-container" style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
          <RevealWrapper>
            <span className="section-label" style={{ color: 'var(--bb-orange)', marginBottom: '16px', display: 'block' }}>
              {t('Contact', 'Kontak')}
            </span>
            <h1 style={{ color: 'white', marginBottom: '24px', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1 }}>
              {lang === 'EN' ? (
                <>LET'S CREATE<br />SOMETHING<br />TOGETHER.</>
              ) : (
                <>MARI CIPTAKAN<br />SESUATU<br />BERSAMA.</>
              )}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0 auto', fontSize: '1.125rem', lineHeight: 1.6 }}>
              {t(
                'Custom orders, wholesale, collaborations, or just a question. We\'d love to hear from you.',
                'Pesanan custom, grosir, kolaborasi, atau sekadar pertanyaan. Kami ingin mendengar dari kamu.'
              )}
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* ── SECTION 2 — BODY (two column) ──────────────────────────────── */}
      <section style={{ background: 'var(--bb-light)', padding: '100px 0' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'stretch' }}>

            {/* LEFT — Form */}
            <RevealWrapper className="h-full">
              <form onSubmit={handleSubmit} style={{ background: 'white', padding: '40px', border: '1px solid var(--bb-border)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.5rem',
                  color: 'var(--bb-navy)', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.04em'
                }}>
                  {t('Inquiry Form', 'Formulir Inquiry')}
                </h2>

                {/* Name */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--bb-navy)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontFamily: 'var(--font-condensed)' }}>{t('Full Name', 'Nama Lengkap')}</label>
                  <input required style={{ width: '100%', padding: '12px 16px', background: 'var(--bb-light)', border: '1px solid var(--bb-border)', color: 'var(--bb-navy)', outline: 'none' }} placeholder="John Doe"
                    value={form.fullName}
                    onChange={e => set('fullName', e.target.value)} />
                </div>

                {/* Email */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--bb-navy)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontFamily: 'var(--font-condensed)' }}>{t('Email', 'Email')}</label>
                  <input required type="email" style={{ width: '100%', padding: '12px 16px', background: 'var(--bb-light)', border: '1px solid var(--bb-border)', color: 'var(--bb-navy)', outline: 'none' }} placeholder="john@example.com"
                    value={form.email}
                    onChange={e => set('email', e.target.value)} />
                </div>

                {/* Role chips */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--bb-navy)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', fontFamily: 'var(--font-condensed)' }}>{t("I am a...", 'Saya adalah...')}</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {BB_INQUIRY_ROLES[lang].map(role => (
                      <button key={role} type="button" onClick={() => set('role', role)}
                        style={{
                          padding: '8px 16px',
                          border: '1px solid',
                          borderColor: form.role === role ? 'var(--bb-orange)' : 'var(--bb-border)',
                          background: form.role === role ? 'rgba(224,92,58,0.05)' : 'white',
                          color: form.role === role ? 'var(--bb-orange)' : 'var(--bb-muted)',
                          fontFamily: 'var(--font-condensed)', textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '12px', fontWeight: 600,
                          cursor: 'pointer', transition: 'all 200ms'
                        }}>
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category dropdown */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--bb-navy)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontFamily: 'var(--font-condensed)' }}>{t('Inquiry Category', 'Kategori Inquiry')}</label>
                  <div style={{ position: 'relative' }}>
                    <select required style={{ width: '100%', padding: '12px 16px', background: 'var(--bb-light)', border: '1px solid var(--bb-border)', color: form.kategori ? 'var(--bb-navy)' : '#bbb', appearance: 'none', outline: 'none' }} value={form.kategori}
                      onChange={e => set('kategori', e.target.value)}>
                      <option value="" disabled>{t('-- Select --', '-- Pilih --')}</option>
                      {BB_INQUIRY_CATEGORIES[lang].map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    <ChevronDown size={14} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4, pointerEvents: 'none' }} />
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--bb-navy)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontFamily: 'var(--font-condensed)' }}>{t('Message (Optional)', 'Pesan (Opsional)')}</label>
                  <textarea rows={4} style={{ width: '100%', padding: '16px', background: 'var(--bb-light)', border: '1px solid var(--bb-border)', color: 'var(--bb-navy)', outline: 'none', resize: 'vertical' }}
                    placeholder={t('Tell us about your project...', 'Ceritakan tentang proyekmu...')}
                    value={form.pesan} onChange={e => set('pesan', e.target.value)} />
                </div>

                {/* Submit */}
                <button type="submit" disabled={loading || sent}
                  style={{
                    width: '100%', padding: '18px',
                    background: sent ? '#3DB97A' : 'var(--bb-orange)',
                    color: 'white', border: 'none', cursor: loading || sent ? 'default' : 'pointer',
                    fontFamily: 'var(--font-condensed)', fontSize: '14px', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    opacity: loading ? 0.7 : 1, transition: 'all 300ms',
                    marginTop: 'auto'
                  }}>
                  {loading ? <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> {t('Sending...', 'Mengirim...')}</>
                    : sent ? <><CheckCircle size={18} /> {t('Sent!', 'Terkirim!')}</>
                      : <><Send size={18} /> {t('Submit Inquiry', 'Kirim Inquiry')}</>}
                </button>
              </form>
            </RevealWrapper>

            {/* RIGHT — Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px', height: '100%' }}>

              {/* Info card (navy) */}
              <RevealWrapper delay={0.2}>
                <div style={{ background: 'var(--bb-navy)', padding: '32px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'white', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '24px' }}>
                    {t('Contact Points', 'Titik Kontak')}
                  </h3>
                  {[
                    { labelEN: 'Location', labelID: 'Lokasi', val: BB_CONFIG.location },
                    { labelEN: 'Email', labelID: 'Email', val: BB_CONFIG.email, href: `mailto:${BB_CONFIG.email}` },
                    { labelEN: 'WhatsApp', labelID: 'WhatsApp', val: t('Chat on WhatsApp', 'Chat via WhatsApp'), href: `https://wa.me/${BB_CONFIG.whatsapp.replace(/[^0-9]/g, '')}` },
                    { labelEN: 'Instagram', labelID: 'Instagram', val: `@${BB_CONFIG.instagram.split('/').pop() || 'BintikBumi'}`, href: BB_CONFIG.instagram },
                  ].map((item, idx) => (
                    <div key={idx} style={{ marginBottom: '20px' }}>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px', fontFamily: 'var(--font-condensed)' }}>
                        {t(item.labelEN, item.labelID)}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.8)',
                            lineHeight: 1.5,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'color 0.2s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bb-orange)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                        >
                          {item.val} <span style={{ fontSize: '11px', opacity: 0.6 }}>↗</span>
                        </a>
                      ) : (
                        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{item.val}</div>
                      )}
                    </div>
                  ))}
                </div>
              </RevealWrapper>

              {/* FAQ accordion */}
              <RevealWrapper delay={0.4} className="flex-1 flex flex-col">
                <div style={{ background: 'white', padding: '24px', border: '1px solid var(--bb-border)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--bb-navy)', letterSpacing: '0.02em', marginBottom: '20px' }}>
                    {t('Common Questions', 'Pertanyaan Umum')}
                  </h3>
                  {BB_FAQS.map((faq, i) => (
                    <div key={i} style={{ borderBottom: i < BB_FAQS.length - 1 ? '1px solid var(--bb-border)' : 'none', marginBottom: '12px', paddingBottom: i < BB_FAQS.length - 1 ? '12px' : 0 }}>
                      <button type="button" onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                        style={{ width: '100%', padding: '8px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', textAlign: 'left' }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: faqOpen === i ? 'var(--bb-orange)' : 'var(--bb-navy)', fontFamily: 'var(--font-condensed)', textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.4 }}>
                          {t(faq.qEN, faq.qID)}
                        </span>
                        <span style={{ color: 'var(--bb-muted)', fontSize: '18px', flexShrink: 0, transform: faqOpen === i ? 'rotate(45deg)' : 'none', transition: 'transform 300ms', display: 'inline-block', lineHeight: 1 }}>+</span>
                      </button>
                      {faqOpen === i && (
                        <p style={{ fontSize: '13px', color: 'var(--bb-muted)', lineHeight: 1.65, padding: '8px 0 16px' }}>
                          {t(faq.aEN, faq.aID)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
