import type { ApplicationCard, ProcessStep, ImpactStat } from '../types';
import imgWallPanel from '../assets/products/a1-wallpanel.jpeg';
import imgTableSurface from '../assets/products/a2-tablesurface.jpeg';
import imgCounterPanel from '../assets/products/a3-counterpanel.jpeg';
import imgFurnitureAccent from '../assets/products/a4-furnitureaccent.jpeg';
import imgFlooringTile from '../assets/products/a5-flooringtile.jpeg';
import imgOutdoorSurface from '../assets/products/a6-outdoorsurface.jpeg';

import imgCustomOrder from '../assets/services/a1-customorder.jpeg'
import imgB2B from '../assets/services/a2-b2b.jpeg'
import imgDesignCollab from '../assets/services/a3-designcollab.jpeg'

import imgDemitasse from '../assets/cataloguecolor/a1-demitasse.png'
import imgBlueTurq from '../assets/cataloguecolor/a2-blueturquoise.png'
import imgAquaSky from '../assets/cataloguecolor/a3-aquasky.png'
import imgLimeZest from '../assets/cataloguecolor/a4-limezest.png'
import imgPowderBlue from '../assets/cataloguecolor/a5-powderblue.png'
import imgSilver from '../assets/cataloguecolor/a6-silver.png'
import imgTrueRed from '../assets/cataloguecolor/a6-truered.png'
import imgBuffOrange from '../assets/cataloguecolor/a7-bufforange.png'
import imgBrickDust from '../assets/cataloguecolor/a8-brickdust.png'
import imgGrapes from '../assets/cataloguecolor/a9-grapes.png'
import imgOri from '../assets/cataloguecolor/a10-original.png'
import imgLemonade from '../assets/cataloguecolor/a11-lemonade.png'
// import imgGeraniumPik from '../assets/cataloguecolor/a12-geraniumpink.png'

import imgG1 from '../assets/gallery/g1_living_room.png';
import imgG2 from '../assets/gallery/g2_dining_table.png';
import imgG3 from '../assets/gallery/g3_counter_display.png';
import imgG4 from '../assets/gallery/g4_garden_terrace.png';
import imgG5 from '../assets/gallery/g5_office_lobby.png';
import imgG6 from '../assets/gallery/g6_wood_flooring.png';
import imgG7 from '../assets/gallery/g7_cafe_bench.png';
import imgG8 from '../assets/gallery/g8_hotel_lobby.png';

