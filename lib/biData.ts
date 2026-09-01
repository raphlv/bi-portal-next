import { EconomicIndicator, ExchangeRate, HistoricalRate, NewsItem, PublicationItem, RegulationItem, GovernorMember, AgendaItem } from './types';

export const economicIndicators: EconomicIndicator[] = [
  {
    id: 'bi-rate',
    name: 'BI-Rate (Suku Bunga Acuan)',
    shortName: 'BI-Rate',
    value: '6.00',
    unit: '%',
    change: 'Tetap 6,00%',
    isPositive: true,
    period: 'RDG BI Agustus 2026',
    description: 'Suku bunga kebijakan moneter Bank Indonesia untuk menjaga stabilitas Rupiah dan inflasi.',
    category: 'moneter'
  },
  {
    id: 'inflasi',
    name: 'Tingkat Inflasi (YoY)',
    shortName: 'Inflasi',
    value: '2.12',
    unit: '%',
    change: '-0.06% MoM',
    isPositive: true,
    period: 'Juli 2026 (Sasaran: 2,5±1%)',
    description: 'Indeks Harga Konsumen (IHK) terjaga dalam rentang sasaran target 2,5% ± 1%.',
    category: 'moneter'
  },
  {
    id: 'cadangan-devisa',
    name: 'Cadangan Devisa Nasional',
    shortName: 'Cadangan Devisa',
    value: '150.2',
    unit: 'Miliar USD',
    change: '+1.8 Miliar USD',
    isPositive: true,
    period: 'Akhir Juli 2026',
    description: 'Setara pembiayaan 6,5 bulan impor atau 6,3 bulan impor dan pembayaran utang luar negeri pemerintah.',
    category: 'makroprudensial'
  },
  {
    id: 'jisdor',
    name: 'Jakarta Interbank Spot Dollar Rate (JISDOR)',
    shortName: 'JISDOR USD/IDR',
    value: '15,845',
    unit: 'IDR',
    change: '-35 IDR (Menguat)',
    isPositive: true,
    period: '1 Sep 2026 15:30 WIB',
    description: 'Kurs referensi representasi nilai tukar Rupiah terhadap Dolar AS di pasar domestik.',
    category: 'moneter'
  },
  {
    id: 'pdb',
    name: 'Pertumbuhan Ekonomi (PDB YoY)',
    shortName: 'Pertumbuhan PDB',
    value: '5.05',
    unit: '%',
    change: '+0.03% vs Q1',
    isPositive: true,
    period: 'Triwulan II 2026',
    description: 'Didukung permintaan domestik yang kuat serta kinerja ekspor manufaktur berdaya saing.',
    category: 'sektor_riil'
  },
  {
    id: 'kredit-perbankan',
    name: 'Pertumbuhan Kredit Perbankan',
    shortName: 'Kredit Perbankan',
    value: '12.40',
    unit: '% YoY',
    change: '+0.85% YoY',
    isPositive: true,
    period: 'Juni 2026',
    description: 'Pertumbuhan kredit terdistribusi seimbang pada segmen modal kerja, investasi, dan konsumsi.',
    category: 'makroprudensial'
  }
];

