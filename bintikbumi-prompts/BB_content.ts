// ============================================================
// BINTIKBUMI — Static Content & Data
// All copy EN/ID in one place. Edit here → reflects everywhere.
// ============================================================

import type { FAQItem } from '../types';

// ── SITE CONFIG ───────────────────────────────────────────
export const BB_CONFIG = {
  name:        'BintikBumi',
  tagline:     'Creative Craft from Waste',
  taglineID:   'Kerajinan Kreatif dari Limbah',
  email:       'hello@bintikbumi.id',
  whatsapp:    '+62 812-xxxx-xxxx',   // Ismadianty to fill
  instagram:   '@bintikbumi',
  domain:      'bintikbumi.id',
  established: '2025',
  location:    'Indonesia',           // Ismadianty to fill with full address
  founder:     'Ismadianty Alifa Aziz',
  bumectraURL: 'https://bumectraproject.id',
};

// ── FEATURES / ADVANTAGES ────────────────────────────────
export const BB_FEATURES = [
  { en: 'Eco-Friendly Material',       id: 'Material Ramah Lingkungan'    },
  { en: 'Handcrafted Quality',          id: 'Kualitas Buatan Tangan'       },
  { en: 'Unique "Bintik" Texture',      id: 'Tekstur "Bintik" yang Unik'   },
  { en: 'Weather Resistant',            id: 'Tahan Cuaca'                  },
  { en: 'Premium Finish',               id: 'Finishing Premium'            },
  { en: 'Custom Order Available',       id: 'Tersedia Custom Order'        },
];

// ── HOW IT'S APPLIED ─────────────────────────────────────
export const BB_APPLICATIONS = [
  { en: 'Interior Wall Panel',  id: 'Panel Dinding Interior',  subEN: 'Elegant for indoor spaces',        subID: 'Elegan untuk ruang dalam'         },
  { en: 'Table Surface',        id: 'Permukaan Meja',          subEN: 'Functional and stylish',           subID: 'Fungsional dan bergaya'           },
  { en: 'Counter Panel',        id: 'Panel Konter',            subEN: 'Modern and durable',               subID: 'Modern dan tahan lama'            },
  { en: 'Furniture Accent',     id: 'Aksesori Furnitur',       subEN: 'Premium finishing touch',          subID: 'Sentuhan finishing premium'       },
  { en: 'Flooring Tile',        id: 'Ubin Lantai',             subEN: 'Easy to install',                  subID: 'Mudah dipasang'                   },
  { en: 'Outdoor Surface',      id: 'Permukaan Luar Ruangan',  subEN: 'Strong and eco-friendly',          subID: 'Kuat dan ramah lingkungan'        },
];

// ── PROCESS STEPS ─────────────────────────────────────────
export const BB_PROCESS = [
  {
    num:    '01',
    titleEN:'WE COLLECT ULIN WOOD WASTE',
    titleID:'KAMI KUMPULKAN LIMBAH KAYU ULIN',
    descEN: 'We source ulin wood waste from local industries and timber yards, giving discarded material a second life.',
    descID: 'Kami mengumpulkan limbah kayu ulin dari industri lokal dan penggergajian kayu, memberikan material yang terbuang kehidupan kedua.',
  },
  {
    num:    '02',
    titleEN:'WE CRAFT THE BINTIK MATERIAL',
    titleID:'KAMI OLAH MENJADI MATERIAL BINTIK',
    descEN: 'Through our proprietary process, wood fragments are combined with white cement to create the signature "Bintik" texture.',
    descID: 'Melalui proses kami yang khas, serpihan kayu digabungkan dengan semen putih untuk menciptakan tekstur "Bintik" yang khas.',
  },
  {
    num:    '03',
    titleEN:'WE CREATE HIGH-VALUE DESIGN',
    titleID:'KAMI PRODUKSI DESAIN BERNILAI TINGGI',
    descEN: 'The finished material is shaped into premium panels, tiles, and custom pieces ready for interior and exterior applications.',
    descID: 'Material jadi dibentuk menjadi panel, ubin, dan potongan custom premium yang siap untuk aplikasi interior dan eksterior.',
  },
];