// ── Products ─────────────────────────────────────────────
export const BB_PRODUCTS = [
  {
    id: 'original',
    nameEN: 'Original', nameID: 'Original',
    descEN: 'The authentic texture and natural color of reclaimed ulin wood. Timeless, sustainable, and purely organic.',
    descID: 'Warna asli serat kayu ulin reklamasi yang timeless. Vibe naturalnya dapet banget, ramah lingkungan, dan jujur apa adanya.',
    category: 'Classic',
    image: imgOri
  },
  {
    id: 'blue-turquoise',
    nameEN: 'Blue Turquoise', nameID: 'Blue Turquoise',
    descEN: 'A refreshing splash of teal that adds energy and character to any space. It\'s giving clean coastal aesthetic.',
    descID: 'Sentuhan warna toska yang segar untuk ngasih energi ekstra di ruangan lo. Cocok banget buat tema coastal yang chill.',
    category: 'Vibrant',
    image: imgBlueTurq
  },
  {
    id: 'aqua-sky',
    nameEN: 'Aqua Sky', nameID: 'Aqua Sky',
    descEN: 'A breezy, light blue-green shade that feels like a clear sunny day. Perfect for keeping the mood light and airy.',
    descID: 'Warna biru muda cerah yang calming banget. Bikin ruangan kerasa luas, adem, dan super welcoming.',
    category: 'Pastel',
    image: imgAquaSky
  },
  {
    id: 'lime-zest',
    nameEN: 'Lime Zest', nameID: 'Lime Zest',
    descEN: 'A bold, citrusy green that stands out and adds a playful pop of color. Rent-free in everyone\'s minds.',
    descID: 'Warna hijau segar yang bold dan playful. Pilihan tepat biar sudut ruangan lo kelihatan stand out dan gak ngebosenin.',
    category: 'Vibrant',
    image: imgLimeZest
  },
  {
    id: 'powder-blue',
    nameEN: 'Powder Blue', nameID: 'Powder Blue',
    descEN: 'Soft, soothing baby blue with a modern matte finish. It\'s giving ultimate relaxation and soft-boy aesthetic.',
    descID: 'Biru muda lembut dengan sentuhan modern. Paling pas buat ruang santai biar pikiran auto-calm setelah seharian beraktivitas.',
    category: 'Pastel',
    image: imgPowderBlue
  },
  {
    id: 'silver',
    nameEN: 'Silver', nameID: 'Silver',
    descEN: 'Sleek, industrial grey that coordinates with everything. A versatile staple for modern, minimalist spaces.',
    descID: 'Abu-abu industrial yang sleek dan versatile. Masuk ke gaya interior apa aja, dari yang minimalis sampai modern.',
    category: 'Classic',
    image: imgSilver
  },
  {
    id: 'true-red',
    nameEN: 'True Red', nameID: 'True Red',
    descEN: 'High-energy, passionate red that makes a dramatic statement. Bold, confident, and serving main character energy.',
    descID: 'Merah menyala yang berani dan penuh energi. Bikin furniture lo langsung jadi pusat perhatian di ruangan.',
    category: 'Vibrant',
    image: imgTrueRed
  },
  {
    id: 'buff-orange',
    nameEN: 'Buff Orange', nameID: 'Buff Orange',
    descEN: 'Warm, terracotta-leaning peach that adds cozy, sun-kissed vibes to any layout. Very warm, very demure.',
    descID: 'Warna peach hangat ala terracotta. Bawa vibe senja yang estetik dan super cozy ke dalam rumah lo.',
    category: 'Pastel',
    image: imgBuffOrange
  },
  {
    id: 'brick-dust',
    nameEN: 'Brick Dust', nameID: 'Brick Dust',
    descEN: 'Deep, earthy clay red that feels authentic and grounded. Perfect rustic warmth for cozy corners.',
    descID: 'Merah bata klasik yang natural dan bersahaja. Pilihan pas buat ngasih kehangatan rustic yang comforting.',
    category: 'Classic',
    image: imgBrickDust
  },
  {
    id: 'grapes',
    nameEN: 'Grapes', nameID: 'Grapes',
    descEN: 'A unique, deep purple shade that adds a touch of mystery and luxury. Definitely hits different.',
    descID: 'Ungu tua eksklusif yang artistik dan mewah. Vibe-nya unik, misterius, dan pastinya beda dari warna umum lainnya.',
    category: 'Vibrant',
    image: imgGrapes
  },
  {
    id: 'demitasse',
    nameEN: 'Demitasse', nameID: 'Demitasse',
    descEN: 'A deep, rich espresso brown that brings a grounded and sophisticated vibe. Pure luxury without trying too hard.',
    descID: 'Warna cokelat espresso pekat yang ngasih kesan kokoh dan mewah. Vibe-nya tenang, elegan, dan pastinya gak neko-neko.',
    category: 'Classic',
    image: imgDemitasse
  },
  {
    id: 'lemonade',
    nameEN: 'Lemonade', nameID: 'Lemonade',
    descEN: 'A bright, cheerful pastel yellow that instantly lifts the mood of the room. Pure dopamine decor.',
    descID: 'Kuning pastel cerah yang ceria dan penuh harapan. Bikin mood auto-boost dan ngasih kesan cerah walau cahaya minim.',
    category: 'Pastel',
    image: imgLemonade
  },
];