export const exchangeRates: ExchangeRate[] = [
  {
    currency: 'USD',
    currencyName: 'Dolar Amerika Serikat',
    flag: '🇺🇸',
    symbol: '$',
    buy: 15766.00,
    sell: 15924.00,
    middle: 15845.00,
    change: -0.22,
    isUp: false, // IDR strengthens
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'EUR',
    currencyName: 'Euro Uni Eropa',
    flag: '🇪🇺',
    symbol: '€',
    buy: 17150.00,
    sell: 17325.00,
    middle: 17237.50,
    change: 0.15,
    isUp: true,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'SGD',
    currencyName: 'Dolar Singapura',
    flag: '🇸🇬',
    symbol: 'S$',
    buy: 12150.00,
    sell: 12275.00,
    middle: 12212.50,
    change: -0.08,
    isUp: false,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'JPY',
    currencyName: 'Yen Jepang (per 100)',
    flag: '🇯🇵',
    symbol: '¥',
    buy: 108.50,
    sell: 109.65,
    middle: 109.07,
    change: -0.35,
    isUp: false,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'CNY',
    currencyName: 'Yuan Tiongkok (Renminbi)',
    flag: '🇨🇳',
    symbol: '¥',
    buy: 2195.00,
    sell: 2218.00,
    middle: 2206.50,
    change: 0.05,
    isUp: true,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'GBP',
    currencyName: 'Poundsterling Inggris',
    flag: '🇬🇧',
    symbol: '£',
    buy: 20120.00,
    sell: 20325.00,
    middle: 20222.50,
    change: 0.28,
    isUp: true,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'AUD',
    currencyName: 'Dolar Australia',
    flag: '🇦🇺',
    symbol: 'A$',
    buy: 10540.00,
    sell: 10650.00,
    middle: 10595.00,
    change: -0.18,
    isUp: false,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'SAR',
    currencyName: 'Riyal Arab Saudi',
    flag: '🇸🇦',
    symbol: '﷼',
    buy: 4202.00,
    sell: 4245.00,
    middle: 4223.50,
    change: -0.12,
    isUp: false,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  }
];

export const historicalData: HistoricalRate[] = [
  { date: '25 Agu', jisdor: 15920, biRate: 6.00, inflation: 2.15 },
  { date: '26 Agu', jisdor: 15895, biRate: 6.00, inflation: 2.15 },
  { date: '27 Agu', jisdor: 15880, biRate: 6.00, inflation: 2.15 },
  { date: '28 Agu', jisdor: 15865, biRate: 6.00, inflation: 2.12 },
  { date: '29 Agu', jisdor: 15850, biRate: 6.00, inflation: 2.12 },
  { date: '31 Agu', jisdor: 15860, biRate: 6.00, inflation: 2.12 },
  { date: '01 Sep', jisdor: 15845, biRate: 6.00, inflation: 2.12 }
];