// ── IMPACT NUMBERS ────────────────────────────────────────
export const BB_IMPACT = [
  { num: 'XX+', unitEN: 'KG',      labelEN: 'Ulin wood waste processed',    labelID: 'Limbah kayu ulin diolah'      },
  { num: 'XX+', unitEN: '',        labelEN: 'Design products crafted',       labelID: 'Produk desain dibuat'         },
  { num: 'XX+', unitEN: '',        labelEN: 'Clients & partners',            labelID: 'Klien & mitra'                },
];

// ── PRODUCTS ──────────────────────────────────────────────
export const BB_PRODUCTS = [
  { id: 'p01', nameEN: 'Bintik Panel Standard',  nameID: 'Panel Bintik Standard',  category: 'Panels',    descEN: 'Our signature ulin + white cement panel. Available in natural and polished finish.',  descID: 'Panel ulin + semen putih khas kami. Tersedia dalam finishing natural dan polished.' },
  { id: 'p02', nameEN: 'Bintik Panel Premium',   nameID: 'Panel Bintik Premium',   category: 'Panels',    descEN: 'Thicker, denser panel for high-traffic areas. Double-pressed for extra durability.', descID: 'Panel lebih tebal dan padat untuk area dengan lalu lintas tinggi. Double-press untuk ketahanan ekstra.' },
  { id: 'p03', nameEN: 'Bintik Floor Tile',       nameID: 'Ubin Lantai Bintik',     category: 'Tiles',     descEN: 'Floor-grade tile made from our Bintik material. Anti-slip surface.',               descID: 'Ubin kelas lantai dari material Bintik kami. Permukaan anti-slip.' },
  { id: 'p04', nameEN: 'Bintik Table Top',        nameID: 'Meja Bintik',            category: 'Furniture', descEN: 'Custom table tops in various sizes. Each piece has a unique natural pattern.',      descID: 'Meja custom berbagai ukuran. Setiap potongan memiliki pola alami yang unik.' },
  { id: 'p05', nameEN: 'Custom Shape Order',      nameID: 'Custom Bentuk',          category: 'Custom',    descEN: 'Bespoke shapes and sizes for your specific project needs. MOQ applies.',           descID: 'Bentuk dan ukuran khusus untuk kebutuhan proyek kamu. MOQ berlaku.' },
];

export const BB_PRODUCT_CATEGORIES = ['All', 'Panels', 'Tiles', 'Furniture', 'Custom'];

// ── SERVICES ──────────────────────────────────────────────
export const BB_SERVICES = [
  {
    id:      'custom',
    iconEN:  'Custom Order',
    iconID:  'Pesanan Custom',
    titleEN: 'Custom Order',
    titleID: 'Pesanan Custom',
    descEN:  'Have a specific design in mind? We work with you to create bespoke Bintik pieces tailored to your exact measurements, shapes, and finish preferences.',
    descID:  'Punya desain tertentu dalam pikiran? Kami bekerja sama dengan kamu untuk membuat potongan Bintik khusus yang disesuaikan dengan ukuran, bentuk, dan preferensi finishing yang tepat.',
    ctaEN:   'Start a Custom Order',
    ctaID:   'Mulai Pesanan Custom',
  },
  {
    id:      'wholesale',
    iconEN:  'Wholesale / B2B',
    iconID:  'Grosir / B2B',
    titleEN: 'Wholesale & B2B',
    titleID: 'Grosir & B2B',
    descEN:  'Contractors, developers, and interior designers — we supply Bintik material in volume. Get in touch to discuss pricing, MOQ, and delivery schedules.',
    descID:  'Kontraktor, developer, dan desainer interior — kami memasok material Bintik dalam volume. Hubungi kami untuk mendiskusikan harga, MOQ, dan jadwal pengiriman.',
    ctaEN:   'Get a Quote',
    ctaID:   'Dapatkan Penawaran',
  },
  {
    id:      'collab',
    iconEN:  'Design Collaboration',
    iconID:  'Kolaborasi Desain',
    titleEN: 'Design Collaboration',
    titleID: 'Kolaborasi Desain',
    descEN:  "Are you a designer, architect, or creative brand? Let's explore what we can build together. BintikBumi is always open to meaningful creative partnerships.",
    descID:  'Apakah kamu seorang desainer, arsitek, atau brand kreatif? Mari kita jelajahi apa yang bisa kita bangun bersama. BintikBumi selalu terbuka untuk kemitraan kreatif yang bermakna.',
    ctaEN:   'Propose a Collaboration',
    ctaID:   'Ajukan Kolaborasi',
  },
];