// ── Services ──────────────────────────────────────────────────
export const BB_SERVICES = [
  {
    id: 'custom-order',
    titleEN: 'Custom Order', titleID: 'Pesanan Khusus',
    descEN: 'Bespoke pieces designed precisely to your specifications. We collaborate closely with you from concept to completion.',
    descID: 'Karya unik yang dirancang sesuai spesifikasi Anda. Kami berkolaborasi erat dari konsep hingga selesai.',
    ctaEN: 'Discuss Your Idea', ctaID: 'Diskusikan Idenya',
    image: imgCustomOrder
  },
  {
    id: 'wholesale',
    titleEN: 'Custom / B2B', titleID: 'Custom / B2B',
    descEN: 'Large volume material supply for contractors, developers, and interior designers. Consistent quality, competitive pricing.',
    descID: 'Pasokan material volume besar untuk kontraktor, pengembang, dan desainer interior. Kualitas konsisten, harga kompetitif.',
    ctaEN: 'Get B2B Pricing', ctaID: 'Dapatkan Harga B2B',
    image: imgB2B
  },
  {
    id: 'design-collab',
    titleEN: 'Design Collaboration', titleID: 'Kolaborasi Desain',
    descEN: 'Work with our in-house design team to create something entirely new. Sustainable design meets your creative vision.',
    descID: 'Bekerja dengan tim desain kami untuk menciptakan sesuatu yang benar-benar baru. Desain berkelanjutan bertemu visi kreatif Anda.',
    ctaEN: 'Let\'s Collaborate', ctaID: 'Mari Berkolaborasi',
    image: imgDesignCollab
  },
];

// ── Gallery ───────────────────────────────────────────────────
export const BB_GALLERY_CATEGORIES = ['All', 'Interior', 'Furniture', 'Commercial', 'Outdoor'];

export const BB_GALLERY = [
  {
    id: 'g1',
    titleEN: 'Modern Living Room Panel', titleID: 'Panel Ruang Tamu Modern',
    category: 'Interior',
    tag: 'Balikpapan',
    image: imgG1,
  },
  {
    id: 'g2',
    titleEN: 'Custom Dining Table', titleID: 'Meja Makan Custom',
    category: 'Furniture',
    tag: 'Samarinda',
    image: imgG2,
  },
  {
    id: 'g3',
    titleEN: 'Commercial Counter Display', titleID: 'Display Counter Komersial',
    category: 'Commercial',
    tag: 'Jakarta',
    image: imgG3,
  },
  {
    id: 'g4',
    titleEN: 'Garden Terrace Surface', titleID: 'Permukaan Teras Taman',
    category: 'Outdoor',
    tag: 'Bali',
    image: imgG4,
  },
  {
    id: 'g5',
    titleEN: 'Office Lobby Accent', titleID: 'Aksen Lobi Kantor',
    category: 'Commercial',
    tag: 'Surabaya',
    image: imgG5,
  },
  {
    id: 'g6',
    titleEN: 'Eco-Friendly Wood Flooring', titleID: 'Lantai Kayu Ramah Lingkungan',
    category: 'Interior',
    tag: 'Pontianak',
    image: imgG6,
  },
  {
    id: 'g7',
    titleEN: 'Outdoor Cafe Bench', titleID: 'Bangku Kafe Outdoor',
    category: 'Furniture',
    tag: 'Makassar',
    image: imgG7,
  },
  {
    id: 'g8',
    titleEN: 'Premium Hotel Lobby Wall', titleID: 'Dinding Lobi Hotel Premium',
    category: 'Commercial',
    tag: 'Bandung',
    image: imgG8,
  },
];