export const newsArticles: NewsItem[] = [
  {
    id: 'sp-26-140',
    title: 'BI-Rate Tetap 6,00%: Memperkuat Stabilitas Nilai Tukar Rupiah dan Mendukung Pertumbuhan Ekonomi Berkelanjutan',
    slug: 'bi-rate-tetap-6-persen-rdg-agustus-2026',
    category: 'Siaran Pers',
    date: '21 Agustus 2026',
    summary: 'Rapat Dewan Gubernur (RDG) Bank Indonesia memutuskan untuk mempertahankan BI-Rate sebesar 6,00%, suku bunga Deposit Facility 5,25%, dan suku bunga Lending Facility 6,75%.',
    content: 'Keputusan ini konsisten dengan fokus kebijakan moneter yang pro-stability, yaitu untuk penguatan stabilisasi nilai tukar Rupiah serta langkah pre-emptive dan forward looking untuk memastikan inflasi tetap terkendali dalam sasaran 2,5±1% pada 2026 dan 2027.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    author: 'Departemen Komunikasi Bank Indonesia',
    downloadUrl: '#',
    readTime: '4 menit baca',
    featured: true
  },
  {
    id: 'sp-26-139',
    title: 'Akselerasi QRIS Antarnegara: Indonesia Perluas Interkoneksi Pembayaran Digital dengan Uni Emirat Arab dan Korea Selatan',
    slug: 'akselerasi-qris-antarnegara-korsel-uae',
    category: 'Siaran Pers',
    date: '28 Agustus 2026',
    summary: 'Bank Indonesia terus memperluas inisiatif Cross-Border QR Payment guna memfasilitasi transaksi perdagangan dan pariwisata lintas batas yang cepat, murah, transparan, dan inklusif.',
    content: 'Sinergi sistem pembayaran lintas negara semakin memperkuat ekosistem digital nasional dan kedaulatan Rupiah dalam transaksi regional (Local Currency Settlement/LCT).',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    author: 'Departemen Kebijakan Sistem Pembayaran',
    downloadUrl: '#',
    readTime: '3 menit baca',
    featured: true
  },
  {
    id: 'sp-26-138',
    title: 'Cadangan Devisa Indonesia Akhir Juli 2026 Meningkat Mencapai USD 150,2 Miliar',
    slug: 'cadangan-devisa-juli-2026-meningkat',
    category: 'Siaran Pers',
    date: '07 Agustus 2026',
    summary: 'Posisi cadangan devisa Indonesia pada akhir Juli 2026 tercatat sebesar 150,2 miliar dolar AS, meningkat dari posisi akhir Juni 2026 sebesar 148,4 miliar dolar AS.',
    content: 'Peningkatan posisi cadangan devisa tersebut antara lain dipengaruhi oleh penerimaan pajak dan jasa serta penarikan pinjaman luar negeri pemerintah yang terkelola dengan prudent.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    author: 'Departemen Pengelolaan Devisa',
    downloadUrl: '#',
    readTime: '2 menit baca'
  },
  {
    id: 'berita-26-042',
    title: 'Gubernur BI: Sinergi Bauran Kebijakan Nasional Jadi Kunci Ketahanan Ekonomi di Tengah Ketidakpastian Global',
    slug: 'gubernur-bi-sinergi-bauran-kebijakan-kunci-ketahanan-ekonomi',
    category: 'Pidato',
    date: '25 Agustus 2026',
    summary: 'Gubernur Bank Indonesia menyampaikan arah bauran kebijakan moneter, makroprudensial, dan sistem pembayaran dalam Forum Ekonomi Nasional 2026.',
    content: 'Kerja sama erat antara Bank Indonesia, Kementerian Keuangan, OJK, dan LPS di bawah bendera KSSK terbukti efektif menjaga stabilitas sistem keuangan nasional.',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    author: 'Biro Komunikasi & Protokol',
    downloadUrl: '#',
    readTime: '5 menit baca'
  },
  {
    id: 'edu-26-015',
    title: 'Kenali 3 Dimensi CBP Rupiah: Cinta, Bangga, dan Paham Rupiah sebagai Simbol Kedaulatan Bangsa',
    slug: 'kenali-3-dimensi-cbp-rupiah-kedaulatan-bangsa',
    category: 'Edukasi',
    date: '18 Agustus 2026',
    summary: 'Edukasi masyarakat dalam mengenali keaslian, merawat uang fisik dengan 5 Jangan, dan bijak berbelanja serta berinvestasi dalam mata uang Rupiah.',
    content: 'Cinta Rupiah diwujudkan dengan merawat fisik uang, Bangga Rupiah sebagai alat pembayaran sah pemersatu NKRI, dan Paham Rupiah dalam mengelola keuangan pribadi secara bijak.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    author: 'Departemen Pengelolaan Uang (DPU)',
    downloadUrl: '#',
    readTime: '3 menit baca'
  }
];

export const publications: PublicationItem[] = [
  {
    id: 'pub-lpi-2025',
    title: 'Laporan Perekonomian Indonesia (LPI) 2025',
    category: 'Laporan Perekonomian',
    period: 'Tahunan 2025 / 2026',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    fileSize: '14.8 MB (PDF)',
    downloadCount: 8420,
    summary: 'Analisis komprehensif perkembangan makroekonomi, inflasi, sektor riil, moneter, dan stabilitas sistem keuangan.',
    fileUrl: '#'
  },
  {
    id: 'pub-lkm-q2-2026',
    title: 'Laporan Kebijakan Moneter (LKM) Triwulan II 2026',
    category: 'Kebijakan Moneter',
    period: 'Triwulan II 2026',
    coverImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    fileSize: '8.2 MB (PDF)',
    downloadCount: 5120,
    summary: 'Evaluasi pelaksanaan kebijakan moneter dan transmisi suku bunga terhadap pertumbuhan kredit perbankan.',
    fileUrl: '#'
  },
  {
    id: 'pub-ksk-42',
    title: 'Kajian Stabilitas Keuangan (KSK) No. 42',
    category: 'Kajian Stabilitas',
    period: 'Semester I 2026',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    fileSize: '11.5 MB (PDF)',
    downloadCount: 3890,
    summary: 'Peta ketahanan sistem perbankan nasional, likuiditas, dan asesmen risiko intermediasi makroprudensial.',
    fileUrl: '#'
  },
  {
    id: 'pub-annual-2025',
    title: 'Laporan Tahunan Bank Indonesia 2025',
    category: 'Laporan Tahunan',
    period: 'Tahun Buku 2025',
    coverImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
    fileSize: '22.1 MB (PDF)',
    downloadCount: 12450,
    summary: 'Pertanggungjawaban kinerja pelaksanaan tugas Bank Indonesia di bidang moneter, sistem pembayaran, dan tata kelola.',
    fileUrl: '#'
  }
];