// ── CONTACT FAQs ──────────────────────────────────────────
export const BB_FAQS: FAQItem[] = [
  {
    qEN: 'What is BintikBumi made of?',
    qID: 'BintikBumi terbuat dari apa?',
    aEN: 'BintikBumi products are made from a combination of ulin (ironwood) wood waste and white cement. The result is a dense, durable material with a distinctive speckled "Bintik" pattern.',
    aID: 'Produk BintikBumi terbuat dari kombinasi limbah kayu ulin (kayu besi) dan semen putih. Hasilnya adalah material yang padat dan tahan lama dengan pola "Bintik" berbintik yang khas.',
  },
  {
    qEN: 'Can I order a custom size or shape?',
    qID: 'Bisakah saya memesan ukuran atau bentuk custom?',
    aEN: 'Yes! Custom orders are one of our core services. Contact us with your dimensions and requirements and we will work out the details together.',
    aID: 'Ya! Pesanan custom adalah salah satu layanan utama kami. Hubungi kami dengan dimensi dan kebutuhanmu dan kami akan menyelesaikan detailnya bersama.',
  },
  {
    qEN: 'What is the minimum order quantity?',
    qID: 'Berapa minimum order quantity-nya?',
    aEN: 'MOQ varies by product type. For standard panels and tiles, we can accommodate small orders. For wholesale and custom projects, please contact us directly for a quote.',
    aID: 'MOQ bervariasi tergantung jenis produk. Untuk panel dan ubin standar, kami bisa mengakomodasi pesanan kecil. Untuk proyek grosir dan custom, hubungi kami langsung untuk penawaran.',
  },
  {
    qEN: 'Do you ship outside of Indonesia?',
    qID: 'Apakah kalian kirim ke luar Indonesia?',
    aEN: 'We currently focus on domestic delivery, but we are open to international inquiries. Contact us to discuss shipping options for your location.',
    aID: 'Saat ini kami fokus pada pengiriman domestik, tetapi kami terbuka untuk pertanyaan internasional. Hubungi kami untuk mendiskusikan opsi pengiriman ke lokasimu.',
  },
];

// ── INQUIRY CATEGORIES ────────────────────────────────────
export const BB_INQUIRY_CATEGORIES = {
  EN: ['Product Inquiry', 'Custom Order', 'Wholesale / B2B', 'Design Collaboration', 'Partnership', 'Media & Press', 'General Inquiry'],
  ID: ['Pertanyaan Produk', 'Pesanan Custom', 'Grosir / B2B', 'Kolaborasi Desain', 'Kemitraan', 'Media & Pers', 'Pertanyaan Umum'],
};

export const BB_INQUIRY_ROLES = {
  EN: ['Individual Buyer', 'Interior Designer', 'Architect', 'Contractor / Developer', 'Retail Partner', 'Investor', 'Media', 'Other'],
  ID: ['Pembeli Individu', 'Desainer Interior', 'Arsitek', 'Kontraktor / Developer', 'Mitra Retail', 'Investor', 'Media', 'Lainnya'],
};

// ── GALLERY ITEMS ────────────────────────────────────────
export const BB_GALLERY = [
  { id: 'g01', titleEN: 'Café Counter, Balikpapan',    titleID: 'Konter Kafe, Balikpapan',    category: 'Commercial', tag: 'Counter Panel'   },
  { id: 'g02', titleEN: 'Private Home, Jakarta',       titleID: 'Rumah Pribadi, Jakarta',      category: 'Interior',   tag: 'Wall Panel'      },
  { id: 'g03', titleEN: 'Co-working Space',            titleID: 'Ruang Kerja Bersama',         category: 'Commercial', tag: 'Table Surface'   },
  { id: 'g04', titleEN: 'Outdoor Terrace',             titleID: 'Teras Luar Ruangan',          category: 'Outdoor',    tag: 'Flooring'        },
  { id: 'g05', titleEN: 'Restaurant Interior',         titleID: 'Interior Restoran',           category: 'Commercial', tag: 'Wall Panel'      },
  { id: 'g06', titleEN: 'Custom Furniture Piece',      titleID: 'Furnitur Custom',             category: 'Furniture',  tag: 'Custom'          },
];

export const BB_GALLERY_CATEGORIES = ['All', 'Interior', 'Furniture', 'Commercial', 'Outdoor'];