// ── Applications ──────────────────────────────────────────────
export const BB_APPLICATIONS: ApplicationCard[] = [
  { id: 'a1', title: { EN: 'Interior Wall Panel', ID: 'Panel Dinding Interior' }, subtitle: { EN: 'Elegant for indoor spaces', ID: 'Elegan untuk ruang dalam' }, image: imgWallPanel },
  { id: 'a2', title: { EN: 'Table Surface', ID: 'Permukaan Meja' }, subtitle: { EN: 'Functional and stylish', ID: 'Fungsional dan stylish' }, image: imgTableSurface },
  { id: 'a3', title: { EN: 'Counter Panel', ID: 'Panel Counter' }, subtitle: { EN: 'Modern and durable', ID: 'Modern dan tahan lama' }, image: imgCounterPanel },
  { id: 'a4', title: { EN: 'Furniture Accent', ID: 'Aksen Furnitur' }, subtitle: { EN: 'Premium finishing touch', ID: 'Sentuhan finishing premium' }, image: imgFurnitureAccent },
  { id: 'a5', title: { EN: 'Flooring Tile', ID: 'Ubin Lantai' }, subtitle: { EN: 'Easy to install', ID: 'Mudah dipasang' }, image: imgFlooringTile },
  { id: 'a6', title: { EN: 'Outdoor Surface', ID: 'Permukaan Outdoor' }, subtitle: { EN: 'Strong and eco-friendly', ID: 'Kuat dan ramah lingkungan' }, image: imgOutdoorSurface },
];

// ── Process Steps ─────────────────────────────────────────────
export const BB_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: {
      EN: 'We Collect Ulin Wood Waste',
      ID: 'Kami Kumpulkan Limbah Kayu Ulin',
    },
  },
  {
    step: 2,
    title: {
      EN: 'We Craft the Bintik Material',
      ID: 'Kami Olah Menjadi Material Bintik',
    },
  },
  {
    step: 3,
    title: {
      EN: 'We Create High-Value Design',
      ID: 'Kami Produksi Desain Bernilai Tinggi',
    },
  },
];

// ── Impact Stats ──────────────────────────────────────────────
export const BB_IMPACT: ImpactStat[] = [
  {
    value: '500+',
    unit: 'KG',
    label: { EN: 'Ulin wood waste processed', ID: 'Limbah kayu ulin diolah' },
  },
  {
    value: '80+',
    unit: '',
    label: { EN: 'Design products crafted', ID: 'Produk desain dibuat' },
  },
  {
    value: '15+',
    unit: '',
    label: { EN: 'Clients & Partners', ID: 'Klien & Mitra' },
  },
];

// ── Features ──────────────────────────────────────────────────
export const BB_FEATURES = [
  { en: 'Eco-Friendly Material', id: 'Material Ramah Lingkungan' },
  { en: 'Handcrafted Quality', id: 'Kualitas Buatan Tangan' },
  { en: 'Unique "Bintik" Texture', id: 'Tekstur "Bintik" Unik' },
  { en: 'Weather Resistant', id: 'Tahan Cuaca' },
  { en: 'Premium Finish', id: 'Sentuhan Premium' },
  { en: 'Custom Order Available', id: 'Tersedia Pesanan Khusus' },
];