export const regulations: RegulationItem[] = [
  {
    id: 'pbi-26-08',
    number: 'PBI No. 8/2026',
    year: 2026,
    type: 'PBI',
    title: 'Peraturan Bank Indonesia tentang Penyelenggaraan Sekuritas Rupiah Bank Indonesia (SRBI) dan Sekuritas Valas Bank Indonesia (SVBI)',
    status: 'Berlaku',
    datePublished: '14 Juli 2026',
    summary: 'Menyempurnakan instrumen operasi moneter pro-market guna memperdalam pasar keuangan dan menarik aliran modal masuk.',
    category: 'Moneter',
    fileSize: '2.4 MB'
  },
  {
    id: 'pbi-26-04',
    number: 'PBI No. 4/2026',
    year: 2026,
    type: 'PBI',
    title: 'Peraturan Bank Indonesia tentang Standardisasi Nasional Standar Terbuka Antarmuka Aplikasi Pembayaran (SNAP)',
    status: 'Berlaku',
    datePublished: '02 Mei 2026',
    summary: 'Mendorong integrasi dan interkonektivitas perbankan dengan fintech melalui open API yang aman dan terstandarisasi.',
    category: 'Sistem Pembayaran',
    fileSize: '1.9 MB'
  },
  {
    id: 'padg-26-11',
    number: 'PADG No. 26/11/PADG/2026',
    year: 2026,
    type: 'PADG',
    title: 'Peraturan Anggota Dewan Gubernur tentang Batas Maksimum Transaksi Pembayaran Menggunakan QR Code Indonesian Standard (QRIS)',
    status: 'Berlaku',
    datePublished: '20 Juni 2026',
    summary: 'Peningkatan limit transaksi QRIS untuk mengakomodasi transaksi segmen usaha menengah dan pariwisata internasional.',
    category: 'Sistem Pembayaran',
    fileSize: '950 KB'
  },
  {
    id: 'pbi-25-18',
    number: 'PBI No. 18/2025',
    year: 2025,
    type: 'PBI',
    title: 'Peraturan Bank Indonesia tentang Kebijakan Insentif Likuiditas Makroprudensial (KLM)',
    status: 'Berlaku',
    datePublished: '15 Desember 2025',
    summary: 'Pemberian insentif likuiditas kepada bank-bank yang menyalurkan pembiayaan pada sektor prioritas, hilirisasi, dan UMKM.',
    category: 'Makroprudensial',
    fileSize: '3.1 MB'
  }
];

export const boardOfGovernors: GovernorMember[] = [
  {
    name: 'Perry Warjiyo',
    role: 'Gubernur Bank Indonesia',
    period: '2023 - 2028',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Menjabat sebagai Gubernur Bank Indonesia untuk periode kedua, memimpin transformasi bauran kebijakan moneter, makroprudensial, dan digitalisasi sistem pembayaran nasional.'
  },
  {
    name: 'Destry Damayanti',
    role: 'Deputi Gubernur Senior',
    period: '2024 - 2029',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Bertanggung jawab dalam koordinasi kebijakan moneter, pasar keuangan, serta kepemimpinan satuan kerja bidang komunikasi dan hubungan internasional.'
  },
  {
    name: 'Doni Primanto Joewono',
    role: 'Deputi Gubernur',
    period: '2020 - 2025',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Membidangi sistem pembayaran, pengelolaan uang Rupiah, inovasi teknologi finansial, serta pemberdayaan UMKM dan ekonomi syariah.'
  },
  {
    name: 'Juda Agung',
    role: 'Deputi Gubernur',
    period: '2022 - 2027',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'Membidangi kebijakan makroprudensial, pengawasan perbankan terintegrasi, pendalaman pasar keuangan, dan keuangan berkelanjutan (green finance).'
  },
  {
    name: 'Aida S. Budiman',
    role: 'Deputi Gubernur',
    period: '2022 - 2027',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Membidangi perumusan kebijakan moneter, riset ekonomi makro, statistik nasional (SEKI), dan hubungan lembaga perwakilan daerah.'
  },
  {
    name: 'Filianingsih Hendarta',
    role: 'Deputi Gubernur',
    period: '2023 - 2028',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    bio: 'Membidangi sistem pembayaran nasional, infrastruktur BI-FAST & QRIS, perlindungan konsumen, dan pengembangan Digital Rupiah (Proyek Garuda).'
  }
];

export const upcomingAgendas: AgendaItem[] = [
  {
    id: 'ag-1',
    title: 'Rapat Dewan Gubernur (RDG) Bulanan - September 2026',
    type: 'Rapat Dewan Gubernur (RDG)',
    date: '17-18 September 2026',
    time: '09:00 - 15:00 WIB',
    location: 'Gedung Thamrin, Bank Indonesia Jakarta',
    status: 'Upcoming'
  },
  {
    id: 'ag-2',
    title: 'Konferensi Pers Pengumuman Hasil RDG & Kebijakan BI-Rate',
    type: 'Konferensi Pers',
    date: '18 September 2026',
    time: '14:00 WIB',
    location: 'Live Streaming YouTube Bank Indonesia',
    status: 'Upcoming'
  },
  {
    id: 'ag-3',
    title: 'Rilis Data Statistik: Posisi Cadangan Devisa Agustus 2026',
    type: 'Rilis Data Statistik',
    date: '07 September 2026',
    time: '10:00 WIB',
    location: 'Portal Statistik SEKI BI',
    status: 'Upcoming'
  },
  {
    id: 'ag-4',
    title: 'Webinar Sosialisasi Perluasan QRIS Cross-Border & Merchant Protection',
    type: 'Webinar / Sosialisasi',
    date: '24 September 2026',
    time: '13:30 WIB',
    location: 'Virtual via Zoom & YouTube',
    status: 'Upcoming'
  }
];

export const quickLinks = [
  {
    title: 'Kalkulator Kurs & JISDOR',
    description: 'Hitung konversi valuta asing dan pantau kurs referensi transaksi harian.',
    icon: 'Calculator',
    href: '/kurs',
    color: 'bg-blue-50 text-bi-blue-700 hover:bg-bi-blue-700 hover:text-white',
    badge: 'Real-time'
  },
  {
    title: 'PINTAR BI (Penukaran Uang)',
    description: 'Pemesanan layanan penukaran uang Rupiah baru dan kas keliling online.',
    icon: 'Banknote',
    href: '/rupiah',
    color: 'bg-amber-50 text-bi-gold-700 hover:bg-bi-gold-600 hover:text-white',
    badge: 'Layanan Kas'
  },
  {
    title: 'QRIS & BI-FAST Center',
    description: 'Panduan standar sistem pembayaran digital, integrasi SNAP, & regulasi.',
    icon: 'QrCode',
    href: '/sistem-pembayaran',
    color: 'bg-sky-50 text-bi-blue-500 hover:bg-bi-blue-600 hover:text-white',
    badge: 'Digital Pay'
  },
  {
    title: 'Jadwal RDG & Kalender Rilis',
    description: 'Agenda resmi rapat penetapan suku bunga acuan dan rilis indikator makro.',
    icon: 'CalendarDays',
    href: '/moneter',
    color: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-700 hover:text-white',
    badge: 'Jadwal 2026'
  },
  {
    title: 'BICARA 131 & Chatbot',
    description: 'Pusat layanan informasi publik, pengaduan konsumen, dan asisten virtual.',
    icon: 'Headphones',
    href: '/layanan',
    color: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-700 hover:text-white',
    badge: '24/7 Bantuan'
  },
  {
    title: 'e-Licensing Perizinan',
    description: 'Portal terpadu permohonan izin operasional jasa pembayaran & instrumen pasar.',
    icon: 'FileCheck',
    href: '/layanan',
    color: 'bg-purple-50 text-purple-700 hover:bg-purple-700 hover:text-white',
    badge: 'Portal Resmi'
  }
];