// ── FAQ ───────────────────────────────────────────────────────
export const BB_FAQS = [
  {
    qEN: 'What is the minimum order quantity?',
    qID: 'Berapa minimum pemesanan?',
    aEN: 'For custom orders, we work with quantities as small as 1 piece. For wholesale, minimum order is 50 units. Contact us to discuss your specific needs.',
    aID: 'Untuk pesanan custom, kami bekerja dengan jumlah sekecil 1 buah. Untuk grosir, minimal pemesanan adalah 50 unit. Hubungi kami untuk mendiskusikan kebutuhan spesifik Anda.',
  },
  {
    qEN: 'How long does production take?',
    qID: 'Berapa lama waktu produksi?',
    aEN: 'Standard products: 7-14 business days. Custom orders: 14-21 business days depending on complexity and quantity.',
    aID: 'Produk standar: 7-14 hari kerja. Pesanan custom: 14-21 hari kerja tergantung kompleksitas dan jumlah.',
  },
  {
    qEN: 'Do you ship outside Kalimantan?',
    qID: 'Apakah Anda kirim ke luar Kalimantan?',
    aEN: 'Yes! We ship across Indonesia. International shipping is available for bulk orders. Shipping costs will be calculated based on destination and order weight.',
    aID: 'Ya! Kami mengirim ke seluruh Indonesia. Pengiriman internasional tersedia untuk pesanan besar. Biaya pengiriman dihitung berdasarkan tujuan dan berat pesanan.',
  },
  {
    qEN: 'Where do you source your Ulin wood?',
    qID: 'Dari mana Anda mendapatkan kayu ulin?',
    aEN: 'We source our reclaimed ulin (ironwood) scraps and sawdust directly from local timber mills and carpentry workshops in East Kalimantan, preventing it from being burned or discarded.',
    aID: 'Kami mendapatkan sisa potongan dan serbuk kayu ulin (kayu besi) reklamasi langsung dari penggergajian kayu lokal dan bengkel pertukangan di Kalimantan Timur, mencegahnya dibakar atau dibuang.',
  },
  {
    qEN: 'Are BintikBumi products waterproof and durable?',
    qID: 'Apakah produk BintikBumi tahan air dan awet?',
    aEN: 'Absolutely. Ulin is famous for its natural water-resistance and high density. Combined with our premium binder, our products are highly durable and suitable for both interior and sheltered outdoor settings.',
    aID: 'Tentu saja. Kayu ulin terkenal dengan ketahanan air alaminya dan kepadatannya yang tinggi. Dikombinasikan dengan pengikat premium kami, produk kami sangat tahan lama dan cocok untuk interior maupun luar ruangan yang terlindungi.',
  },
  {
    qEN: 'Can I choose custom colors or wood aggregate density?',
    qID: 'Bisakah saya memilih warna kustom atau kepadatan agregat kayu?',
    aEN: 'Yes! We offer multiple color selections (as seen in our catalogue) and can adjust the aggregate size/density of the ulin wood chips to match your design requirements.',
    aID: 'Ya! Kami menawarkan berbagai pilihan warna (seperti yang terlihat di katalog kami) dan dapat menyesuaikan ukuran/kepadatan agregat potongan kayu ulin agar sesuai dengan kebutuhan desain Anda.',
  },
  {
    qEN: 'How do I request a sample?',
    qID: 'Bagaimana cara meminta sampel?',
    aEN: 'You can request material samples by selecting "Partnership" or "Other" in the inquiry form, or simply click the WhatsApp button to contact our team directly.',
    aID: 'Anda dapat meminta sampel material dengan memilih "Kemitraan" atau "Lainnya" di formulir inquiry, atau cukup klik tombol WhatsApp untuk menghubungi tim kami secara langsung.',
  },
];

// ── Contact Form Constants ────────────────────────────────────
export const BB_INQUIRY_CATEGORIES: Record<'EN' | 'ID', string[]> = {
  EN: ['Custom Order', 'Wholesale/B2B', 'Partnership', 'Press/Media', 'Other'],
  ID: ['Pesanan Custom', 'Grosir/B2B', 'Kemitraan', 'Pers/Media', 'Lainnya']
};

export const BB_INQUIRY_ROLES: Record<'EN' | 'ID', string[]> = {
  EN: ['Individual', 'Interior Designer', 'Contractor', 'Business Owner', 'Other'],
  ID: ['Individu', 'Desainer Interior', 'Kontraktor', 'Pemilik Bisnis', 'Lainnya']
};

// ── Configuration ─────────────────────────────────────────────
export const BB_CONFIG = {
  founder: 'Ismadianty',
  email: 'hello@bintikbumi.com',
  whatsapp: '+6281234567890',
  instagram: 'https://instagram.com/bintikbumi',
  location: 'Balikpapan, Kalimantan Timur, Indonesia',
  bumectraURL: 'https://bumectra.com'
};
